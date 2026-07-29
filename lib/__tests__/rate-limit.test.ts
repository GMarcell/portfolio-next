import { describe, it, expect, beforeEach } from "vitest";
import { checkRateLimit, purgeExpiredEntries } from "@/lib/rate-limit";

/**
 * NOTE: The rate limiter uses a module-scoped in-memory store when
 * UPSTASH_REDIS env vars are not set. Tests share this store, so
 * order matters within a file. We use purgeExpiredEntries between
 * test groups to reset state after windows expire.
 */

describe("checkRateLimit (in-memory backend)", () => {
  const TEST_KEY = "test-ip";

  beforeEach(() => {
    // Purge any expired entries before each test
    purgeExpiredEntries();
  });

  it("allows the first request", async () => {
    const result = await checkRateLimit(TEST_KEY, { max: 3, windowSeconds: 60 });
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(2);
    expect(result.resetAt).toBeGreaterThan(Date.now());
  });

  it("allows requests up to the limit", async () => {
    const key = "up-to-limit";

    // Use up the 3 allowed requests
    await checkRateLimit(key, { max: 3, windowSeconds: 60 }); // 1st
    await checkRateLimit(key, { max: 3, windowSeconds: 60 }); // 2nd
    const third = await checkRateLimit(key, { max: 3, windowSeconds: 60 }); // 3rd

    expect(third.allowed).toBe(true);
    expect(third.remaining).toBe(0);
  });

  it("blocks requests that exceed the limit", async () => {
    const key = "blocking-key";

    // Exhaust the 3 allowed requests
    await checkRateLimit(key, { max: 3, windowSeconds: 60 });
    await checkRateLimit(key, { max: 3, windowSeconds: 60 });
    await checkRateLimit(key, { max: 3, windowSeconds: 60 });
    // 4th request — should be blocked
    const fourth = await checkRateLimit(key, { max: 3, windowSeconds: 60 });

    expect(fourth.allowed).toBe(false);
    expect(fourth.remaining).toBe(0);
  });

  it("uses different windows for different keys", async () => {
    const keyA = "key-a";
    const keyB = "key-b";

    // Exhaust key A
    await checkRateLimit(keyA, { max: 2, windowSeconds: 60 });
    await checkRateLimit(keyA, { max: 2, windowSeconds: 60 });
    const blockedA = await checkRateLimit(keyA, { max: 2, windowSeconds: 60 });
    expect(blockedA.allowed).toBe(false);

    // Key B should still be fresh
    const freshB = await checkRateLimit(keyB, { max: 2, windowSeconds: 60 });
    expect(freshB.allowed).toBe(true);
    expect(freshB.remaining).toBe(1);
  });

  it("resets the window after expiry", async () => {
    const key = "expiry-key";

    // Use a very short window (1 second)
    await checkRateLimit(key, { max: 1, windowSeconds: 1 });
    const blocked = await checkRateLimit(key, { max: 1, windowSeconds: 1 });
    expect(blocked.allowed).toBe(false);

    // Wait for window to expire
    await new Promise((resolve) => setTimeout(resolve, 1100));

    // Purge expired entries
    purgeExpiredEntries();

    // Should be allowed again
    const reset = await checkRateLimit(key, { max: 1, windowSeconds: 1 });
    expect(reset.allowed).toBe(true);
    expect(reset.remaining).toBe(0);
  }, 5000); // 5s timeout for the async wait

  it("uses default config when none provided", async () => {
    const key = "default-config-key";
    const result = await checkRateLimit(key);

    expect(result).toHaveProperty("allowed");
    expect(result).toHaveProperty("remaining");
    expect(result).toHaveProperty("resetAt");
  });
});
