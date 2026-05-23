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
            things that feel polished.
          </p>
          <p>
            Outside of code, I run live-streaming and AV operations for a weekly
            service, which keeps my coordination and problem-solving instincts
            sharp.
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
