export function WelcomeSection() {
  return (
    <section className="la-reveal mx-auto mt-[42px] flex w-full max-w-[1260px] flex-col items-center px-5 pb-[58px] text-center">
      <h1 className="max-w-[900px] font-['Inter'] text-[64px] font-black leading-[0.78] tracking-[-0.08em] text-[#132d25] md:text-[108px] xl:text-[124px]">
        Welcome to The
        <br />
        Waterfront
      </h1>

      <h2 className="mt-[18px] font-['Inter'] text-[24px] font-black leading-none tracking-[-0.065em] text-[#132d25] md:text-[38px] xl:text-[45px]">
        Erode&apos;s Most Connected Riverside Address
      </h2>

      <p className="mx-auto mt-[48px] max-w-[1060px] font-['Inter'] text-[17px] font-bold leading-[1.22] tracking-[-0.055em] text-[#132d25] md:text-[23px] xl:text-[26px]">
        Every masterpiece begins with a perfect setting. At{" "}
        <span className="font-black">Kalamangala</span>, we believe the soul of
        every luxury home lies in its location — where life feels effortless,
        nature feels near, and the city stays within reach.
      </p>

      <button className="mt-[38px] h-[34px] min-w-[198px] rounded-full bg-[#132d25] px-10 font-['Inter'] text-[14px] font-bold tracking-[-0.04em] text-[#f7f3df] transition duration-300 hover:scale-105 hover:bg-[#1b3a30]">
        Contact Us
      </button>
    </section>
  );
}