import { realWork } from "@/data/portfolio";
import { RealWorkCard } from "@/components/sections/real-work-card";

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
        Production Work
      </h2>
      <p className="max-w-120 m-0 mb-16 text-content/70 font-fraunces font-light text-[1.05rem]">
        Production systems used by internal teams in healthtech and hospital
        operations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {realWork.map((item) => (
          <RealWorkCard key={item.number} work={item} />
        ))}
      </div>
    </section>
  );
}
