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
    <section className="mx-auto mt-[88px] w-full max-w-[1160px] px-6">
      <div className="flex flex-col gap-[22px]">
        {blocks.map((item) => (
          <article
            key={item.title}
            className="am-reveal grid overflow-hidden rounded-[28px] bg-[#12362d] p-[18px] md:grid-cols-2 md:gap-[42px]"
          >
            <div
              className={`overflow-hidden rounded-[13px] ${
                item.reverse ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[390px] w-full object-cover transition duration-700 hover:scale-[1.04] md:h-[438px]"
              />
            </div>

            <div
              className={`flex flex-col justify-center px-[24px] py-[34px] md:px-[14px] ${
                item.reverse ? "md:order-1" : "md:order-2"
              }`}
            >
              <h3 className="text-[34px] font-bold leading-[0.98] tracking-[-0.07em] text-[#ffad86]">
                {item.title}
              </h3>

              <p className="mt-[24px] max-w-[540px] text-[16px] font-bold leading-[1.65] tracking-[-0.035em] text-white/90">
                {item.text}
              </p>

              {item.points.length > 0 && (
                <ul className="mt-[25px] max-w-[540px] list-disc space-y-[8px] pl-[19px] text-[16px] font-bold leading-[1.55] tracking-[-0.035em] text-white/90 marker:text-[9px]">
                  {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}

              {item.bottom && (
                <p className="mt-[28px] max-w-[540px] text-[16px] font-bold leading-[1.65] tracking-[-0.035em] text-white/90">
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