import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div data-reveal>
        <div className="section-label">Expertise</div>
        <h2 className="section-title">
          Skills and
          <br />
          Technologies
        </h2>
        <p className="section-sub">
          Modern web stack with a focus on quality and developer experience.
        </p>
      </div>

      <div className="skills-grid" data-reveal>
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-items">
              {group.items.map((item) => (
                <div className="skill-row" key={item.name}>
                  <span className="skill-name">{item.name}</span>
                  <div className="skill-bar-wrap">
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
