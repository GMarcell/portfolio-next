import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh px-6 text-center bg-bg">
      <span className="block text-accent font-syne font-extrabold text-[clamp(5rem,12vw,10rem)] leading-none mb-4 select-none">
        404
      </span>
      <h1 className="m-0 mb-3 font-syne font-extrabold text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] text-content">
        Page not found
      </h1>
      <p className="m-0 mb-10 max-w-md text-content/70 font-fraunces font-light text-base leading-[1.7]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/#home"
          className="inline-block border-none bg-accent text-primary-foreground no-underline font-syne font-bold tracking-[0.06em] uppercase px-8 py-3 text-[13px] transition-all duration-200 hover:bg-accent-2 hover:-translate-y-px"
        >
          Back to Home
        </Link>
        <Link
          href="/#contact"
          className="inline-block border border-accent/40 bg-transparent text-accent no-underline font-syne font-bold tracking-[0.06em] uppercase px-8 py-3 text-[13px] transition-all duration-200 hover:bg-accent hover:text-primary-foreground hover:-translate-y-px"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}
