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
        { y: 80, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
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
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [tab]);

  return (
    <section ref={sectionRef} className="w-full px-[13px] pb-[51px] pt-[24px] sm:px-[34px] sm:pt-[31px]">
      <div className="mx-auto flex min-h-[430px] w-full max-w-[1360px] flex-col items-center rounded-[18px] bg-card-green px-[25px] pt-[59px] text-center sm:min-h-[400px] sm:px-[46px] sm:pt-[80px]">
        {/* Tabs */}
        <div className="mb-[42px] inline-flex h-[51px] rounded-[9px] border border-white/50 bg-transparent p-[1px] sm:mb-[44px]">
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
                ? "max-w-[350px] text-[20px] leading-[1.3] sm:max-w-[1190px] sm:text-[25px] sm:leading-[1.28]"
                : "max-w-[350px] text-[20px] leading-[1.3] sm:max-w-[1210px] sm:text-[38px] sm:leading-[1.2]"
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