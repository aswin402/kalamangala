import { Navigation, TrendingUp, Layers, Heart } from "lucide-react";

export function WhyChooseSection() {
  const features = [
    {
      title: "Location Mastery",
      icon: <Navigation />,
      desc: "Unmatched connectivity to key city points.",
    },
    {
      title: "Future Appreciation",
      icon: <TrendingUp />,
      desc: "Located in a high-growth investment zone.",
    },
    {
      title: "Convenient Living",
      icon: <Layers />,
      desc: "Schools, hospitals, and malls within reach.",
    },
    {
      title: "Natural Harmony",
      icon: <Heart />,
      desc: "Riverside living with fresh air and views.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-heading font-bold text-foreground italic">
          Why Choose The Waterfront, Erode
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white p-10 rounded-[2rem] border border-foreground/5 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-foreground/50 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
