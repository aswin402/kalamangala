import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Accordion } from '../ui/Accordion';
import { ArrowRight } from 'lucide-react';
import img3 from '../../assets/homepage/img3.avif';

gsap.registerPlugin(ScrollTrigger);

const accordionItems = [
  {
    title: 'World-Class Approach',
    content: 'We adhere to international standards in every phase of our projects, ensuring that our clients receive nothing but the absolute best in real estate development.'
  },
  {
    title: 'Quality',
    content: 'Our commitment to quality is unwavering. We use premium materials and partner with top-tier contractors to deliver structures that stand the test of time.'
  },
  {
    title: 'Innovation',
    content: 'We continuously integrate the latest architectural trends and smart home technologies to create future-ready living spaces.'
  },
  {
    title: 'Sustainable Practices',
    content: 'Environmental responsibility is at our core. Our projects feature energy-efficient designs, water conservation systems, and eco-friendly materials.'
  },
  {
    title: 'Collaboration',
    content: 'We work closely with world-renowned architects, designers, and urban planners to bring visionary concepts to life.'
  },
  {
    title: 'Delivery',
    content: 'Timely execution without compromising on quality is our promise. We pride ourselves on meeting our commitments to our homeowners.'
  }
];

export const WhyChooseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(leftColRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo(rightColRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative max-w-7xl mx-auto" id="why-choose">
      <div className="mb-12">
        <h4 className="text-sm font-semibold tracking-widest text-foreground/50 uppercase mb-2">Here is a quick</h4>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Why choose Kalamangala</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column (Image with Overlay) */}
        <div 
          ref={leftColRef}
          className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-auto flex-1 group"
        >
          <img 
            src={img3} 
            alt="Kalamangala Entrance" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-10 md:p-14">
            <h3 className="text-white text-2xl md:text-3xl font-sans font-medium leading-snug mb-8">
              Our specialty lies in transforming spaces into refined living environments.
            </h3>
            <button className="flex items-center gap-4 text-black bg-primary px-6 py-4 rounded-full w-fit hover:bg-white transition-colors">
              <span className="font-heading font-bold text-sm tracking-widest uppercase">Know More</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Column (Accordion) */}
        <div 
          ref={rightColRef}
          className="w-full lg:w-1/2 bg-[#1a2e25] rounded-[2rem] p-10 md:p-14 flex-1 shadow-2xl"
        >
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
};
