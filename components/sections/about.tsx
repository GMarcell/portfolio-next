import { highlights } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div data-reveal>
        <div className="section-label">About Me</div>
        <h2 className="section-title">
          Code. Design.
          <br />
          Deliver.
        </h2>
      </div>

      <div className="about-grid" data-reveal>
        <div className="about-body">
          <p>
            I&apos;m a <strong>Frontend Developer</strong> based in Tangerang,
            Indonesia, currently building production-grade web applications at{" "}
            <strong>Rata.id</strong> in South Jakarta.
          </p>
          <p>
            Over the past 3+ years I&apos;ve gone from translating wireframes
            into responsive UI to owning feature development and interface
            architecture end-to-end. I thrive in{" "}
            <strong>Agile / Scrum environments</strong>, collaborate closely
            with designers and backend teams, and care deeply about building
            things that are maintainable after the first release.
          </p>
          <p>
            My strongest lane is taking a vague product requirement, clarifying
            the interaction details, and turning it into a responsive interface
            that looks sharp, performs well, and does not surprise the rest of
            the engineering team.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((highlight) => (
            <div
              className="highlight-item"
              key={highlight.title}
              data-hover-target="true"
            >
              <div className="highlight-icon">{highlight.code}</div>
              <div className="highlight-text">
                <strong>{highlight.title}</strong>
                <span>{highlight.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
