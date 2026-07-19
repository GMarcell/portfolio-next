export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh px-6 bg-bg">
      <div className="flex flex-col items-center gap-6">
        {/* Animated initials */}
        <span className="font-syne font-extrabold text-[2rem] tracking-[-0.02em] text-content/30 select-none">
          GM<span className="text-accent/50">.</span>
        </span>
        {/* Pulsing dot */}
        <span
          className="inline-block w-2 h-2 rounded-full bg-accent"
          style={{
            animation: "pulse 1.4s ease-in-out infinite",
          }}
        />
      </div>
    </main>
  );
}
