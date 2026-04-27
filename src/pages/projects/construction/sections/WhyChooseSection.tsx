import { Navigation, TrendingUp, Heart, MapPin } from "lucide-react";

const whyChoose = [
  {
    title: "Location Mastery",
    desc: "Located exactly where comfort and connectivity meet.",
    icon: MapPin,
  },
  {
    title: "Future Appreciation",
    desc: "A smart investment location with strong future value.",
    icon: TrendingUp,
  },
  {
    title: "Convenient Living",
    desc: "Everything essential within a few minutes reach.",
    icon: Navigation,
  },
  {
    title: "Natural Harmony",
    desc: "Planned with green spaces, calm, and pollution-free surroundings.",
    icon: Heart,
  },
];

export function WhyChooseSection() {
  return (
    <section className="mx-auto mt-[70px] max-w-[1000px] px-5">
      <h2 className="km-reveal font-['Inter',sans-serif] text-[28px] font-[900] leading-none tracking-[-0.075em] text-[#0d2b22] md:text-[36px]">
        Why Choose The Waterfront, Erode
      </h2>

      <div className="mt-[26px] grid grid-cols-1 gap-[12px] md:grid-cols-2">
        {whyChoose.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="km-reveal rounded-[6px] bg-[#f4f0df] px-[22px] py-[24px]"
            >
              <div className="mb-[24px] flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white text-[#0d2b22]">
                <Icon size={12} strokeWidth={2.2} />
              </div>

              <h3 className="font-['Inter',sans-serif] text-[22px] font-[900] leading-none tracking-[-0.07em] text-[#0d2b22] md:text-[27px]">
                {item.title}
              </h3>

              <p className="mt-[10px] max-w-[360px] font-['Inter',sans-serif] text-[10px] font-[600] leading-[1.25] tracking-[-0.045em] text-[#0d2b22] md:text-[12px]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}