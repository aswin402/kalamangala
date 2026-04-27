import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img2 from '@/assets/homepage/img2.webp';
import { SectionLabel } from '../components/SectionLabel';
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
        { y: 90, opacity: 0 },
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
      className="relative overflow-hidden pt-[20px] pb-[72px]"
    >
      <div className="mb-[112px] text-center">
        <div className="mb-[-7px]">
          <SectionLabel>Our Portfolio</SectionLabel>
        </div>

        <h2
          ref={projectsHeadingRef}
          className="
            font-display
            text-[clamp(112px,13.9vw,244px)]
            font-medium
            leading-[0.78]
            tracking-[-0.106em]
            text-[#082f2f]
            max-[1024px]:text-[120px]
            max-[768px]:text-[76px]
          "
        >
          Projects
        </h2>
      </div>

      <div className="relative w-full bg-[#fbfaf3]/95 py-[22px]">
        <div
          ref={projectsCardRef}
          className="
            mx-auto w-full max-w-[1164px]
            px-[18px]
            max-[1024px]:max-w-[92%]
            max-[768px]:max-w-none max-[768px]:px-[22px]
          "
        >
          <div className="overflow-hidden rounded-[8px] bg-[#f0ecde] px-[18px] py-[19px]">
            <div
              className="
                grid grid-cols-1 items-stretch
                md:grid-cols-[548px_1fr]
                max-[1024px]:md:grid-cols-[50%_1fr]
              "
            >
              <div
                className="
                  h-[407px] overflow-hidden rounded-[7px]
                  max-[1024px]:h-[360px]
                  max-[768px]:h-[300px]
                "
              >
                <img
                  src={img2}
                  alt="The Waterfront"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.035]"
                />
              </div>

              <div
                className="
                  flex h-full flex-col justify-center
                  pl-[120px] pr-[55px]
                  pt-[44px] pb-[44px]
                  max-[1024px]:pl-[58px] max-[1024px]:pr-[32px]
                  max-[768px]:px-[22px] max-[768px]:pt-[34px] max-[768px]:pb-[30px]
                "
              >
                <h3
                  className="
                    mb-[29px]
                    font-display
                    text-[32px]
                    font-black
                    leading-none
                    tracking-[-0.062em]
                    text-[#14352d]
                    max-[768px]:text-[28px]
                  "
                >
                  The Waterfront
                </h3>

                <p
                  className="
                    max-w-[395px]
                    text-[15.5px]
                    font-bold
                    leading-[1.44]
                    tracking-[-0.047em]
                    text-[#14352d]/70
                    max-[768px]:text-[15px]
                  "
                >
                  Welcome to The Waterfront by Kalamangala – Erode&apos;s
                  first premium community living, where nature and modern
                  comforts come together. Choose your plot, build your dream
                  home and be part of a secure, eco-friendly and like-minded
                  neighborhood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={projectsBtnRef} className="mt-[98px] flex justify-center">
        <Link
          to="/the-waterfront"
          className="
            group inline-flex items-center gap-[7px]
            rounded-[9px]
            bg-[#14352d]
            py-[6px]
            pl-[26px]
            pr-[6px]
            text-[18px]
            font-semibold
            leading-none
            text-[#f7f1e4]
            transition-all
            hover:bg-[#14352d]/90
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
