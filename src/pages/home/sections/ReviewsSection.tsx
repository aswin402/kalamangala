import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SectionLabel } from "@/components/ui/SectionLabel";

const reviews = [
  {
    name: "Ravi S.",
    role: "Home Owner",
    text: "From the moment I stepped into Kalamangala's The Waterfront, I knew this was where I wanted to build my home. The peaceful vibe, the open spaces, and the thoughtful planning make it feel just right.",
  },
  {
    name: "Arun P.",
    role: "CEO",
    text: "Kalamangala gives me the best of both worlds—close enough to the city for convenience, yet far enough to enjoy some peace and quiet. It's the kind of place that just makes life easier.",
  },
  {
    name: "Ashok K.",
    role: "Business Owner",
    text: "Living here feels like a daily retreat. The greenery, fresh air, and quiet surroundings make such a difference—I never knew how much I needed this until now!",
  },
  {
    name: "Vignesh R.",
    role: "Doctor",
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
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: reviewsSectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".review-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.08,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: reviewsMarqueeRef.current,
            start: "top 84%",
            once: true,
          },
        }
      );

      gsap.set(reviewsMarqueeRef.current, { xPercent: -50 });

      const marquee = gsap.to(reviewsMarqueeRef.current, {
        xPercent: 0,
        duration: 58,
        ease: "none",
        repeat: -1,
        force3D: true,
      });

      return () => marquee.kill();
    }, reviewsSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={reviewsSectionRef}
      id="reviews"
      className="
        relative
        overflow-hidden
        pt-[40px]
        pb-[60px]

        md:pt-[46px]
        lg:pt-[46px]
        xl:pt-[48px]
      "
    >
      {/* Heading area */}
      <div
        className="
          relative
          mx-auto
          mb-[36px]
          w-fit

          md:mx-0
          md:ml-[80px]
          md:mb-[44px]

          lg:ml-[120px]
          lg:mb-[44px]

          xl:ml-[160px]
          xl:mb-[46px]

          2xl:ml-[160px]
          3xl:ml-[200px]
        "
      >
        {/* Small label */}
        <div
          className="
            relative
            flex
            justify-center
            z-20
            whitespace-nowrap
            mb-[15px]

            md:absolute
            md:block
            md:left-[76px]
            md:top-[4px]
            md:mb-0

            lg:left-[97px]
            lg:top-[4px]
            lg:ml-[20px]

            xl:left-[117px]
            xl:top-[4px]

            2xl:left-[117px]
            2xl:top-[4px]
          "
        >
          <SectionLabel className="font-semibold">Clients&apos; Words</SectionLabel>
        </div>

        <h2
          ref={reviewsHeadingRef}
          className="
            font-display
            text-[82px]
            font-medium
            leading-[0.76]
            tracking-[-0.08em]
            text-foreground

            sm:text-[120px]

            md:text-[clamp(142px,13.7vw,174px)]
            md:leading-[0.72]
            md:tracking-[-0.08em]

            lg:text-[clamp(154px,13.7vw,188px)]

            xl:text-[220px]
            xl:leading-[0.72]
            xl:tracking-[-0.08em]
            2xl:text-[220px]
            3xl:text-[260px]
          "
        >
          Reviews
        </h2>
      </div>

      {/* Reviews marquee */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={reviewsMarqueeRef}
          className="flex w-max gap-[10px] will-change-transform md:gap-[12px]"
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="
                review-card
                rounded-[14px]
                flex
                h-[400px]
                w-[426px]
                shrink-0
                flex-col
                bg-[#f7f6e9]
                px-[20px]
                pt-[17px]

                md:h-[415px]
                md:w-[426px]
                md:px-[20px]
                md:pt-[17px]
              "
            >
              <div className="mb-[68px] md:mb-[68px]">
                <h4
                  className="
                    font-sans
                    text-[20px]
                    font-bold
                    leading-[1]
                    tracking-[-0.03em]
                    text-foreground
                  "
                >
                  {review.name}
                </h4>

                <span
                  className="
                    mt-[5px]
                    block
                    text-[15px]
                    font-medium
                    uppercase
                    leading-none
                    tracking-[0.04em]
                    text-foreground
                  "
                >
                  {review.role}
                </span>
              </div>

              <p
                className="
                  max-w-[286px]
                  font-sans
                  text-[20px]
                  font-medium
                  leading-[1.35]
                  tracking-[-0.02em]
                  text-foreground
                "
              >
                &quot;{review.text}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};