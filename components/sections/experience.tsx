import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="experience" id="experience">
      <div data-reveal>
        <div className="section-label">Career</div>
        <h2 className="section-title">
          Where I&apos;ve
          <br />
          Worked
        </h2>
        <p className="section-sub">
          A track record of building real things that shipped to real users.
        </p>
      </div>

      <div className="exp-list">
        {experiences.map((experience) => (
          <article
            className="exp-item"
            key={`${experience.company}-${experience.period}`}
            data-reveal
            data-hover-target="true"
          >
            <div className="exp-meta">
              <div className="exp-period">{experience.period}</div>
              <div className="exp-company">{experience.company}</div>
              <div className="exp-location">{experience.location}</div>
            </div>

            <div className="exp-content">
              <div className="exp-role">{experience.role}</div>
              <p className="exp-desc">{experience.description}</p>
              <div className="exp-tags">
                {experience.tags.map((tag) => (
                  <span className="exp-tag" key={tag}>
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
