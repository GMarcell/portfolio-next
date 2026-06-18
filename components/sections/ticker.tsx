import { tickerItems } from "@/data/portfolio";

export function TickerSection() {
  return (
    <div className="overflow-hidden py-[0.8rem] border-t border-line bg-surface" aria-label="technology ticker">
      <div className="ticker-inner">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span
            className="inline-flex items-center gap-6 text-muted font-syne font-bold text-[11px] tracking-[0.12em] uppercase after:content-['+'] after:text-accent after:text-[10px]"
            key={`${item}-${index}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
