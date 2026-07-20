import { Suspense } from "react";
import dynamic from "next/dynamic";
import { resumeUrl } from "@/data/portfolio";
import { DownloadIcon } from "@/components/ui/icons";

const HeroStatsCard = dynamic(
  () => import("@/components/sections/hero-stats-card").then((mod) => mod.HeroStatsCard)
);

export function HeroSection() {
  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-2 items-center min-h-dvh px-12 max-md:px-6 pt-22.5 max-md:pt-20 overflow-hidden border-t-0"
      id="home"
    >
      <div
        className="absolute right-[-0.05em] bottom-[-0.1em] text-transparent font-syne font-extrabold text-[clamp(120px,18vw,260px)] leading-none whitespace-nowrap select-none"
        style={{ WebkitTextStroke: "1px color-mix(in srgb, var(--c-accent) 6%, transparent)" } as React.CSSProperties}
      >
        DEV
      </div>

      <div className="relative z-1" data-reveal>
        <div className="flex flex-col gap-3 mb-8">
          <div className="inline-flex items-center gap-[0.6rem] px-[0.8rem] py-[0.35rem] border border-accent/24 bg-accent/10 text-accent text-[11px] tracking-widest uppercase before:w-1.75 before:h-1.75 before:rounded-full before:bg-accent before:animate-[pulse_2s_infinite]">
            Fullstack · Available
          </div>
          <div className="inline-flex items-center gap-[0.6rem] px-[0.8rem] py-[0.35rem] border border-accent/24 bg-accent/10 text-accent text-[11px] tracking-widest uppercase">
            Open for Relocation · Remote / Hybrid / On-site
          </div>
        </div>
        <h1 className="m-0 mb-6 font-syne font-extrabold text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-content">
          Grand
          <br />
          <span className="text-accent">Marcell</span>
        </h1>
        <p className="max-w-105 m-0 mb-12 text-content/85 font-fraunces font-light text-[1.15rem] leading-[1.7]">
          <strong className="text-content font-normal">
            Fullstack Developer
          </strong>{" "}
          who turns product ideas into polished, production-grade web
          experiences — from API design to responsive UI. I bring{" "}
          <strong className="text-content font-normal">Next.js</strong>,{" "}
          <strong className="text-content font-normal">TypeScript</strong>,
          full-stack ownership, and the kind of product judgment that makes teams
          easier to trust.
        </p>
        <div className="items-center flex-wrap">
          <div className="flex gap-4 mb-3">
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
              href="https://github.com/GMarcell"
              target="_blank"
              rel="noreferrer"
              className="text-muted no-underline text-[11px] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-accent"
            >
              Github
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
          <div className="flex gap-3 flex-wrap">
            <a
              href="#hire-fit"
              className="inline-block border-none bg-accent text-primary-foreground no-underline font-syne font-bold tracking-[0.06em] uppercase px-8 py-[0.8rem] text-[13px] transition-all duration-200 hover:bg-accent-2 hover:-translate-y-px"
            >
              Why hire me
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-accent/40 bg-transparent text-accent no-underline font-syne font-bold tracking-[0.06em] uppercase px-7 py-[0.8rem] text-[13px] transition-all duration-200 hover:bg-accent hover:text-primary-foreground hover:-translate-y-px"
            >
              <DownloadIcon />
              Resume
            </a>
          </div>
        </div>
      </div>

      <div
        className="hero-right-desktop relative z-1 flex items-center justify-end"
        data-reveal
      >
        <Suspense
          fallback={
            <div className="w-85 p-10 border border-line bg-surface before:absolute before:-top-px before:left-8 before:right-8 before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-accent before:to-transparent">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i}>
                    <div className="mb-[0.3rem] h-9 w-20 bg-line/40 rounded-sm animate-pulse" />
                    <div className="h-3 w-16 bg-line/30 rounded-sm animate-pulse mt-2" />
                  </div>
                ))}
              </div>
              <div className="h-3 w-24 bg-line/30 rounded-sm animate-pulse mb-4" />
              <div className="flex flex-wrap gap-[0.4rem]">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <span
                    key={i}
                    className="h-7 w-16 bg-line/30 rounded-sm animate-pulse inline-block"
                  />
                ))}
              </div>
            </div>
          }
        >
          <HeroStatsCard />
        </Suspense>
      </div>
    </section>
  );
}
