import {
  Building2,
  HardHat,
  Layers,
  PenTool,
  Hammer,
} from "lucide-react";

import img2 from "../../../../assets/construction-company/img2.webp";
import img3 from "../../../../assets/construction-company/img3.webp";
import img4 from "../../../../assets/construction-company/img4.webp";
import img6 from "../../../../assets/construction-company/img6.webp";
import img7 from "../../../../assets/construction-company/img7.webp";

const services = [
  {
    title: "Residential Construction",
    desc: "Kalamangala is a preferred choice among homeowners who seek elegant, durable, and well-designed living spaces. We understand that a home is a lifelong dream — which is why we bring together contemporary architecture, sustainable materials, and innovative layouts to craft homes that truly stand out. Whether it’s a luxury villa, an independent house, or an apartment complex, we build spaces that embody comfort and sophistication.",
    img: img2,
    icon: Building2,
  },
  {
    title: "Commercial Projects",
    desc: "Our expertise extends to commercial developments such as offices, shopping complexes, and business centers. Every commercial project by Kalamangala is designed with an eye for detail, efficiency, and modernity. We ensure that the spaces we create support productivity, attract attention, and add long-term value to our clients’ investments.",
    img: img3,
    icon: HardHat,
  },
  {
    title: "Industrial Construction",
    desc: "We deliver reliable industrial construction for factories, warehouses, and large-scale facilities with practical planning, durable execution, and future-ready layouts that support long-term operational growth.",
    img: img4,
    icon: Layers,
  },
  {
    title: "Architectural Design & Planning",
    desc: "From initial concept to detailed planning, we shape functional, aesthetic, and future-ready architectural solutions that balance creativity, usability, structure, and long-lasting value.",
    img: img6,
    icon: PenTool,
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transform your existing space with smart renovation and remodeling services focused on comfort, beauty, usability, and improved everyday living through thoughtful design upgrades.",
    img: img7,
    icon: Hammer,
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto mt-[34px]  max-w-[1540px] px-5 pb-[28px]">
      <h2 className="km-reveal mb-8 text-2xl font-black tracking-tight text-foreground md:text-5xl">
        Our Core Construction Services
      </h2>

      <div className="space-y-[18px]">
        {services.map((service) => {
          return (
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
                pb-[26px]
                min-h-[420px]
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

                <p className="mt-4 max-w-[1360px] text-base font-bold leading-relaxed tracking-wide text-white-text/90 md:text-lg">
                  {service.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}