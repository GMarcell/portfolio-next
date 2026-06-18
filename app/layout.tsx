import type { Metadata } from "next";
import { DM_Mono, Fraunces, Syne, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
      className={cn(syne.variable, dmMono.variable, fraunces.variable, "font-sans", "dark", geist.variable)}
      suppressHydrationWarning
    >
      <body className="bg-bg text-content text-sm leading-[1.6]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
