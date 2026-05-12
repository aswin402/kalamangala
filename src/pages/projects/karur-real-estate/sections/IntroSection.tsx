import { Link } from "react-router-dom";

export function IntroSection() {
  return (
    <section className="km-reveal mx-auto max-w-[1500px] px-5 pb-14 pt-6 text-center md:pt-8 3xl:max-w-[1800px]">
      <h1
        className="
          mx-auto
          max-w-[1080px]
          text-center
          font-['Inter',sans-serif]
          text-[42px]
          font-bold
          leading-[0.92]
          tracking-[-0.065em]
          text-foreground
          sm:text-[58px]
          md:text-[78px]
          lg:text-[106px]
        "
      >
        House Layouts &
        <br />
        Gated Community Real Estate in Karur
      </h1>

      <p
        className="
          mx-auto
          mt-[42px]
          w-full
          max-w-[1540px]
          text-center
          font-['Inter',sans-serif]
          text-[17px]
          font-semibold
          leading-[1.38]
          tracking-[-0.035em]
          text-foreground
          sm:text-[20px]
          md:text-[23px]
          lg:text-[25px]
        "
      >
        Kalamangala is shaping Karur's growing real estate future with
        well-planned residential layouts, secure gated communities, and complete
        property guidance. Whether you're a first-time buyer or an investor
        seeking a premium lifestyle, we combine trust, transparency, and smart
        planning to help you choose the right location and make the right
        investment in a fast-developing residential hub like{" "}
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
          Karur
        </span>
        .
      </p>

      <Link
        to="/contact"
        className="
          mt-[38px]
          inline-flex
          h-[44px]
          items-center
          justify-center
          rounded-full
          bg-card-green
          px-8
          font-['Inter',sans-serif]
          text-[15px]
          font-bold
          tracking-[-0.02em]
          text-white-text
          no-underline
          transition-all
          duration-300
          hover:scale-105
          hover:bg-primary
          hover:text-foreground
        "
      >
        Schedule a Site Visit
      </Link>
    </section>
  );
}
