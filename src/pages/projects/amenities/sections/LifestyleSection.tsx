import img3 from "../../../../assets/amenities/img3.webp";
import img4 from "../../../../assets/amenities/img4.webp";
import img5 from "../../../../assets/amenities/img5.avif";
import img6 from "../../../../assets/amenities/img6.webp";

/*
  IMPORTANT:
  If your first card image is showing the black interior image,
  change `img3` below to the tower / entrance image from your assets.
  Example:
  import img13 from "../../../../assets/amenities/img13.webp";
  Then use image: img13 for first card.
*/

const blocks = [
  {
    title: "The Kalamangala Promise",
    image: img3,
    reverse: false,
    text: "What makes Kalamangala one of the luxury home builders in Tamil Nadu is not just the architecture — it’s the philosophy. Every Kalamangala project is:",
    points: [
      <>
        <strong>Architecturally Distinct</strong> – blending local aesthetics
        with modern minimalism.
      </>,
      <>
        <strong>Functionally Efficient</strong> – designed for long-term
        sustainability.
      </>,
      <>
        <strong>Emotionally Connected</strong> – nurturing communities, not just
        houses.
      </>,
    ],
    bottom:
      "The Waterfront embodies this very spirit — offering a luxurious yet grounded lifestyle.",
  },
  {
    title: "Location Advantage",
    image: img4,
    reverse: true,
    text: "Situated in the calm outskirts of Erode, The Waterfront offers the perfect balance between urban convenience and natural beauty.",
    points: [
      <>10 minutes from Erode main city</>,
      <>Near educational institutions, healthcare and retail hubs</>,
      <>Excellent road connectivity to Salem and Coimbatore</>,
    ],
    bottom:
      "Living here means you’re close to everything you need, yet far from noise and congestion.",
  },
  {
    title: "A Lifestyle You Deserve",
    image: img5,
    reverse: false,
    text: "Every plot at The Waterfront is an opportunity — to build a home that reflects you, in a community crafted by Kalamangala, one of the best property developers in Tamil Nadu. With flexible plot sizes and world-class infrastructure, you can bring your dream home to life with ease. Your mornings begin with the sound of flowing water, your evenings end with golden sunsets over landscaped greens — and your every day is surrounded by like-minded residents who value quality living.",
    points: [],
    bottom: "",
  },
  {
    title: "Be Part of Something Beautiful",
    image: img6,
    reverse: true,
    text: "Kalamangala’s The Waterfront isn’t just another real estate project — it’s a promise of a better way of living. A place where architecture, nature and community coexist in perfect harmony.",
    points: [],
    bottom:
      "If you’ve ever imagined your dream home by the water, with the assurance of being built by one of the leading home developers in Tamil Nadu, The Waterfront is where that dream begins.",
  },
];

export function LifestyleSection() {
  return (
    <section
      className="
        mx-auto w-full max-w-[1160px]
        px-5 pt-[82px]
        sm:px-6
        md:mt-[88px] md:px-6 md:pt-0
      "
    >
      <div className="flex flex-col gap-[22px]">
        {blocks.map((item) => (
          <article
            key={item.title}
            className="
              km-reveal grid overflow-hidden bg-card-green

              /* mobile */
              rounded-[27px]
              p-[20px]
              pb-[60px]

              /* tablet / desktop */
              md:grid-cols-2
              md:gap-[42px]
              md:rounded-[28px]
              md:p-[18px]
              md:pb-[18px]
            "
          >
            {/* IMAGE */}
            <div
              className={`
                overflow-hidden rounded-[16px] md:rounded-[13px]
                ${item.reverse ? "md:order-2" : "md:order-1"}
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  h-[221px] w-full object-cover
                  transition duration-700 hover:scale-[1.04]

                  sm:h-[300px]
                  md:h-[438px]
                "
              />
            </div>

            {/* CONTENT */}
            <div
              className={`
                flex flex-col justify-center

                /* mobile */
                px-0 pt-[43px]

                /* tablet / desktop */
                md:px-[14px] md:py-[34px]

                ${item.reverse ? "md:order-1" : "md:order-2"}
              `}
            >
              <h3
                className="
                  max-w-[310px]
                  text-[31px] font-bold
                  leading-[1.32]
                  tracking-[-0.055em]
                  text-primary

                  md:max-w-none
                  md:text-[34px]
                  md:leading-[0.98]
                  md:tracking-[-0.07em]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-[17px] max-w-[540px]
                  text-[16px] font-bold
                  leading-[1.6]
                  tracking-[-0.035em]
                  text-white

                  md:mt-[24px]
                  md:text-white/90
                  md:leading-[1.65]
                "
              >
                {item.text}
              </p>

              {item.points.length > 0 && (
                <ul
                  className="
                    mt-[3px] max-w-[540px]
                    list-disc space-y-[2px]
                    pl-[19px]
                    text-[16px] font-bold
                    leading-[1.58]
                    tracking-[-0.035em]
                    text-white
                    marker:text-[8px]

                    md:mt-[25px]
                    md:space-y-[8px]
                    md:leading-[1.55]
                    md:text-white/90
                    md:marker:text-[9px]
                  "
                >
                  {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}

              {item.bottom && (
                <p
                  className="
                    mt-[28px] max-w-[540px]
                    text-[16px] font-bold
                    leading-[1.62]
                    tracking-[-0.035em]
                    text-white

                    md:leading-[1.65]
                    md:text-white/90
                  "
                >
                  {item.bottom}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}