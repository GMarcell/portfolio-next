import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { PortfolioEffects } from "@/components/effects/portfolio-effects";
import { HeroSection } from "@/components/sections/hero";
import { TickerSection } from "@/components/sections/ticker";
import { HireFitSection } from "@/components/sections/hire-fit";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { CertificationsSection } from "@/components/sections/certifications";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import RealWork from "@/components/sections/real-work";

export default function Home() {
  return (
    <>
      <PortfolioEffects />
      <SiteNav />

      <main>
        <HeroSection />
        <TickerSection />
        <HireFitSection />
        <AboutSection />
        <RealWork />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
