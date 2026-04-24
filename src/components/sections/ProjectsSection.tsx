import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img2 from '../../assets/homepage/img2.webp';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(headingRef.current,
      { y: 90, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      }
    );

    gsap.fromTo(cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 65%' },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8 md:px-14 flex flex-col items-center" id="projects">

      {/* Heading */}
      <div className="text-center mb-16 w-full">
        <span className="text-[9px] font-semibold tracking-[0.25em] text-foreground/45 uppercase block mb-3">
          ● Our Portfolio
        </span>
        <h2
          ref={headingRef}
          className="text-[15vw] md:text-[12vw] leading-[0.82] font-heading font-bold text-foreground tracking-[-0.04em]"
        >
          Projects
        </h2>
      </div>

      {/* Project Card */}
      <div
        ref={cardRef}
        className="w-full max-w-[1000px] rounded-[2rem] flex flex-col md:flex-row overflow-hidden"
        style={{ backgroundColor: '#ede9dc', border: '1px solid rgba(0,0,0,0.05)' }}
      >
        {/* Image */}
        <div className="w-full md:w-[52%] p-4">
          <div className="relative w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden group">
            <img
              src={img2}
              alt="The Waterfront"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute bottom-3 left-3 right-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <div className="flex items-center justify-between bg-[#ede9dc] rounded-full px-4 py-2.5">
                <span className="text-sm text-foreground font-medium">View Project</span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-[48%] px-8 md:px-12 py-10 md:py-14 flex flex-col justify-center">
          <h3 className="text-[26px] md:text-[30px] font-heading font-bold text-foreground mb-4">
            The Waterfront
          </h3>
          <p className="text-foreground/55 text-[14px] leading-[1.8]">
            Welcome to The Waterfront by Kalamangala – Erode's first premium
            community living, where nature and modern comforts come together.
            Choose your plot, build your dream home and be part of a secure,
            eco-friendly and like-minded neighborhood.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <button className="flex items-center gap-2.5 bg-foreground text-white pl-5 pr-1.5 py-1.5 rounded-full text-[13px] font-medium hover:bg-foreground/85 transition-colors">
          <span>All Projects</span>
          <span className="bg-primary p-2 rounded-lg flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5 text-foreground" />
          </span>
        </button>
      </div>
    </section>
  );
};
