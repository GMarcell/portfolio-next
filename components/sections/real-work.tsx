import { realWork } from "@/data/portfolio";

export default function RealWork() {
  return (
    <section id="real-work" className="real-work" data-reveal>
      <span className="section-label">Production work</span>
      <h2 className="section-title">Real work shipped</h2>
      <p className="section-sub">
        Live products used by real teams — not showcase builds.
      </p>

      <div className="real-work-grid">
        {realWork.map((item) => (
          <article key={item.number} className="real-work-card">
            <div className="real-work-topline">
              <span>{item.number}</span>
              <span>{item.period}</span>
            </div>

            <div>
              <p className="real-work-company">{item.company}</p>
              <h3 className="real-work-title">{item.title}</h3>
            </div>

            <p className="real-work-summary">{item.summary}</p>
            <p className="real-work-confidential">{item.confidential}</p>

            <div>
              <p className="real-work-detail-label">Modules shipped</p>
              <div className="real-work-modules">
                {item.modules.map((mod) => (
                  <span key={mod} className="real-work-module-tag">
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="real-work-detail-label">My role</p>
              <p className="real-work-info">{item.role}</p>
            </div>

            <div>
              <p className="real-work-detail-label">Context</p>
              <p className="real-work-info">{item.context}</p>
            </div>

            <div className="real-work-stack">
              {item.stack.map((tech) => (
                <span key={tech} className="real-work-stack-pill">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
