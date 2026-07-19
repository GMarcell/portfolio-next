"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log the error for debugging in production
  console.error("Unhandled error:", error);

  return (
    <main className="flex flex-col items-center justify-center min-h-dvh px-6 text-center bg-bg">
      <span className="block text-accent font-syne font-extrabold text-[clamp(3rem,8vw,6rem)] leading-none mb-4 select-none">
        Oops!
      </span>
      <h1 className="m-0 mb-3 font-syne font-extrabold text-[clamp(1.3rem,2.5vw,2rem)] tracking-[-0.02em] text-content">
        Something went wrong
      </h1>
      <p className="m-0 mb-10 max-w-md text-content/70 font-fraunces font-light text-base leading-[1.7]">
        An unexpected error occurred. Please try again, or come back later.
      </p>
      <button
        onClick={reset}
        className="inline-block border-none bg-accent text-primary-foreground no-underline font-syne font-bold tracking-[0.06em] uppercase px-8 py-3 text-[13px] transition-all duration-200 hover:bg-accent-2 hover:-translate-y-px cursor-pointer"
      >
        Try Again
      </button>
    </main>
  );
}
