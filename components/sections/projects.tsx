import type { CSSProperties } from "react";
import { ImageWithFade } from "@/components/ui/image-with-fade";

import { projects } from "@/data/portfolio";

/* ── Map project title → slug for screenshot lookup ──────── */
function projectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function ProjectsSection() {
  return (
    <section
      className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16"
      id="projects"
    >
      <div data-reveal>
        <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
          Selected Work
        </div>
        <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">
          Showcase Project with
          <br />
          Product Shape
        </h2>
        <p className="max-w-120 m-0 mb-16 text-content/70 font-fraunces font-light text-[1.05rem]">
          Five production-grade full-stack builds — AI-driven pipelines, real-time
          market data, real production users, and 60+ unit tests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => {
          const slug = projectSlug(project.title);

          return (
            <article
              className="project-card relative flex flex-col gap-[1.4rem] min-h-140 max-md:min-h-auto p-6 border border-line bg-surface overflow-hidden transition-all duration-200 hover:-translate-y-0.75 project-card-accent before:absolute before:inset-y-0 before:left-0 before:w-0.75 before:project-card-line"
              key={project.title}
              style={{ "--card-accent": project.accent } as CSSProperties}
              data-reveal
              data-hover-target="true"
            >
              {/* ── Project screenshot ────────────────────────── */}
              <div className="relative w-full aspect-[3/2] border border-line/60 overflow-hidden -mx-6 -mt-6 mb-0.75">
                <ImageWithFade
                  src={`/images/project-${slug}.svg`}
                  alt={`${project.title} — ${project.category} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div className="flex justify-between gap-4 text-(--card-accent) text-[11px] tracking-[0.08em] uppercase">
                <span>{`Project ${project.number}`}</span>
                <span>{project.year}</span>
              </div>

              <div>
                <h3 className="m-0 mb-1 font-syne font-extrabold text-[clamp(1.7rem,3vw,2.6rem)] tracking-[-0.03em] leading-none text-content">
                  {project.title}
                </h3>
                <p className="m-0 text-content/75 text-[11px] tracking-[0.08em] uppercase">
                  {project.category}
                </p>
              </div>

              <p className="m-0 text-content font-fraunces font-light text-base leading-[1.7]">
                {project.summary}
              </p>

              <p className="m-0 mt-[-0.4rem] pl-4 border-l-2 project-card-impact text-content/80 font-fraunces font-light text-[0.98rem] leading-[1.65]">
                <strong className="text-content font-mono font-normal text-[11px] tracking-[0.08em] uppercase">
                  Hiring signal:
                </strong>{" "}
                {project.impact}
              </p>

              <div className="flex gap-5">
                <a
                  href={project.productionHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit pb-[0.2rem] border-b project-card-link text-[11px] tracking-[0.08em] uppercase no-underline transition-colors duration-200 hover:text-content"
                >
                  Live Production
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit pb-[0.2rem] border-b project-card-link text-[11px] tracking-[0.08em] uppercase no-underline transition-colors duration-200 hover:text-content"
                >
                  Github
                </a>
              </div>

              <div
                className="grid grid-cols-3 gap-px border border-line bg-line"
                aria-label={`${project.title} metrics`}
              >
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="min-w-0 p-4 px-[0.8rem] bg-bg/72"
                  >
                    <strong className="block mb-1 project-card-metric font-syne font-extrabold text-[1.4rem] leading-none">
                      {metric.value}
                    </strong>
                    <span className="block text-content/75 text-[11px] tracking-[0.08em] uppercase leading-tight">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-[1.3rem] items-start">
                <div>
                  <div className="mb-[0.7rem] project-card-label text-[11px] tracking-[0.08em] uppercase">
                    Core Requirements
                  </div>
                  <ul className="flex flex-col gap-[0.55rem] m-0 p-0 text-content/75 text-[11px] tracking-[0.08em] leading-[1.55] list-none">
                    {project.requirements.map((requirement) => (
                      <li
                        key={requirement}
                        className="relative pl-4 before:absolute before:top-[0.72em] before:left-0 before:w-1.25 before:h-px project-card-list"
                      >
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-[0.7rem] project-card-label text-[11px] tracking-[0.08em] uppercase">
                    Screens
                  </div>
                  <div className="flex flex-wrap gap-[0.45rem]">
                    {project.screens.map((screen) => (
                      <span
                        key={screen}
                        className="px-[0.55rem] py-[0.3rem] border project-card-screen text-content text-[11px] tracking-[0.08em]"
                      >
                        {screen}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-[0.45rem] mt-auto pt-[1.1rem] border-t border-line">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-[0.65rem] py-1 border border-line text-content/75 text-[11px] tracking-[0.08em] uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
