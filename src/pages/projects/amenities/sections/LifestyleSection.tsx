import { Shield, Zap, Droplets, Wind } from "lucide-react";
import img2 from "../../../../assets/amenities/img2.avif";
import img4 from "../../../../assets/amenities/img4.webp";

export function LifestyleSection() {
  return (
    <section className="bg-[#1a2b25] pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <div className="bg-[#1d2f28] border border-white/5 rounded-4xl overflow-hidden flex flex-col md:flex-row items-stretch scroll-reveal shadow-2xl">
            <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6">
              <h3 className="text-3xl font-heading font-bold text-white">
                The Waterfront Lifestyle
              </h3>
              <p className="text-white/50 leading-relaxed">
                Imagine waking up to the gentle breeze from the canal and
                spending your evenings in a vibrant community space. Our
                project is designed to give you that perfect blend of nature
                and modern luxury.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Wind size={24} />
                </div>
                <div className="text-white/80 text-sm font-medium">
                  Naturally Ventilated Layouts
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[350px]">
              <img
                src={img2}
                alt="Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-[#1d2f28] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col md:flex-row-reverse items-stretch scroll-reveal shadow-2xl">
            <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6">
              <h3 className="text-3xl font-heading font-bold text-white">
                Security & Safety
              </h3>
              <p className="text-white/50 leading-relaxed">
                Your safety is our priority. With gated access, 24/7 CCTV
                monitoring, and dedicated security personnel, The Waterfront
                offers a sanctuary for your family.
              </p>
              <ul className="space-y-4">
                {[Shield, Zap, Droplets].map((Icon, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                      <Icon size={16} />
                    </div>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                      {i === 0
                        ? "24/7 Surveillance"
                        : i === 1
                          ? "Emergency Power"
                          : "Pure Water Supply"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 min-h-[350px]">
              <img
                src={img4}
                alt="Security"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
