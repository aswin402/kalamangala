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
    <section className="am-reveal mx-auto mt-[72px] w-full max-w-[1420px] px-0">
      <h2 className="mb-[28px] text-[48px] font-bold leading-[0.93] tracking-[-0.08em] text-[#12362d]">
        Why The Waterfront
        <br />
        Stands Apart
      </h2>

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
      className={`group overflow-hidden rounded-[19px] bg-[#12362d] ${
        wide ? "h-[282px]" : "h-[304px]"
      }`}
    >
      <div className="h-[128px] w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
        />
      </div>

      <div className="px-[18px] pt-[30px]">
        <h3 className="max-w-[330px] text-[24px] font-bold leading-[0.98] tracking-[-0.06em] text-white">
          {item.title}
        </h3>

        <p className="mt-[15px] max-w-[360px] text-[16px] font-bold leading-[1.32] tracking-[-0.04em] text-white/82">
          {item.desc}
        </p>
      </div>
    </article>
  );
}