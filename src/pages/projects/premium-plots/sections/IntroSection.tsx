const DARK = "#0d2b22";

export function IntroSection() {
  return (
    <section className="km-reveal w-full px-5 py-10 text-center sm:px-6 md:py-12 lg:py-6">
      <h1
        className="
          mx-auto
          max-w-[980px]
          font-['Inter',sans-serif]
          text-[38px]
          font-bold
          leading-[0.96]
          tracking-[-0.075em]
          text-[#0d2b22]
          sm:text-[48px]
          md:text-[62px]
          lg:text-[68px]
          xl:text-[72px]
        "
      >
        <span className="block">Discover Premium Residential</span>
        <span className="block">Plots in Coimbatore at</span>
        <span className="block">Kalamangala</span>
      </h1>

      <div
        className="
          mx-auto
          mt-8
          flex
          max-w-[1380px]
          flex-col
          items-center
          gap-6
          md:mt-9
          md:gap-7
        "
      >
        <p
          className="
            mx-auto
            max-w-[1320px]
            text-center
            font-['Inter',sans-serif]
            text-[17px]
            font-bold
            leading-[1.42]
            tracking-[-0.045em]
            text-[#0d2b22]
            sm:text-[19px]
            md:text-[22px]
            lg:text-[24px]
          "
        >
          Welcome to Kalamangala, where modern living meets timeless serenity.
          If you are looking for{" "}
          <a href="#" className="font-bold text-[#008cff] underline">
            premium residential plots in Coimbatore
          </a>
          , your search ends here. Nestled amidst nature yet connected to the
          city&apos;s conveniences, Kalamangala offers thoughtfully designed
          residential plots within a premium gated community in Tamil Nadu ideal
          for those who value comfort, security, and sophistication.
        </p>

        <p
          className="
            mx-auto
            max-w-[1380px]
            text-center
            font-['Inter',sans-serif]
            text-[17px]
            font-bold
            leading-[1.42]
            tracking-[-0.045em]
            text-[#0d2b22]
            sm:text-[19px]
            md:text-[22px]
            lg:text-[24px]
          "
        >
          At Kalamangala, we believe your home is more than just a space;
          it&apos;s the foundation for your dreams. Our layouts are meticulously
          planned with attention to detail, ensuring a perfect balance between
          lifestyle, luxury, and long-term investment value. From lush
          landscapes to wide internal roads and eco-friendly infrastructure,
          every element here is crafted to provide a peaceful yet elevated way
          of life.
        </p>
      </div>

      <button
        className="
          mt-8
          h-[34px]
          w-[196px]
          rounded-full
          text-sm
          font-bold
          text-white
          transition
          duration-300
          hover:scale-[1.04]
          md:mt-9
        "
        style={{ backgroundColor: DARK }}
      >
        Contact Us
      </button>
    </section>
  );
}