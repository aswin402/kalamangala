import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';

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
