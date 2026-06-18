import { stack, stats } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-2 items-center min-h-dvh px-12 max-md:px-6 pt-22.5 max-md:pt-20 overflow-hidden border-t-0"
      id="home"
    >
      <div className="absolute right-[-0.05em] bottom-[-0.1em] text-transparent font-syne font-extrabold text-[clamp(120px,18vw,260px)] leading-none whitespace-nowrap select-none [-webkit-text-stroke:1px_rgba(214,179,90,0.06)]">
        DEV
      </div>

      <div className="relative z-1" data-reveal>
        <div className="flex flex-col gap-3 mb-8">
          <div className="inline-flex items-center gap-[0.6rem] px-[0.8rem] py-[0.35rem] border border-accent/24 bg-accent/10 text-accent text-[11px] tracking-widest uppercase before:w-1.75 before:h-1.75 before:rounded-full before:bg-accent before:animate-[pulse_2s_infinite]">
            Frontend / Full-stack · Available
          </div>
          <div className="inline-flex items-center gap-[0.6rem] px-[0.8rem] py-[0.35rem] border border-accent/24 bg-accent/10 text-accent text-[11px] tracking-widest uppercase">
            Open for Relocation
          </div>
        </div>
        <h1 className="m-0 mb-6 font-syne font-extrabold text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-content">
          Grand
          <br />
          <span className="text-accent">Marcell</span>
        </h1>
        <p className="max-w-105 m-0 mb-12 text-muted font-fraunces font-light text-[1.15rem] leading-[1.7]">
          <strong className="text-content font-normal">
            Frontend Developer
          </strong>{" "}
          who turns product ideas and Figma files into fast, polished React
          experiences. I bring{" "}
          <strong className="text-content font-normal">Next.js</strong>,{" "}
          <strong className="text-content font-normal">TypeScript</strong>,
          production ownership, and the kind of UI judgment that makes teams
          easier to trust.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <a
            href="#hire-fit"
            className="inline-block border-none bg-accent text-dark no-underline font-syne font-bold tracking-[0.06em] uppercase px-8 py-[0.8rem] text-[13px] transition-all duration-200 hover:bg-accent-2 hover:-translate-y-px"
          >
            Why hire me
          </a>
          <a
            href="#real-work"
            className="pb-0.5 border-b border-line text-muted no-underline text-xs tracking-[0.06em] uppercase transition-colors duration-200 hover:text-content hover:border-muted"
          >
            View Real Works projects
          </a>
          <a
            href="#projects"
            className="pb-0.5 border-b border-line text-muted no-underline text-xs tracking-[0.06em] uppercase transition-colors duration-200 hover:text-content hover:border-muted"
          >
            View Show Case projects
          </a>
          <a
            href="https://www.linkedin.com/in/grandmarcell"
            target="_blank"
            rel="noreferrer"
            className="pb-0.5 border-b border-line text-muted no-underline text-xs tracking-[0.06em] uppercase transition-colors duration-200 hover:text-content hover:border-muted"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div
        className="hero-right-desktop relative z-1 flex items-center justify-end"
        data-reveal
      >
        <div className="relative w-85 p-10 border border-line bg-surface before:absolute before:-top-px before:left-8 before:right-8 before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-accent before:to-transparent">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="mb-[0.3rem] text-accent font-syne font-extrabold text-[2.2rem] leading-none">
                  {stat.value}
                </div>
                <div className="text-muted text-[11px] tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-accent mb-[0.8rem] text-[10px] tracking-widest uppercase">
            Core Stack
          </div>
          <div className="flex flex-wrap gap-[0.4rem]">
            {stack.map((item) => (
              <span
                key={item}
                className="px-[0.7rem] py-1 border border-line bg-accent/6 text-content text-[11px] transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
