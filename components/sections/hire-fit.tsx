import { hiringReasons } from "@/data/portfolio";

export function HireFitSection() {
  return (
    <section className="hire-fit" id="hire-fit">
      <div data-reveal>
        <div className="section-label">Recruiter Snapshot</div>
        <h2 className="section-title">
          Why I&apos;m
          <br />
          Worth a Call
        </h2>
        <p className="section-sub">
          I bring the mix hiring teams usually need but rarely find in one
          frontend candidate: clean implementation, visual judgment, product
          empathy, and steady delivery habits.
        </p>
      </div>

      <div className="hire-fit-grid" data-reveal>
        {hiringReasons.map((reason) => (
          <article className="hire-fit-card" key={reason.title}>
            <div className="hire-fit-code">{reason.code}</div>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </article>
        ))}
      </div>

      <div className="recruiter-note" data-reveal>
        <span>Best fit</span>
        <p>
          Frontend or full-stack product teams building React/Next.js apps where
          performance, UI polish, ownership, and collaboration matter.
        </p>
      </div>
    </section>
  );
}
