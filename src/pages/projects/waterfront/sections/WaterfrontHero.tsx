import { Calendar, Home, MapPin } from "lucide-react";
import img1 from "../../../../assets/thewaterfront/img1.avif";

export function WaterfrontHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-8 mb-24">
      <div className="md:col-span-8 rounded-[2rem] overflow-hidden shadow-2xl h-[450px]">
        <img
          src={img1}
          alt="The Waterfront Hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:col-span-4 flex flex-col gap-6">
        <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-[2rem] p-8 flex flex-col gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">
                Status
              </p>
              <p className="text-sm font-bold text-foreground">On Going</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Home size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">
                Type
              </p>
              <p className="text-sm font-bold text-foreground">
                Residential Community
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">
                Location
              </p>
              <p className="text-sm font-bold text-foreground">
                Perundurai, Erode
              </p>
            </div>
          </div>
        </div>
        <button className="w-full py-5 bg-foreground text-white rounded-full font-bold text-sm tracking-wide hover:bg-foreground/90 transition-all shadow-xl">
          Enquire Now
        </button>
      </div>
    </section>
  );
}
