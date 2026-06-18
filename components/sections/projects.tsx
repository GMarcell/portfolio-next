import type { CSSProperties } from "react";

import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <div data-reveal>
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">
          Showcase Project with
          <br />
          Product Shape
        </h2>
        <p className="section-sub">
          Five showcase builds covering healthcare, finance, commerce, design
          systems, and live API experiences.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
            style={{ "--project-accent": project.accent } as CSSProperties}
            data-reveal
            data-hover-target="true"
          >
            <div className="project-topline">
              <span>{`Project ${project.number}`}</span>
              <span>{project.year}</span>
            </div>

            <div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>

            <p className="project-summary">{project.summary}</p>

            <p className="project-impact">
              <strong>Hiring signal:</strong> {project.impact}
            </p>

            <a
              href={project.productionHref}
              target="_blank"
              rel="noreferrer"
              className="project-production-link"
            >
              Live Production / open
            </a>

            <div
              className="project-metrics"
              aria-label={`${project.title} metrics`}
            >
              {project.metrics.map((metric) => (
                <div className="project-metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="project-detail-grid">
              <div>
                <div className="project-detail-label">Core Requirements</div>
                <ul className="project-list">
                  {project.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-detail-label">Screens</div>
                <div className="project-screens">
                  {project.screens.map((screen) => (
                    <span key={screen}>{screen}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-stack">
              {project.stack.map((item) => (
                <span className="project-stack-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
