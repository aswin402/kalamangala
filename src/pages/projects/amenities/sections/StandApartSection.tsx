import img7 from "../../../../assets/amenities/img7.webp";
import img8 from "../../../../assets/amenities/img8.avif";
import img9 from "../../../../assets/amenities/img9.webp";
import img10 from "../../../../assets/amenities/img10.webp";
import img11 from "../../../../assets/amenities/img11.webp";

const cards = [
  {
    title: "Why The Waterfront Stands Apart",
    image: img7,
    desc: "A trusted name synonymous with quality and innovation in real estate.",
  },
  {
    title: "Eco-Sensitive Planning",
    image: img8,
    desc: "Over 40 % open green space to ensure a cleaner, cooler environment.",
  },
  {
    title: "Low-Maintenance Design",
    image: img9,
    desc: "A trusted name synonymous with quality and innovation in real estate.",
  },
  {
    title: "Prime Location",
    image: img10,
    desc: "Situated in Modakurichi, Erode — fast developing, yet peaceful.",
  },
  {
    title: "Natural Integration",
    image: img11,
    desc: "The presence of the canal gives a resort-like ambience every day.",
  },
];

export function StandApartSection() {
  return (
    <section
      className="
        am-reveal mx-auto w-full max-w-[1420px]

        mt-[34px] px-[39px] pb-[40px]

        sm:mt-[50px] sm:px-8
        lg:mt-[72px] lg:px-0 lg:pb-0
      "
    >
      <h2
        className="
          mb-[24px] max-w-[330px]
          text-[31px] font-bold leading-[1.02] tracking-[-0.075em]
          text-[#12362d]

          sm:text-[38px]
          lg:mb-[28px] lg:max-w-none lg:text-[48px] lg:leading-[0.93]
        "
      >
        Why The Waterfront
        <br />
        Stands Apart
      </h2>

      {/* MOBILE + TABLET STACK */}
      <div className="grid grid-cols-1 gap-[22px] lg:hidden">
        {cards.map((item) => (
          <ApartCard key={item.title} item={item} />
        ))}
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-[18px]">
          {cards.slice(0, 3).map((item) => (
            <ApartCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-[22px] grid grid-cols-2 gap-[18px]">
          {cards.slice(3).map((item) => (
            <ApartCard key={item.title} item={item} wide />
          ))}
        </div>
      </div>
    </section>
  );
}

function ApartCard({
  item,
  wide = false,
}: {
  item: {
    title: string;
    image: string;
    desc: string;
  };
  wide?: boolean;
}) {
  return (
    <article
      className={`
        group overflow-hidden bg-[#12362d]

        h-[339px] rounded-[22px] px-[20px] pt-[20px]

        sm:h-[380px] sm:px-[22px] sm:pt-[22px]

        lg:px-0 lg:pt-0 lg:rounded-[19px]
        ${wide ? "lg:h-[282px]" : "lg:h-[304px]"}
      `}
    >
      <div
        className="
          h-[140px] w-full overflow-hidden rounded-[5px]

          sm:h-[170px]
          lg:h-[128px] lg:rounded-none
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full w-full object-cover
            transition duration-700 group-hover:scale-[1.05]
          "
        />
      </div>

      <div
        className="
          px-0 pt-[39px]

          sm:pt-[42px]
          lg:px-[18px] lg:pt-[30px]
        "
      >
        <h3
          className="
            max-w-[285px]
            text-[25px] font-bold leading-[1.18] tracking-[-0.065em]
            text-white

            sm:max-w-[340px] sm:text-[28px]
            lg:max-w-[330px] lg:text-[24px] lg:leading-[0.98]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-[13px] max-w-[285px]
            text-[16px] font-bold leading-[1.28] tracking-[-0.04em]
            text-white/90

            sm:max-w-[360px] sm:text-[17px]
            lg:mt-[15px] lg:max-w-[360px] lg:text-[16px] lg:leading-[1.32] lg:text-white/82
          "
        >
          {item.desc}
        </p>
      </div>
    </article>
  );
}