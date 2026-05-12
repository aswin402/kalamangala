import {
  TrendingUp,
  ShieldCheck,
  Paintbrush,
  Home,
} from "lucide-react";

const reasons = [
  {
    title: "Fast Appreciation",
    desc: "Cities like Erode, Coimbatore, and Salem are witnessing major development in industries, education, and transportation. This automatically increases land value and guarantees strong returns on investment.",
    icon: TrendingUp,
  },
  {
    title: "Safe & Secure Investment",
    desc: "Compared to other assets, land remains the most stable and low-risk investment. DTCP-approved plots with proper documentation ensure lifelong security.",
    icon: ShieldCheck,
  },
  {
    title: "Room for Customization",
    desc: "You can build your dream home, villa, farm house, or commercial space—based on your needs and preferences.",
    icon: Paintbrush,
  },
  {
    title: "High Rental and Resale Demand",
    desc: "As migration and urbanization increase, the demand for residential properties skyrockets. Plots in prime locations offer excellent resale and rental income potential.",
    icon: Home,
  },
];

export function WhyInvestSection() {
  return (
    <section
      className="
        mx-auto
        mt-[72px]
        w-full
        max-w-[1500px]
        px-5
        md:mt-[96px]
        3xl:max-w-[1800px]
      "
    >
      <h2
        className="
          km-reveal
          font-['Inter',sans-serif]
          text-[34px]
          font-bold
          leading-[0.98]
          tracking-[-0.07em]
          text-foreground
          sm:text-[42px]
          md:text-[50px]
          lg:text-[52px]
        "
      >
        Why Invest in Real Estate Land and Plots in Tamil Nadu?
      </h2>

      <p
        className="
          km-reveal
          mt-[22px]
          max-w-[1200px]
          font-['Inter',sans-serif]
          text-[17px]
          font-medium
          leading-[1.45]
          tracking-[-0.03em]
          text-foreground
          sm:text-[19px]
          md:text-[21px]
        "
      >
        Tamil Nadu has consistently remained one of India's most
        investment-friendly states. With high industrial growth, excellent
        infrastructure, and rapid urban expansion, the demand for residential
        and investment plots continues to rise.
      </p>
      
      <p
        className="
          km-reveal
          mt-[14px]
          font-['Inter',sans-serif]
          text-[17px]
          font-semibold
          text-primary
          sm:text-[19px]
        "
      >
        Here's why buying real estate land and plots in Tamil Nadu is a smart choice:
      </p>

      <div
        className="
          mt-[32px]
          grid
          grid-cols-1
          gap-[20px]
          sm:grid-cols-2
          md:mt-[40px]
        "
      >
        {reasons.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="
                km-reveal
                group
                rounded-[18px]
                border
                border-border
                bg-card
                px-[28px]
                py-[28px]
                transition-all
                duration-500
                hover:border-primary/40
                hover:shadow-[0_8px_30px_rgba(243,172,133,0.12)]
                md:px-[34px]
                md:py-[34px]
              "
            >
              <div
                className="
                  mb-[18px]
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-card-green
                  text-primary
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                <Icon size={28} strokeWidth={2} />
              </div>

              <h3
                className="
                  font-['Inter',sans-serif]
                  text-[24px]
                  font-bold
                  leading-[1.1]
                  tracking-[-0.04em]
                  text-foreground
                  sm:text-[26px]
                  md:text-[28px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-[12px]
                  font-['Inter',sans-serif]
                  text-[15px]
                  font-medium
                  leading-[1.55]
                  tracking-[-0.015em]
                  text-muted-foreground
                  sm:text-[16px]
                "
              >
                {item.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
