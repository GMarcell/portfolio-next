import { Redis } from "@upstash/redis";

let _client: Redis | null = null;

/**
 * Returns a lazy-initialised Upstash Redis client, or `null` if the
 * required environment variables are missing.
 *
 * When `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are set
 * (production on Vercel), this provides a distributed store so rate
 * limits persist across serverless function invocations.
 *
 * When they are absent (local dev without Upstash), returns `null` and
 * the rate limiter falls back to a per-process in-memory store.
 */
export function getRedis(): Redis | null {
  if (_client) return _client;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  _client = new Redis({ url, token });
  return _client;
}
