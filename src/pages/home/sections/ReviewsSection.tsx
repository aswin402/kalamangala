import { useEffect, useRef } from "react";
import gsap from "gsap";

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
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: reviewsSectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".review-card",
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
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
        pt-[54px]
        pb-[82px]

        md:pt-[60px]
        lg:pt-[60px]
        xl:pt-[61px]
      "
    >
      {/* Heading area */}
      <div
        className="
          relative
          mx-auto
          mb-[58px]
          w-fit

          md:mx-0
          md:ml-[54px]
          md:mb-[64px]

          lg:ml-[56px]
          lg:mb-[66px]

          xl:ml-[56px]
          xl:mb-[66px]

          2xl:ml-[56px]
        "
      >
        {/* Small label */}
        <div
          className="
            absolute
            z-20
            flex
            items-center
            gap-[5px]
            whitespace-nowrap

            left-[54px]
            top-[-17px]

            md:left-[116px]
            md:top-[15px]

            lg:left-[117px]
            lg:top-[16px]

            xl:left-[117px]
            xl:top-[16px]

            2xl:left-[117px]
            2xl:top-[16px]
          "
        >
          <span
            className="
              grid
              h-[10px]
              w-[10px]
              place-items-center
              rounded-full
              border
              border-foreground

              md:h-[11px]
              md:w-[11px]
            "
          >
            <span className="h-[5px] w-[5px] rounded-full bg-card-green md:h-[6px] md:w-[6px]" />
          </span>

          <span
            className="
              text-[9px]
              font-black
              uppercase
              leading-none
              tracking-[-0.06em]
              text-foreground

              md:text-[10px]
              lg:text-[10px]
              xl:text-[10px]
            "
          >
            Clients&apos; Words
          </span>
        </div>

        <h2
          ref={reviewsHeadingRef}
          className="
            font-display
            text-[62px]
            font-medium
            leading-[0.76]
            tracking-[-0.108em]
            text-foreground

            sm:text-[82px]

            md:text-[clamp(142px,13.7vw,174px)]
            md:leading-[0.72]
            md:tracking-[-0.112em]

            lg:text-[clamp(154px,13.7vw,188px)]

            xl:text-[176px]
            xl:leading-[0.72]
            xl:tracking-[-0.112em]

            2xl:text-[176px]
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
                flex
                h-[515px]
                w-[326px]
                shrink-0
                flex-col
                bg-white-text
                px-[20px]
                pt-[17px]

                md:h-[515px]
                md:w-[326px]
                md:px-[20px]
                md:pt-[17px]
              "
            >
              <div className="mb-[88px] md:mb-[88px]">
                <h4
                  className="
                    font-sans
                    text-[20px]
                    font-bold
                    leading-[1]
                    tracking-[-0.04em]
                    text-foreground
                  "
                >
                  {review.name}
                </h4>

                <span
                  className="
                    mt-[7px]
                    block
                    text-[10px]
                    font-black
                    uppercase
                    leading-none
                    tracking-[0.02em]
                    text-[var(--home-reviewssection-text-5)]/80
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
                  font-normal
                  leading-[1.25]
                  tracking-[-0.045em]
                  text-[#17302a]
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