import { Star } from "lucide-react";
import img8 from "../../../../assets/construction-company/img8.webp";

export function AdvantageSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-20 scroll-reveal">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 shadow-xl border border-foreground/5">
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-heading font-bold text-foreground">
            Experience the Kalamangala Advantage
          </h3>
          <p className="text-foreground/60 leading-relaxed">
            With decades of experience and a track record of successful
            projects, Kalamangala is your partner for building a better future.
            We combine traditional values with modern technology to deliver
            unmatched results.
          </p>
          <ul className="space-y-4">
            {[
              "Expert Engineering",
              "Quality Materials",
              "On-time Delivery",
              "Transparent Pricing",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm font-bold text-foreground"
              >
                <Star size={16} className="text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px]">
          <img
            src={img8}
            alt="Advantage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
