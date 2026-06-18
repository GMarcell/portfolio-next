import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16" id="experience">
      <div data-reveal>
        <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
          Career
        </div>
        <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">
          Where I&apos;ve
          <br />
          Worked
        </h2>
        <p className="max-w-[480px] m-0 mb-16 text-muted font-fraunces font-light text-[1.05rem]">
          A track record of building real things that shipped to real users.
        </p>
      </div>

      <div className="flex flex-col">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 max-md:gap-2 py-10 border-b border-line transition-colors duration-200 exp-item"
            data-reveal
            data-hover-target="true"
          >
            <div className="relative z-1">
              <div className="text-muted text-[11px]">{experience.period}</div>
              <div className="text-accent text-sm">{experience.company}</div>
              <div className="text-muted text-[11px]">{experience.location}</div>
            </div>

            <div className="relative z-1">
              <div className="mb-[0.8rem] font-syne font-bold text-[1.3rem] tracking-[-0.01em] text-content">{experience.role}</div>
              <p className="max-w-[560px] text-muted font-fraunces font-light text-base leading-[1.7]">{experience.description}</p>
              <div className="flex flex-wrap gap-[0.4rem] mt-4">
                {experience.tags.map((tag) => (
                  <span key={tag} className="px-[0.6rem] py-[0.2rem] border border-line text-muted text-[11px] tracking-[0.08em] uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
