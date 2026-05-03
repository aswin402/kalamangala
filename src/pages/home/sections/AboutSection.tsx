import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { SectionLabel } from '@/components/ui/SectionLabel';

import img1 from '@/assets/homepage/img1.webp';
import { ArrowIcon12 } from '../components/icons';

export const AboutSection = () => {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const aboutImgRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        aboutImgRef.current,
        { x: -34, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        aboutTextRef.current,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          delay: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      );
    }, aboutSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutSectionRef}
      id="about"
      className="
        relative overflow-hidden mt-15 mb-30
        pb-[52px] pt-[59px]
        max-[1024px]:pb-[74px] max-[1024px]:pt-[50px]
        max-[768px]:pb-[70px] max-[768px]:pt-[50px]
      "
    >
      <div
        className="
          mx-auto grid w-full items-center max-w-[1800px]
          grid-cols-[minmax(0,45vw)_minmax(0,1fr)]
          gap-[46px]
          px-[40px]

          max-[1024px]:grid-cols-1
          max-[1024px]:gap-0
          max-[1024px]:px-[15px]
        "
      >
        <div ref={aboutImgRef} className="relative w-full">
          <div className="mb-[20px]">
            <SectionLabel className="font-semibold">ABOUT US</SectionLabel>
          </div>

          <div
            className="
              h-[565px] w-full overflow-hidden rounded-[7px]

              max-[1024px]:h-[420px]
              max-[768px]:h-[306px]
            "
          >
            <img
              src={img1}
              alt="Kalamangala entrance"
              className="
                h-full w-full object-cover
                max-[768px]:object-center
              "
            />
          </div>
        </div>

        <div
          ref={aboutTextRef}
          className="
            w-full
            translate-y-[4px]

            max-[1024px]:mt-[62px]
            max-[1024px]:translate-y-0
            max-[768px]:mt-[62px]
          "
        >
          <p
            className="
              text-[16px] font-medium font-sans
              leading-[1.42]
              tracking-[-0.035em]
              text-foreground

              max-[768px]:text-[16px]
              max-[768px]:leading-[1.49]
              max-[768px]:tracking-[-0.055em]
            "
          >
            At <strong className="font-bold">Kalamangala</strong>, quality
            isn&apos;t just a standard—it&apos;s a{' '}
           PROMISE. With 33+ years of
            expertise, we create lasting communities built on quality,
            innovation, and sustainability. Every project is designed with
            premium materials, advanced infrastructure, and thoughtful
            amenities to ensure durability and comfort. We blend nature with
            modern living, integrating green spaces into urban landscapes. At
            Kalamangala, we don&apos;t just build homes—we shape lifestyles for
            generations.
          </p>

          <Link
            to="/about"
            className="
              group relative
              mt-[28px] inline-flex items-center gap-[9px] pb-[6px]
              text-[15px] font-bold font-sans uppercase leading-none
              tracking-[-0.055em] text-foreground

              max-[768px]:mt-[31px]
              max-[768px]:text-[15px]
            "
          >
            <span>Know More</span>

            <span
              className="
                grid h-[16px] w-[16px] place-items-center rounded-full
                border border-foreground/45
                transition-colors duration-300
                group-hover:bg-primary group-hover:border-primary
              "
            >
              <ArrowIcon12 className="transition-colors duration-300 text-[#14352d] group-hover:text-white" />
            </span>

            <span 
              className="
                absolute bottom-0 left-0 h-[2px] bg-foreground 
                w-[35px] transition-all duration-300 ease-out
                group-hover:w-full
              " 
            />
          </Link>
        </div>
      </div>
    </section>
  );
};