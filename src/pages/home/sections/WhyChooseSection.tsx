import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img3 from '@/assets/homepage/img3.avif';
import { SectionLabel } from '../components/SectionLabel';
import { ArrowIcon14 } from '../components/icons';

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

const ItemIcon = ({ index }: { index: number }) => {
  const icons = [
    <path
      key="client"
      d="M4.2 7.2L6.1 9.1C6.8 9.8 8 9.8 8.7 9.1L12.1 5.7C12.5 5.3 12.5 4.7 12.1 4.3C11.7 3.9 11.1 3.9 10.7 4.3L8.1 6.9L6.9 5.7M4.2 7.2L2.9 5.9C2.5 5.5 1.9 5.5 1.5 5.9C1.1 6.3 1.1 6.9 1.5 7.3L4.8 10.6C5.4 11.2 6.4 11.2 7 10.6M4.2 7.2L6.9 4.5C7.3 4.1 7.9 4.1 8.3 4.5L9.1 5.3"
      stroke="#f0a77e"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      key="quality"
      d="M4 3H10V6.5C10 8.2 8.7 9.5 7 9.5C5.3 9.5 4 8.2 4 6.5V3ZM10 4.5H11.2C12 4.5 12.6 5.1 12.6 5.9C12.6 6.7 12 7.3 11.2 7.3H10M5.2 12H8.8M7 9.5V12"
      stroke="#f0a77e"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      key="innovation"
      d="M7 2.2C9.2 3 10.8 4.6 11.8 7C10.2 7.1 8.9 7.7 7.9 8.8L5.2 6.1C6.3 5.1 6.9 3.8 7 2.2ZM5.2 6.1L3.2 6.4L2.2 8.8L4.7 8.2M7.9 8.8L7.6 10.8L5.2 11.8L5.8 9.3M8.7 5.3H8.72"
      stroke="#f0a77e"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      key="leaf"
      d="M12 2C7.2 2.3 3.8 4.8 3.3 9.4C5.8 9.5 10.2 8.5 12 2ZM3.3 9.4C3 10.4 2.7 11.2 2 12M5.1 8.2C6.7 7.2 8.4 6.1 10.1 4.4"
      stroke="#f0a77e"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      key="collab"
      d="M4.2 7.2L6.1 9.1C6.8 9.8 8 9.8 8.7 9.1L12.1 5.7C12.5 5.3 12.5 4.7 12.1 4.3C11.7 3.9 11.1 3.9 10.7 4.3L8.1 6.9L6.9 5.7M4.2 7.2L2.9 5.9C2.5 5.5 1.9 5.5 1.5 5.9C1.1 6.3 1.1 6.9 1.5 7.3L4.8 10.6C5.4 11.2 6.4 11.2 7 10.6M4.2 7.2L6.9 4.5C7.3 4.1 7.9 4.1 8.3 4.5L9.1 5.3"
      stroke="#f0a77e"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      key="integrity"
      d="M7 2.2V11.6M7 4.2C5.4 3.4 3.8 3.7 3 5.1C2.2 6.4 2.7 8.1 4.1 8.9M7 4.2C8.6 3.4 10.2 3.7 11 5.1C11.8 6.4 11.3 8.1 9.9 8.9M3.8 8.7C4.6 10.7 6.2 11.6 7 11.6C7.8 11.6 9.4 10.7 10.2 8.7"
      stroke="#f0a77e"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ];

  return (
    <span className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[6px] bg-white/10 max-[520px]:h-[46px] max-[520px]:w-[46px]">
      <svg width="24" height="24" viewBox="0 0 14 14" fill="none">
        {icons[index]}
      </svg>
    </span>
  );
};

interface AccordionItemProps {
  title: string;
  content: string;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  title,
  content,
  index,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.to(contentRef.current, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      duration: isOpen ? 0.32 : 0.22,
      ease: isOpen ? 'power2.out' : 'power2.in',
    });
  }, [isOpen]);

  return (
    <div
      className={`transition-colors duration-300 ${
        isOpen ? 'rounded-[8px] bg-white/[0.045]' : ''
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="group flex w-full items-center gap-[22px] px-[21px] py-[11px] text-left outline-none max-[520px]:gap-[17px] max-[520px]:px-[18px] max-[520px]:py-[12px]"
      >
        <ItemIcon index={index} />

        <span className="flex-1 text-[17px] font-bold leading-none tracking-[-0.035em] text-white max-[520px]:text-[17px]">
          {title}
        </span>

        <svg
          width="18"
          height="18"
          viewBox="0 0 14 14"
          fill="none"
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path
            d="M2.5 5L7 9.5L11.5 5"
            stroke="white"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <p className="max-w-[610px] pb-[22px] pl-[93px] pr-[28px] text-[16px] font-medium leading-[1.45] tracking-[-0.035em] text-white/75 max-[520px]:pl-[81px] max-[520px]:pr-[20px] max-[520px]:text-[14px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export const WhyChooseSection = () => {
  const whyChooseSectionRef = useRef<HTMLElement>(null);
  const whyChooseLeftColRef = useRef<HTMLDivElement>(null);
  const whyChooseRightColRef = useRef<HTMLDivElement>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        whyChooseLeftColRef.current,
        { opacity: 0, x: -42 },
        {
          opacity: 1,
          x: 0,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: whyChooseSectionRef.current,
            start: 'top 74%',
          },
        }
      );

      gsap.fromTo(
        whyChooseRightColRef.current,
        { opacity: 0, x: 42 },
        {
          opacity: 1,
          x: 0,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: whyChooseSectionRef.current,
            start: 'top 74%',
          },
        }
      );
    }, whyChooseSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={whyChooseSectionRef}
      id="why-choose"
      className="relative overflow-hidden pb-[95px] pt-[86px] max-[768px]:pb-[48px] max-[768px]:pt-[36px]"
    >
      <div className="mx-auto grid w-full max-w-[1205px] grid-cols-1 items-start gap-[24px] px-[20px] md:px-[36px] xl:grid-cols-[540px_1fr] xl:gap-[14px] xl:px-0">
        {/* IMAGE CARD */}
        <div
          ref={whyChooseLeftColRef}
          className="relative order-2 h-[560px] min-w-0 overflow-hidden rounded-[8px] md:h-[610px] lg:h-[640px] xl:order-1 xl:h-[560px]"
        >
          <img
            src={img3}
            alt="Kalamangala building"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
          />

          <div className="absolute bottom-[7px] left-[10px] right-[10px] rounded-[8px] bg-[#8f6a54]/58 px-[21px] pb-[27px] pt-[24px] backdrop-blur-[11px] md:px-[30px] md:pb-[30px] md:pt-[28px] xl:px-[21px] xl:pb-[27px] xl:pt-[24px]">
            <h3 className="mb-[17px] max-w-[500px] text-[35px] font-medium leading-[1.14] tracking-[-0.055em] text-white max-[768px]:text-[28px] max-[480px]:text-[25px]">
              Our specialty lies in transforming spaces into harmonious
              environments
            </h3>

            <p className="mb-[39px] max-w-[500px] text-[16px] font-medium leading-[1.45] tracking-[-0.025em] text-white/90 max-[480px]:text-[15px]">
              Our craft is a harmony of space and nature, shaping communities
              where timeless elegance meets modern comfort, creating homes
              that inspire and endure.
            </p>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-[4px] rounded-[9px] bg-white py-[6px] pl-[27px] pr-[6px] text-[17px] font-medium leading-none text-[#14352d] transition-colors hover:bg-[#fff7ee]"
            >
              Contact Us

              <span className="grid h-[46px] w-[48px] place-items-center rounded-[9px] bg-[#f0a77e] transition-transform group-hover:translate-x-[2px]">
                <ArrowIcon14 />
              </span>
            </Link>
          </div>
        </div>

        {/* ACCORDION CARD */}
        <div
          ref={whyChooseRightColRef}
          className="relative order-1 flex min-w-0 flex-col xl:order-2 xl:h-[560px]"
        >
          <div className="mb-[13px] shrink-0 max-[768px]:mb-[9px] max-[768px]:text-center">
            <div className="mb-[1px] flex max-[768px]:justify-center">
              <SectionLabel>Our Specialities</SectionLabel>
            </div>

            <h2 className="font-display text-[43px] font-black leading-[0.96] tracking-[-0.07em] text-[#14352d] md:text-[56px] xl:text-[49px]">
              Why choose Kalamangala
            </h2>
          </div>

          <div className="flex flex-1 rounded-[8px] bg-[#14352d] px-[19px] py-[19px] md:min-h-[480px] xl:min-h-0">
            <div className="flex w-full flex-col justify-between">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.title}
                  title={item.title}
                  content={item.content}
                  index={index}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};