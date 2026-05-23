import { stack, stats } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-text">DEV</div>

      <div className="hero-left" data-reveal>
        <div className="hero-tag">Available for new roles</div>
        <h1 className="hero-name">
          Grand
          <br />
          <span className="line2">Marcell</span>
        </h1>
        <p className="hero-desc">
          <strong>Frontend Developer</strong> with 3+ years crafting fast, clean,
          user-first web experiences. Specialising in <strong>React.js</strong>{" "}
          and <strong>Next.js</strong> with a sharp eye for pixel-perfect UI.
        </p>
        <div className="hero-actions">
          <a href="#experience" className="btn-primary">
            View my work
          </a>
          <a
            href="https://www.linkedin.com/in/grandmarcell"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            LinkedIn / open
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
