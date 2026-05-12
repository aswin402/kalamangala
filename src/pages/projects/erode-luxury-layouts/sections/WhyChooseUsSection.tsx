import {
  MapPin,
  LayoutTemplate,
  Star,
  FileCheck,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Reason {
  title: string;
  desc: string;
  icon: LucideIcon;
  list?: string[];
}

const reasons: Reason[] = [
  {
    title: "Premium, Strategically Located Layouts",
    desc: "All Kalamangala layouts are situated in fast-developing zones with excellent connectivity to Erode town, schools, hospitals, shopping zones, and transport hubs. These locations are handpicked to offer both serenity and rapid value appreciation.",
    icon: MapPin,
  },
  {
    title: "Superior Layout Planning",
    desc: "We take pride in designing layouts with wide roads, dedicated green spaces, efficient drainage, underground cabling, streetlights, and optimal plot orientation—ensuring a hassle-free lifestyle. Our layouts are not just residential areas; they are thoughtfully planned ecosystems.",
    icon: LayoutTemplate,
  },
  {
    title: "Modern Amenities for a Luxurious Lifestyle",
    desc: "As one of the most customer-centric luxury property developers, we ensure that all luxury residential layouts in Erode come with:",
    icon: Star,
    list: [
      "Grand entrance arch",
      "Fully secured fencing",
      "24/7 surveillance options",
      "Children's play area",
      "Jogging tracks and landscaped parks",
      "Ample water resources",
      "Future-ready infrastructure",
    ],
  },
  {
    title: "100% Legal Documentation & Transparency",
    desc: "Every Kalamangala project is DTCP/ RERA compliant and backed by complete legal verification. Buyers receive transparent documentation with zero hidden clauses. Integrity is at the heart of what we do.",
    icon: FileCheck,
  },
  {
    title: "Exceptional Customer Support",
    desc: "Whether you are a first-time buyer or a seasoned investor, our expert team assists you from site visits to registration, and even future construction guidance. Your convenience is our priority.",
    icon: Headphones,
  },
];

export function WhyChooseUsSection() {
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
        Why Choose Kalamangala – The Trusted Luxury Property Developers
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
        Choosing the right developer is crucial when investing in premium real
        estate. Kalamangala stands apart for its commitment to transparency,
        luxury, and timely delivery. Here's why property buyers and investors
        choose us:
      </p>

      <div
        className="
          mt-[32px]
          grid
          grid-cols-1
          gap-[20px]
          sm:grid-cols-2
          lg:grid-cols-3
          md:mt-[40px]
        "
      >
        {reasons.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className={`
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
                ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''}
              `}
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
                {index + 1}. {item.title}
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

              {item.list && item.list.length > 0 && (
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
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
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
