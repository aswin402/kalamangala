import { TiruppurHero } from "./sections/TiruppurHero";
import { IntroSection } from "./sections/IntroSection";
import { WhyTiruppurSection } from "./sections/WhyTiruppurSection";
import { VillaLayoutsSection } from "./sections/VillaLayoutsSection";
import { GatedCommunitySection } from "./sections/GatedCommunitySection";
import { PremiumPlotsSection } from "./sections/PremiumPlotsSection";
import { WhyChooseKalamangalaSection } from "./sections/WhyChooseKalamangalaSection";
import { WhoWeServeSection } from "./sections/WhoWeServeSection";
import { ProcessSection } from "./sections/ProcessSection";
import { CTABottomSection } from "./sections/CTABottomSection";
import { FooterSection } from "./sections/FooterSection";
import { useSEO } from "@/hooks/useSEO";

export function TiruppurVillaPage() {
  useSEO(
    "Villa & Gated Community Layouts in Tiruppur | Kalamangala",
    "Discover premium villa layouts, gated community plots and luxury housing spaces in Tiruppur. Buy verified properties with Kalamangala — trusted real estate experts."
  );

  return (
    <main className="min-h-screen">
      <TiruppurHero />
      <div className="w-full">
        <IntroSection />
        <WhyTiruppurSection />
        <VillaLayoutsSection />
        <GatedCommunitySection />
        <PremiumPlotsSection />
        <WhyChooseKalamangalaSection />
        <WhoWeServeSection />
        <ProcessSection />
        <CTABottomSection />
        <FooterSection />
      </div>
    </main>
  );
}
