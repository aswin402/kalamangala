import logo from "../../../../assets/thewaterfront/logo.avif";

export function WaterfrontHeader() {
  return (
    <section className="waterfront-animate relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden px-4 pt-6">
      <img
        src={logo}
        alt="The Waterfront"
        className="
          w-[78vw]
          max-w-[1450px]
          min-w-[760px]
          object-contain
          opacity-90
          md:w-[76vw]
          lg:w-[74vw]
        "
      />
    </section>
  );
}