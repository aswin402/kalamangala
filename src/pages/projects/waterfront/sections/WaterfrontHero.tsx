import { useEffect, useRef } from "react";
import gsap from "gsap";
import waterfrontImg from "../../../../assets/thewaterfront/img1.avif";

export function WaterfrontHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imgWrap = sectionRef.current?.querySelector("[data-anim='img']");
      const details = sectionRef.current?.querySelector("[data-anim='details']");
      const heading = sectionRef.current?.querySelector("[data-anim='heading']");
      const content = sectionRef.current?.querySelector("[data-anim='content']");

      if (imgWrap) {
        gsap.fromTo(
          imgWrap,
          { y: 50, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.45,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: imgWrap,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

      if (details) {
        gsap.fromTo(
          details,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.35,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: details,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

      if (heading) {
        gsap.fromTo(
          heading,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.35,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

      if (content) {
        const children = content.children;
        Array.from(children).forEach((child, i) => {
          gsap.fromTo(
            child,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              delay: i * 0.15,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: content,
                start: "top 85%",
                toggleActions: "play none none none",
              once: true,
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-[14px] pb-[34px] pt-[38px] text-foreground md:px-10 md:pb-[110px] md:pt-[62px] lg:px-[110px] lg:pb-[120px] lg:pt-[70px]">
      <div className="mx-auto max-w-[1680px]">
        {/* TOP IMAGE + DETAILS */}
        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-[1fr_390px] lg:gap-[36px]">
          {/* IMAGE */}
          <div className="h-[260px] overflow-hidden rounded-[8px] sm:h-[320px] md:h-[405px]" data-anim="img">
            <img
              src={waterfrontImg}
              alt="The Waterfront by Kalamangala"
              className="h-full w-full object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="pt-0 lg:pt-[20px]" data-anim="details">
            <div className="border-b border-foreground/25 pb-[18px]">
              <h4 className="text-[18px] font-semibold leading-none tracking-[-0.045em]">
                Location
              </h4>
              <p className="mt-[15px] text-[19px] font-medium leading-none tracking-[-0.045em] text-foreground/70">
                Modakurichi, Erode
              </p>
            </div>

            <div className="border-b border-foreground/25 py-[18px]">
              <h4 className="text-[18px] font-semibold leading-none tracking-[-0.045em]">
                Theme
              </h4>
              <p className="mt-[15px] text-[19px] font-medium leading-none tracking-[-0.045em] text-foreground/70">
                Modern Roman Elegance
              </p>
            </div>

            <div className="border-b border-foreground/25 py-[18px]">
              <h4 className="text-[18px] font-semibold leading-none tracking-[-0.045em]">
                Size
              </h4>
              <p className="mt-[15px] text-[19px] font-medium leading-none tracking-[-0.045em] text-foreground/70">
                10 Acres
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-[42px] grid grid-cols-1 gap-[64px] md:mt-[84px] md:gap-[38px] lg:mt-[110px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-[55px]">
          {/* LEFT BIG HEADING */}
          <div className="pl-0" data-anim="heading">
            <h2 className="max-w-none text-[18px] font-medium leading-[1.34] tracking-[-0.045em] text-foreground md:max-w-[850px] md:text-[40px] md:leading-[1.08] md:tracking-[-0.06em] lg:text-[44px]">
              Welcome to The Waterfront by Kalamangala – Erode&apos;s first premium
              community living, where nature and modern comforts come together.
              Choose your plot, build your dream home and be part of a secure,
              eco-friendly and like-minded neighborhood.
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-0 lg:pt-[2px]" data-anim="content">
            <h3 className="text-[25px] font-bold leading-none tracking-[-0.055em] text-foreground md:text-[32px] md:font-bold md:tracking-[-0.06em]">
              The Waterfront
            </h3>

            <p className="mt-[24px] max-w-none text-[18px] font-semibold leading-[1.36] tracking-[-0.045em] text-foreground md:max-w-[640px] md:leading-[1.35]">
              Imagine waking up to the gentle sounds of flowing water, strolling
              along tree-lined, wide streets, and watching your children play in
              the lap of lush greenery.
            </p>

            <p className="mt-[24px] max-w-none text-[18px] font-medium leading-[1.36] tracking-[-0.045em] text-foreground md:mt-[32px] md:max-w-[660px] md:leading-[1.35]">
              Transform your lifestyle effortlessly. Simply choose your plot
              size and create your perfect home in Erode&apos;s most in-demand
              address. Here, you are not just building a house – you are
              becoming a part of a highly modern, nature-rich and secured
              community designed for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}