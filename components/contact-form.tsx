"use client";

import { useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/ui/icons";

type FormState = "idle" | "sending" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormPayload {
  name: string;
  email: string;
  message: string;
  interest: string;
}

/* ── Recruiter quick-select interest types ───────────────── */
const interestTypes = [
  { value: "", label: "Select your interest…" },
  { value: "full-time", label: "Full-time role" },
  { value: "contract", label: "Contract / Freelance" },
  { value: "opportunity", label: "Just exploring / Network" },
];

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");

  const validate = (formData: FormData): FormPayload | null => {
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const message = (formData.get("message") as string).trim();
    const interest = (formData.get("interest") as string).trim();
    const errors: FieldErrors = {};

    if (!name || name.length < 2) {
      errors.name = "Name is required (min 2 characters).";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!message || message.length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return null;
    }

    return { name, email, message, interest };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");

    const formData = new FormData(e.currentTarget);
    const valid = validate(formData);

    if (!valid) return;

    setState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(valid),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      setState("success");
      formRef.current?.reset();
    } catch {
      setServerError("Network error. Please check your connection.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center p-10 border border-accent/24 bg-accent/6 text-center"
        role="status"
        data-reveal
      >
        <div className="mb-4 text-accent font-syne font-extrabold text-[2.5rem] leading-none">
          ✓
        </div>
        <h3 className="m-0 mb-2 font-syne font-bold text-[1.2rem] text-content">
          Message sent!
        </h3>
        <p className="m-0 max-w-80 text-content/70 text-sm font-fraunces font-light">
          Thanks for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 border border-accent bg-transparent text-accent no-underline font-syne font-bold tracking-[0.06em] uppercase px-6 py-2.5 text-[11px] transition-all duration-200 hover:bg-accent hover:text-primary-foreground"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      data-reveal
    >
      {/* ── Recruiter quick-select ────────────────────────── */}
      <div>
        <label
          htmlFor="contact-interest"
          className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-muted"
        >
          I&apos;m reaching out about
        </label>
        <div className="relative">
          <select
            id="contact-interest"
            name="interest"
            defaultValue=""
            disabled={state === "sending"}
            className="w-full px-4 py-3 pr-10 bg-bg border border-line text-content text-sm font-fraunces font-light outline-none transition-colors duration-200 focus:border-accent disabled:opacity-50 appearance-none"
          >
            {interestTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* Custom chevron arrow */}
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
        </div>
      </div>

      {/* ── Name field ─────────────────────────────────────── */}
      <div>
        <label
          htmlFor="contact-name"
          className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-muted"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          disabled={state === "sending"}
          className={`w-full px-4 py-3 bg-bg border text-content text-sm font-fraunces font-light outline-none transition-colors duration-200 placeholder:text-muted/50 disabled:opacity-50 ${
            fieldErrors.name
              ? "border-destructive"
              : "border-line focus:border-accent"
          }`}
        />
        {fieldErrors.name && (
          <p className="m-0 mt-1 text-destructive text-[11px]">
            {fieldErrors.name}
          </p>
        )}
      </div>

      {/* ── Email field ────────────────────────────────────── */}
      <div>
        <label
          htmlFor="contact-email"
          className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-muted"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          disabled={state === "sending"}
          className={`w-full px-4 py-3 bg-bg border text-content text-sm font-fraunces font-light outline-none transition-colors duration-200 placeholder:text-muted/50 disabled:opacity-50 ${
            fieldErrors.email
              ? "border-destructive"
              : "border-line focus:border-accent"
          }`}
        />
        {fieldErrors.email && (
          <p className="m-0 mt-1 text-destructive text-[11px]">
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* ── Message field ──────────────────────────────────── */}
      <div>
        <label
          htmlFor="contact-message"
          className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-muted"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about the role, product, or project…"
          disabled={state === "sending"}
          className={`w-full px-4 py-3 bg-bg border text-content text-sm font-fraunces font-light outline-none transition-colors duration-200 placeholder:text-muted/50 resize-y min-h-[120px] disabled:opacity-50 ${
            fieldErrors.message
              ? "border-destructive"
              : "border-line focus:border-accent"
          }`}
        />
        {fieldErrors.message && (
          <p className="m-0 mt-1 text-destructive text-[11px]">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* ── Server error ───────────────────────────────────── */}
      {serverError && (
        <p className="m-0 text-destructive text-sm">{serverError}</p>
      )}

      {/* ── Submit button ──────────────────────────────────── */}
      <button
        type="submit"
        disabled={state === "sending"}
        className="self-start border-none bg-accent text-primary-foreground no-underline font-syne font-bold tracking-[0.06em] uppercase px-8 py-3 text-[13px] transition-all duration-200 hover:bg-accent-2 hover:-translate-y-px disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {state === "sending" ? (
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Sending…
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
