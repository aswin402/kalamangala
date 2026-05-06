import img8 from "../../../../assets/premium-residential-plots-in-coimbatore/img8.avif";
import img9 from "../../../../assets/premium-residential-plots-in-coimbatore/img9.webp";
import img10 from "../../../../assets/premium-residential-plots-in-coimbatore/img10.webp";
import img11 from "../../../../assets/premium-residential-plots-in-coimbatore/img11.avif";
import img12 from "../../../../assets/premium-residential-plots-in-coimbatore/img12.avif";

export function NeighbourhoodGrowthSection() {
  const topCards = [
    {
      title: "Strong connectivity",
      desc: "Major roads, highways, and transport hubs",
      img: img8,
    },
    {
      title: "Educational zone",
      desc: "Top-rated schools and colleges nearby",
      img: img9,
    },
    {
      title: "Healthcare access",
      desc: "Leading hospitals within 10–15 minutes",
      img: img10,
    },
  ];

  const bottomCards = [
    {
      title: "Commercial growth",
      desc: "Upcoming retail and lifestyle developments",
      img: img11,
    },
    {
      title: "High appreciation",
      desc: "Land and home value steadily increasing year after year",
      img: img12,
    },
  ];

  return (
    <section
      className="
        relative
        mt-[70px]
        w-full
        overflow-hidden
        pb-[50px]
        pt-[48px]
      "
    >

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-4 sm:px-5 md:px-6 lg:px-0 3xl:max-w-[1800px]">
        {/* Header */}
        <div className="la-reveal mb-[27px]">
          <h2
            className="
              max-w-[1000px]
              font-['Inter',sans-serif]
              text-[34px]
              font-bold
              leading-[1.03]
              tracking-[-0.075em]
              text-[#102f28]
              sm:text-[42px]
              md:text-[48px]
              lg:text-[52px]
            "
          >
            A Neighbourhood Designed for Growth
          </h2>

          <p
            className="
              mt-[24px]
              max-w-[1285px]
              font-['Inter',sans-serif]
              text-[18px]
              font-semibold
              leading-[1.28]
              tracking-[-0.045em]
              text-[#102f28]
              sm:text-[21px]
              md:text-[24px]
              lg:text-[25px]
            "
          >
            Erode is not just growing — it&apos;s evolving into a hub of premium
            residential communities. The{" "}
            <span className="font-bold">
              Modakurichi – Thindal – Saminathapuram
            </span>{" "}
            corridor is now a preferred destination for professionals,
            entrepreneurs, and NRIs seeking secure, high-value properties.
          </p>

          <p
            className="
              mt-[22px]
              font-['Inter',sans-serif]
              text-[18px]
              font-[800]
              leading-none
              tracking-[-0.045em]
              text-[#102f28]
              sm:text-[21px]
              md:text-[24px]
            "
          >
            Reasons why this corridor stands out:
          </p>
        </div>

        {/* Top Cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-[18px]
            md:grid-cols-3
            lg:gap-[22px]
          "
        >
          {topCards.map((card) => (
            <article
              key={card.title}
              className="
                la-card
                group
                h-[286px]
                overflow-hidden
                rounded-[20px]
                bg-card-green
                p-[18px]
                text-white
                md:h-[286px]
                lg:h-[286px]
              "
            >
              <div className="h-[142px] overflow-hidden rounded-[7px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="pt-[35px]">
                <h3
                  className="
                    font-['Inter',sans-serif]
                    text-[22px]
                    font-bold
                    leading-none
                    tracking-[-0.055em]
                    text-[#fff6dd]
                    md:text-[24px]
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-[13px]
                    font-['Inter',sans-serif]
                    text-[14px]
                    font-[800]
                    leading-none
                    tracking-[-0.03em]
                    text-[#fff6dd]
                    md:text-[15px]
                  "
                >
                  {card.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Cards */}
        <div
          className="
            mt-[26px]
            grid
            grid-cols-1
            gap-[18px]
            md:grid-cols-2
            lg:gap-[22px]
          "
        >
          {bottomCards.map((card) => (
            <article
              key={card.title}
              className="
                la-card
                group
                h-[286px]
                overflow-hidden
                rounded-[20px]
                bg-[#17392f]
                p-[18px]
                text-white
                shadow-[0_4px_16px_rgba(13,43,34,0.10)]
              "
            >
              <div className="h-[142px] overflow-hidden rounded-[7px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="pt-[35px]">
                <h3
                  className="
                    font-['Inter',sans-serif]
                    text-[22px]
                    font-[900]
                    leading-none
                    tracking-[-0.055em]
                    text-[#fff6dd]
                    md:text-[24px]
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-[13px]
                    font-['Inter',sans-serif]
                    text-[14px]
                    font-[800]
                    leading-none
                    tracking-[-0.03em]
                    text-[#fff6dd]
                    md:text-[15px]
                  "
                >
                  {card.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}