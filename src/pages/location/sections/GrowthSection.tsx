import img8 from "../../../assets/location-advantage/img8.avif";
import img9 from "../../../assets/location-advantage/img9.webp";
import img10 from "../../../assets/location-advantage/img10.webp";
import img11 from "../../../assets/location-advantage/img11.avif";
import img12 from "../../../assets/location-advantage/img12.avif";

export function GrowthSection() {
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
    <section className="mx-auto mt-[118px] w-full max-w-[1300px] px-5 pb-[82px]">
      <div className="la-reveal mb-[30px]">
        <h2 className="font-['Inter'] text-[36px] font-black leading-none tracking-[-0.07em] text-[#132d25] md:text-[48px]">
          A Neighbourhood Designed for Growth
        </h2>

        <p className="mt-[30px] max-w-[1240px] font-['Inter'] text-[18px] font-black leading-[1.18] tracking-[-0.052em] text-[#132d25] md:text-[23px]">
          Erode is not just growing — it&apos;s evolving into a hub of premium
          residential communities. The{" "}
          <span className="font-black">
            Modakurichi – Thindal – Saminathapuram
          </span>{" "}
          corridor is now a preferred destination for professionals,
          entrepreneurs, and NRIs seeking secure, high-value properties.
          <br />
          Reasons why this corridor stands out:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {topCards.map((card) => (
          <article
            key={card.title}
            className="la-card group h-[262px] overflow-hidden rounded-[18px] bg-[#173a31] p-[18px] text-[#f7f3df]"
          >
            <div className="h-[128px] overflow-hidden rounded-[7px]">
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="pt-[31px]">
              <h3 className="font-['Inter'] text-[22px] font-black leading-none tracking-[-0.055em] md:text-[25px]">
                {card.title}
              </h3>

              <p className="mt-[14px] font-['Inter'] text-[13px] font-black leading-[1.2] tracking-[-0.035em] text-[#f7f3df] md:text-[15px]">
                {card.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-[26px] grid grid-cols-1 gap-[18px] md:grid-cols-2">
        {bottomCards.map((card) => (
          <article
            key={card.title}
            className="la-card group h-[263px] overflow-hidden rounded-[18px] bg-[#173a31] p-[18px] text-[#f7f3df]"
          >
            <div className="h-[128px] overflow-hidden rounded-[7px]">
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="pt-[31px]">
              <h3 className="font-['Inter'] text-[22px] font-black leading-none tracking-[-0.055em] md:text-[25px]">
                {card.title}
              </h3>

              <p className="mt-[14px] font-['Inter'] text-[13px] font-black leading-[1.2] tracking-[-0.035em] text-[#f7f3df] md:text-[15px]">
                {card.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}