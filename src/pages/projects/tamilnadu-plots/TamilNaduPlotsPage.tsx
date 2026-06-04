import { TamilNaduHero } from "./sections/TamilNaduHero";
import { IntroSection } from "./sections/IntroSection";
import { WhyInvestSection } from "./sections/WhyInvestSection";
import { PremiumLayoutsSection } from "./sections/PremiumLayoutsSection";
import { ErodeHubSection } from "./sections/ErodeHubSection";
import { CommitmentSection } from "./sections/CommitmentSection";
import { WhoShouldBuySection } from "./sections/WhoShouldBuySection";
import { CTABottomSection } from "./sections/CTABottomSection";
import { FooterSection } from "./sections/FooterSection";
import { useSEO } from "@/hooks/useSEO";

export function TamilNaduPlotsPage() {
  useSEO(
    "Real Estate Plots in Erode & Tamil Nadu | Best Layouts",
    "Discover top real estate plots and layouts in Tamil Nadu and Erode. Buy approved land in prime locations with strong growth and investment value."
  );

  return (
    <main className="min-h-screen">
      <TamilNaduHero />
      <div className="w-full">
        <IntroSection />
        <WhyInvestSection />
        <PremiumLayoutsSection />
        <ErodeHubSection />
        <CommitmentSection />
        <WhoShouldBuySection />
        <CTABottomSection />
        <FooterSection />
      </div>
    </main>
  );
}
