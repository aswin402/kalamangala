import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img2 from '../../assets/homepage/img2.webp';

gsap.registerPlugin(ScrollTrigger);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
    <path
      d="M2 11L11 2M11 2H4.5M11 2V8.5"
      stroke="#14352d"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 90, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          delay: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 84%',
          },
        }
      );

      gsap.fromTo(
        btnRef.current,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: btnRef.current,
            start: 'top 90%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden pt-[56px] pb-[92px]"
    >
      <div className="mb-[108px] text-center">
        <span className="mb-[-12px] inline-flex items-center gap-[6px] text-[10px] font-black uppercase leading-none tracking-[-0.05em] text-[#14352d]">
          <span className="h-[8px] w-[8px] rounded-full border border-[#14352d]/40 bg-[#14352d]" />
          Our Portfolio
        </span>

        <h2
          ref={headingRef}
          className="font-display text-[clamp(112px,14.35vw,255px)] font-medium leading-[0.78] tracking-[-0.105em] text-[#14352d]"
        >
          Projects
        </h2>
      </div>

      <div className="relative w-full bg-[#fbf9f0]/88 py-[22px]">
        <div ref={cardRef} className="mx-auto w-full max-w-[1168px] px-[20px]">
          <div className="rounded-[8px] bg-[#f0ecde] px-[18px] py-[19px]">
            <div className="grid grid-cols-1 items-center gap-0 md:grid-cols-[548px_1fr]">
              <div className="h-[407px] overflow-hidden rounded-[7px]">
                <img
                  src={img2}
                  alt="The Waterfront"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]"
                />
              </div>

              <div className="flex h-full flex-col justify-center px-[98px] py-[44px]">
                <h3 className="mb-[29px] font-display text-[32px] font-black leading-none tracking-[-0.055em] text-[#14352d]">
                  The Waterfront
                </h3>

                <p className="max-w-[420px] text-[15.5px] font-bold leading-[1.45] tracking-[-0.045em] text-[#14352d]/70">
                  Welcome to The Waterfront by Kalamangala – Erode&apos;s first
                  premium community living, where nature and modern comforts
                  come together. Choose your plot, build your dream home and be
                  part of a secure, eco-friendly and like-minded neighborhood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={btnRef} className="mt-[100px] flex justify-center">
        <Link
          to="/the-waterfront"
          className="group inline-flex items-center gap-[7px] rounded-[9px] bg-[#14352d] py-[6px] pl-[26px] pr-[6px] text-[18px] font-semibold leading-none text-[#f7f1e4] transition-all hover:bg-[#14352d]/90"
        >
          All Projects

          <span className="grid h-[47px] w-[48px] place-items-center rounded-[9px] bg-[#f0a77e] transition-transform group-hover:translate-x-[2px]">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </section>
  );
};