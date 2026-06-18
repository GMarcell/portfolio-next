import { certifications } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <section className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16" id="certs">
      <div data-reveal>
        <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
          Credentials
        </div>
        <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-reveal>
        {certifications.map((certification) => (
          <article
            key={certification.name}
            className="flex items-start gap-4 p-5 border border-line bg-surface transition-all duration-200 hover:border-accent/34 hover:translate-x-1"
            data-hover-target="true"
          >
            <div className="flex shrink-0 items-center justify-center w-11 h-11 border border-accent/20 bg-accent/10 text-accent font-syne font-bold text-sm">
              {certification.code}
            </div>
            <div>
              <div className="font-syne text-[13px] font-semibold text-content">{certification.name}</div>
              <div className="text-content/70 text-[11px]">{certification.issuer}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
