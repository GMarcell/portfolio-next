import { navLinks } from "@/data/portfolio";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-200 flex items-center justify-between px-12 py-6 backdrop-blur-md bg-bg/78 border-b border-accent/8">
      <a
        href="#home"
        className="font-syne font-extrabold text-[1.1rem] tracking-[-0.02em] no-underline text-content"
      >
        GM<span className="text-accent">.</span>
      </a>

      <div className="flex items-center gap-8">
        <ul className="nav-links-desktop flex gap-10 m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted no-underline text-xs tracking-[0.08em] uppercase transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <a
          href="mailto:grand1310marcell@gmail.com"
          className="inline-block border-none bg-accent text-[#071225] no-underline font-syne font-bold tracking-[0.06em] uppercase px-[1.2rem] py-2 text-xs transition-all duration-200 hover:bg-accent-2 hover:-translate-y-px"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
