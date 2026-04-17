import { PortfolioEffects } from "@/components/portfolio-effects";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "4", label: "Companies" },
  { value: "5+", label: "Certifications" },
  { value: "100+", label: "Projects Shipped" },
];

const stack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Sass",
  "Scrum",
];

const tickerItems = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Sass",
  "Agile / Scrum",
  "Responsive UI",
  "Full Stack",
];

const highlights = [
  {
    code: "01",
    title: "Performance-focused",
    text: "Building fast, cross-browser compatible, production-grade web apps.",
  },
  {
    code: "02",
    title: "Design-to-code",
    text: "Translating wireframes and polished mockups into crisp, usable UI.",
  },
  {
    code: "03",
    title: "Agile practitioner",
    text: "Comfortable collaborating in fast-moving Scrum teams with shared ownership.",
  },
  {
    code: "04",
    title: "Growth trajectory",
    text: "Progressed quickly into larger feature ownership and senior-track expectations.",
  },
];

const experiences = [
  {
    period: "Jul 2024 - Present",
    company: "Rata.id",
    location: "South Jakarta",
    role: "Full Stack Engineer",
    description:
      "Building and maintaining the company's web presence with React.js, shipping new features, improving performance, and keeping production experiences reliable across browsers.",
    tags: ["React.js", "Full Stack", "Performance", "Production"],
  },
  {
    period: "Mar 2023 - Jul 2024",
    company: "Merkle Innovation",
    location: "Indonesia",
    role: "Frontend Developer to Senior Track",
    description:
      "Translated design mockups into responsive interfaces and took on more ownership across feature delivery, UI architecture, and collaboration inside a Scrum workflow.",
    tags: ["React.js", "UI Architecture", "Scrum", "Tailwind CSS"],
  },
  {
    period: "Aug 2020 - Present",
    company: "GPIB Yudea",
    location: "Tangerang",
    role: "IT Technician",
    description:
      "Managed AV and live-streaming operations for weekly services, coordinating people, hardware, and software to keep broadcasts smooth and dependable.",
    tags: ["AV Production", "Live Streaming", "Team Coordination"],
  },
  {
    period: "Mar 2021 - Feb 2023",
    company: "Universitas Pelita Harapan",
    location: "Tangerang",
    role: "Administrative Officer",
    description:
      "Handled institution-wide survey data and supported outreach logistics, balancing operational detail with communication across academic and marketing teams.",
    tags: ["Data Management", "Marketing", "Accreditation"],
  },
];

const skillGroups = [
  {
    title: "Frontend Core",
    items: [
      { name: "React.js", value: "95%" },
      { name: "Next.js", value: "90%" },
      { name: "JavaScript", value: "92%" },
      { name: "TypeScript", value: "80%" },
      { name: "HTML / CSS", value: "97%" },
    ],
  },
  {
    title: "Styling and UI",
    items: [
      { name: "Tailwind CSS", value: "93%" },
      { name: "Sass / SCSS", value: "88%" },
      { name: "Responsive Design", value: "95%" },
      { name: "CSS Animations", value: "82%" },
      { name: "Cross-browser", value: "90%" },
    ],
  },
  {
    title: "Process and Tools",
    items: [
      { name: "Agile / Scrum", value: "90%" },
      { name: "Git / GitHub", value: "88%" },
      { name: "Figma", value: "78%" },
      { name: "Python", value: "65%" },
      { name: "C++", value: "60%" },
    ],
  },
];

const certifications = [
  { code: "WD", name: "Responsive Web Design", issuer: "freeCodeCamp" },
  { code: "RJ", name: "Membuat Website dengan ReactJS", issuer: "Dicoding Indonesia" },
  { code: "PY", name: "Python Programming", issuer: "Certification Authority" },
  { code: "CP", name: "C++ Programming", issuer: "Certification Authority" },
];

const contactLinks = [
  {
    href: "mailto:grand1310marcell@gmail.com",
    label: "Email",
    value: "grand1310marcell@gmail.com",
    code: "EM",
  },
  {
    href: "tel:08872059062",
    label: "Mobile",
    value: "0887 205 9062",
    code: "PH",
  },
  {
    href: "https://www.linkedin.com/in/grandmarcell",
    label: "LinkedIn",
    value: "linkedin.com/in/grandmarcell",
    code: "IN",
  },
];

export default function Home() {
  const footerYear = new Date().getFullYear();

  return (
    <>
      <PortfolioEffects />

      <nav className="site-nav">
        <a href="#home" className="nav-logo">
          GM<span>.</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="mailto:grand1310marcell@gmail.com" className="nav-cta">
          Hire Me
        </a>
      </nav>

      <main>
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
              <strong>Frontend Developer</strong> with 3+ years crafting fast,
              clean, user-first web experiences. Specialising in{" "}
              <strong>React.js</strong> and <strong>Next.js</strong> with a sharp
              eye for pixel-perfect UI.
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

        <div className="ticker" aria-label="technology ticker">
          <div className="ticker-inner">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span className="ticker-item" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

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
                Outside of code, I run live-streaming and AV operations for a
                weekly service, which keeps my coordination and problem-solving
                instincts sharp.
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

        <section className="certs" id="certs">
          <div data-reveal>
            <div className="section-label">Credentials</div>
            <h2 className="section-title">Certifications</h2>
          </div>

          <div className="certs-grid" data-reveal>
            {certifications.map((certification) => (
              <article
                key={certification.name}
                className="cert-card"
                data-hover-target="true"
              >
                <div className="cert-icon">{certification.code}</div>
                <div>
                  <div className="cert-name">{certification.name}</div>
                  <div className="cert-issuer">{certification.issuer}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education" id="education">
          <div data-reveal>
            <div className="section-label">Education</div>
            <h2 className="section-title">
              Academic
              <br />
              Background
            </h2>
          </div>

          <div className="edu-card" data-reveal>
            <div>
              <div className="edu-degree">Bachelor of Information Technology</div>
              <div className="edu-school">Universitas Pelita Harapan</div>
              <div className="edu-period">2017 - 2021 / Tangerang, Indonesia</div>
            </div>
            <div className="edu-badge">IT Graduate</div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <div data-reveal>
              <div className="section-label">Contact</div>
              <h2 className="contact-title">
                Let&apos;s build
                <br />
                something <span className="highlight">great.</span>
              </h2>
              <p className="contact-body">
                I&apos;m open to frontend, full-stack, or hybrid roles, remote or
                based in Greater Jakarta. If you&apos;re looking for someone who
                ships clean code and cares about the details, let&apos;s talk.
              </p>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    className="contact-link"
                    {...(link.href.startsWith("https")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <div className="contact-link-icon">{link.code}</div>
                    <div className="contact-link-text">
                      <strong>{link.label}</strong>
                      <span>{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-right" data-reveal>
              <div className="availability-badge">Open to opportunities</div>
              <blockquote className="contact-note">
                I build interfaces that feel <strong>fast, purposeful, and polished</strong>
                . The details are what users remember.
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="footer-copy">
          {`© ${footerYear} Grand Marcell / Tangerang, Indonesia`}
        </span>
        <div className="footer-links">
          <a href="#home">Top</a>
          <a href="mailto:grand1310marcell@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/grandmarcell"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
