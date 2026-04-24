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
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(textRef2.current,
      { y: 50, opacity: 0, rotate: -2 },
      { y: 0, opacity: 1, rotate: 0, duration: 1, ease: 'back.out(1.7)' },
      '-=0.5'
    )
    .fromTo(videoRef.current,
      { scale: 0.9, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'power3.inOut' },
      '-=0.8'
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-16 px-6 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start lg:items-start z-10 mb-12 lg:ml-12">
        <h2 
          ref={textRef1}
          className="text-2xl md:text-3xl font-sans tracking-widest text-foreground/80 mb-2"
        >
          Redefining
        </h2>
        <h1 
          ref={textRef2}
          className="text-6xl md:text-8xl lg:text-[10rem] font-script text-foreground leading-none -ml-2"
        >
          Luxury Living
        </h1>
      </div>

      <div 
        ref={videoRef}
        className="w-full max-w-[95%] lg:max-w-[90%] mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative"
      >
        <video 
          src={herovideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for better blending if needed */}
        <div className="absolute inset-0 bg-foreground/5 mix-blend-overlay pointer-events-none"></div>
      </div>
    </section>
  );
};
