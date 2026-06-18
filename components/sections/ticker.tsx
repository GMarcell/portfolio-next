import { tickerItems } from "@/data/portfolio";

export function TickerSection() {
  return (
    <div className="ticker" aria-label="technology ticker">
      <div className="ticker-inner">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
