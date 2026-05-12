import {
  Home,
  TrendingUp,
  Handshake,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Audience {
  title: string;
  subtitle: string;
  desc: string;
  icon: LucideIcon;
}

const audiences: Audience[] = [
  {
    title: "Property Buyers",
    subtitle: "Looking for the perfect home?",
    desc: "We shortlist, evaluate, and guide you through every step until handover.",
    icon: Home,
  },
  {
    title: "Investors & NRIs",
    subtitle: "Growth-oriented properties",
    desc: "We recommend properties with strong rental and resale potential — backed by market insights.",
    icon: TrendingUp,
  },
  {
    title: "Developers & Builders",
    subtitle: "Partner with us",
    desc: "For marketing, buyer outreach, project sales, planning, and branding support.",
    icon: Handshake,
  },
  {
    title: "First-Time Buyers",
    subtitle: "Making the journey simple",
    desc: "From budgeting to loan assistance — we make the journey simple, informed, and stress-free.",
    icon: UserCheck,
  },
];

export function WhoWeServeSection() {
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
        Who We Serve
      </h2>

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
        {audiences.map((item) => {
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
                  mt-[8px]
                  font-['Inter',sans-serif]
                  text-[15px]
                  font-bold
                  leading-[1.4]
                  tracking-[-0.015em]
                  text-primary
                  sm:text-[16px]
                "
              >
                {item.subtitle}
              </p>

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
