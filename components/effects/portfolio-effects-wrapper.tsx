"use client";

import dynamic from "next/dynamic";

const PortfolioEffects = dynamic(
  () =>
    import("@/components/effects/portfolio-effects").then(
      (mod) => mod.PortfolioEffects
    ),
  { ssr: false }
);

export function PortfolioEffectsWrapper() {
  return <PortfolioEffects />;
}
