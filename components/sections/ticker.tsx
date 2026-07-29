import { tickerItems } from "@/data/portfolio";

const tickerItemClass =
  "inline-flex items-center gap-6 text-content/75 font-syne font-bold text-[11px] tracking-[0.12em] uppercase after:content-['+'] after:text-accent after:text-[10px]";

export function TickerSection() {
  return (
    <div className="overflow-hidden py-[0.8rem] border-t border-line bg-surface" aria-label="technology ticker">
      <div className="ticker-inner">
        {/* ── Visible set: read by screen readers ─────────── */}
        {tickerItems.map((item, i) => (
          <span key={`visible-${i}`} className={tickerItemClass}>
            {item}
          </span>
        ))}
        {/* ── Duplicate set: hidden from screen readers (visual seamless scroll only) ── */}
        {tickerItems.map((item, i) => (
          <span key={`dup-${i}`} className={tickerItemClass} aria-hidden="true">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
