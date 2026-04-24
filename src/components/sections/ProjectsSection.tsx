import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img2 from '../../assets/homepage/img2.webp';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 60%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative flex flex-col items-center" id="projects">
      {/* Massive Heading */}
      <h2 
        ref={headingRef}
        className="text-[15vw] md:text-[12vw] leading-none font-heading font-bold text-foreground text-center mb-12 tracking-tighter"
      >
        Projects
      </h2>

      {/* Project Card */}
      <div 
        ref={cardRef}
        className="max-w-5xl w-full bg-black/5 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-lg backdrop-blur-sm"
      >
        <div className="w-full md:w-1/2 aspect-video md:aspect-auto h-64 md:h-auto">
          <img 
            src={img2} 
            alt="The Waterfront Project" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <h3 className="text-3xl font-heading font-bold text-foreground mb-4">The Waterfront</h3>
          <p className="text-foreground/70 leading-relaxed font-sans">
            Reflecting a deep understanding of what constitutes a modern luxury lifestyle. Every space is meticulously designed to offer a blend of elegance and functionality. With breathtaking views and world-class amenities, The Waterfront is not just a residence; it's a sanctuary.
          </p>
        </div>
      </div>
    </section>
  );
};
