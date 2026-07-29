import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Performance ──────────────────────────────────────────────
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  // ── Image Optimization ───────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },

  // ── Turbopack (workspace root fix) ───────────────────────────
  turbopack: {
    root: process.cwd(),
  },

  // ── Security & Performance Headers ───────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // CSP is set dynamically in middleware.ts (nonce-based)
          // Cache-Control is intentionally omitted here — Next.js sets its
          // own cache headers for HTML pages, and setting a catch-all value
          // on "/(.*)" would conflict with Next.js's /_next/static handling.
        ],
      },
      // ── Static assets: long cache ────────────────────────────
      {
        source: "/:file((?:.+\\.(?:ico|png|jpg|jpeg|webp|avif|svg|pdf)$))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // /_next/static/:path* is intentionally NOT listed here — Next.js
      // sets its own optimal Cache-Control headers for these files, and
      // overriding them triggers a build warning and can break dev behavior.
    ];
  },
};

export default nextConfig;
