import { certifications } from "@/data/portfolio";

export function CertificationsSection() {
  return (
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
  );
}
