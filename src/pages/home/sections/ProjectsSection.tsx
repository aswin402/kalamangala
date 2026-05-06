import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { SectionLabel } from '@/components/ui/SectionLabel';

import img2 from '@/assets/homepage/img2.webp';
import { ArrowIcon14 } from '../components/icons';

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
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        projectsCardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          delay: 0.05,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: projectsCardRef.current,
            start: 'top 84%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        projectsBtnRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: projectsBtnRef.current,
            start: 'top 92%',
            once: true,
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
        pt-[40px] pb-[48px]
        md:pt-[40px] md:pb-[60px]
        lg:pt-[54px]
      "
    >
      {/* Heading */}
      <div
        className="
          relative mx-auto mb-[30px] w-full max-w-[705px] text-center
          md:mb-[70px]
          lg:mb-[70px] lg:max-w-[705px]
        "
      >
        <div
          className="
            absolute z-30 flex items-center gap-[5px]
            left-1/2 top-[-13px]
            -translate-x-1/2
            md:left-[160px] md:top-[12px] md:translate-x-0
            lg:left-[160px] lg:top-[6px] 
          "
        >
          <SectionLabel className="font-semibold">Our Portfolio</SectionLabel>
        </div>

        <h2
          ref={projectsHeadingRef}
          className="
            relative z-10
            font-display font-medium text-[var(--home-projectssection-text-7)]
            text-[82px] leading-[0.76] tracking-[-0.08em]

            sm:text-[120px]

            md:text-[clamp(142px,13.7vw,174px)]
            md:leading-[0.72]
            md:tracking-[-0.08em]

            lg:text-[clamp(154px,13.7vw,188px)]

            xl:text-[220px]
            xl:leading-[0.72]
            xl:tracking-[-0.08em]

            2xl:text-[220px]
            3xl:text-[260px]
          "
        >
          Projects
        </h2>
      </div>

      {/* Project card area */}
      <div className="relative w-full bg-white py-[12px] md:py-[22px]">
        <div
          ref={projectsCardRef}
          className="
            mx-auto w-full max-w-[1240px]
            px-[22px]
            sm:px-[30px]
            md:px-[18px]
            xl:max-w-[1320px]
            3xl:max-w-[1500px]
          "
        >
          <div
            className="
              overflow-hidden rounded-[8px] bg-[#f7f6e9]
              min-h-[454px]
              px-[10px] pt-[10px] pb-[42px]
              sm:min-h-[500px] sm:px-[14px] sm:pt-[14px]
              md:min-h-0 md:px-[18px] md:py-[19px]
            "
          >
            <div className="grid grid-cols-1 items-stretch [&>*]:min-w-0 md:grid-cols-[minmax(300px,548px)_1fr] lg:grid-cols-[minmax(350px,548px)_1fr]">
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
                  md:h-[340px] md:w-full
                  lg:h-[380px]
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
                  <span className="text-[14px] font-medium tracking-[-0.04em] text-[var(--home-projectssection-text-8)]/70">
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
                  md:justify-center md:pl-[140px] md:pr-[55px] md:pt-[44px] md:pb-[44px]
                  max-[1024px]:md:pl-[58px] max-[1024px]:md:pr-[32px]
                "
              >
                <h3
                  className="
                    mb-[24px]
                    font-sans text-[26px] font-bold leading-none
                    tracking-[-0.02em] text-foreground
                    md:mb-[24px] md:text-[26px]
                  "
                >
                  The Waterfront
                </h3>

                <p
                  className="
                    max-w-[340px]
                    text-[14px] font-medium font-sans leading-[1.6]
                    tracking-[-0.01em] text-foreground/80
                    md:text-[14px]
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
        className="mt-[30px] flex justify-center md:mt-[60px]"
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