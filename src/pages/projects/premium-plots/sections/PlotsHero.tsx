import img1 from "../../../../assets/premium-residential-plots-in-coimbatore/img1.jpg";

export function PlotsHero() {
  return (
    <section className="km-reveal w-full pt-[18px]">
      <div className="mx-auto h-[255px] w-full overflow-hidden rounded-[10px] md:h-[360px] lg:h-[454px]">
        <img
          src={img1}
          alt="Premium residential plots in Coimbatore"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}