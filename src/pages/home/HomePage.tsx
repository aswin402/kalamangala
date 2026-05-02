import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";

export function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ReviewsSection />
      <WhyChooseSection />
    </main>
  );
}