import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '@/assets/homepage/img1.webp';
import { ArrowIcon12 } from '../components/icons';

gsap.registerPlugin(ScrollTrigger);

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
      className="relative overflow-hidden pt-[122px] pb-[182px]"
    >
      <div
        className="
          mx-auto grid w-full max-w-[1570px] grid-cols-1 items-center
          px-0
          lg:grid-cols-[807px_1fr]
          lg:gap-[38px]
          max-[1600px]:max-w-[1465px]
          max-[1440px]:max-w-[1240px]
          max-[1440px]:lg:grid-cols-[670px_1fr]
          max-[1024px]:max-w-none
          max-[1024px]:grid-cols-1
          max-[1024px]:px-[42px]
          max-[768px]:px-[22px]
        "
      >
        <div ref={aboutImgRef} className="relative">
          <span
            className="
              absolute -top-[31px] left-0 inline-flex items-center
              gap-[7px] text-[10px] font-black uppercase leading-none
              tracking-[-0.045em] text-[#14352d]
            "
          >
            <span className="h-[8px] w-[8px] rounded-full border border-[#14352d]/40 bg-[#14352d]" />
            ABOUT US
          </span>

          <div
            className="
              h-[525px] w-full overflow-hidden rounded-[7px]
              max-[1440px]:h-[490px]
              max-[1024px]:h-[460px]
              max-[768px]:h-[320px]
            "
          >
            <img
              src={img1}
              alt="Kalamangala entrance"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          ref={aboutTextRef}
          className="
            mt-[40px]
            lg:mt-0
            lg:translate-y-[19px]
            max-[1024px]:translate-y-0
          "
        >
          <p
            className="
              max-w-[733px]
              text-[16px]
              font-bold
              leading-[1.47]
              tracking-[-0.052em]
              text-[#14352d]
              max-[1440px]:max-w-[620px]
              max-[1440px]:text-[15px]
              max-[768px]:text-[15px]
            "
          >
            At <strong className="font-black">Kalamangala</strong>, quality
            isn&apos;t just a standard—it&apos;s a{' '}
            <strong className="font-black">PROMISE</strong>. With 33+ years of
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
              mt-[31px] inline-flex items-center gap-[9px]
              text-[12px] font-black uppercase leading-none
              tracking-[0.075em] text-[#14352d]
            "
          >
            <span className="border-b border-[#14352d] pb-[5px]">
              Know More
            </span>

            <span className="grid h-[18px] w-[18px] place-items-center rounded-full border border-[#14352d]/45">
              <ArrowIcon12 />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
