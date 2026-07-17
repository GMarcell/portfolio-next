export function EducationSection() {
  return (
    <section className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16" id="education">
      <div data-reveal>
        <div className="flex items-center gap-[0.8rem] mb-4 text-accent text-[11px] tracking-[0.12em] uppercase after:flex-1 after:max-w-10 after:h-px after:bg-accent/40">
          Education
        </div>
        <h2 className="m-0 mb-4 font-syne font-extrabold text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.02em] leading-[1.05] text-content">
          Academic
          <br />
          Background
        </h2>
      </div>

      <div
        className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start max-w-[700px] p-10 border border-line bg-surface overflow-hidden"
        data-reveal
        style={{ "--watermark-stroke": "1px color-mix(in srgb, var(--c-accent) 10%, transparent)" } as React.CSSProperties}
      >
        <div className="absolute right-[-0.1em] bottom-[-0.3em] text-transparent font-syne font-extrabold text-[8rem] select-none pointer-events-none"
          style={{ WebkitTextStroke: "var(--watermark-stroke)" } as React.CSSProperties}
          aria-hidden="true"
        >
          UPH
        </div>
        <div>
          <div className="mb-[0.4rem] font-syne font-extrabold text-[1.5rem] tracking-[-0.02em] text-content">Bachelor of Information Technology</div>
          <div className="text-accent text-sm">Universitas Pelita Harapan</div>
          <div className="text-muted text-[11px]">2017 - 2021 / Tangerang, Indonesia</div>
        </div>
        <div className="inline-flex items-center gap-[0.6rem] px-[0.8rem] py-[0.35rem] border border-accent/24 bg-accent/10 text-accent text-[11px] tracking-[0.1em] uppercase">
          IT Graduate
        </div>
      </div>
    </section>
  );
}
