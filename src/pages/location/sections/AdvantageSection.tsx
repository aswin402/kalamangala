import img13 from "../../../assets/location-advantage/img13.webp";

export function AdvantageSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-20 scroll-reveal">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 shadow-xl border border-foreground/5">
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-heading font-bold text-foreground">
            Experience The Kalamangala Advantage
          </h3>
          <p className="text-foreground/60 leading-relaxed">
            Our projects are selected based on strict criteria for
            connectivity, future growth potential, and quality of life. At The
            Waterfront, you are not just buying a plot; you are securing a
            legacy.
          </p>
          <button className="px-8 py-4 bg-[#1a2b25] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Download Location Map
          </button>
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
