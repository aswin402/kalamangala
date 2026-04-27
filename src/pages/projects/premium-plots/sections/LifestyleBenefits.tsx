import { Zap } from "lucide-react";
import img15 from "../../../../assets/premium-residential-plots-in-coimbatore/img15.webp";

export function LifestyleBenefits() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white rounded-[3rem] p-8 shadow-xl border border-foreground/5">
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-heading font-bold text-foreground">
            Lifestyle Benefits You'll Love
          </h3>
          <p className="text-foreground/60 leading-relaxed">
            Live in a community that inspires. From green parks to modern
            utilities, everything is designed to make your life effortless and
            joyful.
          </p>
          <ul className="grid grid-cols-2 gap-4">
            {["Safe Play Zones", "Green Walkways", "24/7 Security", "Pure Water"].map(
              (l, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60"
                >
                  <Zap size={14} className="text-primary" />
                  {l}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px]">
          <img
            src={img15}
            alt="Lifestyle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
