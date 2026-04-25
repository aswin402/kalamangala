// src/components/Home/ProjectsSection.tsx
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img2 from '../../assets/homepage/img2.webp';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
      
      // Card animation
      gsap.fromTo(cardRef.current,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 70%',
          }
        }
      );
      
      // Button animation
      gsap.fromTo(btnRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative flex flex-col items-center overflow-hidden pt-[56px] pb-[96px] md:pb-[106px]"
    >
      {/* Heading */}
      <div className="mb-[42px] w-full text-center">
        <span className="section-label mb-1">● Our Portfolio</span>

        <h2
          ref={headingRef}
          className="display-heading text-[90px] md:text-[130px] lg:text-[160px] xl:text-[190px]"
        >
          Projects
        </h2>
      </div>

      {/* Project Card */}
      <div ref={cardRef} className="page-x w-full">
        <div className="mx-auto max-w-[960px] rounded-[8px] bg-[#eeeadc] p-[16px]">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-[380px_1fr] lg:grid-cols-[420px_1fr]">
            <div className="h-[280px] overflow-hidden rounded-[6px] md:h-[315px]">
              <img
                src={img2}
                alt="The Waterfront"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-6 md:px-[48px] lg:px-[64px]">
              <h3 className="mb-3 font-heading text-[20px] font-extrabold leading-none tracking-[-0.03em] text-foreground">
                The Waterfront
              </h3>

              <p className="max-w-[340px] text-[11.5px] font-medium leading-[1.55] tracking-[-0.02em] text-foreground sm:text-[12px]">
                Welcome to The Waterfront by Kalamangala – Erode's first
                premium community living, where nature and modern comforts come
                together. Choose your plot, build your dream home and be part of
                a secure, eco-friendly and like-minded neighborhood.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div ref={btnRef} className="mt-[72px] md:mt-[82px]">
        <Link
          to="/the-waterfront"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground py-1.5 pl-5 pr-1.5 text-[10px] font-semibold text-white transition-all hover:bg-foreground/90"
        >
          <span>All Projects</span>

          <span className="flex h-[30px] w-[34px] items-center justify-center rounded-[8px] bg-primary transition-transform group-hover:translate-x-0.5">
            <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
              <path
                d="M2 11L11 2M11 2H4.5M11 2V8.5"
                stroke="#102d25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};