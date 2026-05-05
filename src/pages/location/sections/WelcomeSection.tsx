export function WelcomeSection() {
  return (
    <section className="la-reveal mx-auto mt-[34px] flex w-full max-w-[1540px] flex-col items-center px-5 pb-[58px] text-center md:mt-[42px]">
      <h1 className="max-w-[900px] font-['Inter'] text-[44px] font-bold leading-[0.82] tracking-[-0.07em] text-foreground sm:text-[56px] md:text-[108px] xl:text-[124px]">
        Welcome to The
        <br />
        Waterfront
      </h1>

      <h2 className="mt-[16px] font-['Inter'] text-[20px] font-black leading-[1.05] tracking-[-0.05em] text-foreground md:text-[38px] xl:text-[45px]">
        Erode&apos;s Most Connected Riverside Address
      </h2>

      <p className="mx-auto mt-[32px] max-w-[1060px] font-['Inter'] text-[16px] font-semibold leading-[1.36] tracking-[-0.03em] text-foreground md:mt-[48px] md:text-[23px] xl:text-[26px] xl:leading-[1.48] xl:mt-[56px] xl:max-w-[1300px]">
        Every masterpiece begins with a perfect setting. At{" "}
        <span className="font-black">Kalamangala</span>, we believe the soul of
        every luxury home lies in its location — where life feels effortless,
        nature feels near, and the city stays within reach.
      </p>

      <button className="mt-[38px] h-[34px] min-w-[198px] rounded-full bg-card-green px-10 font-['Inter'] text-[14px] font-bold tracking-[-0.04em] text-white transition duration-300 hover:scale-105 hover:bg-primary">
        Contact Us
      </button>
    </section>
  );
}
