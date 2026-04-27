import { Star, CheckCircle2 } from "lucide-react";
import img3 from "../../../../assets/amenities/img3.webp";
import img6 from "../../../../assets/amenities/img6.webp";
import img5 from "../../../../assets/amenities/img5.avif";
import img10 from "../../../../assets/amenities/img10.webp";
import img11 from "../../../../assets/amenities/img11.webp";

export function FeatureRows() {
  const features = [
    {
      title: "Premium Clubhouse",
      desc: "A sprawling social hub designed for community interaction, celebrations, and leisure.",
      items: ["Lounge Area", "Indoor Games", "Community Spaces"],
      img: img3,
      align: "right",
    },
    {
      title: "Smart Home Ready",
      desc: "Experience the future with homes designed to integrate seamless smart technologies.",
      items: [
        "High-speed Connectivity",
        "Automation Ready",
        "Energy Efficiency",
      ],
      img: img6,
      align: "left",
    },
    {
      title: "State-of-the-art Gym",
      desc: "Equipped with modern fitness gear to help you maintain a healthy and active lifestyle.",
      items: ["Cardio Zone", "Weight Training", "Yoga Space"],
      img: img5,
      align: "right",
    },
    {
      title: "Children's Play Area",
      desc: "Safe and vibrant spaces where children can explore, play, and create lasting memories.",
      items: ["Safe Flooring", "Modern Equipment", "Green Surroundings"],
      img: img10,
      align: "left",
    },
    {
      title: "Multipurpose Hall",
      desc: "Versatile spaces perfect for hosting events, meetings, and personal celebrations.",
      items: ["Acoustic Treatment", "Flexible Layout", "Modern Decor"],
      img: img11,
      align: "right",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mb-40">
      <div className="flex flex-col gap-32">
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex flex-col ${f.align === "left" ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center scroll-reveal`}
          >
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
                <Star size={12} />
                <span>Premium Feature</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">
                {f.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">{f.desc}</p>
              <ul className="grid grid-cols-1 gap-3">
                {f.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm font-medium text-foreground/80"
                  >
                    <CheckCircle2 size={18} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-4/3 group cursor-pointer border-4 border-white/50">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
