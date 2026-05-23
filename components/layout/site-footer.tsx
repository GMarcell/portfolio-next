export function SiteFooter() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <span className="footer-copy">
        {`© ${footerYear} Grand Marcell / Tangerang, Indonesia`}
      </span>
      <div className="footer-links">
        <a href="#home">Top</a>
        <a href="mailto:grand1310marcell@gmail.com">Email</a>
        <a
          href="https://www.linkedin.com/in/grandmarcell"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
