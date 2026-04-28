import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
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
    text: 'Living here feels like a daily retreat. The greenery, fresh air, and quiet surroundings make such a difference—I never knew how much I needed this until now!',
  },
  {
    name: 'Vignesh R.',
    role: 'Doctor',
    text: "Buying property here wasn’t just an investment, it was a step toward the life I always wanted. Safe, well-planned, and full of potential—I couldn’t have asked for a better place.",
  },
];

export const ReviewsSection = () => {
  const reviewsSectionRef = useRef<HTMLElement>(null);
  const reviewsHeadingRef = useRef<HTMLHeadingElement>(null);
  const reviewsMarqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        reviewsHeadingRef.current,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: reviewsSectionRef.current,
            start: 'top 78%',
          },
        }
      );

      gsap.fromTo(
        '.review-card',
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: reviewsMarqueeRef.current,
            start: 'top 84%',
          },
        }
      );

      gsap.set(reviewsMarqueeRef.current, { xPercent: -50 });

      const marquee = gsap.to(reviewsMarqueeRef.current, {
        xPercent: 0,
        duration: 58,
        ease: 'none',
        repeat: -1,
      });

      return () => marquee.kill();
    }, reviewsSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={reviewsSectionRef}
      id="reviews"
      className="relative overflow-hidden pt-[54px] pb-[82px]"
    >
      {/* Heading area */}
      <div
        className="
          relative
          mb-[76px]
          ml-[168px]
          w-fit
          max-[1024px]:ml-[80px]
          max-[768px]:ml-[24px]
        "
      >
        {/* Small label */}
        <div
          className="
            absolute
            left-[120px]
            top-[13px]
            z-20
            flex items-center gap-[5px]
            max-[768px]:left-[82px] max-[768px]:top-[5px]
          "
        >
          <span className=" ml-6 grid h-[11px] w-[11px] place-items-center rounded-full border border-[#082f2f]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#082f2f]" />
          </span>

          <span
            className="
              text-[10px]
              font-black
              uppercase
              leading-none
              tracking-[-0.06em]
              text-[#082f2f]
            "
          >
            Clients&apos; Words
          </span>
        </div>

        <h2
          ref={reviewsHeadingRef}
          className="
            font-display
            text-[clamp(112px,12.3vw,236px)]
            font-medium
            leading-[0.76]
            tracking-[-0.108em]
            text-[#082f2f]
            max-[1024px]:text-[126px]
            max-[768px]:text-[82px]
          "
        >
          Reviews
        </h2>
      </div>

      {/* Reviews marquee */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={reviewsMarqueeRef}
          className="flex w-max gap-[10px] will-change-transform"
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="
                review-card
                h-[456px]
                w-[305px]
                shrink-0
                bg-[#f5f2e7]
                px-[30px]
                pt-[22px]
              "
            >
              <div className="mb-[78px]">
                <h4 className="font-display text-[18px] font-black leading-none tracking-[-0.04em] text-[#14352d]">
                  {review.name}
                </h4>

                <span className="mt-[9px] block text-[10px] font-black uppercase leading-none tracking-[0.08em] text-[#14352d]/80">
                  {review.role}
                </span>
              </div>

              <p className="max-w-[252px] text-[18px] font-semibold leading-[1.32] tracking-[-0.055em] text-[#14352d]">
                &quot;{review.text}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};