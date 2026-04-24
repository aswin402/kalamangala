import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Ashok R.',
    role: 'Homeowner',
    text: 'Living here has been truly amazing. The attention to detail and quality is evident in every corner. It feels like a 5-star resort that we call home.',
  },
  {
    name: 'Priya K.',
    role: 'Resident',
    text: 'Moving to a Kalamangala property was the best decision. The vibrant community and sustainable design perfectly align with our lifestyle values.',
  },
  {
    name: 'Ravi S.',
    role: 'Investor',
    text: 'From the moment I invested, the ROI has been phenomenal. More importantly, the management team is exceptional. Truly a premium real estate experience.',
  },
  {
    name: 'Arjun P.',
    role: 'Resident',
    text: 'The breathtaking views and serene environment provide a perfect escape from city life, yet we are highly connected to everything we need.',
  },
  {
    name: 'Kavita M.',
    role: 'Homeowner',
    text: 'The level of craftsmanship and structural integrity gives us immense peace of mind. Highly recommended for families seeking luxury.',
  }
];

export const ReviewsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(cardsRef.current?.children || [],
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        {/* Massive Heading */}
        <h2 
          ref={headingRef}
          className="text-[12vw] leading-none font-heading font-bold text-foreground mb-16 tracking-tighter"
        >
          Reviews
        </h2>

        {/* Reviews Horizontal Scroll Container */}
        <div 
          ref={cardsRef}
          className="w-full flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="min-w-[300px] md:min-w-[400px] bg-black/5 p-8 rounded-[2rem] snap-start flex flex-col justify-between"
            >
              <div>
                <h4 className="font-heading font-bold text-xl text-foreground">{review.name}</h4>
                <span className="text-xs text-foreground/50 uppercase tracking-widest">{review.role}</span>
              </div>
              <p className="mt-6 text-foreground/80 font-sans leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
