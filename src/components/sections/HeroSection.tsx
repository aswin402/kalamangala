import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import herovideo from '../../assets/homepage/herovideo.mp4';

export const HeroSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
      );

      gsap.fromTo(
        videoRef.current,
        { y: 42, opacity: 0, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.15,
          delay: 0.15,
          ease: 'power3.out',
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative pt-[128px]">
      <div className="mx-auto w-full px-[38px]">
        <div
          ref={titleRef}
          className="mb-[255px] ml-[105px] max-w-[520px]"
        >
          <p className="font-pathway text-[41px] font-normal leading-[0.92] tracking-[-0.03em] text-[#14352d]">
            Redefining
          </p>

          <h1 className="font-script text-[82px] font-normal leading-[0.9] tracking-[-0.04em] text-[#14352d]">
            Luxury Living
          </h1>
        </div>

        <div
          ref={videoRef}
          className="h-[596px] w-full overflow-hidden rounded-[7px] bg-black"
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