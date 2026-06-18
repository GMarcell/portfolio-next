import { highlights } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16" id="about">
      <div data-reveal>
        <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
          About Me
        </div>
        <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">
          Code. Design.
          <br />
          Deliver.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-24 max-md:gap-12" data-reveal>
        <div className="text-muted font-fraunces font-light text-[1.05rem] leading-[1.8]">
          <p className="m-0">
            I&apos;m a <strong className="text-content font-normal">Frontend Developer</strong> based in Tangerang,
            Indonesia, currently building production-grade web applications at{" "}
            <strong className="text-content font-normal">Rata.id</strong> in South Jakarta.
          </p>
          <p className="m-0 mt-5">
            Over the past 3+ years I&apos;ve gone from translating wireframes
            into responsive UI to owning feature development and interface
            architecture end-to-end. I thrive in{" "}
            <strong className="text-content font-normal">Agile / Scrum environments</strong>, collaborate closely
            with designers and backend teams, and care deeply about building
            things that are maintainable after the first release.
          </p>
          <p className="m-0 mt-5">
            My strongest lane is taking a vague product requirement, clarifying
            the interaction details, and turning it into a responsive interface
            that looks sharp, performs well, and does not surprise the rest of
            the engineering team.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="flex items-start gap-4 p-5 border border-line transition-all duration-200 hover:border-accent/34"
              data-hover-target="true"
            >
              <div className="flex shrink-0 items-center justify-center w-9 h-9 border border-accent/20 bg-accent/10 text-accent font-syne font-bold text-xs">
                {highlight.code}
              </div>
              <div>
                <strong className="block mb-[0.2rem] font-syne text-[13px] font-semibold text-content">{highlight.title}</strong>
                <span className="text-muted text-xs">{highlight.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
