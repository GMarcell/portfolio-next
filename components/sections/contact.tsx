import { contactLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16 bg-surface" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-24 max-md:gap-12 items-center">
        <div data-reveal>
          <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
            Contact
          </div>
          <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">
            Let&apos;s build
            <br />
            something <span className="text-accent">great.</span>
          </h2>
          <p className="max-w-[400px] m-0 mb-10 text-muted font-fraunces font-light text-base leading-[1.7]">
            I&apos;m open to frontend, full-stack, or hybrid roles where React,
            Next.js, UI quality, and ownership matter. Send me the role, the
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
                  <strong className="block mb-[0.2rem] font-syne text-[13px] font-semibold text-content">{link.label}</strong>
                  <span className="text-muted text-xs">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4" data-reveal>
          <div className="inline-flex items-center gap-[0.6rem] px-[0.8rem] py-[0.35rem] border border-accent/24 bg-accent/10 text-accent text-[11px] tracking-[0.1em] uppercase before:w-[7px] before:h-[7px] before:rounded-full before:bg-accent before:animate-[pulse_2s_infinite]">
            Open to opportunities
          </div>
          <blockquote className="m-0 pl-6 border-l-2 border-accent text-muted font-fraunces font-light text-[1.1rem] italic leading-[1.6]">
            I&apos;m at my best on teams that want someone who can{" "}
            <strong className="text-content font-normal">ship, communicate, and raise the quality bar</strong>{" "}
            without adding drama to the process.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
