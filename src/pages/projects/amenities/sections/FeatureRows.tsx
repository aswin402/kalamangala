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
        Underground cabling for electricity and data networks
      </>,
      <>
        Advanced drainage and water-supply systems
      </>,
      <>
        Street lights on smart timers
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
        EV charging support
      </>,
      <>
        High-speed fibre internet (multiple ISPs)
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
        A modern <strong className="font-black">gymnasium</strong> for fitness lovers
      </>,
      <>
        <strong className="font-black">Temple zone with landscaped park</strong> for spiritual peace
      </>,
      <>
        <strong className="font-black">Seating lawns </strong> and <strong className="font-black"> walkways</strong> for evening relaxation
      </>,
      <>
        <strong className="font-black">Dedicated yoga pavilion</strong> overlooking the canal
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
        <strong className="font-black">Multi-sport courts</strong> for pickleball, badminton & basketball
      </>,
      <>
        <strong className="font-black">Cricket pitch and football turf</strong> designed to professional
        standards
      </>,
      <>
        <strong className="font-black">Kids’ play zone</strong> with safe EPDM flooring
      </>,
      <>
        <strong className="font-black">Outdoor amphitheatre</strong> for cultural and family events
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
    <>
      <section className="mx-auto mt-[82px] w-full max-w-[1160px] px-5 md:mt-[130px] md:px-6">
        <div className="flex flex-col gap-[78px] md:gap-[88px]">
          {features.map((item) => (
            <article
              key={item.title}
              className="
                km-reveal
                grid
                grid-cols-1
                items-center
                gap-[34px]
                md:grid-cols-2
                md:gap-[88px]
              "
            >
              {/* CONTENT */}
              <div
                className={`
                  order-2
                  w-full
                  max-w-[500px]
                  max-[767px]:mx-auto
                  max-[767px]:max-w-[430px]
                  ${item.reverse ? "md:order-2" : "md:order-1"}
                `}
              >
                <h4
                  className="
                    m-0
                    max-w-[500px]
                    font-['Inter_Variable',Inter,sans-serif]
                    text-[32px]
                    font-normal
                    leading-[32px]
                    tracking-[-0.96px]
                    text-foreground
                    [font-feature-settings:'cv01','cv05','cv09','ss03']
                    [font-variation-settings:'opsz'_32,'wght'_700]
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    m-0
                    mt-[8px]
                    max-w-[455px]
                    font-['Inter_Variable',Inter,sans-serif]
                    text-[15px]
                    font-normal
                    leading-[18px]
                    tracking-[-0.15px]
                    text-foreground/45
                    [font-feature-settings:'cv01','cv05','cv09','ss03']
                    [font-variation-settings:'opsz'_32,'wght'_500]
                  "
                >
                  {item.desc}
                </p>

                <ul
                  className="
                    m-0
                    mt-[15px]
                    max-w-[500px]
                    list-disc
                    pl-[20.6667px]
                    font-['Inter',sans-serif]
                    text-[16px]
                    font-medium
                    leading-[24px]
                    tracking-[-0.32px]
                    text-foreground
                  "
                >
                  {item.points.map((point, index) => (
                    <li key={index} className="m-0 p-0">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE */}
              <div
                className={`
                  order-1
                  w-full
                  ${item.reverse ? "md:order-1" : "md:order-2"}
                `}
              >
                <div
                  className="
                    mx-auto
                    w-full
                    overflow-hidden
                    rounded-[18px]
                    max-[767px]:h-[370px]
                    max-[767px]:max-w-[372px]
                    max-[767px]:rounded-[17px]
                    sm:max-[767px]:h-[390px]
                    md:h-[475px]
                    md:max-w-none
                    md:rounded-[13px]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition
                      duration-700
                      hover:scale-[1.04]
                    "
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="
          km-reveal
          mx-auto
          mt-[72px]
          w-full
          max-w-[1600px]
          px-[13px]
          sm:px-4
          md:mt-[108px]
          md:px-8
          lg:px-[38px]
        "
      >
        <h3 className="text-[34px] font-bold leading-[1.1] tracking-[-0.05em] text-foreground md:text-[48px]">
          Safe, Secure, and Serene
        </h3>

        <p className="mt-[18px] text-[18px] font-semibold leading-[1.3] tracking-[-0.04em] text-foreground md:mt-[28px] md:text-[24px]">
          Security is non-negotiable at The Waterfront. The gated entry, CCTV
          monitoring, and 24×7 guard services provide complete peace of mind for
          residents and families alike.
        </p>
      </section>
    </>
  );
}