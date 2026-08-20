import { NextResponse, type NextRequest } from "next/server";

/**
 * Generates a per-request CSP nonce and:
 *  1. Injects it into the request headers so server components (`layout.tsx`)
 *     can read it via `headers()` and apply it to inline `<script>` tags.
 *  2. Sets the `Content-Security-Policy` response header with the nonce
 *     (replaces the static CSP that was in `next.config.ts`).
 *
 * Using both `'nonce-{nonce}'` and `'unsafe-inline'` in `script-src`:
 * - Modern browsers respect the nonce and IGNORE `'unsafe-inline'` for scripts.
 * - Older browsers that don't recognise nonces fall back to `'unsafe-inline'`.
 * - `'strict-dynamic'` allows scripts loaded by the nonced script to execute.
 */
export function proxy(request: NextRequest) {
  const nonce = crypto.randomUUID();

  const csp = [
    "default-src 'self'",
    // Scripts: unsafe-inline is required because Next.js injects its own
    // inline scripts (RSC payload, hydration bootstrap) that don't carry
    // nonces.  Putting a nonce in script-src would cause compliant browsers
    // to IGNORE unsafe-inline (per CSP Level 3), breaking the app.
    // The nonce is still applied to <script> elements in the HTML for
    // documentation/future-proofing but is NOT listed in the CSP itself.
    // va.vercel-scripts.com is where @vercel/analytics loads its runtime.
    `script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com`,
    // Styles: need unsafe-inline for Tailwind and shadcn utilities
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    // va.vercel-scripts.com also receives the analytics beacon requests
    "connect-src 'self' https://va.vercel-scripts.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; ");

  // ── Forward the nonce to server components ──────────────────
  // We can't read response headers from server components, so we
  // inject the nonce into the request headers before the page renders.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // ── Set the CSP header on the outgoing response ────────────
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

// Only match pages (not API routes, static files, or Next.js internals)
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - /api/*        (API routes)
     * - /_next/static (static files)
     * - /_next/image  (image optimization)
     * - /favicon.ico  (favicon)
     * - /images/*     (public images)
     * - /resume.pdf   (downloaded file)
     * - /robots.txt   (SEO)
     * - /sitemap.xml  (SEO)
     * - /opengraph*   (OG images — serverless functions)
     */
    "/((?!api|_next/static|_next/image|favicon\\.ico|images|resume\\.pdf|robots\\.txt|sitemap\\.xml|opengraph).*)",
  ],
};
