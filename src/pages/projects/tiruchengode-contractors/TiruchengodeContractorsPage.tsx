import { useEffect } from "react";
import { TiruchengodeHero } from "./sections/TiruchengodeHero";
import { IntroSection } from "./sections/IntroSection";
import { GrowingDemandSection } from "./sections/GrowingDemandSection";
import { TrustedPartnerSection } from "./sections/TrustedPartnerSection";
import { CoreServicesSection } from "./sections/CoreServicesSection";
import { PlotsNearTownSection } from "./sections/PlotsNearTownSection";
import { ProcessSection } from "./sections/ProcessSection";
import { WhoChoosesUsSection } from "./sections/WhoChoosesUsSection";
import { WhyRecommendSection } from "./sections/WhyRecommendSection";
import { FAQSection } from "./sections/FAQSection";
import { CTABottomSection } from "./sections/CTABottomSection";
import { FooterSection } from "./sections/FooterSection";

export function TiruchengodeContractorsPage() {
  useEffect(() => {
    document.title =
      "Top Real Estate Contractors in Tiruchengode | Premium Plots";

    // Set meta description
    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Discover trusted real estate contractors in Tiruchengode offering DTCP-approved plots, custom home layouts, and turnkey construction near town with clear documentation.";

    return () => {
      document.title = "Kalamangala | Redefining Luxury Living";
    };
  }, []);

  return (
    <main className="min-h-screen">
      <TiruchengodeHero />
      <div className="w-full">
        <IntroSection />
        <GrowingDemandSection />
        <TrustedPartnerSection />
        <CoreServicesSection />
        <PlotsNearTownSection />
        <ProcessSection />
        <WhoChoosesUsSection />
        <WhyRecommendSection />
        <FAQSection />
        <CTABottomSection />
        <FooterSection />
      </div>
    </main>
  );
}
