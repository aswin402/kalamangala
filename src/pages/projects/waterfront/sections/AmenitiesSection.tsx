import { Droplets, Shield, Zap, Wind, Home } from "lucide-react";

export function AmenitiesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-10">
      <div className="bg-[#1a2b25] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Droplets className="text-primary" size={32} />
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/80">
              Water Supply
            </p>
            <p className="text-[10px] text-white/40">24/7 Pure Water</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Shield className="text-primary" size={32} />
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/80">
              Security
            </p>
            <p className="text-[10px] text-white/40">Gated Community</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Zap className="text-primary" size={32} />
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/80">
              Power
            </p>
            <p className="text-[10px] text-white/40">Underground Wiring</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Wind className="text-primary" size={32} />
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/80">
              Greenery
            </p>
            <p className="text-[10px] text-white/40">Eco Friendly</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Home className="text-primary" size={32} />
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/80">
              Clubhouse
            </p>
            <p className="text-[10px] text-white/40">Premium Amenities</p>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-white/5 flex flex-col items-center">
          <h2 className="text-[12vw] font-heading font-bold tracking-tighter text-white/5 leading-none select-none">
            Kalamangala
          </h2>
        </div>
      </div>
    </section>
  );
}
