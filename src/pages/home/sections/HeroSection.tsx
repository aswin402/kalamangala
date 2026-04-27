import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import herovideo from '@/assets/homepage/herovideo.mp4';

export const HeroSection = () => {
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTitleRef.current,
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        heroVideoRef.current,
        { y: 44, opacity: 0, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.15,
          delay: 0.18,
          ease: 'power3.out',
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[691px] w-full">
        <div
          ref={heroTitleRef}
          className="
            absolute left-[150px] top-[188px] max-w-[760px]
            max-[1280px]:left-[120px]
            max-[1024px]:left-[80px] max-[1024px]:top-[170px]
            max-[768px]:left-[28px] max-[768px]:top-[130px]
          "
        >
          <p
            className="
              font-pathway text-[55px] font-normal leading-[0.9]
              tracking-[-0.055em] text-[#082f2f]
              max-[1024px]:text-[48px] max-[768px]:text-[36px]
            "
          >
            Redefining
          </p>

          <h1
            className="
              font-script mt-[28px] text-[118px] font-normal leading-[0.72]
              tracking-[-0.045em] text-[#082f2f]
              max-[1024px]:text-[96px]
              max-[768px]:mt-[18px] max-[768px]:text-[64px]
            "
          >
            Luxury Living
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full px-[38px] max-[768px]:px-[18px]">
        <div
          ref={heroVideoRef}
          className="h-[800px] w-full overflow-hidden rounded-[7px] bg-black max-[1024px]:h-[480px] max-[768px]:h-[300px]"
        >
          <video
            src={herovideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
