const DARK = "#17352d";
const CREAM = "#f6f3df";

export function CTASection() {
  return (
    <section className="km-reveal mt-16 rounded-[12px] p-8 text-center" style={{ backgroundColor: DARK, color: CREAM }}>
      <h2 className="text-[24px] font-black tracking-[-0.075em] sm:text-[32px]">
        Live Connected. Live Well.
      </h2>
      <p className="mx-auto mt-4 max-w-[500px] text-[10px] font-medium leading-[1.5] tracking-[-0.01em] opacity-80 sm:text-[11px]">
        Invest in a future where nature and infrastructure coexist. Book your
        visit to Kalamangala today and see the growth for yourself.
      </p>

      <button
        className="mt-6 rounded-full px-7 py-3 text-[10px] font-bold uppercase tracking-wide transition hover:scale-105"
        style={{ backgroundColor: CREAM, color: DARK }}
      >
        Schedule a Site Visit
      </button>
    </section>
  );
}
