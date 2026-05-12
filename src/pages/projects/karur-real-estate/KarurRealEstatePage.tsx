import { useEffect } from "react";
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

export function KarurRealEstatePage() {
  useEffect(() => {
    document.title =
      "House Layouts & Gated Community Real Estate in Karur | Kalamangala";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Explore modern house layouts, premium gated communities and top real estate services in Karur. Buy, invest or build with Kalamangala — Karur's trusted property brand.";

    return () => {
      document.title = "Kalamangala | Redefining Luxury Living";
    };
  }, []);

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
