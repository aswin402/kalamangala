import { useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";
import gsap from "gsap";

import img1 from "@/assets/aboutpage/img1.avif";
import img2 from "@/assets/aboutpage/img2.avif";
import img3 from "@/assets/aboutpage/img3.avif";
import raj from "@/assets/aboutpage/raj.avif";
import rkrish from "@/assets/aboutpage/rkrish.avif";

export const AboutDarkSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll("[data-anim]");
      if (!els) return;

      els.forEach((el) => {
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        const type = el.getAttribute("data-anim");

        if (type === "fade-up") {
          gsap.fromTo(
            el,
            { y: 45, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.35,
              delay,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        } else if (type === "fade-left") {
          gsap.fromTo(
            el,
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.35,
              delay,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        } else if (type === "fade-right") {
          gsap.fromTo(
            el,
            { x: 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.35,
              delay,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        } else if (type === "scale-in") {
          gsap.fromTo(
            el,
            { scale: 0.95, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.45,
              delay,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      });

      const counterEls = sectionRef.current?.querySelectorAll("[data-counter]");
      counterEls?.forEach((el) => {
        const obj = { value: 0 };

        gsap.to(obj, {
          value: 33,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.value)}+`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes slowVideoPulse {
            0% {
              transform: translate(-50%, -50%) scale(0.75);
              opacity: 0.22;
            }
            45% {
              transform: translate(-50%, -50%) scale(1.15);
              opacity: 0.34;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.42);
              opacity: 0;
            }
          }

          @keyframes slowPlayFloat {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              transform: translate(-50%, -50%) scale(1.04);
            }
          }

          .km-video-pulse {
            animation: slowVideoPulse 3.8s ease-in-out infinite;
          }

          .km-video-play {
            animation: slowPlayFloat 3.8s ease-in-out infinite;
          }
        `}
      </style>

      <section
        ref={sectionRef}
        className="relative z-[2] w-full overflow-hidden text-white"
      >
        <div className="w-full rounded-t-[14px] bg-card-green px-[13px] pb-[26px] pt-[30px] sm:px-[18px] sm:pb-[28px] sm:pt-[32px] md:rounded-t-[14px] md:px-[43px] md:pb-[80px] md:pt-[80px] lg:px-[43px] lg:pb-[100px] lg:pt-[85px]">
          <div className="mx-auto max-w-[1200px] min-[1180px]:max-w-[1760px] 3xl:max-w-[2100px]">
            {/* TEXT TOP AREA */}
            <div className="mb-[52px] md:mb-[70px] lg:mb-[90px]">
              <div className="mb-[21px] md:mb-[23px]" data-anim="fade-up">
                <div className="mb-[23px] flex items-center gap-[7px] md:mb-[22px]">
                  <span className="flex h-[11px] w-[11px] items-center justify-center rounded-full border border-primary">
                    <span className="h-[6px] w-[6px] rounded-full bg-primary" />
                  </span>

                  <span className="whitespace-nowrap text-[12px] font-bold uppercase leading-none tracking-[-0.03em] text-primary">
                    About Us
                  </span>
                </div>

                <div className="h-px w-full bg-white/75" />
              </div>

              <h2
                className="max-w-[1120px] text-[30px] font-medium leading-[1.08] tracking-[-0.065em] text-white md:text-[36px] md:leading-[1.08] lg:text-[38px] xl:text-[40px]"
                data-anim="fade-up"
                data-delay="0.1"
              >
                Welcome to Kalamangala – Where Quality Meets Legacy.
              </h2>

              <div className="mt-[22px] grid grid-cols-1 gap-[48px] md:mt-[24px] md:gap-[50px] lg:grid-cols-[1.55fr_0.78fr] lg:gap-[96px] xl:grid-cols-[1.58fr_0.78fr] xl:gap-[125px]">
                <p
                  className="max-w-[1210px] text-justify text-[18px] font-semibold leading-[1.32] tracking-[-0.045em] text-white md:text-left md:text-[24px] md:leading-[1.3] md:tracking-[-0.055em] lg:text-[24px] lg:leading-[1.3] xl:text-[24px]"
                  data-anim="fade-left"
                  data-delay="0.2"
                >
                  With over 33 years of expertise in construction, we craft
                  premium living spaces designed to stand the test of time. Our
                  projects blend superior infrastructure, modern amenities, and
                  lush green landscapes to create thriving communities. At
                  Kalamangala, we don&apos;t just build homes—we shape
                  lifestyles, ensuring every detail enhances your comfort,
                  convenience, and connection with nature.
                </p>

                <div
                  className="flex items-start lg:items-end lg:pb-[3px] xl:pb-[5px]"
                  data-anim="fade-right"
                  data-delay="0.35"
                >
                  <p className="max-w-[550px] text-[18px] font-semibold leading-[1.28] tracking-[-0.045em] text-white md:text-[20px] md:leading-[1.28] lg:text-[20px] xl:text-[20px]">
                    We seamlessly blend nature with modern living, designing
                    communities with lush gardens and green spaces for a serene
                    yet contemporary lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE GRID */}
            <div className="grid min-h-0 grid-cols-1 gap-[10px] md:grid-cols-2 min-[1180px]:min-h-[870px] min-[1180px]:grid-cols-[2.05fr_1fr_1fr]">
              {/* LEFT BIG IMAGE */}
              <div
                className="relative order-1 h-[420px] overflow-hidden rounded-[10px] md:h-[770px] min-[1180px]:h-auto"
                data-anim="scale-in"
              >
                <img
                  src={img1}
                  alt="Kalamangala aerial community"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-[12px] bottom-[12px] rounded-[8px] bg-black/45 px-4 pb-4 pt-4 backdrop-blur-[14px] md:px-[24px] md:pb-[22px] md:pt-[24px] lg:px-[30px] lg:pb-[30px] lg:pt-[34px]">
                  <p className="max-w-[900px] text-[15px] font-medium leading-[1.35] tracking-[-0.02em] text-white md:text-[18px] lg:text-[21px]">
                    &quot;With over 33 years in the construction industry,
                    I&apos;ve learned that quality is everything — that&apos;s
                    why I&apos;ve made it the top priority in every project at
                    Kalamangala&quot;
                  </p>

                  <div className="mt-[16px] flex items-center gap-[12px] md:mt-[22px] lg:mt-[28px] lg:gap-[16px]">
                    <img
                      src={rkrish}
                      alt="R.Krishnamurthy"
                      className="h-[52px] w-[52px] overflow-hidden rounded-[4px] bg-white/20 object-cover md:h-[62px] md:w-[62px] lg:h-[70px] lg:w-[70px]"
                    />

                    <div>
                      <p className="text-[18px] font-medium leading-none tracking-[-0.035em] text-white md:text-[22px] lg:text-[22px]">
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
              <div className="order-2 grid gap-[10px] md:grid-rows-[560px_200px] min-[1180px]:grid-rows-[1fr_260px]">
                {/* IMAGE CARD */}
                <div
                  className="relative min-h-[420px] overflow-hidden rounded-[10px] md:min-h-0"
                  data-anim="scale-in"
                  data-delay="0.15"
                >
                  <img
                    src={img2}
                    alt="Kalamangala green community"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-1/2 top-1/2 w-[calc(100%-24px)] -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-card-green/60 px-[14px] pb-[13px] pt-[13px] backdrop-blur-[14px] md:w-[calc(100%-32px)] md:px-[18px] md:pb-[16px] md:pt-[16px] lg:w-[calc(100%-24px)] lg:px-[22px] lg:pb-[18px] lg:pt-[18px]">
                    <p className="text-[13px] font-medium leading-[1.24] tracking-[-0.02em] text-white md:text-[16px] md:leading-[1.25] lg:text-[18px]">
                      &quot;At Kalamangala, we don&apos;t just build spaces — we
                      create lasting legacies, where quality, innovation and
                      nature come together to redefine modern living&quot;
                    </p>

                    <div className="mt-[10px] flex items-center gap-[9px] md:mt-[13px] md:gap-[11px] lg:mt-[15px] lg:gap-[13px]">
                      <img
                        src={raj}
                        alt="Ramji S.K"
                        className="h-[44px] w-[44px] overflow-hidden rounded-[4px] bg-white/20 object-cover md:h-[52px] md:w-[52px] lg:h-[58px] lg:w-[58px]"
                      />

                      <div>
                        <p className="text-[15px] font-medium leading-none tracking-[-0.03em] text-white md:text-[18px] lg:text-[20px]">
                          Ramji S.K
                        </p>

                        <p className="mt-[5px] text-[12px] font-medium leading-[1.16] tracking-[-0.02em] text-white/80 md:text-[15px] lg:mt-[6px] lg:text-[18px]">
                          Managing Director of Kalamangala
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DESKTOP / TABLET 33+ CARD */}
                <div className="hidden h-full flex-col items-center justify-center rounded-[10px] bg-[#f7f6e9] text-foreground md:flex">
                  <h3
                    className="text-[56px] font-bold leading-none tracking-[-0.06em] lg:text-[60px]"
                    data-counter
                  >
                    33+
                  </h3>

                  <p className="mt-[10px] text-[17px] font-medium tracking-[-0.03em] text-foreground/80 lg:text-[18px]">
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* VIDEO THUMBNAIL */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                aria-label="Play Kalamangala video"
                className="group relative order-3 h-[410px] overflow-hidden rounded-[9px] text-left md:col-span-2 md:h-[560px] min-[1180px]:col-span-1 min-[1180px]:h-auto min-[1180px]:rounded-[10px]"
                data-anim="scale-in"
                data-delay="0.25"
              >
                <img
                  src={img3}
                  alt="Kalamangala building at night"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/28 transition-colors duration-500 group-hover:bg-black/38" />

                <span className="km-video-pulse pointer-events-none absolute left-1/2 top-1/2 h-[82px] w-[82px] rounded-full bg-white/75 md:h-[96px] md:w-[96px] lg:h-[108px] lg:w-[108px]" />

                <span className="km-video-pulse pointer-events-none absolute left-1/2 top-1/2 h-[82px] w-[82px] rounded-full bg-white/60 [animation-delay:1.9s] md:h-[96px] md:w-[96px] lg:h-[108px] lg:w-[108px]" />

                <span className="km-video-play absolute left-1/2 top-1/2 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow-[0_14px_34px_rgba(0,0,0,0.18)] md:h-[74px] md:w-[74px] lg:h-[82px] lg:w-[82px]">
                  <Play className="ml-[4px] h-[22px] w-[22px] fill-foreground text-foreground md:h-[25px] md:w-[25px] lg:h-[28px] lg:w-[28px]" />
                </span>

                <p className="absolute left-1/2 top-[67%] w-[230px] -translate-x-1/2 text-center text-[16px] font-medium leading-[1.08] tracking-[-0.035em] text-white md:top-[62%] md:text-[20px] lg:text-[18px]">
                  Learn more
                  <br />
                  About Kalamangala
                </p>
              </button>

              {/* MOBILE 33+ CARD */}
              <div className="order-4 flex h-[220px] flex-col items-center justify-center rounded-[9px] bg-white text-foreground md:hidden">
                <h3
                  className="text-[100px] font-bold leading-none tracking-[-0.07em]"
                  data-counter
                >
                  33+
                </h3>

                <p className="mt-[11px] text-[16px] font-medium tracking-[-0.03em] text-foreground/85">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-[2px]">
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setIsVideoOpen(false)}
            className="absolute right-[18px] top-[18px] z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white text-foreground shadow-lg transition-transform duration-300 hover:scale-105 md:right-[36px] md:top-[36px]"
          >
            <X className="h-[24px] w-[24px]" />
          </button>

          <div className="relative w-full max-w-[1200px] overflow-hidden rounded-[10px] bg-black shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/S4wGdBpXoNk?autoplay=1&rel=0&modestbranding=1"
                title="Kalamangala Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};