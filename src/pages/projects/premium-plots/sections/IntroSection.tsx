export function IntroSection() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 text-center mb-32 scroll-reveal">
        <h1 className="text-5xl md:text-8xl font-heading font-bold text-foreground tracking-tighter leading-none mb-6">
          Discover Premium <br /> <span className="text-primary">Plots in Coimbatore</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-foreground/80 mb-8 italic">
          At Kalamangala — Your Dream Canvas
        </h2>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          We offer meticulously planned residential plots in Coimbatore's
          fastest-growing corridor. Build your home on a foundation of quality,
          security, and world-class amenities.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-foreground/5 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
            Prime Location — The Heart of Coimbatore's Growth Corridor
          </h2>
          <p className="text-foreground/60 leading-relaxed max-w-4xl mx-auto">
            Positioned strategically to offer maximum appreciation and
            convenience. Our plots are located in areas with robust
            infrastructure development, ensuring a high quality of life and
            great investment returns.
          </p>
        </div>
      </section>
    </>
  );
}
