import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../assets/homepage/img1.webp';

gsap.registerPlugin(ScrollTrigger);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
    <path
      d="M2 11L11 2M11 2H4.5M11 2V8.5"
      stroke="#14352d"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { x: -36, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          delay: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden pt-[122px] pb-[182px]"
    >
      <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 items-center px-[110px] lg:grid-cols-[805px_1fr] lg:gap-[38px] xl:px-[110px]">
        <div ref={imgRef} className="relative">
          <span className="absolute -top-[29px] left-0 inline-flex items-center gap-[6px] text-[10px] font-black uppercase leading-none tracking-[-0.035em] text-[#14352d]">
            <span className="h-[8px] w-[8px] rounded-full border border-[#14352d]/40 bg-[#14352d]" />
            ABOUT US
          </span>

          <div className="h-[525px] w-full overflow-hidden rounded-[7px]">
            <img
              src={img1}
              alt="Kalamangala entrance"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          ref={textRef}
          className="mt-[40px] lg:mt-0 lg:translate-y-[14px] lg:pl-[2px]"
        >
          <p className="max-w-[720px] text-[15.5px] font-extrabold leading-[1.48] tracking-[-0.055em] text-[#14352d]">
            At <strong className="font-black">Kalamangala</strong>, quality
            isn&apos;t just a standard—it&apos;s a{' '}
            <strong className="font-black">PROMISE</strong>. With 33+ years of
            expertise, we create lasting communities built on quality,
            innovation, and sustainability. Every project is designed with
            premium materials, advanced infrastructure, and thoughtful amenities
            to ensure durability and comfort. We blend nature with modern
            living, integrating green spaces into urban landscapes. At
            Kalamangala, we don&apos;t just build homes—we shape lifestyles for
            generations.
          </p>

          <Link
            to="/about"
            className="mt-[31px] inline-flex items-center gap-[9px] text-[12px] font-black uppercase leading-none tracking-[0.08em] text-[#14352d]"
          >
            <span className="border-b border-[#14352d] pb-[5px]">
              Know More
            </span>

            <span className="grid h-[18px] w-[18px] place-items-center rounded-full border border-[#14352d]/45">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};