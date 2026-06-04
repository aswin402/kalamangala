import { ErodeLuxuryHero } from "./sections/ErodeLuxuryHero";
import { IntroSection } from "./sections/IntroSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { VisionMissionSection } from "./sections/VisionMissionSection";
import { LayoutFeaturesSection } from "./sections/LayoutFeaturesSection";
import { SmartInvestmentSection } from "./sections/SmartInvestmentSection";
import { WhoWeCaterToSection } from "./sections/WhoWeCaterToSection";
import { CTABottomSection } from "./sections/CTABottomSection";
import { FooterSection } from "./sections/FooterSection";
import { useSEO } from "@/hooks/useSEO";

export function ErodeLuxuryLayoutsPage() {
  useSEO(
    "Luxury Residential Layouts in Erode | Premium Plots",
    "Discover luxury residential layouts in Erode with premium amenities, clear titles, and prime connectivity. Build your dream home in a secure community."
  );

  return (
    <main className="min-h-screen">
      <ErodeLuxuryHero />
      <div className="w-full">
        <IntroSection />
        <WhyChooseUsSection />
        <VisionMissionSection />
        <LayoutFeaturesSection />
        <SmartInvestmentSection />
        <WhoWeCaterToSection />
        <CTABottomSection />
        <FooterSection />
      </div>
    </main>
  );
}
