import img2 from "../../../../assets/amenities/img2.avif";
import img3 from "../../../../assets/amenities/img3.webp";
import img4 from "../../../../assets/amenities/img4.webp";
import img5 from "../../../../assets/amenities/img5.avif";
import img6 from "../../../../assets/amenities/img6.webp";

const features = [
  {
    title: "Premium Infrastructure",
    image: img2,
    reverse: false,
    desc: "As one of the best property developers in Tamil Nadu, Kalamangala ensures world-class infrastructure:",
    points: [
      <>
        <strong>Underground cabling</strong> for electricity and data networks
      </>,
      <>
        <strong>Advanced drainage and water-supply systems</strong>
      </>,
      <>
        Street lights on <strong>smart timers</strong>
      </>,
      <>1 lakh litre overhead tank with dual borewell feed</>,
      <>Paver-finished pathways and wide asphalt roads</>,
      <>Rainwater harvesting and eco-balanced landscape planning</>,
    ],
  },
  {
    title: "Smart & Future-Ready",
    image: img3,
    reverse: true,
    desc: "Every home here is designed to be future-ready:",
    points: [
      <>
        <strong>EV charging support</strong>
      </>,
      <>
        High-speed fibre internet <strong>(multiple ISPs)</strong>
      </>,
      <>Intercom and surveillance connectivity</>,
      <>Energy-efficient lighting across the community</>,
    ],
  },
  {
    title: "Leisure & Wellness Zones",
    image: img4,
    reverse: false,
    desc: "Every home here is designed to be future-ready:",
    points: [
      <>
        A modern <strong>gymnasium</strong> for fitness lovers
      </>,
      <>
        <strong>Temple zone with landscaped park</strong> for spiritual peace
      </>,
      <>
        <strong>Seating lawns and walkways</strong> for evening relaxation
      </>,
      <>
        <strong>Dedicated yoga pavilion</strong> overlooking the canal
      </>,
    ],
  },
  {
    title: "Recreation for All Ages",
    image: img5,
    reverse: true,
    desc: "Life at The Waterfront is vibrant and social.",
    points: [
      <>
        <strong>Multi-sport courts</strong> for pickleball, badminton & basketball
      </>,
      <>
        <strong>Cricket pitch and football turf</strong> designed to professional
        standards
      </>,
      <>
        <strong>Kids’ play zone</strong> with safe EPDM flooring
      </>,
      <>
        <strong>Outdoor amphitheatre</strong> for cultural and family events
      </>,
    ],
  },
  {
    title: "Clubhouse — The Heart of Community",
    image: img6,
    reverse: false,
    desc: "Spread across 5,560 sq ft, the Waterfront Clubhouse is where lifestyle meets leisure. It features:",
    points: [
      <>Multipurpose event hall</>,
      <>Indoor games area</>,
      <>Kitchenette and lounge</>,
      <>Visitor parking</>,
      <>Rooftop viewing deck for evening get-togethers</>,
    ],
  },
];

export function FeatureRows() {
  return (
    <section className="mx-auto mt-[82px] w-full max-w-[1160px] px-5 md:mt-[130px] md:px-6">
      <div className="flex flex-col gap-[78px] md:gap-[88px]">
        {features.map((item) => (
          <article
            key={item.title}
            className="km-reveal grid grid-cols-1 items-center gap-[34px] md:grid-cols-2 md:gap-[88px]"
          >
            {/* CONTENT */}
            <div
              className={`${
                item.reverse ? "md:order-2" : "md:order-1"
              } order-2`}
            >
              <h4 className="max-w-[500px] text-[34px] font-bold leading-[0.96] tracking-[-0.075em] text-foreground md:text-[38px]">
                {item.title}
              </h4>

              <p className="mt-[14px] max-w-[470px] text-[17px] font-medium leading-[1.22] tracking-[-0.04em] text-foreground/45">
                {item.desc}
              </p>

              <ul className="mt-[15px] max-w-[500px] list-disc pl-[23px] text-[19px] font-medium leading-[1.32] tracking-[-0.045em] text-foreground marker:text-[12px]">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <div
              className={`${
                item.reverse ? "md:order-1" : "md:order-2"
              } order-1`}
            >
              <div
                className="
                  mx-auto w-full overflow-hidden rounded-[18px]
                  max-[767px]:h-[370px]
                  max-[767px]:max-w-[372px]
                  max-[767px]:rounded-[17px]
                  sm:max-[767px]:h-[390px]
                  md:h-[475px] md:max-w-none md:rounded-[13px]
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full w-full object-cover transition duration-700 hover:scale-[1.04]
                    max-[767px]:object-cover
                  "
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="km-reveal mt-[92px] w-full">
        <h3 className="text-[34px] font-bold leading-[0.95] tracking-[-0.07em] text-foreground md:text-[50px]">
          Safe, Secure, and Serene
        </h3>

        <p className="mt-[22px] max-w-[1500px] text-[18px] font-bold leading-[1.38] tracking-[-0.035em] text-foreground md:mt-[38px] md:text-[26px]">
          Security is non-negotiable at The Waterfront. The gated entry, CCTV
          monitoring, and 24×7 guard services provide complete peace of mind for
          residents and families alike.
        </p>
      </section>
    </section>
  );
}