import {
  Home,
  Building,
  Map,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ExpertiseArea {
  title: string;
  desc: string;
  icon: LucideIcon;
  list: string[];
}

const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Residential Construction",
    desc: "From compact homes to luxury villas, we specialize in building individual houses, modern villas, duplex homes, and budget-friendly residential units. Every structure is engineered with precision, adhering to industry safety standards and innovative design principles.",
    icon: Home,
    list: [
      "Individual houses",
      "Modern villas",
      "Duplex homes",
      "Budget-friendly residential units",
    ],
  },
  {
    title: "Commercial Construction",
    desc: "We develop commercial buildings that support business growth. Our commercial spaces are designed to maximize usability, visibility, and long-term operational efficiency.",
    icon: Building,
    list: [
      "Office spaces",
      "Shops & showrooms",
      "Small business complexes",
      "Warehouses",
    ],
  },
  {
    title: "Real Estate Layout Development",
    desc: "Kalamangala is widely recognized for developing premium real estate layouts in Erode that guarantee prime locations, approvals, and ready-to-build plots. These layouts are designed for high appreciation and long-term growth.",
    icon: Map,
    list: [
      "Prime locations & DTCP/RERA approvals",
      "Wide roads & streetlights",
      "Underground drainage",
      "Water connectivity",
    ],
  },
  {
    title: "Turnkey Construction Solutions",
    desc: "We handle everything from planning, budgeting, and architecture to construction, finishing, and handover. Clients simply choose the design, and we build it to perfection.",
    icon: Wrench,
    list: [],
  },
];

export function ExpertiseSection() {
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
        Our Expertise in Real Estate & Construction
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
        As a leading real estate construction company in Erode, Kalamangala
        offers end-to-end solutions for residential and commercial needs:
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
        {expertiseAreas.map((item) => {
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

              {item.list.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.list.map((listItem) => (
                    <li
                      key={listItem}
                      className="
                        flex items-center gap-2
                        font-['Inter',sans-serif]
                        text-[15px]
                        font-medium
                        text-foreground
                      "
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
