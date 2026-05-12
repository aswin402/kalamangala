import { Link } from "react-router-dom";

export function IntroSection() {
  return (
    <section className="km-reveal mx-auto max-w-[1500px] px-5 pb-14 pt-6 text-center md:pt-8 3xl:max-w-[1800px]">
      <h1
        className="
          mx-auto
          max-w-[1280px]
          text-center
          font-['Inter',sans-serif]
          text-[42px]
          font-bold
          leading-[0.92]
          tracking-[-0.065em]
          text-foreground
          sm:text-[58px]
          md:text-[78px]
          lg:text-[96px]
        "
      >
        Discover Erode's Most Exclusive
        <br />
        Luxury Residential Layouts
        <br />
        <span className="text-primary">Own Your Legacy Today!</span>
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
        Kalamangala is an emerging luxury property developer in Tamil Nadu,
        known for creating elegant, future-ready residential communities in Erode.
        Driven by quality, innovation, and trust, we design thoughtfully
        planned, legally compliant layouts with premium amenities that enhance
        modern living while ensuring long-term value for homeowners and investors.
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
