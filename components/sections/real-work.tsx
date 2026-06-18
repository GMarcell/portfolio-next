import { realWork } from "@/data/portfolio";

export default function RealWork() {
  return (
    <section
      id="real-work"
      className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16"
      data-reveal
    >
      <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
        Production work
      </div>
      <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">
        Real work shipped
      </h2>
      <p className="max-w-120 m-0 mb-16 text-content/70 font-fraunces font-light text-[1.05rem]">
        Live products used by real teams — not showcase builds.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {realWork.map((item) => (
          <article
            key={item.number}
            className="relative flex flex-col gap-5 p-[1.8rem] border border-line bg-surface overflow-hidden transition-all duration-200 hover:border-accent/45 hover:-translate-y-0.75 before:absolute before:inset-y-0 before:left-0 before:w-0.75 before:bg-accent"
          >
            <div className="flex justify-between gap-4 text-accent text-[11px] tracking-[0.08em] uppercase">
              <span>{item.number}</span>
              <span>{item.period}</span>
            </div>

            <div>
              <p className="m-0 text-accent text-sm">{item.company}</p>
              <h3 className="m-0 font-syne font-extrabold text-[clamp(1.4rem,2.4vw,1.9rem)] tracking-[-0.02em] leading-[1.1] text-content">
                {item.title}
              </h3>
            </div>

            <p className="m-0 text-content font-fraunces font-light text-base leading-[1.7]">
              {item.summary}
            </p>
            <p className="m-0 pl-4 border-l-2 border-accent text-content/75 text-[0.85rem] italic leading-[1.6]">
              {item.confidential}
            </p>

            <div>
              <p className="mb-[0.6rem] text-accent text-[11px] tracking-[0.08em] uppercase">
                Modules shipped
              </p>
              <div className="flex flex-wrap gap-[0.45rem]">
                {item.modules.map((mod) => (
                  <span
                    key={mod}
                    className="px-[0.65rem] py-[0.3rem] border border-accent/26 bg-accent/9 text-content text-[11px] tracking-[0.04em]"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-[0.6rem] text-accent text-[11px] tracking-[0.08em] uppercase">
                My role
              </p>
              <p className="text-content/80 text-[0.95rem] leading-[1.65]">
                {item.role}
              </p>
            </div>

            <div>
              <p className="mb-[0.6rem] text-accent text-[11px] tracking-[0.08em] uppercase">
                Context
              </p>
              <p className="text-content/80 text-[0.95rem] leading-[1.65]">
                {item.context}
              </p>
            </div>

            <div className="flex flex-wrap gap-[0.4rem] mt-auto pt-4 border-t border-line">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-[0.65rem] py-1 border border-line text-content/75 text-[11px] tracking-[0.04em] uppercase"
                >
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
