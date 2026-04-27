import img1 from "../../../../assets/premium-residential-plots-in-coimbatore/img1.jpg";

export function PlotsHero() {
  return (
    <section className="km-reveal pt-2">
      <div className="mx-auto h-[150px] w-full max-w-[740px] overflow-hidden rounded-[7px] sm:h-[190px] md:h-[225px]">
        <img
          src={img1}
          alt="Premium residential plots in Coimbatore"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
