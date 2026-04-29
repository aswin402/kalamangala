import logo from "../../../../assets/thewaterfront/logo.avif";

export function WaterfrontHeader() {
  return (
    <section
      className="
        waterfront-animate
        relative
        flex
        min-h-[42vh]
        w-full
        items-start
        justify-center
        overflow-hidden
        px-0
        pt-[70px]
        pb-[34px]

        sm:min-h-[92vh]
        sm:items-center
        sm:px-4
        sm:pb-0
        sm:pt-6
      "
    >
      <img
        src={logo}
        alt="The Waterfront"
        className="
          w-[98vw]
          max-w-none
          object-contain
          opacity-90

          sm:w-[86vw]
          sm:max-w-[900px]

          md:w-[78vw]
          md:max-w-[1150px]

          lg:w-[74vw]
          lg:max-w-[1450px]

          xl:w-[72vw]
        "
      />
    </section>
  );
}