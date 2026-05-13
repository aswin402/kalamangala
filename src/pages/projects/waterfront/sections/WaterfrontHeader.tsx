import logo from "../../../../assets/thewaterfront/logo.png";

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
          w-[80vw]
          max-w-[400px]
          object-contain
          opacity-90

          sm:w-[70vw]
          sm:max-w-[600px]

          md:w-[60vw]
          md:max-w-[800px]

          lg:w-[55vw]
          lg:max-w-[1000px]

          xl:w-[50vw]
        "
      />
    </section>
  );
}