import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ReviewsSection } from './sections/ReviewsSection';
import { WhyChooseSection } from './sections/WhyChooseSection';

export function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ReviewsSection />
      <WhyChooseSection />
    </div>
  );
}
