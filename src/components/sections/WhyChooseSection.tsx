import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img3 from '../../assets/homepage/img3.avif';

gsap.registerPlugin(ScrollTrigger);

const accordionItems = [
  {
    title: 'Client-Centric Approach',
    content:
      "Our clients' needs and preferences are at the heart of everything we do, guiding our process and decisions.",
  },
  {
    title: 'Quality',
    content:
      'We use premium materials and partner with top-tier contractors to deliver structures that stand the test of time.',
  },
  {
    title: 'Innovation',
    content:
      'We continuously integrate the latest architectural trends and smart technologies to create future-ready living spaces.',
  },
  {
    title: 'Sustainable Practices',
    content:
      'Our projects feature energy-efficient designs, water conservation systems, and eco-friendly materials.',
  },
  {
    title: 'Collaboration',
    content:
      'We work closely with world-renowned architects, designers, and urban planners to bring visionary concepts to life.',
  },
  {
    title: 'Integrity',
    content:
      'Transparency and honesty are the pillars of every relationship we build—with clients, partners, and communities.',
  },
];

const DiamondIcon = () => (
  <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[4px] bg-primary/10">
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1L13 7L7 13L1 7Z"
        stroke="#f2aa80"
        strokeWidth="1.3"
        fill="none"
      />
      <path d="M7 4L10 7L7 10L4 7Z" fill="#f2aa80" fillOpacity="0.45" />
    </svg>
  </span>
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
    gsap.to(contentRef.current, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      duration: isOpen ? 0.32 : 0.22,
      ease: isOpen ? 'power2.out' : 'power2.in',
    });
  }, [isOpen]);

  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        type="button"
        onClick={onClick}
        className="group flex w-full items-center gap-3 py-[14px] text-left outline-none"
      >
        <DiamondIcon />

        <span
          className={`flex-1 font-sans text-[12.5px] font-medium transition-colors ${
            isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'
          }`}
        >
          {title}
        </span>

        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path
            d="M2.5 5L7 9.5L11.5 5"
            stroke={isOpen ? '#f2aa80' : 'rgba(255,255,255,0.42)'}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <p className="pb-[15px] pl-[41px] text-[11px] font-medium leading-[1.55] text-white/55">
          {content}
        </p>
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

    gsap.fromTo(
      leftColRef.current,
      { opacity: 0, x: -32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.05,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 74%' },
      }
    );

    gsap.fromTo(
      rightColRef.current,
      { opacity: 0, x: 32 },
      {
        opacity: 1,
        x: 0,
        duration: 1.05,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 74%' },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose"
      className="page-x pb-[92px] pt-[48px]"
    >
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-[14px] lg:grid-cols-[550px_1fr]">
        {/* Left Image */}
        <div
          ref={leftColRef}
          className="relative min-h-[435px] overflow-hidden rounded-[7px]"
        >
          <img
            src={img3}
            alt="Kalamangala Building"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-[26px]">
            <h3 className="mb-2 max-w-[460px] text-[22px] font-medium leading-[1.1] tracking-[-0.045em] text-white md:text-[26px]">
              Our specialty lies in transforming spaces into harmonious
              environments
            </h3>

            <p className="mb-5 max-w-[430px] text-[11.5px] font-medium leading-[1.5] text-white/65">
              Our craft is a harmony of space and nature, shaping communities
              where timeless elegance meets modern comfort.
            </p>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-1 rounded-full bg-white py-1 pl-3 pr-1 text-[10px] font-semibold text-foreground transition-colors hover:bg-primary"
            >
              <span>Contact Us</span>

              <span className="flex h-[28px] w-[32px] items-center justify-center rounded-[7px] bg-primary">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path
                    d="M2 9L9 2M9 2H3.5M9 2V7.5"
                    stroke="#102d25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Right Accordion */}
        <div
          ref={rightColRef}
          className="flex min-h-[435px] flex-col rounded-[7px] bg-foreground px-[28px] py-[24px] md:px-[34px]"
        >
          <div className="mb-[12px]">
            <span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.22em] text-white/55">
              ● Our Speciality
            </span>

            <h2 className="font-heading text-[31px] font-extrabold leading-none tracking-[-0.055em] text-white md:text-[38px]">
              Why choose Kalamangala
            </h2>
          </div>

          <div className="mt-2 w-full">
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