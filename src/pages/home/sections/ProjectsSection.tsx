import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img2 from '@/assets/homepage/img2.webp';
import { ArrowIcon14 } from '../components/icons';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const [hovered, setHovered] = useState(false);

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
          <span className="grid h-[11px] w-[11px] place-items-center rounded-full border border-foreground">
            <span className="h-[6px] w-[6px] rounded-full bg-card-green" />
          </span>

          <span className="text-[12px] font-semibold font-sans uppercase leading-none tracking-[-0.06em] text-foreground">
            Our Portfolio
          </span>
        </div>

        <h2
          ref={projectsHeadingRef}
          className="
            relative z-10
            font-display font-medium text-[var(--home-projectssection-text-7)]
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
      <div className="relative w-full bg-white-text/95 py-[12px] md:py-[22px]">
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
              {/* Image */}
              <div
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="
                  relative z-20 overflow-hidden rounded-[7px]
                  h-[206px] w-[329px] max-w-full
                  sm:h-[245px] sm:w-[430px]
                  md:h-[360px] md:w-full
                  lg:h-[407px]
                "
              >
                <img
                  src={img2}
                  alt="The Waterfront"
                  className="h-full w-full object-cover object-center"
                  style={{
                    transform: hovered ? 'scale(1.045)' : 'scale(1)',
                    transition: 'transform 700ms ease-out',
                  }}
                />

                <Link
                  to="/the-waterfront"
                  className="
                    absolute z-[999]
                    flex items-center justify-between
                    rounded-[8px] bg-white-text
                    shadow-[0_10px_28px_rgba(0,0,0,0.14)]

                    left-1/2 bottom-[17px]
                    h-[48px] w-[calc(100%-52px)]
                    pl-[20px] pr-[6px]

                    sm:h-[50px] sm:w-[calc(100%-64px)] sm:pl-[22px]
                    md:bottom-[22px] md:h-[50px] md:w-[386px]
                    lg:bottom-[22px] lg:h-[51px] lg:w-[386px]
                  "
                  style={{
                    opacity: hovered ? 1 : 0,
                    transform: hovered
                      ? 'translateX(-50%) translateY(0px)'
                      : 'translateX(-50%) translateY(18px)',
                    transition:
                      'opacity 500ms ease-out, transform 500ms ease-out',
                    pointerEvents: hovered ? 'auto' : 'none',
                  }}
                >
                  <span className="text-[14px] font-bold tracking-[-0.04em] text-[var(--home-projectssection-text-8)]/70">
                    View Project
                  </span>

                  <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-card-green">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M4 9H13.2M13.2 9L9.2 5M13.2 9L9.2 13"
                        stroke="#fbfaf3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Text */}
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
                    font-sans text-[30px] font-bold leading-none
                    tracking-[-0.062em] text-foreground
                    md:mb-[29px] md:text-[30px]
                  "
                >
                  The Waterfront
                </h3>

                <p
                  className="
                    max-w-[395px]
                    text-[16px] font-medium font-sans leading-[1.43]
                    tracking-[-0.047em] text-foreground
                    md:text-[16px]
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

      {/* All Projects button */}
      <div
        ref={projectsBtnRef}
        className="mt-[40px] flex justify-center md:mt-[98px]"
      >
        <Link
          to="/projects"
          className="
            group inline-flex items-center gap-[6px]
            rounded-[9px] bg-card-green
            py-[6px] pl-[24px] pr-[6px]
            text-[18px] font-semibold leading-none text-white
            transition-all hover:bg-card-green/90
          "
        >
          All Projects

          <span className="grid h-[47px] w-[48px] place-items-center rounded-[9px] bg-primary transition-transform group-hover:translate-x-[2px]">
            <ArrowIcon14 />
          </span>
        </Link>
      </div>
    </section>
  );
};