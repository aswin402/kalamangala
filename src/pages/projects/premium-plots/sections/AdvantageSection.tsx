import img8 from "../../../../assets/premium-residential-plots-in-coimbatore/img8.avif";

export function AdvantageSection() {
  return (
    <section className="km-reveal mt-16 overflow-hidden rounded-[10px] bg-[#eee9cf]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-[20px] font-black leading-none tracking-[-0.06em] sm:text-[26px]">
            Experience the
            <br />
            Kalamangala Advantage
          </h2>

          <p className="mt-4 text-[10px] font-medium leading-[1.5] tracking-[-0.02em] opacity-80 sm:text-[11px]">
            We focus on creating residential environments where infrastructure
            meets nature. Our plots are designed for individuals who value
            peaceful living without compromising on city access.
          </p>

          <p className="mt-3 text-[10px] font-medium leading-[1.5] tracking-[-0.02em] opacity-80 sm:text-[11px]">
            Ownership here means more than just a piece of land; it is a step
            towards a lifestyle of security, space, and community.
          </p>
        </div>

        <div className="h-[200px] md:h-auto">
          <img
            src={img8}
            alt="Kalamangala lifestyle"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
