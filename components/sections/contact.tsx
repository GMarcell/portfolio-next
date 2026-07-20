import dynamic from "next/dynamic";
import { contactLinks, resumeUrl } from "@/data/portfolio";
import { DownloadIcon } from "@/components/ui/icons";

const ContactForm = dynamic(
  () => import("@/components/contact-form").then((mod) => mod.ContactForm)
);

export function ContactSection() {
  return (
    <section
      className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16 bg-surface"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-20 max-lg:gap-12 items-start">
        {/* ── Left: Intro & links ──────────────────────────────── */}
        <div data-reveal>
          <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
            Contact
          </div>
          <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">
            Let&apos;s build
            <br />
            something <span className="text-accent">great.</span>
          </h2>
          <p className="max-w-100 m-0 mb-10 text-content/80 font-fraunces font-light text-base leading-[1.7]">
            I&apos;m open to full-stack roles where React,
            Next.js, TypeScript, and end-to-end ownership matter. Send me the role, the
            product, and what success looks like in the first 90 days.
          </p>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className="flex items-center gap-4 p-5 border border-line bg-surface text-content no-underline transition-all duration-200 hover:border-accent/34 hover:bg-accent/5"
                {...(link.href.startsWith("https")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <div className="flex shrink-0 items-center justify-center w-8 h-8 border border-accent/20 bg-accent/10 text-accent font-syne font-bold text-xs">
                  {link.code}
                </div>
                <div>
                  <strong className="block mb-[0.2rem] font-syne text-[13px] font-semibold text-content">
                    {link.label}
                  </strong>
                  <span className="text-content/70 text-xs">{link.value}</span>
                </div>
              </a>
            ))}

            {/* ── Resume download ─────────────────────────────── */}
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-4 p-5 border border-accent/30 bg-accent/6 text-content no-underline transition-all duration-200 hover:border-accent/50 hover:bg-accent/10"
            >
              <div className="flex shrink-0 items-center justify-center w-8 h-8 border border-accent/20 bg-accent/10 text-accent font-syne font-bold text-xs">
                <DownloadIcon />
              </div>
              <div>
                <strong className="block mb-[0.2rem] font-syne text-[13px] font-semibold text-content">
                  Resume
                </strong>
                <span className="text-content/70 text-xs">Downloadable PDF</span>
              </div>
            </a>
          </div>
        </div>

        {/* ── Right: Form ─────────────────────────────────────── */}
        <div>
          <div className="inline-flex items-center gap-[0.6rem] px-[0.8rem] py-[0.35rem] mb-8 border border-accent/24 bg-accent/10 text-accent text-[11px] tracking-widest uppercase before:w-1.75 before:h-1.75 before:rounded-full before:bg-accent before:animate-[pulse_2s_infinite]">
            Open to opportunities
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
