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
    <section className="mx-auto mt-[90px] w-full max-w-[1160px] px-5 md:mt-[130px] md:px-6">
      <div className="flex flex-col gap-[78px]">
        {features.map((item) => (
          <article
            key={item.title}
            className="am-reveal grid grid-cols-1 items-center gap-[54px] md:grid-cols-2 md:gap-[88px]"
          >
            <div
              className={`${
                item.reverse ? "md:order-2" : "md:order-1"
              } order-2`}
            >
              <h4 className="max-w-[500px] text-[34px] font-bold leading-[0.96] tracking-[-0.075em] text-[#12362d] md:text-[38px]">
                {item.title}
              </h4>

              <p className="mt-[14px] max-w-[470px] text-[17px] font-medium leading-[1.22] tracking-[-0.04em] text-[#12362d]/45">
                {item.desc}
              </p>

              <ul className="mt-[15px] max-w-[500px] list-disc pl-[23px] text-[19px] font-medium leading-[1.32] tracking-[-0.045em] text-[#12362d] marker:text-[12px]">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div
              className={`${
                item.reverse ? "md:order-1" : "md:order-2"
              } order-1`}
            >
              <div className="overflow-hidden rounded-[13px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[440px] w-full object-cover transition duration-700 hover:scale-[1.04] md:h-[475px]"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="am-reveal mt-[92px] w-full">
        <h3 className="text-[34px] font-bold leading-[0.95] tracking-[-0.07em] text-[#12362d] md:text-[50px]">
          Safe, Secure, and Serene
        </h3>

        <p className="mt-[22px] max-w-[1500px] text-[18px] font-bold leading-[1.38] tracking-[-0.035em] text-[#12362d] md:mt-[38px] md:text-[26px]">
          Security is non-negotiable at The Waterfront. The gated entry, CCTV
          monitoring, and 24×7 guard services provide complete peace of mind for
          residents and families alike.
        </p>
      </section>
    </section>
  );
}
