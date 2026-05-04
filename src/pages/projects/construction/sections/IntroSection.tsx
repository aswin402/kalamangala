export function IntroSection() {
  return (
    <section className="km-reveal mx-auto max-w-[1500px] px-5 pb-14 pt-6 text-center md:pt-8">
      <h1
        className="
          mx-auto
          max-w-[1080px]
          text-center
          font-['Inter',sans-serif]
          text-[52px]
          font-bold
          leading-[0.88]
          tracking-[-0.075em]
          text-foreground
          sm:text-[70px]
          md:text-[94px]
          lg:text-[126px]
        "
      >
        Top Construction
        <br />
        Companies in Erode
      </h1>

      <h2
        className="
          mt-4
          text-center
          font-['Inter',sans-serif]
          text-[28px]
          font-black
          leading-none
          tracking-[-0.04em]
          text-foreground
          sm:text-[34px]
          md:text-[46px]
          lg:text-[52px]
        "
      >
        Leading Construction Company in Tamil Nadu
      </h2>

      <p
        className="
          mx-auto
          mt-[42px]
          w-full
          max-w-[1540px]
          text-center
          font-['Inter',sans-serif]
          text-[18px]
          font-semibold
          leading-[1.28]
          tracking-[-0.045em]
          text-foreground
          sm:text-[21px]
          md:text-[25px]
          lg:text-[27px]
        "
      >
        Welcome to Kalamangala, one of the{" "}
        <span
          className="
            font-bold
            text-[#0094ff]
            underline
            decoration-[#0094ff]
            decoration-[2px]
            underline-offset-[3px]
          "
        >
          top construction companies in Erode
        </span>{" "}
        known for delivering excellence in every structure we create. We
        specialize in transforming spaces into landmarks that inspire modern
        living and sustainable growth. With a reputation built on trust, quality,
        and innovation, Kalamangala stands as a name synonymous with integrity
        and craftsmanship in the construction industry of Tamil Nadu.
      </p>

      <button
        className="
          mt-[38px]
          h-[34px]
          w-[198px]
          rounded-full
          bg-card-green
          font-['Inter',sans-serif]
          text-[14px]
          font-bold
          tracking-[-0.02em]
          text-white-text
          transition-all
          duration-300
          hover:scale-105
          hover:bg-primary
          hover:text-foreground
        "
      >
        Contact Us
      </button>
    </section>
  );
}