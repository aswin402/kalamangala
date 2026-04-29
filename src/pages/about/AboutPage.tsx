
import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutDarkSection } from "./sections/AboutDarkSection";
import { MissionVisionSection } from "./sections/MissionVisionSection";
import { JourneySection } from "./sections/JourneySection";



export function AboutPage() {
  return (
    <main className="about-page min-h-screen overflow-hidden text-[#172d24]">
      <MarqueeSection />
      <AboutDarkSection />
      <JourneySection />
      <MissionVisionSection />
    </main>
  );
}

export default AboutPage;
