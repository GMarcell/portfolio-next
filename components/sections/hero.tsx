import { stack, stats } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-text">DEV</div>

      <div className="hero-left" data-reveal>
        <div>
          <div className="hero-tag">Frontend / Full-stack · Available</div>
          <div className="hero-tag">Open for Relocation</div>
        </div>
        <h1 className="hero-name">
          Grand
          <br />
          <span className="line2">Marcell</span>
        </h1>
        <p className="hero-desc">
          <strong>Frontend Developer</strong> who turns product ideas and Figma
          files into fast, polished React experiences. I bring{" "}
          <strong>Next.js</strong>, <strong>TypeScript</strong>, production
          ownership, and the kind of UI judgment that makes teams easier to
          trust.
        </p>
        <div className="hero-actions">
          <a href="#hire-fit" className="btn-primary">
            Why hire me
          </a>
          <a href="#real-work" className="btn-ghost">
            View Real Works projects
          </a>
          <a href="#projects" className="btn-ghost">
            View Show Case projects
          </a>

          <a
            href="https://www.linkedin.com/in/grandmarcell"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-right" data-reveal>
        <div className="hero-card">
          <div className="hero-stats">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-stack-title">Core Stack</div>
          <div className="hero-stack">
            {stack.map((item) => (
              <span className="stack-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
