import { useEffect } from "react";
import { ErodeHero } from "./sections/ErodeHero";
import { IntroSection } from "./sections/IntroSection";
import { WhoWeAreSection } from "./sections/WhoWeAreSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { WhyWeLeadSection } from "./sections/WhyWeLeadSection";
import { LayoutsInErodeSection } from "./sections/LayoutsInErodeSection";
import { WhyInvestSection } from "./sections/WhyInvestSection";
import { VisionMissionSection } from "./sections/VisionMissionSection";
import { CTABottomSection } from "./sections/CTABottomSection";
import { FooterSection } from "./sections/FooterSection";

export function ErodeConstructionPage() {
  useEffect(() => {
    document.title =
      "Best Real Estate Construction Company in Erode | Kalamangala";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Find trusted real estate construction companies in Erode offering quality building, residential and commercial project solutions.";

    return () => {
      document.title = "Kalamangala | Redefining Luxury Living";
    };
  }, []);

  return (
    <main className="min-h-screen">
      <ErodeHero />
      <div className="w-full">
        <IntroSection />
        <WhoWeAreSection />
        <ExpertiseSection />
        <WhyWeLeadSection />
        <LayoutsInErodeSection />
        <WhyInvestSection />
        <VisionMissionSection />
        <CTABottomSection />
        <FooterSection />
      </div>
    </main>
  );
}
