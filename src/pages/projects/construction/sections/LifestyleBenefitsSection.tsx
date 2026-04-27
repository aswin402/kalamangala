import { HardHat } from "lucide-react";
import img10 from "../../../../assets/construction-company/img10.webp";

export function LifestyleBenefitsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white rounded-[3rem] p-8 shadow-xl border border-foreground/5">
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-heading font-bold text-foreground">
            Lifestyle Benefits You'll Love
          </h3>
          <p className="text-foreground/60 leading-relaxed">
            Choosing the right construction partner is about more than just
            bricks and mortar. It's about the quality of life you'll experience
            in the spaces we create.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Modern Living Standards",
              "Energy Efficient Designs",
              "Sustainable Building Practices",
            ].map((benefit, bIdx) => (
              <div
                key={bIdx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-foreground/5"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <HardHat size={16} />
                </div>
                <span className="text-sm font-bold text-foreground/80">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px]">
          <img
            src={img10}
            alt="Lifestyle"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
