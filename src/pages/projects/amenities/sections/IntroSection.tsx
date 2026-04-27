export function IntroSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 text-center mb-32 scroll-reveal">
      <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-8 tracking-tighter">
        Why choose <br /> <span className="text-primary">Kalamangala</span>
      </h2>
      <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
        We don't just build houses; we craft environments where families
        thrive. Our amenities are chosen to provide a balanced lifestyle of
        wellness, security, and community.
      </p>
      <div className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-[#1a2b25] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform cursor-pointer">
        Explore Features
      </div>
    </section>
  );
}
