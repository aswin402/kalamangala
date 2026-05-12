import { useEffect } from "react";
import { TamilNaduHero } from "./sections/TamilNaduHero";
import { IntroSection } from "./sections/IntroSection";
import { WhyInvestSection } from "./sections/WhyInvestSection";
import { PremiumLayoutsSection } from "./sections/PremiumLayoutsSection";
import { ErodeHubSection } from "./sections/ErodeHubSection";
import { CommitmentSection } from "./sections/CommitmentSection";
import { WhoShouldBuySection } from "./sections/WhoShouldBuySection";
import { CTABottomSection } from "./sections/CTABottomSection";
import { FooterSection } from "./sections/FooterSection";

export function TamilNaduPlotsPage() {
  useEffect(() => {
    document.title =
      "Real Estate Plots in Erode & Tamil Nadu | Best Layouts";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Discover top real estate plots and layouts in Tamil Nadu and Erode. Buy approved land in prime locations with strong growth and investment value.";

    return () => {
      document.title = "Kalamangala | Redefining Luxury Living";
    };
  }, []);

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
