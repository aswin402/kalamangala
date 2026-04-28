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
      desc: "Leading hospitals within 10-15 minutes",
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
    <section className="mx-auto mt-16 w-full max-w-[1300px] pb-10">
      <div className="km-reveal mb-8">
        <h2 className="text-[28px] font-black leading-[1.02] tracking-[-0.06em] text-[#132d25] md:text-[48px]">
          A Neighbourhood Designed for Growth
        </h2>

        <p className="mt-6 max-w-[1240px] text-[16px] font-black leading-[1.2] tracking-[-0.045em] text-[#132d25] md:text-[23px]">
          Erode is not just growing - it&apos;s evolving into a hub of premium
          residential communities. The{" "}
          <span className="font-black">Modakurichi - Thindal - Saminathapuram</span>{" "}
          corridor is now a preferred destination for professionals,
          entrepreneurs, and NRIs seeking secure, high-value properties.
        </p>

        <p className="mt-4 text-[22px] font-black tracking-[-0.045em] text-[#132d25]">
          Reasons why this corridor stands out:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
        {topCards.map((card) => (
          <article
            key={card.title}
            className="km-reveal group h-[262px] overflow-hidden rounded-[24px] bg-[#173a31] p-[18px] text-[#f7f3df]"
          >
            <div className="h-[140px] overflow-hidden rounded-[12px]">
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="pt-[24px]">
              <h3 className="text-[24px] font-black leading-none tracking-[-0.05em]">
                {card.title}
              </h3>

              <p className="mt-3 text-[15px] font-black leading-[1.2] tracking-[-0.03em] text-[#f7f3df]">
                {card.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-[18px] grid grid-cols-1 gap-[18px] lg:grid-cols-2">
        {bottomCards.map((card) => (
          <article
            key={card.title}
            className="km-reveal group h-[262px] overflow-hidden rounded-[24px] bg-[#173a31] p-[18px] text-[#f7f3df]"
          >
            <div className="h-[140px] overflow-hidden rounded-[12px]">
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="pt-[24px]">
              <h3 className="text-[24px] font-black leading-none tracking-[-0.05em]">
                {card.title}
              </h3>

              <p className="mt-3 text-[15px] font-black leading-[1.2] tracking-[-0.03em] text-[#f7f3df]">
                {card.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
