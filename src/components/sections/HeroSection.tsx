import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import herovideo from '../../assets/homepage/herovideo.mp4';

export const HeroSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    );

    gsap.fromTo(
      videoRef.current,
      { y: 35, opacity: 0, scale: 0.985 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.25,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section className="pt-[118px]">
      <div className="site-shell site-px">
        <div ref={titleRef} className="ml-[76px] h-[390px] md:ml-[88px]">
          <p className="mb-[-2px] text-[31px] font-normal leading-none tracking-[-0.06em] text-foreground">
            Redefining
          </p>

          <h1 className="font-script text-[82px] font-normal leading-[0.9] tracking-[-0.05em] text-foreground md:text-[96px]">
            Luxury Living
          </h1>
        </div>

        <div
          ref={videoRef}
          className="h-[590px] w-full overflow-hidden rounded-[7px]"
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