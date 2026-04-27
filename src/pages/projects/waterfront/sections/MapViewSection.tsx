import after from "../../../../assets/thewaterfront/after.png";

export function MapViewSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/40">
        <img
          src={after}
          alt="The Waterfront Map View"
          className="w-full h-auto"
        />
        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-white/50">
          <span className="text-[10px] font-bold tracking-[0.2em] text-foreground uppercase italic">
            After
          </span>
        </div>
      </div>
    </section>
  );
}
