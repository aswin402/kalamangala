export function DescriptionSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-32">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <h2 className="text-3xl md:text-4xl font-heading font-bold leading-[1.1] text-foreground">
          Welcome to The Waterfront by Kalamangala – where nature and modern
          comforts come together.
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-foreground/60 leading-relaxed">
            Experience Erode's first premium community living. Choose your
            plot, build your dream home and be part of a secure, eco-friendly
            and like-minded neighborhood.
          </p>
          <div className="flex items-center gap-2 text-primary font-bold text-sm group cursor-pointer">
            <span>Explore Community</span>
            <div className="w-6 h-px bg-primary group-hover:w-10 transition-all"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
