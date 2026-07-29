/**
 * Hybrid rate limiter that supports both distributed (Upstash Redis)
 * and in-memory backends.
 *
 * - When `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` are set
 *   (production on Vercel), it uses Upstash Redis for a distributed
 *   sliding-window rate limit that works across serverless invocations.
 * - Otherwise it falls back to a per-process in-memory store suitable for
 *   local development.
 */

import { getRedis } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";

/* ── Types ────────────────────────────────────────────────── */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

export interface RateLimitConfig {
  /** Maximum number of requests allowed within the window. */
  max: number;
  /** Window duration in seconds. */
  windowSeconds: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

const defaults: RateLimitConfig = {
  max: 5,
  windowSeconds: 60,
};

/* ── Distributed (Upstash Redis) backend ──────────────────── */

let _ratelimit: Ratelimit | null = null;

/**
 * Returns a cached `@upstash/ratelimit` sliding-window client, or `null`
 * if Redis isn't configured.
 */
function getRatelimit(): Ratelimit | null {
  if (_ratelimit) return _ratelimit;

  const redis = getRedis();
  if (!redis) return null;

  _ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(defaults.max, `${defaults.windowSeconds} s`),
    prefix: "ratelimit",
    analytics: false,
  });

  return _ratelimit;
}

/* ── In-memory (fallback) backend ─────────────────────────── */

const store = new Map<string, RateLimitEntry>();

function checkInMemory(
  key: string,
  max: number,
  windowSeconds: number
): RateLimitResult {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || now >= existing.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowSeconds * 1000 });
    return { allowed: true, remaining: max - 1, resetAt: now + windowSeconds * 1000 };
  }

  const newCount = existing.count + 1;
  store.set(key, { count: newCount, resetAt: existing.resetAt });

  return {
    allowed: newCount <= max,
    remaining: Math.max(0, max - newCount),
    resetAt: existing.resetAt,
  };
}

/* ── Public API ───────────────────────────────────────────── */

/**
 * Checks the rate limit for a given key.
 *
 * Uses Upstash Redis when available (distributed across serverless
 * invocations), otherwise falls back to a per-process in-memory store.
 */
export async function checkRateLimit(
  key: string,
  config: Partial<RateLimitConfig> = {}
): Promise<RateLimitResult> {
  const { max, windowSeconds } = { ...defaults, ...config };

  // Try distributed rate limiting first
  const ratelimit = getRatelimit();
  if (ratelimit) {
    const { success, remaining, reset } = await ratelimit.limit(key);
    return {
      allowed: success,
      remaining,
      resetAt: reset,
    };
  }

  // Fallback: in-memory
  return checkInMemory(key, max, windowSeconds);
}

/**
 * Garbage-collects expired entries from the in-memory store.
 * No-op when using the Redis backend.
 */
export function purgeExpiredEntries(): void {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now >= entry.resetAt) {
      store.delete(key);
    }
  }
}

// Auto-cleanup the in-memory store every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;

let cleanupTimer: ReturnType<typeof setInterval> | null = null;

function startCleanup(): void {
  if (cleanupTimer) return;
  cleanupTimer = setInterval(purgeExpiredEntries, CLEANUP_INTERVAL_MS);
  if (cleanupTimer && typeof cleanupTimer === "object" && "unref" in cleanupTimer) {
    cleanupTimer.unref();
  }
}

startCleanup();
