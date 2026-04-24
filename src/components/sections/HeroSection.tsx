import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import herovideo from '../../assets/homepage/herovideo.mp4';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(textRef1.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    )
    .fromTo(textRef2.current,
      { y: 50, opacity: 0, rotate: -2 },
      { y: 0, opacity: 1, rotate: 0, duration: 1, ease: 'back.out(1.7)' },
      '-=0.5'
    )
    .fromTo(videoRef.current,
      { scale: 0.95, opacity: 0, y: 40 },
      { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: 'power3.inOut' },
      '-=0.7'
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-10 flex flex-col overflow-hidden"
    >
      {/* Hero text — left-aligned with page padding */}
      <div className="w-full px-8 md:px-14 z-10 mb-8">
        <h2
          ref={textRef1}
          className="text-lg md:text-xl font-sans tracking-[0.18em] text-foreground/65 mb-1"
        >
          Redefining
        </h2>
        <h1
          ref={textRef2}
          className="text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] font-script text-foreground leading-none"
        >
          Luxury Living
        </h1>
      </div>

      {/* Video — full bleed with small side padding */}
      <div
        ref={videoRef}
        className="w-full px-4 md:px-6"
      >
        <div className="w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl relative" style={{ aspectRatio: '16/7' }}>
          <video
            src={herovideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
