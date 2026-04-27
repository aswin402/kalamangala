import img15 from "../../../assets/location-advantage/img15.webp";

export function CTASection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 mb-20 scroll-reveal">
      <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl group cursor-pointer">
        <img
          src={img15}
          alt="Live Connected"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-10">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter mb-6">
            Live Connected. <br /> Live Kalamangala.
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg font-medium">
            Be part of Erode's most prestigious community. Your future home at
            The Waterfront awaits.
          </p>
          <button className="mt-12 px-12 py-5 bg-primary text-foreground rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors">
            Contact Sales Team
          </button>
        </div>
      </div>
    </section>
  );
}
