/**
 * Simple in-memory sliding-window rate limiter.
 *
 * ⚠️  This is per-process — when deploying on serverless platforms
 *     (Vercel, Netlify) each invocation is isolated, so this only
 *     limits within a single request. For distributed rate limiting
 *     in production, use a database-backed or edge-based approach
 *     (e.g. Upstash Redis, Vercel KV, or Netlify Blobs).
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

export interface RateLimitConfig {
  /** Maximum number of requests allowed within the window. */
  max: number;
  /** Window duration in seconds. */
  windowSeconds: number;
}

const defaults: RateLimitConfig = {
  max: 5,
  windowSeconds: 60,
};

/**
 * Checks and increments the rate limit for a given key.
 * Returns `{ allowed, remaining, resetAt }`.
 *
 * - `allowed`: whether the request is within the limit
 * - `remaining`: how many requests the caller can still make
 * - `resetAt`: Unix timestamp (ms) when the window resets
 */
export function checkRateLimit(
  key: string,
  config: Partial<RateLimitConfig> = {}
): { allowed: boolean; remaining: number; resetAt: number } {
  const { max, windowSeconds } = { ...defaults, ...config };
  const now = Date.now();

  const existing = store.get(key);

  if (!existing || now >= existing.resetAt) {
    // First request or window expired — start a new window
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

/**
 * Garbage-collects expired entries from the store.
 * Call periodically if you expect high traffic — otherwise the map
 * grows indefinitely. Called automatically every 5 minutes via setInterval.
 */
export function purgeExpiredEntries(): void {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now >= entry.resetAt) {
      store.delete(key);
    }
  }
}

// Auto-cleanup every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;

let cleanupTimer: ReturnType<typeof setInterval> | null = null;

export function startCleanup(): void {
  if (cleanupTimer) return;
  cleanupTimer = setInterval(purgeExpiredEntries, CLEANUP_INTERVAL_MS);
  // Allow the process to exit even if the timer is still running
  if (cleanupTimer && typeof cleanupTimer === "object" && "unref" in cleanupTimer) {
    cleanupTimer.unref();
  }
}

// Start cleanup on module load
startCleanup();
