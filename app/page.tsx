import { Suspense, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { PortfolioEffectsWrapper } from "@/components/effects/portfolio-effects-wrapper";
import { HeroSection } from "@/components/sections/hero";
import { TickerSection } from "@/components/sections/ticker";
import { HireFitSection } from "@/components/sections/hire-fit";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";

/* ── Below-fold sections: dynamically imported for lazy loading ── */
const RealWorkSection = dynamic(
  () => import("@/components/sections/real-work")
);

const ProjectsSection = dynamic(
  () => import("@/components/sections/projects").then((m) => ({ default: m.ProjectsSection }))
);

const ExperienceSection = dynamic(
  () => import("@/components/sections/experience").then((m) => ({ default: m.ExperienceSection }))
);

const SkillsSection = dynamic(
  () => import("@/components/sections/skills").then((m) => ({ default: m.SkillsSection }))
);

const CertificationsSection = dynamic(
  () => import("@/components/sections/certifications").then((m) => ({ default: m.CertificationsSection }))
);

const EducationSection = dynamic(
  () => import("@/components/sections/education").then((m) => ({ default: m.EducationSection }))
);

/* ── Section skeleton — shown while dynamic chunk loads ──── */
function SectionSkeleton() {
  return (
    <div className="border-t border-line px-12 max-md:px-6 py-28 max-md:py-16">
      <div className="flex flex-col gap-4 max-w-120 mx-auto">
        <div className="h-3 w-24 bg-line/20 rounded-sm animate-pulse" />
        <div className="h-10 w-3/4 bg-line/15 rounded-sm animate-pulse" />
        <div className="flex flex-col gap-2 mt-4">
          <div className="h-4 w-full bg-line/10 rounded-sm animate-pulse" />
          <div className="h-4 w-5/6 bg-line/10 rounded-sm animate-pulse" />
        </div>
      </div>
    </div>
  );
}

/* ── Suspense wrapper that renders a section skeleton ───── */
function SuspendedSection({ children }: { children: ReactNode }) {
  return <Suspense fallback={<SectionSkeleton />}>{children}</Suspense>;
}

export default function Home() {
  return (
    <>
      <PortfolioEffectsWrapper />
      <SiteNav />

      <main id="main-content" className="relative z-20">
        {/* ── Above fold: render immediately ───────────────── */}
        <HeroSection />
        <TickerSection />

        {/* ── Near fold: eager, no suspense ────────────────── */}
        <HireFitSection />
        <AboutSection />

        {/* ── Below fold: lazy-loaded via dynamic import ───── */}
        <SuspendedSection>
          <RealWorkSection />
        </SuspendedSection>
        <SuspendedSection>
          <ProjectsSection />
        </SuspendedSection>
        <SuspendedSection>
          <ExperienceSection />
        </SuspendedSection>
        <SuspendedSection>
          <SkillsSection />
        </SuspendedSection>
        <SuspendedSection>
          <CertificationsSection />
        </SuspendedSection>
        <SuspendedSection>
          <EducationSection />
        </SuspendedSection>
        <SuspendedSection>
          <ContactSection />
        </SuspendedSection>
      </main>

      <SiteFooter />
    </>
  );
}
