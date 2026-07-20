import { stack, stats } from "@/data/portfolio";

export function HeroStatsCard() {
  return (
    <div className="relative w-85 p-10 border border-line bg-surface before:absolute before:-top-px before:left-8 before:right-8 before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-accent before:to-transparent">
      <div className="grid grid-cols-2 gap-6 mb-8">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <div className="mb-[0.3rem] text-accent font-syne font-extrabold text-[2.2rem] leading-none">
              {stat.value}
            </div>
            <div className="text-content/70 text-[11px] tracking-wider uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-accent mb-[0.8rem] text-[10px] tracking-widest uppercase">
        Core Stack
      </div>
      <div className="flex flex-wrap gap-[0.4rem]">
        {stack.map((item) => (
          <span
            key={item}
            className="px-[0.7rem] py-1 border border-line bg-accent/6 text-content text-[11px] transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
