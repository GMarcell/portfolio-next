import { navLinks } from "@/data/portfolio";

export function SiteNav() {
  return (
    <nav className="site-nav">
      <a href="#home" className="nav-logo">
        GM<span>.</span>
      </a>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href="mailto:grand1310marcell@gmail.com" className="nav-cta">
        Hire Me
      </a>
    </nav>
  );
}
