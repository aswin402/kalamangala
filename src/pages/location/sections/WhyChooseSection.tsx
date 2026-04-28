import { MapPin, Rocket, Sofa, Leaf } from "lucide-react";

export function WhyChooseSection() {
  const whyCards = [
    {
      title: "Location Mastery",
      desc: "Close to everything, yet surrounded by peace",
      icon: MapPin,
    },
    {
      title: "Future Appreciation",
      desc: "Rising infrastructure and civic development promise long-term value.",
      icon: Rocket,
    },
    {
      title: "Convenient Living",
      desc: "Every major destination within a 15-minute radius",
      icon: Sofa,
    },
    {
      title: "Natural Harmony",
      desc: "River view, green spaces, and pollution-free surroundings.",
      icon: Leaf,
    },
  ];

  return (
    <section className="mx-auto mt-[88px] w-full max-w-[1470px] px-5 pb-[82px] md:mt-[118px]">
      <h2 className="la-reveal mb-[42px] font-['Inter'] text-[42px] font-black leading-none tracking-[-0.07em] text-[#132d25] md:text-[54px]">
        Why Choose The Waterfront, Erode
      </h2>

      <div className="grid gap-[22px] md:grid-cols-2">
        {whyCards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className="la-card min-h-[260px] rounded-[14px] bg-[#ecebdc] px-[34px] py-[48px] text-[#132d25]"
            >
              <div className="mb-[28px] flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#f6f7f5] text-[#4b5552] shadow-[0_10px_22px_rgba(19,45,37,0.16)]">
                <Icon size={27} strokeWidth={1.8} />
              </div>

              <h3 className="font-['Inter'] text-[38px] font-black leading-none tracking-[-0.075em] text-[#132d25] md:text-[52px]">
                {card.title}
              </h3>

              <p className="mt-[22px] font-['Inter'] text-[18px] font-medium leading-[1.25] tracking-[-0.035em] text-[#132d25]/75 md:text-[21px]">
                {card.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}