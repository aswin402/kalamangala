
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutDarkSection } from "./sections/AboutDarkSection";
import { MissionVisionSection } from "./sections/MissionVisionSection";
import { JourneySection } from "./sections/JourneySection";
import { useSEO } from "@/hooks/useSEO";

export function AboutPage() {
  useSEO(
    "Kalamangala – A Lifestyle Beyond Ordinary",
    "Invest in premium residential plots across Tamil Nadu with Kalamangala—well-planned layouts, secure locations, and long-term value."
  );

  return (
    <main className="about-page min-h-screen text-foreground">
      <MarqueeSection />
      <AboutDarkSection />
      <JourneySection />
      <MissionVisionSection />
    </main>
  );
}

export default AboutPage;
