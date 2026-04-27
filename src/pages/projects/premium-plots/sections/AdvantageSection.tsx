import { Star } from "lucide-react";
import img13 from "../../../../assets/premium-residential-plots-in-coimbatore/img13.webp";

export function AdvantageSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-20 scroll-reveal">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 shadow-xl border border-foreground/5">
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-heading font-bold text-foreground">
            Experience the Kalamangala Advantage
          </h3>
          <p className="text-foreground/60 leading-relaxed">
            We specialize in creating premium residential environments that
            offer lasting value. Our Coimbatore project is a testament to our
            commitment to excellence.
          </p>
          <div className="flex flex-col gap-4">
            {[
              "Premium Gated Community",
              "Strategic Growth Location",
              "World-Class Amenities",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-sm font-bold text-foreground"
              >
                <Star size={16} className="text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px]">
          <img
            src={img13}
            alt="Advantage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
