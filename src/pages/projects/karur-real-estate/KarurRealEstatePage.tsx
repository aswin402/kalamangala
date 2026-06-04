import { KarurHero } from "./sections/KarurHero";
import { IntroSection } from "./sections/IntroSection";
import { WhyKalamangalaSection } from "./sections/WhyKalamangalaSection";
import { HouseLayoutsSection } from "./sections/HouseLayoutsSection";
import { GatedCommunitySection } from "./sections/GatedCommunitySection";
import { SmartInvestmentSection } from "./sections/SmartInvestmentSection";
import { WhoWeServeSection } from "./sections/WhoWeServeSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { WhatMakesDifferentSection } from "./sections/WhatMakesDifferentSection";
import { CTABottomSection } from "./sections/CTABottomSection";
import { FooterSection } from "./sections/FooterSection";
import { useSEO } from "@/hooks/useSEO";

export function KarurRealEstatePage() {
  useSEO(
    "House Layouts & Gated Community Real Estate in Karur | Kalamangala",
    "Explore modern house layouts, premium gated communities and top real estate services in Karur. Buy, invest or build with Kalamangala — Karur's trusted property brand."
  );

  return (
    <main className="min-h-screen">
      <KarurHero />
      <div className="w-full">
        <IntroSection />
        <WhyKalamangalaSection />
        <HouseLayoutsSection />
        <GatedCommunitySection />
        <SmartInvestmentSection />
        <WhoWeServeSection />
        <OurServicesSection />
        <WhatMakesDifferentSection />
        <CTABottomSection />
        <FooterSection />
      </div>
    </main>
  );
}
