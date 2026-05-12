import {
  Briefcase,
  Users,
  TrendingUp,
  Globe,
  Armchair,
  Home,
} from "lucide-react";

const audiences = [
  { text: "Working professionals buying first homes", icon: Briefcase },
  { text: "Families upgrading to bigger residential spaces", icon: Users },
  { text: "Investors seeking long-term appreciation", icon: TrendingUp },
  { text: "NRIs purchasing secure property in Tamil Nadu", icon: Globe },
  { text: "Retired individuals looking for peaceful living", icon: Armchair },
  { text: "People designing custom independent homes", icon: Home },
];

export function WhoChoosesUsSection() {
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
        Who Chooses Us?
      </h2>

      <div
        className="
          mt-[32px]
          grid
          grid-cols-1
          gap-[14px]
          sm:grid-cols-2
          md:mt-[40px]
          lg:grid-cols-3
        "
      >
        {audiences.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.text}
              className="
                km-reveal
                group
                flex
                items-center
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
                  leading-[1.35]
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
          mt-[28px]
          font-['Inter',sans-serif]
          text-[17px]
          font-semibold
          italic
          leading-[1.5]
          tracking-[-0.025em]
          text-muted-foreground
          md:text-[19px]
        "
      >
        No matter the requirement, we provide clear solutions, not confusion.
      </p>
    </section>
  );
}
