import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export const MissionVisionSection = () => {
  const [tab, setTab] = useState<"mission" | "vision">("mission");
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isMission = tab === "mission";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 50, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.45,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          force3D: true,
        }
      );
    }
  }, [tab]);

  return (
    <section ref={sectionRef} className="w-full px-3 pb-[90px] pt-[24px] sm:px-4 md:px-4 lg:px-9 xl:px-9 2xl:px-[39px] sm:pt-[31px] mb-20 3xl:px-[56px]">
      <div className="mx-auto flex min-h-[340px] w-full flex-col items-center rounded-[18px] bg-card-green px-[25px] pb-[45px] pt-[48px] text-center sm:min-h-[320px] sm:px-[46px] sm:pb-[60px] sm:pt-[60px]">
        {/* Tabs */}
        <div className="mb-[48px] inline-flex h-[51px] rounded-[9px] border border-white/50 bg-transparent p-[1px] sm:mb-[40px]">
          {(["mission", "vision"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`h-[47px] min-w-[94px] rounded-[8px] px-[18px] text-[18px] font-medium capitalize tracking-[-0.025em] transition-all duration-300 sm:min-w-[99px] sm:px-[20px] ${
                tab === item
                  ? "bg-primary text-foreground"
                  : "bg-transparent text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content */}
        <div ref={contentRef} key={tab}>
          <p
            className={`mx-auto font-medium text-white tracking-[-0.045em] ${
              isMission
                ? "max-w-[350px] text-[20px] leading-[1.3] sm:max-w-none sm:text-[25px] sm:leading-[1.28]"
                : "max-w-[350px] text-[20px] leading-[1.3] sm:max-w-none sm:text-[38px] sm:leading-[1.2]"
            }`}
          >
            {isMission
              ? "At Kalamangala, we build premium, lasting developments with top-tier infrastructure, modern amenities, and eco-friendly designs. Focused on quality, innovation, and customer satisfaction, we create thriving, well-connected communities for a superior lifestyle."
              : "To create exceptional living spaces that blend quality, innovation and sustainability, shaping communities that stand the test of time and enhance the way people live."}
          </p>
        </div>
      </div>
    </section>
  );
};