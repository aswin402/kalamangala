export function QuoteSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-32">
      <div className="bg-[#fcfbf7] border border-foreground/5 rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 text-[180px] font-serif text-foreground/5 pointer-events-none">
          “
        </div>
        <p className="text-xl md:text-2xl font-medium text-foreground/80 leading-relaxed text-center relative z-10 italic">
          "Kalamangala houses are designed with your life and happiness in
          mind. Every project we undertake is a step towards building a better
          future, where you can live your best life, surrounded by nature and
          modern comforts."
        </p>
        <p className="text-center mt-8 font-bold text-primary tracking-widest uppercase text-xs">
          — Kalamangala
        </p>
      </div>
    </section>
  );
}
