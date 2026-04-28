import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img2 from '@/assets/homepage/img2.webp';
import { ArrowIcon14 } from '../components/icons';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const projectsSectionRef = useRef<HTMLElement>(null);
  const projectsHeadingRef = useRef<HTMLHeadingElement>(null);
  const projectsCardRef = useRef<HTMLDivElement>(null);
  const projectsBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        projectsHeadingRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            start: 'top 78%',
          },
        }
      );

      gsap.fromTo(
        projectsCardRef.current,
        { y: 54, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          delay: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsCardRef.current,
            start: 'top 84%',
          },
        }
      );

      gsap.fromTo(
        projectsBtnRef.current,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsBtnRef.current,
            start: 'top 92%',
          },
        }
      );
    }, projectsSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={projectsSectionRef}
      id="projects"
      className="
        relative overflow-hidden
        pt-[54px] pb-[64px]
        md:pt-[54px] md:pb-[82px]
        lg:pt-[74px]
      "
    >
      {/* Heading */}
      <div
        className="
          relative mx-auto mb-[47px] w-full max-w-[705px] text-center
          md:mb-[112px]
          lg:mb-[112px] lg:max-w-[705px]
        "
      >
        <div
          className="
            absolute z-30 flex items-center gap-[5px]

            left-1/2 top-[-13px]
            -translate-x-[72px]

            md:left-[160px] md:top-[12px] md:translate-x-0

            lg:left-[180px] lg:top-[12px]
          "
        >
          <span className="grid h-[11px] w-[11px] place-items-center rounded-full border border-[#082f2f]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#082f2f]" />
          </span>

          <span className="text-[10px] font-black uppercase leading-none tracking-[-0.06em] text-[#082f2f]">
            Our Portfolio
          </span>
        </div>

        <h2
          ref={projectsHeadingRef}
          className="
            relative z-10
            font-display font-medium text-[#082f2f]

            text-[76px] leading-[0.76] tracking-[-0.118em]
            sm:text-[92px]

            md:text-[clamp(108px,12.1vw,170px)]
            md:tracking-[-0.108em]

            lg:text-[218px]
            lg:leading-[0.72]
            lg:tracking-[-0.118em]
          "
        >
          Projects
        </h2>
      </div>

      {/* Project card area */}
      <div className="relative w-full bg-[#fbfaf3]/95 py-[12px] md:py-[22px]">
        <div
          ref={projectsCardRef}
          className="
            mx-auto w-full max-w-[1164px]
            px-[22px]
            sm:px-[30px]
            md:px-[18px]
          "
        >
          <div
            className="
              overflow-hidden rounded-[8px] bg-[#f0ecde]
              min-h-[454px]
              px-[10px] pt-[10px] pb-[42px]
              sm:min-h-[500px] sm:px-[14px] sm:pt-[14px]
              md:min-h-0 md:px-[18px] md:py-[19px]
            "
          >
            <div className="grid grid-cols-1 items-stretch md:grid-cols-[548px_1fr] max-[1024px]:md:grid-cols-[50%_1fr]">
              <div
                className="
                  overflow-hidden rounded-[7px]
                  h-[206px] w-[329px] max-w-full
                  sm:h-[245px] sm:w-[430px]
                  md:h-[360px] md:w-full
                  lg:h-[407px]
                "
              >
                <img
                  src={img2}
                  alt="The Waterfront"
                  className="
                    h-full w-full object-cover object-center
                    transition-transform duration-700 hover:scale-[1.035]
                  "
                />
              </div>

              <div
                className="
                  flex h-full flex-col
                  px-[56px] pt-[58px]
                  sm:px-[64px] sm:pt-[68px]
                  md:justify-center md:pl-[120px] md:pr-[55px] md:pt-[44px] md:pb-[44px]
                  max-[1024px]:md:pl-[58px] max-[1024px]:md:pr-[32px]
                "
              >
                <h3
                  className="
                    mb-[4px]
                    font-display text-[24px] font-black leading-none
                    tracking-[-0.062em] text-[#14352d]
                    md:mb-[29px] md:text-[32px]
                  "
                >
                  The Waterfront
                </h3>

                <p
                  className="
                    max-w-[395px]
                    text-[15.5px] font-bold leading-[1.43]
                    tracking-[-0.047em] text-[#14352d]/70
                    md:text-[15.5px]
                  "
                >
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

      <div
        ref={projectsBtnRef}
        className="mt-[40px] flex justify-center md:mt-[98px]"
      >
        <Link
          to="/the-waterfront"
          className="
            group inline-flex items-center gap-[6px]
            rounded-[9px] bg-[#14352d]
            py-[6px] pl-[24px] pr-[6px]
            text-[18px] font-semibold leading-none text-[#f7f1e4]
            transition-all hover:bg-[#14352d]/90
          "
        >
          All Projects

          <span className="grid h-[47px] w-[48px] place-items-center rounded-[9px] bg-[#f0a77e] transition-transform group-hover:translate-x-[2px]">
            <ArrowIcon14 />
          </span>
        </Link>
      </div>
    </section>
  );
};