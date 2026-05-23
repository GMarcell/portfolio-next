import { contactLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
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
            I build interfaces that feel{" "}
            <strong>fast, purposeful, and polished</strong>. The details are
            what users remember.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
