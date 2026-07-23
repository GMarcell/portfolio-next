import type { Metadata } from "next";
import { Fraunces, Syne, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "optional",
});

const siteUrl = "https://grandmarcell.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Grand Marcell | Fullstack Developer",
  description:
    "Fullstack Developer who turns product ideas and designs into fast, polished web experiences. Next.js, TypeScript, React, API design, and production-grade full-stack engineering.",
  keywords: [
    "Fullstack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Full Stack Development",
    "Indonesia",
  ],
  authors: [{ name: "Grand Marcell" }],
  creator: "Grand Marcell",
  openGraph: {
    title: "Grand Marcell | Fullstack Developer",
    description:
      "Fullstack Developer who turns product ideas and designs into fast, polished web experiences.",
    url: siteUrl,
    siteName: "Grand Marcell Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Marcell | Fullstack Developer",
    description:
      "Fullstack Developer who turns product ideas and designs into fast, polished web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ══════════════ JSON-LD structured data ═══════════════════ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Grand Marcell",
  givenName: "Grand",
  familyName: "Marcell",
  jobTitle: "Fullstack Developer",
  description:
    "Fullstack Developer who turns product ideas and designs into fast, polished web experiences.",
  url: siteUrl,
  sameAs: [
    "https://github.com/GMarcell",
    "https://www.linkedin.com/in/grandmarcell",
  ],
  email: "grand1310marcell@gmail.com",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Frontend Development",
    "Full Stack Development",
    "UI Development",
    "Web Performance",
    "Design Systems",
    "Agile",
    "Scrum",
  ],
  alumniOf: "Universitas Pelita Harapan",
  worksFor: [
    {
      "@type": "Organization",
      name: "Rata.id",
    },
    {
      "@type": "Organization",
      name: "Merkle Innovation",
    },
  ],
};

/* Inline script to set the theme class on <html> before React hydrates.
   Prevents the flash-of-wrong-theme without needing a mounted state. */
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('portfolio-theme');
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.className = document.documentElement.className
        .replace(/\\bdark\\b/g, '')
        .replace(/\\s+/g, ' ')
        .trim() + ' ' + theme;
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(syne.variable, fraunces.variable, geist.variable, "scroll-smooth")}
      suppressHydrationWarning
    >
      <head>
        {/* ══════════════ Theme initialisation ═══════════════════ */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        {/* ══════════════ Font preconnects ═══════════════════════ */}
        <link rel="preconnect" href="https://fonts.googleapis.com" fetchPriority="high" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        {/* ══════════════ JSON-LD structured data ═════════════ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-content text-sm leading-[1.6] m-0 overflow-x-hidden">
        {/* ── Skip to content (keyboard accessibility) ──────── */}
        <a
          href="#main-content"
          className="fixed -top-full left-4 z-[9999] px-4 py-2 bg-accent text-primary-foreground no-underline text-xs font-syne font-bold uppercase tracking-wider transition-all duration-200 focus:top-4 focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
