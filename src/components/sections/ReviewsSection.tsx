import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
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
  {
    name: 'Ashok K.',
    role: 'Business Owner',
    text: "Living here feels like a daily retreat. The greenery, fresh air, and quiet surroundings make such a difference—I never knew how much I needed this until now.",
  },
  {
    name: 'Meena V.',
    role: 'Homeowner',
    text: "The community here is warm and the infrastructure is excellent. Kalamangala truly understands what a family needs—safety, space, and a sense of belonging.",
  },
  {
    name: 'Suresh B.',
    role: 'Investor',
    text: "Every detail has been thoughtfully planned. The quality of construction, the greenery, the roads—it all reflects the promise of a premium living experience.",
  },
];

export const ReviewsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(headingRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 78%' },
      }
    );

    if (cardsRef.current?.children) {
      gsap.fromTo(
        Array.from(cardsRef.current.children),
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%' },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8 md:px-14 relative overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto">

        <span className="text-[9px] font-semibold tracking-[0.25em] text-foreground/45 uppercase mb-4 block">
          ● Guest Words
        </span>

        <h2
          ref={headingRef}
          className="text-[13vw] md:text-[11vw] leading-none font-heading font-bold text-foreground mb-14 tracking-[-0.04em]"
        >
          Reviews
        </h2>

        {/* Horizontal scroll */}
        <div
          ref={cardsRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[340px] snap-start flex flex-col gap-5 shrink-0"
            >
              <div>
                <h4 className="font-heading font-semibold text-[15px] text-foreground">{review.name}</h4>
                <span className="text-[9.5px] text-foreground/40 uppercase tracking-[0.18em] mt-0.5 block">
                  {review.role}
                </span>
              </div>
              <p className="text-foreground/65 font-sans text-[13.5px] leading-[1.85]">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
