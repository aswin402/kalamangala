import {
  Users,
  Globe,
  TrendingUp,
  Map,
  Home,
} from "lucide-react";

const cateringAudiences = [
  { text: "Families looking to build a premium home in a peaceful environment", icon: Users },
  { text: "NRIs seeking secure investment options", icon: Globe },
  { text: "Investors exploring high-appreciation zones", icon: TrendingUp },
  { text: "Individuals looking for DTCP-approved, ready-to-register luxury plots", icon: Map },
  { text: "Homebuyers wanting a blend of urban convenience and serene living", icon: Home },
];

export function WhoWeCaterToSection() {
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
        Who We Cater To
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
        Kalamangala is the perfect choice for:
      </p>

      <div
        className="
          mt-[32px]
          grid
          grid-cols-1
          gap-[16px]
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {cateringAudiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.text}
              className={`
                km-reveal
                group
                flex
                items-start
                gap-[20px]
                rounded-[18px]
                bg-table-row
                px-[28px]
                py-[28px]
                transition-all
                duration-500
                hover:shadow-[0_6px_24px_rgba(13,43,34,0.10)]
                md:px-[34px]
                md:py-[34px]
                ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''}
              `}
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
                  bg-white
                  text-foreground
                  shadow-[0_10px_20px_rgba(13,43,34,0.18)]
                  transition-transform
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
    </section>
  );
}
