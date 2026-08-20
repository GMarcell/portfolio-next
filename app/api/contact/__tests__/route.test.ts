import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

// Mock dependencies before importing the route
type MockResendClient = {
  emails: { send: typeof mockSendEmail };
};

const mockCheckRateLimit = vi.fn();
const mockSendEmail = vi.fn();
const mockGetResend = vi.fn<() => MockResendClient | null>(() => ({
  emails: { send: mockSendEmail },
}));

vi.mock("@/lib/rate-limit", () => ({
  checkRateLimit: mockCheckRateLimit,
}));

vi.mock("@/lib/resend", () => ({
  getResend: mockGetResend,
}));

// Import after mocks are set up
const { POST } = await import("@/app/api/contact/route");

/** Helper to build a NextRequest for testing. */
function createPostRequest(
  body: Record<string, string>,
  ip = "127.0.0.1"
): NextRequest {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Re-establish default mock implementations (clearAllMocks only
    // resets call history, not implementations — without this, tests
    // that modify implementations would leak into subsequent tests).
    mockCheckRateLimit.mockResolvedValue({
      allowed: true,
      remaining: 4,
      resetAt: Date.now() + 60_000,
    });

    mockGetResend.mockReturnValue({
      emails: { send: mockSendEmail },
    });

    mockSendEmail.mockResolvedValue({
      data: { id: "mock-email-id-123" },
      error: null,
    });
  });

  // ── Rate limiting ─────────────────────────────────────────

  it("returns 429 when rate limited", async () => {
    const resetAt = Date.now() + 60_000;
    mockCheckRateLimit.mockResolvedValue({
      allowed: false,
      remaining: 0,
      resetAt,
    });

    const request = createPostRequest({
      name: "John",
      email: "john@example.com",
      message: "Hello, this is a test message for the contact form.",
      interest: "full-time",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(429);
    expect(body.error).toBe("Too many requests. Please try again later.");
    expect(response.headers.get("Retry-After")).toBeDefined();
    expect(response.headers.get("X-RateLimit-Remaining")).toBe("0");
    expect(response.headers.get("X-RateLimit-Reset")).toBe(
      String(Math.ceil(resetAt / 1000))
    );
  });

  // ── Input validation ──────────────────────────────────────

  it("returns 400 when name is missing", async () => {
    const request = createPostRequest({
      name: "",
      email: "john@example.com",
      message: "A valid message with more than ten characters.",
      interest: "full-time",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toContain("Name");
  });

  it("returns 400 when name is too short", async () => {
    const request = createPostRequest({
      name: "J",
      email: "john@example.com",
      message: "A valid message with more than ten characters.",
      interest: "full-time",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toContain("Name");
  });

  it("returns 400 when email is invalid", async () => {
    const request = createPostRequest({
      name: "John Doe",
      email: "not-an-email",
      message: "A valid message with more than ten characters.",
      interest: "full-time",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toContain("email");
  });

  it("returns 400 when message is too short", async () => {
    const request = createPostRequest({
      name: "John Doe",
      email: "john@example.com",
      message: "Short",
      interest: "full-time",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toContain("Message");
  });

  it("returns 400 when message is too long", async () => {
    const request = createPostRequest({
      name: "John Doe",
      email: "john@example.com",
      message: "A".repeat(5001),
      interest: "full-time",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toContain("Message");
  });

  // ── Success path ──────────────────────────────────────────

  it("returns 200 and sends email on valid input", async () => {
    const request = createPostRequest({
      name: "John Doe",
      email: "john@example.com",
      message: "I'd love to discuss a frontend role at your company.",
      interest: "full-time",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toBe("Message sent successfully!");
    expect(body.id).toBe("mock-email-id-123");
    expect(response.headers.get("X-RateLimit-Remaining")).toBe("4");
    expect(response.headers.get("X-RateLimit-Reset")).toBeDefined();

    // Verify Resend was called with correct data
    expect(mockSendEmail).toHaveBeenCalledOnce();
    const emailCall = mockSendEmail.mock.calls[0][0];
    expect(emailCall.to).toBe("grand1310marcell@gmail.com");
    expect(emailCall.subject).toContain("John Doe");
    expect(emailCall.replyTo).toBe("john@example.com");
  });

  it("uses CONTACT_EMAIL env var when set", async () => {
    vi.stubEnv("CONTACT_EMAIL", "recruiter@company.com");

    const request = createPostRequest({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello! I'm interested in your profile for a role at our company.",
      interest: "contract",
    });

    await POST(request);

    expect(mockSendEmail).toHaveBeenCalledOnce();
    expect(mockSendEmail.mock.calls[0][0].to).toBe("recruiter@company.com");

    vi.unstubAllEnvs();
  });

  it("uses CONTACT_FROM_EMAIL env var when set", async () => {
    vi.stubEnv(
      "CONTACT_FROM_EMAIL",
      "Portfolio Contact <contact@grandmarcell.dev>"
    );

    const request = createPostRequest({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello! I'm interested in your profile for a role at our company.",
      interest: "contract",
    });

    await POST(request);

    expect(mockSendEmail).toHaveBeenCalledOnce();
    expect(mockSendEmail.mock.calls[0][0].from).toBe(
      "Portfolio Contact <contact@grandmarcell.dev>"
    );

    vi.unstubAllEnvs();
  });

  it("falls back to onboarding@resend.dev when CONTACT_FROM_EMAIL is unset", async () => {
    vi.stubEnv("CONTACT_FROM_EMAIL", "");

    const request = createPostRequest({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello! I'm interested in your profile for a role at our company.",
      interest: "contract",
    });

    await POST(request);

    expect(mockSendEmail).toHaveBeenCalledOnce();
    expect(mockSendEmail.mock.calls[0][0].from).toBe("onboarding@resend.dev");

    vi.unstubAllEnvs();
  });

  // ── Error handling ────────────────────────────────────────

  it("returns 500 when Resend returns an error", async () => {
    mockSendEmail.mockResolvedValue({
      data: null,
      error: { message: "Email sending failed" },
    });

    const request = createPostRequest({
      name: "John Doe",
      email: "john@example.com",
      message: "A message that will trigger the Resend error path.",
      interest: "full-time",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe(
      "Failed to send message. Please try again later."
    );
  });

  it("returns 500 when Resend client is not configured", async () => {
    mockGetResend.mockReturnValue(null);

    const request = createPostRequest({
      name: "John Doe",
      email: "john@example.com",
      message: "A message to test missing API key handling.",
      interest: "full-time",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe("Message service is not configured.");
  });

  it("returns 500 when request body is invalid JSON", async () => {
    const request = new NextRequest("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": "127.0.0.1",
      },
      body: "not-json-at-all",
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.error).toBe("Internal server error.");
  });
});
