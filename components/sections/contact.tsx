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
            I&apos;m open to frontend, full-stack, or hybrid roles where React,
            Next.js, UI quality, and ownership matter. Send me the role, the
            product, and what success looks like in the first 90 days.
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
            I&apos;m at my best on teams that want someone who can{" "}
            <strong>ship, communicate, and raise the quality bar</strong>{" "}
            without adding drama to the process.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
