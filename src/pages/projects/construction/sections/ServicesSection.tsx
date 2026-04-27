import { Building2, HardHat, Ruler, PenTool, Hammer, Layers } from "lucide-react";
import img2 from "../../../../assets/construction-company/img2.webp";
import img3 from "../../../../assets/construction-company/img3.webp";
import img4 from "../../../../assets/construction-company/img4.webp";
import img6 from "../../../../assets/construction-company/img6.webp";
import img7 from "../../../../assets/construction-company/img7.webp";

export function ServicesSection() {
  const services = [
    {
      title: "Residential Projects",
      desc: "Crafting beautiful homes that combine comfort, style, and functionality for modern living.",
      img: img2,
      icon: <Building2 size={24} />,
    },
    {
      title: "Commercial Projects",
      desc: "Designing and building strategic commercial spaces that drive business growth and efficiency.",
      img: img3,
      icon: <HardHat size={24} />,
    },
    {
      title: "Industrial Construction",
      desc: "Robust construction solutions for factories, warehouses, and industrial complexes.",
      img: img4,
      icon: <Layers size={24} />,
    },
    {
      title: "Architectural Design & Planning",
      desc: "Visionary designs and meticulous planning to bring your project to life with precision.",
      img: img6,
      icon: <PenTool size={24} />,
    },
    {
      title: "Renovations & Remodeling",
      desc: "Transforming existing spaces into modern, functional environments with expert craftsmanship.",
      img: img7,
      icon: <Hammer size={24} />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mb-40">
      <div className="mb-20 text-center scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">
          Our Core Construction Services
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="relative h-[300px] rounded-[2.5rem] overflow-hidden group scroll-reveal shadow-2xl"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b25]/95 via-[#1a2b25]/60 to-transparent p-10 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary backdrop-blur-md">
                  {s.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                  {s.title}
                </h3>
              </div>
              <p className="text-white/60 max-w-xl text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Ruler size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
