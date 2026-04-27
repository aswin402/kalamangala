import { Play } from "lucide-react";

import img1 from "@/assets/aboutpage/img1.avif";
import img2 from "@/assets/aboutpage/img2.avif";
import img3 from "@/assets/aboutpage/img3.avif";

export const AboutDarkSection = () => {
  return (
    <section className="w-full rounded-t-[14px] bg-[#17392f] px-[112px] pb-[135px] pt-[118px] text-white">
      <div className="mx-auto max-w-[1760px]">
        {/* TEXT TOP AREA */}
        <div className="mb-[135px]">
          <div className="mb-[26px] flex items-center gap-[10px]">
            <span className="whitespace-nowrap text-[13px] font-bold uppercase tracking-[-0.02em] text-[#f4a77f]">
              ✺ About Us
            </span>

            <div className="h-px flex-1 bg-white/75" />
          </div>

          <h2 className="max-w-[980px] text-[40px] font-semibold leading-[1.03] tracking-[-0.065em] text-white">
            Welcome to Kalamangala – Where Quality Meets Legacy.
          </h2>

          <div className="mt-[26px] grid grid-cols-[1.65fr_0.75fr] gap-[120px]">
            <p className="max-w-[1500px] text-[24px] font-semibold leading-[1.28] tracking-[-0.06em] text-white">
              With over 33 years of expertise in construction, we craft premium
              living spaces designed to stand the test of time. Our projects
              blend superior infrastructure, modern amenities, and lush green
              landscapes to create thriving communities. At Kalamangala, we
              don&apos;t just build homes—we shape lifestyles, ensuring every
              detail enhances your comfort, convenience, and connection with
              nature.
            </p>

            <div className="flex items-end pb-[8px]">
              <p className="max-w-[520px] text-[21px] font-semibold leading-[1.32] tracking-[-0.055em] text-white">
                We seamlessly blend nature with modern living, designing
                communities with lush gardens and green spaces for a serene yet
                contemporary lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="grid min-h-[870px] grid-cols-[2.05fr_1fr_1fr] gap-[10px]">
          {/* LEFT BIG IMAGE */}
          <div className="relative overflow-hidden rounded-[10px]">
            <img
              src={img1}
              alt="Kalamangala aerial community"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-x-[12px] bottom-[12px] rounded-[8px] bg-black/45 px-[30px] pb-[30px] pt-[34px] backdrop-blur-[14px]">
              <p className="max-w-[900px] text-[21px] font-bold leading-[1.28] tracking-[-0.055em] text-white">
                &quot;With over 33 years in the construction industry,
                I&apos;ve learned that quality is everything — that&apos;s why
                I&apos;ve made it the top priority in every project at
                Kalamangala&quot;
              </p>

              <div className="mt-[28px] flex items-center gap-[16px]">
                <div className="h-[70px] w-[70px] overflow-hidden rounded-[4px] bg-white/20" />

                <div>
                  <p className="text-[24px] font-semibold leading-none tracking-[-0.055em] text-white">
                    R.Krishnamurthy
                  </p>
                  <p className="mt-[9px] text-[19px] font-medium leading-none tracking-[-0.045em] text-white/80">
                    Founder &amp; Managing Director of Kalamangala
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE STACK */}
          <div className="grid grid-rows-[1fr_360px] gap-[10px]">
            <div className="relative overflow-hidden rounded-[10px]">
              <img
                src={img2}
                alt="Kalamangala green community"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-[12px] bottom-[12px] rounded-[8px] bg-[#17392f]/60 px-[28px] pb-[26px] pt-[28px] backdrop-blur-[14px]">
                <p className="text-[21px] font-bold leading-[1.25] tracking-[-0.055em] text-white">
                  &quot;At Kalamangala, we don&apos;t just build spaces — we
                  create lasting legacies, where quality, innovation and nature
                  come together to redefine modern living&quot;
                </p>

                <div className="mt-[24px] flex items-center gap-[15px]">
                  <div className="h-[66px] w-[66px] overflow-hidden rounded-[4px] bg-white/20" />

                  <div>
                    <p className="text-[23px] font-semibold leading-none tracking-[-0.055em] text-white">
                      Ramji S.K
                    </p>
                    <p className="mt-[8px] text-[23px] font-medium leading-[1.15] tracking-[-0.055em] text-white/80">
                      Managing Director of Kalamangala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-[10px] bg-[#f4f1e5] text-[#17392f]">
              <h3 className="text-[92px] font-semibold leading-none tracking-[-0.075em]">
                33+
              </h3>
              <p className="mt-[20px] text-[22px] font-medium tracking-[-0.055em] text-[#17392f]/80">
                Years of Experience
              </p>
            </div>
          </div>

          {/* RIGHT VIDEO IMAGE */}
          <div className="relative overflow-hidden rounded-[10px]">
            <img
              src={img3}
              alt="Kalamangala building at night"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex h-[148px] w-[148px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/45 backdrop-blur-[1px]"
            >
              <span className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-white">
                <Play className="ml-[7px] h-[36px] w-[36px] fill-[#17392f] text-[#17392f]" />
              </span>
            </button>

            <p className="absolute left-1/2 top-[62%] w-[220px] -translate-x-1/2 text-center text-[22px] font-bold leading-[1.2] tracking-[-0.055em] text-white">
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