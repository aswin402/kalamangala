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
    desc: "Build your dream home with our expert residential construction services, designed for comfort, functionality, and long-lasting quality.",
    img: img2,
    icon: Building2,
  },
  {
    title: "Commercial Projects",
    desc: "We create efficient commercial spaces that support business growth, strong layouts, and reliable structural performance.",
    img: img3,
    icon: HardHat,
  },
  {
    title: "Industrial Construction",
    desc: "Reliable industrial construction for factories, warehouses, and large-scale facilities with practical planning and durable execution.",
    img: img4,
    icon: Layers,
  },
  {
    title: "Architectural Design & Planning",
    desc: "From initial concept to detailed planning, we shape functional, aesthetic, and future-ready architectural solutions.",
    img: img6,
    icon: PenTool,
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transform your existing space with smart renovation and remodeling services focused on comfort, beauty, and usability.",
    img: img7,
    icon: Hammer,
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto mt-[64px] max-w-[1000px] px-5">
      <h2 className="km-reveal mb-[18px] font-['Inter',sans-serif] text-[30px] font-[900] leading-none tracking-[-0.075em] text-[#0d2b22] md:text-[38px]">
        Our Core Construction Services
      </h2>

      <div className="space-y-[12px]">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="km-service group relative h-[285px] overflow-hidden rounded-[8px] bg-[#14372e]"
            >
              <img
                src={service.img}
                alt={service.title}
                className="absolute left-[12px] right-[12px] top-[12px] h-[165px] w-[calc(100%-24px)] rounded-[3px] object-cover transition-all duration-700 group-hover:scale-[1.015]"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#14372e]/10 via-[#14372e]/35 to-[#14372e] transition duration-700 group-hover:from-[#14372e]/0" />

              <div className="relative z-10 flex h-full flex-col justify-between px-[20px] py-[18px]">
                <div className="flex items-center gap-[6px] text-white/45">
                  <Icon size={12} strokeWidth={2.4} />
                  <span className="font-['Inter',sans-serif] text-[8px] font-[600] leading-none tracking-[-0.045em]">
                    {service.title}
                  </span>
                </div>

                <div>
                  <h3 className="font-['Inter',sans-serif] text-[13px] font-[900] leading-none tracking-[-0.055em] text-white md:text-[15px]">
                    {service.title}
                  </h3>

                  <p className="mt-[6px] max-w-[890px] font-['Inter',sans-serif] text-[9px] font-[500] leading-[1.25] tracking-[-0.04em] text-white/85 md:text-[11px]">
                    {service.desc}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}