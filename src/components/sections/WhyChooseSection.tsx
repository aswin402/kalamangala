import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import img3 from '../../assets/homepage/img3.avif';

gsap.registerPlugin(ScrollTrigger);

const accordionItems = [
  {
    title: 'Client-Centric Approach',
    content: "Our clients' needs and preferences are at the heart of everything we do, guiding our process and decisions.",
  },
  {
    title: 'Quality',
    content: 'We use premium materials and partner with top-tier contractors to deliver structures that stand the test of time.',
  },
  {
    title: 'Innovation',
    content: 'We continuously integrate the latest architectural trends and smart technologies to create future-ready living spaces.',
  },
  {
    title: 'Sustainable Practices',
    content: 'Our projects feature energy-efficient designs, water conservation systems, and eco-friendly materials.',
  },
  {
    title: 'Collaboration',
    content: 'We work closely with world-renowned architects, designers, and urban planners to bring visionary concepts to life.',
  },
  {
    title: 'Integrity',
    content: 'Transparency and honesty are the pillars of every relationship we build—with clients, partners, and communities.',
  },
];

const KalaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M8 1L15 8L8 15L1 8Z" stroke="#e8a87c" strokeWidth="1.4" fill="none" />
    <path d="M8 4.5L11.5 8L8 11.5L4.5 8Z" fill="#e8a87c" fillOpacity="0.35" />
  </svg>
);

interface ItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ title, content, isOpen, onClick }: ItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in' });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-white/10 last:border-0 py-0.5">
      <button
        className="w-full py-4 flex items-center gap-3 text-left focus:outline-none group"
        onClick={onClick}
      >
        <KalaIcon />
        <span className={`flex-1 font-heading font-medium text-[15px] transition-colors ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
          {title}
        </span>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M3 6L8 11L13 6" stroke={isOpen ? '#e8a87c' : 'rgba(255,255,255,0.35)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <p className="pb-4 text-white/55 text-[13.5px] leading-relaxed pl-7">{content}</p>
      </div>
    </div>
  );
};

export const WhyChooseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(leftColRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      }
    );

    gsap.fromTo(rightColRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6" id="why-choose">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 items-stretch">

        {/* Left Column — image with overlay */}
        <div
          ref={leftColRef}
          className="w-full lg:w-[48%] relative rounded-[1.75rem] overflow-hidden min-h-[480px] lg:min-h-0 group"
        >
          <img
            src={img3}
            alt="Kalamangala Building"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-12">
            <h3 className="text-white text-[22px] md:text-[26px] font-sans font-medium leading-snug mb-4">
              Our specialty lies in transforming spaces<br />into harmonious environments
            </h3>
            <p className="text-white/55 text-[13.5px] leading-relaxed mb-8 max-w-md">
              Our craft is a harmony of space and nature, shaping communities where timeless elegance
              meets modern comfort, creating homes that inspire and endure.
            </p>
            <button className="flex items-center gap-2.5 bg-primary text-foreground pl-5 pr-1.5 py-1.5 rounded-full w-fit text-sm font-medium hover:bg-white transition-colors duration-300">
              <span>Contact Us</span>
              <span className="w-7 h-7 rounded-full bg-foreground/15 flex items-center justify-center">
                <ArrowRight size={13} className="text-foreground" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Column — accordion panel */}
        <div
          ref={rightColRef}
          className="w-full lg:w-[52%] bg-[#162a22] rounded-[1.75rem] p-10 md:p-12 flex flex-col justify-start"
        >
          <div className="mb-8">
            <span className="text-[10px] font-semibold tracking-[0.22em] text-white/40 uppercase block mb-3">
              ● Our Speciality
            </span>
            <h2 className="text-[28px] md:text-[34px] font-heading font-bold text-white leading-tight">
              Why choose Kalamangala
            </h2>
          </div>

          <div className="w-full">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
