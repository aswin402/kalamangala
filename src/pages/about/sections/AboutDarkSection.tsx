import { Play } from "lucide-react";

import img1 from "@/assets/aboutpage/img1.avif";
import img2 from "@/assets/aboutpage/img2.avif";
import img3 from "@/assets/aboutpage/img3.avif";

export const AboutDarkSection = () => {
  return (
    <section className="w-full rounded-t-[14px] bg-[#17392f] px-5 pb-[88px] pt-[74px] text-white md:px-10 md:pb-[110px] md:pt-[94px] lg:px-[112px] lg:pb-[135px] lg:pt-[118px]">
      <div className="mx-auto max-w-[1760px]">
        {/* TEXT TOP AREA */}
        <div className="mb-[72px] md:mb-[100px] lg:mb-[135px]">
          <div className="mb-[26px] flex items-center gap-[10px]">
            <span className="whitespace-nowrap text-[13px] font-bold uppercase tracking-[-0.02em] text-[#f4a77f]">
              ✺ About Us
            </span>

            <div className="h-px flex-1 bg-white/75" />
          </div>

          <h2 className="max-w-[980px] text-[30px] font-semibold leading-[1.08] tracking-[-0.055em] text-white md:text-[36px] lg:text-[40px]">
            Welcome to Kalamangala – Where Quality Meets Legacy.
          </h2>

          <div className="mt-[22px] grid grid-cols-1 gap-[28px] md:mt-[26px] lg:grid-cols-[1.65fr_0.75fr] lg:gap-[120px]">
            <p className="max-w-[1500px] text-[18px] font-semibold leading-[1.4] tracking-[-0.035em] text-white md:text-[22px] lg:text-[24px] lg:leading-[1.28] lg:tracking-[-0.06em]">
              With over 33 years of expertise in construction, we craft premium
              living spaces designed to stand the test of time. Our projects
              blend superior infrastructure, modern amenities, and lush green
              landscapes to create thriving communities. At Kalamangala, we
              don&apos;t just build homes—we shape lifestyles, ensuring every
              detail enhances your comfort, convenience, and connection with
              nature.
            </p>

            <div className="flex items-end pb-[8px]">
              <p className="max-w-[520px] text-[17px] font-semibold leading-[1.38] tracking-[-0.03em] text-white md:text-[20px] lg:text-[21px]">
                We seamlessly blend nature with modern living, designing
                communities with lush gardens and green spaces for a serene yet
                contemporary lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="grid min-h-0 grid-cols-1 gap-[10px] xl:min-h-[870px] xl:grid-cols-[2.05fr_1fr_1fr]">
          {/* LEFT BIG IMAGE */}
          <div className="relative h-[420px] overflow-hidden rounded-[10px] md:h-[620px] xl:h-auto">
            <img
              src={img1}
              alt="Kalamangala aerial community"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-x-[12px] bottom-[12px] rounded-[8px] bg-black/45 px-4 pb-4 pt-4 backdrop-blur-[14px] md:px-[24px] md:pb-[22px] md:pt-[24px] lg:px-[30px] lg:pb-[30px] lg:pt-[34px]">
              <p className="max-w-[900px] text-[15px] font-bold leading-[1.35] tracking-[-0.02em] text-white md:text-[18px] lg:text-[21px]">
                &quot;With over 33 years in the construction industry,
                I&apos;ve learned that quality is everything — that&apos;s why
                I&apos;ve made it the top priority in every project at
                Kalamangala&quot;
              </p>

              <div className="mt-[16px] flex items-center gap-[12px] md:mt-[22px] lg:mt-[28px] lg:gap-[16px]">
                <div className="h-[52px] w-[52px] overflow-hidden rounded-[4px] bg-white/20 md:h-[62px] md:w-[62px] lg:h-[70px] lg:w-[70px]" />

                <div>
                    <p className="text-[18px] font-semibold leading-none tracking-[-0.035em] text-white md:text-[22px] lg:text-[24px]">
                    R.Krishnamurthy
                  </p>
                    <p className="mt-[6px] text-[13px] font-medium leading-[1.2] tracking-[-0.02em] text-white/80 md:text-[17px] lg:mt-[9px] lg:text-[19px]">
                    Founder &amp; Managing Director of Kalamangala
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE STACK */}
          <div className="grid grid-rows-[1fr_260px] gap-[10px] md:grid-rows-[1fr_300px] xl:grid-rows-[1fr_360px]">
            <div className="relative overflow-hidden rounded-[10px]">
              <img
                src={img2}
                alt="Kalamangala green community"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-[12px] bottom-[12px] rounded-[8px] bg-[#17392f]/60 px-4 pb-4 pt-4 backdrop-blur-[14px] md:px-[22px] md:pb-[20px] md:pt-[22px] lg:px-[28px] lg:pb-[26px] lg:pt-[28px]">
                <p className="text-[15px] font-bold leading-[1.3] tracking-[-0.02em] text-white md:text-[18px] lg:text-[21px]">
                  &quot;At Kalamangala, we don&apos;t just build spaces — we
                  create lasting legacies, where quality, innovation and nature
                  come together to redefine modern living&quot;
                </p>

                <div className="mt-[14px] flex items-center gap-[10px] md:mt-[18px] lg:mt-[24px] lg:gap-[15px]">
                  <div className="h-[50px] w-[50px] overflow-hidden rounded-[4px] bg-white/20 md:h-[58px] md:w-[58px] lg:h-[66px] lg:w-[66px]" />

                  <div>
                    <p className="text-[17px] font-semibold leading-none tracking-[-0.03em] text-white md:text-[20px] lg:text-[23px]">
                      Ramji S.K
                    </p>
                    <p className="mt-[6px] text-[13px] font-medium leading-[1.25] tracking-[-0.02em] text-white/80 md:text-[17px] lg:mt-[8px] lg:text-[23px]">
                      Managing Director of Kalamangala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-[10px] bg-[#f4f1e5] text-[#17392f]">
              <h3 className="text-[62px] font-semibold leading-none tracking-[-0.06em] md:text-[78px] lg:text-[92px]">
                33+
              </h3>
              <p className="mt-[12px] text-[16px] font-medium tracking-[-0.03em] text-[#17392f]/80 md:text-[20px] lg:mt-[20px] lg:text-[22px]">
                Years of Experience
              </p>
            </div>
          </div>

          {/* RIGHT VIDEO IMAGE */}
          <div className="relative h-[420px] overflow-hidden rounded-[10px] md:h-[560px] xl:h-auto">
            <img
              src={img3}
              alt="Kalamangala building at night"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/45 backdrop-blur-[1px] md:h-[128px] md:w-[128px] lg:h-[148px] lg:w-[148px]"
            >
              <span className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white md:h-[92px] md:w-[92px] lg:h-[104px] lg:w-[104px]">
                <Play className="ml-[5px] h-[28px] w-[28px] fill-[#17392f] text-[#17392f] md:h-[32px] md:w-[32px] lg:ml-[7px] lg:h-[36px] lg:w-[36px]" />
              </span>
            </button>

            <p className="absolute left-1/2 top-[62%] w-[220px] -translate-x-1/2 text-center text-[17px] font-bold leading-[1.2] tracking-[-0.03em] text-white md:text-[20px] lg:text-[22px]">
              Learn more
              <br />
              About Kalamangala
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
