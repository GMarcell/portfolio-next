import { hiringReasons } from "@/data/portfolio";

export function HireFitSection() {
  return (
    <section
      className="hire-fit-bg border-t border-line px-12 max-md:px-6 py-28 max-md:py-16"
      id="hire-fit"
    >
      <div data-reveal>
        <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
          Recruiter Snapshot
        </div>
        <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">
          Why I&apos;m
          <br />
          Worth a Call
        </h2>
        <p className="max-w-120 m-0 mb-16 text-content/70 font-fraunces font-light text-[1.05rem]">
          I bring the mix hiring teams usually need but rarely find in one
          fullstack candidate: clean implementation, visual judgment, product
          empathy, backend awareness, and steady delivery habits.{" "}
          <strong className="text-content font-normal">
            Open to full-time, contract, and freelance — remote, hybrid, or
            on-site.
          </strong>
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px border border-line bg-line"
        data-reveal
      >
        {hiringReasons.map((reason) => (
          <article
            key={reason.title}
            className="min-h-57.5 p-6 bg-surface transition-all duration-200 hover:bg-accent/6 hover:-translate-y-0.75"
          >
            <div className="mb-[2.2rem] text-accent text-[11px] tracking-[0.12em]">
              {reason.code}
            </div>
            <h3 className="m-0 mb-[0.7rem] font-syne text-[1.2rem] tracking-[-0.01em] text-content">
              {reason.title}
            </h3>
            <p className="m-0 text-content/80 font-fraunces font-light text-base leading-[1.65]">
              {reason.text}
            </p>
          </article>
        ))}
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 max-md:gap-[0.6rem] mt-4 p-[1.4rem_1.5rem] border border-accent/24 bg-accent/6"
        data-reveal
      >
        <span className="text-accent text-[11px] tracking-[0.12em] uppercase">
          Best fit
        </span>
        <div>
          <p className="max-w-190 m-0 text-content font-fraunces font-light text-[1.1rem] leading-[1.65]">
            Fullstack product teams building React/Next.js apps where
            performance, UI polish, end-to-end ownership, and collaboration matter.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 border border-accent/20 bg-accent/8 text-accent text-[11px] tracking-[0.08em] uppercase">
              Open to full-time
            </span>
            <span className="px-3 py-1 border border-accent/20 bg-accent/8 text-accent text-[11px] tracking-[0.08em] uppercase">
              Open to contract
            </span>
            <span className="px-3 py-1 border border-accent/20 bg-accent/8 text-accent text-[11px] tracking-[0.08em] uppercase">
              Open to freelance
            </span>
            <span className="px-3 py-1 border border-accent/20 bg-accent/8 text-accent text-[11px] tracking-[0.08em] uppercase">
              Remote / Hybrid / On-site
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
