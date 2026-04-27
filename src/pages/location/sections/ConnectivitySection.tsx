import { MapPin, Clock } from "lucide-react";

export function ConnectivitySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">
          The Neighbourhood Advantage
        </h2>
      </div>
      <div className="overflow-hidden rounded-[2.5rem] border border-foreground/5 shadow-2xl bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1a2b25] text-white">
              <th className="px-8 py-6 font-heading text-lg">Landmark</th>
              <th className="px-8 py-6 font-heading text-lg">Distance</th>
              <th className="px-8 py-6 font-heading text-lg">Travel Time</th>
            </tr>
          </thead>
          <tbody className="text-foreground/80">
            {[
              { name: "Perundurai Road", dist: "1.2 km", time: "3 Mins" },
              { name: "Railway Station", dist: "5 km", time: "12 Mins" },
              { name: "City Center", dist: "7 km", time: "18 Mins" },
              { name: "Sathyamangalam Road", dist: "2 km", time: "5 Mins" },
              { name: "Collector Office", dist: "8.5 km", time: "20 Mins" },
              { name: "Cauvery River", dist: "4 km", time: "10 Mins" },
            ].map((row, i) => (
              <tr
                key={i}
                className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors"
              >
                <td className="px-8 py-5 font-bold flex items-center gap-3">
                  <MapPin size={16} className="text-primary" />
                  {row.name}
                </td>
                <td className="px-8 py-5 text-sm font-medium">{row.dist}</td>
                <td className="px-8 py-5 text-sm font-bold text-primary flex items-center gap-2">
                  <Clock size={16} />
                  {row.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
