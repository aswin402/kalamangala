const DARK = "#0d2b22";

export function IntroSection() {
  return (
    <section className="km-reveal mx-auto w-full max-w-[1420px] px-5 pt-[12px] pb-[48px] text-center font-['Inter',sans-serif] text-[#0d2b22]">
      <h1 className="mx-auto max-w-[990px] text-[54px] font-[900] leading-[0.82] tracking-[-0.085em] md:text-[76px]">
        Discover Premium Residential
        <br />
        Plots in Coimbatore at
        <br />
        Kalamangala
      </h1>

      <div className="mx-auto mt-[38px] max-w-[1360px] space-y-[24px] text-[23px] font-[800] leading-[1.34] tracking-[-0.055em]">
        <p>
          Welcome to Kalamangala, where modern living meets timeless serenity.
          If you are looking for{" "}
          <a href="#" className="font-[900] text-[#008cff] underline">
            premium residential plots in
            <br />
            Coimbatore
          </a>
          , your search ends here. Nestled amidst nature yet connected to the
          city&apos;s conveniences, Kalamangala offers
          <br />
          thoughtfully designed residential plots within a premium gated
          community in Tamil Nadu ideal for those who value comfort,
          <br />
          security, and sophistication.
        </p>

        <p>
          At Kalamangala, we believe your home is more than just a space;
          it&apos;s the foundation for your dreams. Our layouts are meticulously
          <br />
          planned with attention to detail, ensuring a perfect balance between
          lifestyle, luxury, and long-term investment value. From lush
          <br />
          landscapes to wide internal roads and eco-friendly infrastructure,
          every element here is crafted to provide a peaceful yet elevated
          <br />
          way of life.
        </p>
      </div>

      <button
        className="mt-[36px] h-[34px] w-[196px] rounded-full text-[14px] font-[800] leading-none tracking-[-0.035em] text-white transition duration-300 hover:scale-[1.04]"
        style={{ backgroundColor: DARK }}
      >
        Contact Us
      </button>
    </section>
  );
}
