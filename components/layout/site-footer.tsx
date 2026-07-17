export function SiteFooter() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-line flex items-center justify-between px-12 py-8 max-md:flex-col max-md:gap-4 max-md:text-center">
      <span className="text-muted text-[11px] tracking-[0.06em]">
        {`\u00A9 ${footerYear} Grand Marcell / Tangerang, Indonesia`}
      </span>
      <div className="flex gap-8 tracking-[0.06em]">
        <a
          href="#home"
          className="text-muted no-underline text-[11px] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-accent"
        >
          Top
        </a>
        <a
          href="mailto:grand1310marcell@gmail.com"
          className="text-muted no-underline text-[11px] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-accent"
        >
          Email
        </a>
        <a
          href="https://github.com/GMarcell"
          target="_blank"
          rel="noreferrer"
          className="text-muted no-underline text-[11px] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-accent"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/grandmarcell"
          target="_blank"
          rel="noreferrer"
          className="text-muted no-underline text-[11px] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-accent"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
