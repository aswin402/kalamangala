import { Link } from "react-router-dom";
import img9 from "../../../../assets/construction-company/img9.webp";

export function CTABottomSection() {
  return (
    <section
      className="
        mx-auto
        mt-[72px]
        w-full
        max-w-[1480px]
        px-5
        xl:px-0
        md:mt-[96px]
        3xl:max-w-[1800px]
      "
    >
      <article
        className="
          la-card
          grid
          w-full
          overflow-hidden
          rounded-[28px]
          bg-card-green
          text-white-text
          lg:h-[480px]
          lg:grid-cols-[0.98fr_1.02fr]
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="
            relative
            h-[280px]
            w-full
            overflow-hidden
            rounded-[28px]
            sm:h-[340px]
            md:h-[400px]
            lg:h-[480px]
          "
        >
          <img
            src={img9}
            alt="Begin your home-building journey"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            flex
            h-full
            flex-col
            justify-center
            px-6
            py-8
            sm:px-8
            md:px-10
            lg:px-[38px]
            lg:py-[34px]
            xl:px-[38px]
            2xl:px-[38px]
          "
        >
          <h2
            className="
              text-primary
              text-[32px]
              font-bold
              leading-[1.06]
              tracking-[-0.055em]
              sm:text-[38px]
              md:text-[44px]
              lg:text-[46px]
              xl:text-[48px]
            "
          >
            Begin Your Home-Building
            <br />
            Journey with Kalamangala
          </h2>

          <div
            className="
              mt-[28px]
              max-w-[760px]
              text-[14px]
              font-semibold
              leading-[1.68]
              tracking-[-0.02em]
              text-white-text
              sm:text-[15px]
              md:text-[15px]
              lg:text-[14px]
              xl:text-[14px]
              2xl:text-[15px]
            "
          >
            <p>
              Whether you're ready to buy or just exploring options, our real
              estate specialists are here to help. Tell us your goals — we'll
              recommend the most suitable{" "}
              <span className="font-bold">house layouts</span>,{" "}
              <span className="font-bold">gated community projects</span>, or{" "}
              <span className="font-bold">
                investment-ready properties in Karur
              </span>
              .
            </p>
          </div>

          <Link
            to="/contact"
            className="
              mt-[32px]
              inline-flex
              h-[44px]
              w-fit
              items-center
              justify-center
              rounded-full
              bg-primary
              px-8
              font-['Inter',sans-serif]
              text-[15px]
              font-bold
              tracking-[-0.02em]
              text-foreground
              no-underline
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#FF894D]
              hover:text-white
            "
          >
            Book a Free Consultation Today
          </Link>
        </div>
      </article>
    </section>
  );
}
