import {
  Building2,
  PenTool,
  Hammer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import img2 from "../../../../assets/construction-company/img2.webp";
import img6 from "../../../../assets/construction-company/img6.webp";
import img7 from "../../../../assets/construction-company/img7.webp";

interface Service {
  title: string;
  desc: string;
  features: string[];
  img: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "1. Residential Plot Development",
    desc: "We develop well-planned, properly approved plots designed for comfortable and independent living. Every site is carefully selected based on connectivity, neighborhood demand, long-term value, and safety.",
    features: [
      "DTCP- and RERA-approved layouts",
      "Wide internal roads and street lighting",
      "Potable water and power access",
      "Drainage and stormwater systems",
      "Landscaping and community planning",
    ],
    img: img2,
    icon: Building2,
  },
  {
    title: "2. Custom Home Layouts in Tiruchengode",
    desc: "Every home begins with a thoughtful plan. Our expert architects and planners design customized layouts that reflect your lifestyle, preferences, and family requirements.",
    features: [
      "Vaastu-aligned designs",
      "Space-efficient room planning",
      "Multiple elevation options",
      "Lighting, ventilation & structural optimization",
      "Budget-friendly layout variations",
    ],
    img: img6,
    icon: PenTool,
  },
  {
    title: "3. Turnkey Home Construction",
    desc: "Many buyers prefer a complete, one-team solution — land + architecture + construction. Our turnkey building service takes care of everything, including approvals, materials, supervision, interior planning, and on-time delivery.",
    features: [
      "High-grade building materials",
      "Skilled labor and site engineers",
      "Structural stability and safety compliance",
      "Regular project updates and progress reports",
      "Quality finishing and long-lasting durability",
    ],
    img: img7,
    icon: Hammer,
  },
];

export function CoreServicesSection() {
  return (
    <section className="mx-auto mt-[62px] max-w-[1540px] px-5 pb-[28px] md:mt-[82px] 3xl:max-w-[1800px]">
      <h2 className="km-reveal mb-8 text-[34px] font-bold tracking-[-0.07em] text-foreground sm:text-[42px] md:text-[50px] lg:text-[52px]">
        Our Core Services
      </h2>

      <div className="space-y-[22px]">
        {services.map((service) => (
          <article
            key={service.title}
            className="
              km-service
              group
              relative
              overflow-hidden
              rounded-[18px]
              bg-card-green
              px-[18px]
              pt-[18px]
              pb-[28px]
              min-h-0
              sm:min-h-[420px]
            "
          >
            <img
              src={service.img}
              alt={service.title}
              className="
                h-[240px]
                w-full
                rounded-[6px]
                object-cover
                object-center
                transition-all
                duration-700
                group-hover:scale-[1.01]
                md:h-[255px]
              "
            />

            <div className="mt-[34px]">
              <h3 className="text-2xl font-bold tracking-tight text-white-text md:text-3xl">
                {service.title}
              </h3>

              <p className="mt-4 w-full text-base font-medium leading-relaxed tracking-wide text-white-text/90 md:text-lg">
                {service.desc}
              </p>

              <p className="mt-5 text-[14px] font-bold uppercase tracking-[0.04em] text-primary">
                Features include:
              </p>

              <ul className="mt-3 ml-5 list-disc space-y-[6px]">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-[15px] font-medium leading-[1.5] text-white-text/85 md:text-[16px]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p
        className="
          km-reveal
          mt-[28px]
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
        Whether it's a compact 2BHK, a spacious villa, or a duplex family home —
        we turn your ideas into practical, modern, and comfortable spaces. You
        get a beautifully built home without juggling multiple contractors.
      </p>
    </section>
  );
}
