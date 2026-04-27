import { Shield, Navigation, TreePine, Droplets, Baby, CloudRain } from "lucide-react";

export function AmenitiesGrid() {
  const amenities = [
    {
      title: "Secured Entrance & 24/7 Surveillance",
      desc: "Your safety is our priority with gated access and CCTV monitoring.",
      icon: <Shield />,
    },
    {
      title: "Wide Paved Roads & Street Lighting",
      desc: "Well-planned internal roads with modern energy-efficient lighting.",
      icon: <Navigation />,
    },
    {
      title: "Abundant Green Spaces",
      desc: "Beautifully landscaped parks and gardens for a healthy lifestyle.",
      icon: <TreePine />,
    },
    {
      title: "Water & Drainage Facilities",
      desc: "Reliable water supply and advanced underground drainage systems.",
      icon: <Droplets />,
    },
    {
      title: "Children's Play Area & Recreational Zones",
      desc: "Safe spaces for kids to play and communities to interact.",
      icon: <Baby />,
    },
    {
      title: "Rainwater Harvesting & Eco-Friendly Initiatives",
      desc: "Sustainable living with modern green practices.",
      icon: <CloudRain />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mb-40">
      <div className="mb-20 text-center scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">
          A Premium Gated Community with <br />
          <span className="text-primary italic">World-Class Amenities</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal">
        {amenities.map((a, i) => (
          <div
            key={i}
            className="bg-[#edeae0] p-10 rounded-[2.5rem] border border-foreground/5 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              {a.icon}
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2 leading-tight">
              {a.title}
            </h4>
            <p className="text-sm text-foreground/50 leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
