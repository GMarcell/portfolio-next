export default function Loading() {
  return (
    <main className="flex flex-col min-h-dvh bg-bg">
      {/* ── Nav skeleton ─────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-200 flex items-center justify-between px-12 max-md:px-6 py-6 backdrop-blur-md bg-bg/78 border-b border-accent/8">
        <span className="font-syne font-extrabold text-[1.1rem] tracking-[-0.02em] text-content/30 select-none">
          GM<span className="text-accent/50">.</span>
        </span>
        <div className="flex items-center gap-8 max-[900px]:hidden min-[901px]:flex">
          <div className="flex gap-10">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="h-3 w-12 bg-line/30 rounded-sm animate-pulse" />
            ))}
          </div>
          <div className="h-5 w-12 bg-line/30 rounded-sm animate-pulse" />
          <div className="h-5 w-20 bg-line/30 rounded-sm animate-pulse" />
          <div className="h-5 w-16 bg-line/30 rounded-sm animate-pulse" />
        </div>
      </div>

      {/* ── Hero skeleton ────────────────────────────────────── */}
      <section className="flex-1 grid grid-cols-1 md:grid-cols-2 items-center min-h-dvh px-12 max-md:px-6 pt-22.5 max-md:pt-20">
        <div className="flex flex-col gap-6">
          <div className="h-4 w-48 bg-accent/15 rounded-sm animate-pulse" />
          <div className="flex flex-col gap-2">
            <div className="h-16 w-64 bg-line/20 rounded-sm animate-pulse" />
            <div className="h-16 w-48 bg-line/20 rounded-sm animate-pulse" />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="h-4 w-full max-w-lg bg-line/15 rounded-sm animate-pulse" />
            <div className="h-4 w-3/4 max-w-md bg-line/15 rounded-sm animate-pulse" />
            <div className="h-4 w-5/6 max-w-sm bg-line/15 rounded-sm animate-pulse" />
          </div>
          <div className="flex gap-3 mt-6">
            <div className="h-12 w-36 bg-accent/20 rounded-sm animate-pulse" />
            <div className="h-12 w-32 bg-line/20 rounded-sm animate-pulse" />
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <div className="w-85 p-10 border border-line/40 bg-surface/50">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                  <div className="mb-[0.3rem] h-9 w-20 bg-line/30 rounded-sm animate-pulse" />
                  <div className="h-3 w-16 bg-line/20 rounded-sm animate-pulse mt-2" />
                </div>
              ))}
            </div>
            <div className="h-3 w-24 bg-line/20 rounded-sm animate-pulse mb-4" />
            <div className="flex flex-wrap gap-[0.4rem]">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <span
                  key={i}
                  className="h-7 w-16 bg-line/20 rounded-sm animate-pulse inline-block"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
