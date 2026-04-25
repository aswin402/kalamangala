// src/components/Home/ReviewsSection.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Ashok K.',
    role: 'Business Owner',
    text: 'Living here feels like a daily retreat. The greenery, fresh air, and quiet surroundings make such a difference—I never knew how much I needed this until now.',
  },
  {
    name: 'Vignesh R.',
    role: 'Doctor',
    text: "Buying property here wasn't just an investment, it was a step toward the life I always wanted. Safe, well-planned, and full of potential—I couldn't have asked for a better place.",
  },
  {
    name: 'Ravi S.',
    role: 'Home Owner',
    text: "From the moment I stepped into Kalamangala's The Waterfront, I knew this was where I wanted to build my home. The peaceful vibe, the open spaces, and the thoughtful planning make it feel just right.",
  },
  {
    name: 'Arun P.',
    role: 'CEO',
    text: "Kalamangala gives me the best of both worlds—close enough to the city for convenience, yet far enough to enjoy some peace and quiet. It's the kind of place that just makes life easier.",
  },
];

export const ReviewsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
      
      // Staggered card animation
      if (cardsContainerRef.current?.children) {
        gsap.fromTo(Array.from(cardsContainerRef.current.children),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 85%',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative overflow-hidden pb-[80px] md:pb-[105px]"
    >
      <div className="page-x">
        <div className="mb-[32px] ml-[30px] md:ml-[80px] lg:ml-[92px] xl:ml-[105px]">
          <span className="section-label mb-0">● Guest Words</span>

          <h2
            ref={headingRef}
            className="display-heading text-[90px] md:text-[130px] lg:text-[160px] xl:text-[180px]"
          >
            Reviews
          </h2>
        </div>

        <div
          ref={cardsContainerRef}
          className="scrollbar-hide flex w-full gap-0 overflow-x-auto pb-4"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-h-[320px] min-w-[260px] border-r border-foreground/10 bg-[#f5f2e7] px-[18px] py-[22px] md:min-w-[290px] lg:min-w-[305px]"
            >
              <div className="mb-[38px]">
                <h4 className="font-heading text-[12px] font-extrabold leading-none tracking-[-0.02em] text-foreground">
                  {review.name}
                </h4>
                <span className="mt-1.5 block text-[7px] font-bold uppercase tracking-[0.18em] text-foreground/70">
                  {review.role}
                </span>
              </div>

              <p className="text-[12px] font-medium leading-[1.55] tracking-[-0.025em] text-foreground">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};