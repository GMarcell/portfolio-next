import type { Metadata } from "next";
import { DM_Mono, Fraunces, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Grand Marcell | Frontend Developer",
  description:
    "Portfolio project rebuilt from a standalone HTML file into a modern Next.js 16.2 App Router application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
