import img13 from "../../../../assets/amenities/img13.webp";
import img9 from "../../../../assets/amenities/img9.webp";
import img8 from "../../../../assets/amenities/img8.avif";
import img12 from "../../../../assets/amenities/img12.webp";
import img7 from "../../../../assets/amenities/img7.webp";

export function StandApartSection() {
  const items = [
    {
      title: "Grand Entrance",
      desc: "Impressive gated entry with 24/7 surveillance.",
      img: img13,
    },
    {
      title: "24/7 Security",
      desc: "Advanced security systems for absolute peace of mind.",
      img: img9,
    },
    {
      title: "Lush Landscaping",
      desc: "Themed gardens and green belts across the project.",
      img: img8,
    },
    {
      title: "Underground Utilities",
      desc: "No hanging wires. Pure aesthetic excellence.",
      img: img12,
    },
    {
      title: "Modern Infrastructure",
      desc: "High-quality roads and drainage systems.",
      img: img7,
    },
  ];

  return (
    <section className="bg-[#1a2b25] py-32 rounded-t-[5rem]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter mb-4">
            Why The Waterfront <br />{" "}
            <span className="text-primary">Stands Apart</span>
          </h2>
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase">
            Premium Community Living
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden group scroll-reveal"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
