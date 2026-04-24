import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../assets/homepage/img1.webp';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(imgRef.current,
      { opacity: 0, x: -50, scale: 0.95 },
      {
        opacity: 1, x: 0, scale: 1, duration: 1.5, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 60%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative">
          <h3 className="absolute -top-10 left-0 text-xs font-semibold tracking-widest text-foreground/50 uppercase">
            About Us
          </h3>
          <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3]">
            <img 
              ref={imgRef}
              src={img1} 
              alt="Kalamangala Entrance" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Side */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium font-sans">
            "A Kalamangala creation isn't just about beautiful spaces; it's about elevating your lifestyle. 
            From sustainable practices to world-class amenities, every detail is designed with you in mind. 
            We build more than homes; we build vibrant communities where you belong."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-foreground/30"></span>
            <span className="font-heading font-semibold text-sm tracking-wider uppercase">Know More</span>
          </div>
        </div>
      </div>
    </section>
  );
};
