const DARK = "#17352d";

export function IntroSection() {
  return (
    <>
      <section className="km-reveal mx-auto mt-5 max-w-[720px] text-center">
        <h1 className="mx-auto max-w-[620px] text-[26px] font-black leading-[0.88] tracking-[-0.075em] sm:text-[34px] md:text-[43px]">
          Discover Premium Residential
          <br />
          Plots in Coimbatore at
          <br />
          Kalamangala
        </h1>

        <p className="mx-auto mt-5 max-w-[690px] text-[10px] font-medium leading-[1.45] tracking-[-0.02em] sm:text-[11px]">
          Whether you are looking to build your dream home, secure a smart
          investment, or own a peaceful residential space, Kalamangala offers
          planned plots in a fast-growing location with comfort, connectivity,
          and long-term value.
        </p>

        <p className="mx-auto mt-4 max-w-[760px] text-[10px] font-medium leading-[1.55] tracking-[-0.02em] sm:text-[11px]">
          Residential plots give you the freedom to design your home your way.
          At Kalamangala, every plot is part of a carefully planned community
          with essential facilities, road access, green surroundings, and a
          neighbourhood made for family living.
        </p>

        <button
          className="mt-5 rounded-full px-5 py-2 text-[9px] font-bold uppercase tracking-[-0.01em] text-white transition hover:scale-105"
          style={{ backgroundColor: DARK }}
        >
          Enquire Now
        </button>
      </section>

      {/* TEXT SECTIONS */}
      <section className="km-reveal mt-12 max-w-[840px]">
        <h2 className="max-w-[520px] text-[18px] font-black leading-[0.95] tracking-[-0.06em] sm:text-[23px]">
          Prime Location – The Heart of
          <br />
          Coimbatore’s Growth Corridor
        </h2>

        <p className="mt-3 max-w-[840px] text-[10px] font-medium leading-[1.5] tracking-[-0.02em] sm:text-[11px]">
          Kalamangala is located in a fast-developing residential belt,
          offering quick access to key roads, schools, offices, transport
          points, and essential services. This makes it ideal for both
          peaceful living and future land appreciation.
        </p>
      </section>

      <section className="km-reveal mt-11 max-w-[780px]">
        <h2 className="text-[18px] font-black leading-[0.95] tracking-[-0.06em] sm:text-[23px]">
          A Premium Gated Community in Tamil Nadu with World-Class
          <br className="hidden sm:block" />
          Amenities
        </h2>

        <p className="mt-3 max-w-[800px] text-[10px] font-medium leading-[1.5] tracking-[-0.02em] sm:text-[11px]">
          Living in a premium gated community means better security, improved
          planning, cleaner surroundings, and a comfortable lifestyle. Every
          element at Kalamangala is planned to support modern residential
          needs.
        </p>
      </section>

      {/* SPACER LIKE SCREENSHOT */}
      <div className="h-[270px] sm:h-[420px] md:h-[520px]" />

      <section className="km-reveal max-w-[900px]">
        <p className="text-[10px] font-medium leading-[1.45] tracking-[-0.02em] sm:text-[11px]">
          Kalamangala brings together location, infrastructure, nature, and
          community comfort, making it a reliable choice for people who want a
          calm home environment with access to everyday convenience.
        </p>
      </section>
    </>
  );
}
