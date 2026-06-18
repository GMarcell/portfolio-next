import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16 bg-surface"
      id="skills"
    >
      <div data-reveal>
        <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
          Expertise
        </div>
        <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">
          Skills and
          <br />
          Technologies
        </h2>
        <p className="max-w-120 m-0 mb-16 text-content/75 font-fraunces font-light text-[1.05rem]">
          Modern web stack with a focus on quality and developer experience.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px border border-line bg-line"
        data-reveal
      >
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="p-8 bg-bg transition-colors duration-200 hover:bg-surface"
          >
            <div className="mb-5 pb-[0.8rem] border-b border-line text-accent uppercase font-syne text-[13px] font-bold tracking-[0.06em]">
              {group.title}
            </div>
            <div className="flex flex-col gap-[0.7rem]">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-content text-[13px]">{item.name}</span>
                  <div className="relative w-20 h-0.75 bg-line">
                    <div
                      className="skill-bar"
                      style={{ width: item.value }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
