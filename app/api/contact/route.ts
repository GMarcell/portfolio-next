import { getResend } from "@/lib/resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { NextRequest, NextResponse } from "next/server";

/* ── Rate-limit config ─────────────────────────────────────── */
const RATE_LIMIT_MAX = 5; // requests per window
const RATE_LIMIT_WINDOW = 60; // seconds

/* ── Helpers ───────────────────────────────────────────────── */

/**
 * Derive a rate-limit key from the request.
 * Uses the x-forwarded-for header (Vercel/Netlify) or the connecting IP.
 */
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "127.0.0.1";
}

/** Escape HTML special characters so user input can't break email layout. */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ── POST handler ──────────────────────────────────────────── */

export async function POST(request: NextRequest) {
  // ── Rate limiting ──────────────────────────────────────────
  const ip = getClientIp(request);
  const { allowed, remaining, resetAt } = checkRateLimit(ip, {
    max: RATE_LIMIT_MAX,
    windowSeconds: RATE_LIMIT_WINDOW,
  });

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(resetAt / 1000)),
        },
      }
    );
  }
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name: string;
      email: string;
      message: string;
    };

    // Validations
    if (
      !name ||
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.trim().length > 100
    ) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.trim().length > 5000
    ) {
      return NextResponse.json(
        { error: "Message must be between 10 and 5000 characters." },
        { status: 400 }
      );
    }

    // Lazy-init Resend client (safe at build time when env vars aren't present)
    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Message service is not configured." },
        { status: 500 }
      );
    }

    // HTML-escape user content before embedding in email
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim());

    const recipient =
      process.env.CONTACT_EMAIL || "grand1310marcell@gmail.com";

    const { data, error } = await resend.emails.send({
      // When you add a verified domain to Resend, update this "from" address.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipient,
      replyTo: email.trim(),
      subject: `Portfolio contact — ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8"></head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f2eb; padding: 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <table width="480" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 8px; overflow: hidden;">
                    <tr>
                      <td style="padding: 32px 32px 0;">
                        <h1 style="margin: 0 0 4px; font-size: 20px; color: #1a1a2e;">New Contact Message</h1>
                        <p style="margin: 0 0 24px; font-size: 13px; color: #7a6f5e;">From grandmarcell.dev</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 0 32px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 12px 16px; background: #f8f4ed; border-radius: 6px; font-size: 13px; color: #1a1a2e;">
                              <strong style="color: #7a6f5e; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">Name</strong><br/>
                              ${safeName}
                            </td>
                          </tr>
                          <tr><td style="height: 8px;"></td></tr>
                          <tr>
                            <td style="padding: 12px 16px; background: #f8f4ed; border-radius: 6px; font-size: 13px; color: #1a1a2e;">
                              <strong style="color: #7a6f5e; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">Email</strong><br/>
                              <a href="mailto:${safeEmail}" style="color: #b8862b; text-decoration: none;">${safeEmail}</a>
                            </td>
                          </tr>
                          <tr><td style="height: 8px;"></td></tr>
                          <tr>
                            <td style="padding: 12px 16px; background: #f8f4ed; border-radius: 6px; font-size: 13px; color: #1a1a2e;">
                              <strong style="color: #7a6f5e; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;">Message</strong><br/>
                              ${safeMessage.replace(/\n/g, "<br/>")}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 24px 32px 32px;">
                        <p style="margin: 0; font-size: 11px; color: #9fa9ba;">
                          Sent from grandmarcell.dev contact form
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully!", id: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
