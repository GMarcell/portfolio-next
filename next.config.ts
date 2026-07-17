import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Performance ──────────────────────────────────────────────
  reactStrictMode: true,
  compress: true,

  // ── Image Optimization ───────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // ── Bundle Optimization ──────────────────────────────────────
  experimental: {
    optimizePackageImports: [
      "@base-ui/react",
    ],
  },

  // ── Turbopack (workspace root fix) ───────────────────────────
  turbopack: {
    root: process.cwd(),
  },

  // ── Security Headers ─────────────────────────────────────────
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
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
