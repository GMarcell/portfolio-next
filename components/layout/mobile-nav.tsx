"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, resumeUrl } from "@/data/portfolio";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* ── Focus management ────────────────────────────────────── */
  useEffect(() => {
    if (open) {
      // Move focus into the drawer
      requestAnimationFrame(() => {
        firstLinkRef.current?.focus();
      });
    } else {
      // Return focus to the hamburger button
      toggleRef.current?.focus();
    }
  }, [open]);

  /* ── Close on Escape ─────────────────────────────────────── */
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  /* ── Lock body scroll when drawer is open ────────────────── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      {/* ════════════ Hamburger button (mobile only) ════════════ */}
      <button
        ref={toggleRef}
        onClick={toggle}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        className="relative z-300 flex max-[900px]:flex min-[901px]:hidden flex-col justify-center items-center w-9 h-9 gap-[5px] bg-transparent border-none cursor-pointer group focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
      >
        <span
          className={`block w-[22px] h-[2px] bg-content rounded-full transition-all duration-300 ease-out origin-center ${
            open ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-[22px] h-[2px] bg-content rounded-full transition-all duration-300 ease-out ${
            open ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block w-[22px] h-[2px] bg-content rounded-full transition-all duration-300 ease-out origin-center ${
            open ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* ════════════ Backdrop overlay ═══════════════════════════ */}
      <div
        className={`fixed inset-0 z-250 bg-black/40 backdrop-blur-[2px] transition-all duration-300 ease-out max-[900px]:block min-[901px]:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ════════════ Slide-in drawer ════════════════════════════ */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 z-260 h-dvh w-[min(320px,80vw)] bg-surface border-l border-line shadow-2xl transition-transform duration-300 ease-out max-[900px]:block min-[901px]:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full px-8 pb-10 pt-28 overflow-y-auto">
          {/* ── Navigation links ────────────────────────────── */}
          <nav className="flex flex-col gap-5">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={close}
                className="group relative text-content/80 no-underline text-sm tracking-[0.1em] uppercase transition-colors duration-200 hover:text-accent font-syne font-semibold py-2 pl-4 border-l-2 border-transparent hover:border-accent focus-visible:border-accent focus-visible:outline-none"
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                tabIndex={open ? 0 : -1}
              >
                <span className="inline-block text-[10px] text-accent/60 font-syne tracking-normal mr-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Spacer ──────────────────────────────────────── */}
          <div className="flex-1" />

          {/* ── Divider ─────────────────────────────────────── */}
          <div className="mb-8 pt-8 border-t border-line" />

          {/* ── Theme toggle + CTAs ─────────────────────────── */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] text-muted tracking-[0.08em] uppercase">
                Theme
              </span>
              <ThemeToggle />
            </div>

            <a
              href={resumeUrl}
              download
              onClick={close}
              className="inline-block text-center border border-accent/40 bg-transparent text-accent no-underline font-syne font-bold tracking-[0.06em] uppercase px-6 py-3 text-[13px] transition-all duration-200 hover:bg-accent hover:text-primary-foreground active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Download Resume
            </a>

            <a
              href="mailto:grand1310marcell@gmail.com"
              onClick={close}
              className="inline-block text-center border-none bg-accent text-primary-foreground no-underline font-syne font-bold tracking-[0.06em] uppercase px-6 py-3.5 text-[13px] transition-all duration-200 hover:bg-accent-2 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
