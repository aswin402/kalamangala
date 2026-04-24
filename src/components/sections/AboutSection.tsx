import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../assets/homepage/img1.webp';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(imgRef.current,
      { opacity: 0, x: -40, scale: 0.97 },
      {
        opacity: 1, x: 0, scale: 1, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 72%' },
      }
    );

    gsap.fromTo(textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 62%' },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-8 md:px-14 relative" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Image */}
        <div className="w-full lg:w-[44%] relative shrink-0">
          <span className="absolute -top-7 left-0 text-[9px] font-semibold tracking-[0.25em] text-foreground/45 uppercase flex items-center gap-1">
            ● About Us
          </span>
          <div ref={imgRef} className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src={img1}
              alt="Kalamangala Entrance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className="w-full lg:w-[56%] flex flex-col justify-center">
          <p className="text-[15px] md:text-[15.5px] leading-[1.9] text-foreground/80 font-sans">
            At <strong className="font-semibold text-foreground">Kalamangala</strong>, quality isn't just a standard—it's a{' '}
            <strong className="font-semibold text-foreground">PROMISE</strong>. With 33+ years of expertise, we create
            lasting communities built on quality, innovation, and sustainability. Every project is designed with premium
            materials, advanced infrastructure, and thoughtful amenities to ensure durability and comfort. We blend
            nature with modern living, integrating green spaces into urban landscapes. At Kalamangala, we don't just
            build homes—we shape lifestyles for generations.
          </p>

          <a
            href="#about"
            className="mt-8 flex items-center gap-2 w-fit group"
          >
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-foreground/70 group-hover:text-foreground transition-colors">
              Know More
            </span>
            <span className="w-5 h-5 rounded-full border border-foreground/40 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground group-hover:text-background transition-colors duration-300"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
