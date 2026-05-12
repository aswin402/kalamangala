import {
  School,
  Stethoscope,
  ShoppingCart,
  Bus,
  Trees,
} from "lucide-react";

const plotBenefits = [
  {
    text: "Easy access to schools, colleges & coaching centers",
    icon: School,
  },
  {
    text: "Proximity to hospitals, pharmacies & emergency services",
    icon: Stethoscope,
  },
  {
    text: "Nearby supermarkets, markets & retail stores",
    icon: ShoppingCart,
  },
  {
    text: "Close connectivity to bus stands & major roads",
    icon: Bus,
  },
  {
    text: "Peaceful yet well-connected residential surroundings",
    icon: Trees,
  },
];

export function PlotsNearTownSection() {
  return (
    <section
      className="
        mx-auto
        mt-[62px]
        w-full
        max-w-[1500px]
        px-5
        md:mt-[82px]
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
        Focus on Plots Near Town in Tiruchengode
      </h2>

      <p
        className="
          km-reveal
          mt-[26px]
          max-w-[1200px]
          font-['Inter',sans-serif]
          text-[17px]
          font-semibold
          leading-[1.38]
          tracking-[-0.035em]
          text-foreground
          sm:text-[20px]
          md:text-[22px]
          lg:text-[23px]
        "
      >
        Location matters more than anything else in real estate — and town-side
        plots offer maximum convenience and faster development.
      </p>

      <p
        className="
          km-reveal
          mt-4
          font-['Inter',sans-serif]
          text-[16px]
          font-bold
          tracking-[-0.02em]
          text-foreground
          md:text-[18px]
        "
      >
        Our plots near town provide:
      </p>

      <div
        className="
          mt-[28px]
          grid
          grid-cols-1
          gap-[16px]
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {plotBenefits.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.text}
              className="
                km-reveal
                group
                flex
                items-start
                gap-[20px]
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
                  flex
                  h-14
                  w-14
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-card-green
                  text-primary
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
              >
                <Icon size={28} strokeWidth={2} />
              </div>

              <p
                className="
                  font-['Inter',sans-serif]
                  text-[17px]
                  font-semibold
                  leading-[1.4]
                  tracking-[-0.015em]
                  text-foreground
                  sm:text-[18px]
                "
              >
                {item.text}
              </p>
            </article>
          );
        })}
      </div>

      <p
        className="
          km-reveal
          mt-[32px]
          max-w-[1100px]
          font-['Inter',sans-serif]
          text-[16px]
          font-medium
          italic
          leading-[1.5]
          tracking-[-0.025em]
          text-muted-foreground
          md:text-[18px]
        "
      >
        Whether you're planning to build immediately or keep it as an
        appreciating investment, centrally located land always offers stronger
        returns.
      </p>
    </section>
  );
}
