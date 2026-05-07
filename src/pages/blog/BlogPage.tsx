import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MarqueeText } from "../../global/components/MarqueeText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlogCard } from "./components/BlogCard";
import { BLOG_POSTS } from "./data/blogPosts";
import "./blog.css";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_TEXT = "Blogs. Articles. Informations. Blogs. Articles. ";

export function BlogPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const titlePanelRef = useRef<HTMLDivElement>(null);
  const titleContentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titlePanel = titlePanelRef.current;
    const titleContentEl = titleContentRef.current;

    if (!section || !titlePanel || !titleContentEl) return;

    const ctx = gsap.context(() => {
      // ── Entrance animation for marquee ──
      gsap.set(titleContentEl, { y: 50, opacity: 0 });

      gsap.to(titleContentEl, {
        y: 0,
        opacity: 1,
        duration: 1.0,
        delay: 0.15,
        ease: "power3.out",
        force3D: true,
      });

      // ── Scrub the marquee upward toward the navbar ──
      const titleRect = titleContentEl.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const currentOffsetFromSectionTop = titleRect.top - sectionRect.top;
      const targetTop = 80;
      const travelDistance = Math.max(currentOffsetFromSectionTop - targetTop, 60);

      gsap.to(titleContentEl, {
        y: -travelDistance,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${travelDistance}`,
          scrub: 0.6,
        },
      });

      // ── Pin the title panel so the next section scrolls over it ──
      ScrollTrigger.create({
        trigger: titlePanel,
        start: "top top",
        end: () => `+=${titlePanel.offsetHeight}`,
        pin: true,
        pinSpacing: false,
      });

      // ── Fade title from bottom-up as the next section overlaps ──
      const fadeGradient =
        "linear-gradient(to bottom, black 0%, black calc(var(--mask-end, 150) * 1%), transparent calc(var(--mask-end, 150) * 1% + 50px))";

      gsap.fromTo(
        titleContentEl,
        {
          "--mask-end": 150,
          filter: "blur(0px)",
          scale: 1,
        },
        {
          "--mask-end": -30,
          filter: "blur(6px)",
          scale: 0.97,
          ease: "power1.in",
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${titlePanel.offsetHeight}`,
            scrub: 0.6,
            onEnter: () => {
              titleContentEl.style.maskImage = fadeGradient;
              titleContentEl.style.webkitMaskImage = fadeGradient;
            },
            onLeaveBack: () => {
              titleContentEl.style.maskImage = "none";
              titleContentEl.style.webkitMaskImage = "none";
            },
          },
        }
      );

      // ── Animate heading entrance ──
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // ── Stagger-reveal cards ──
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".blog-card");
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.25,
            stagger: 0.12,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── MARQUEE HERO ── */}
      <section ref={sectionRef} className="relative">
        <div
          ref={titlePanelRef}
          className="
            relative z-[1] w-full overflow-visible
            h-[250px]
            sm:h-[300px]
            md:h-[340px]
            lg:h-[384px]
          "
        >
          <div
            ref={titleContentRef}
            className="will-change-transform"
            style={{ backfaceVisibility: "hidden" }}
          >
            <MarqueeText
              text={MARQUEE_TEXT}
              duration={60}
              className="
                w-full overflow-hidden
                pt-[115px] pb-[12px]
                sm:pt-[120px] sm:pb-[14px]
                md:pt-[130px] md:pb-[20px]
                lg:pt-[140px] lg:pb-[24px]
              "
              repeatCount={5}
            />
          </div>
        </div>
      </section>

      {/* ── BLOG CONTENT ── */}
      <section className="relative z-[3] pt-[40px] pb-[72px] md:pt-[52px] md:pb-[100px]">
        <div className="w-full max-w-[1600px] px-[20px] sm:px-[30px] md:pl-[40px] md:pr-[30px] lg:pl-[60px] lg:pr-[40px] 3xl:max-w-[1900px]">
          {/* Section heading */}
          <div ref={headingRef} className="mb-[24px] md:mb-[32px]">
            <SectionLabel className="font-semibold">Information</SectionLabel>
            <h2
              className="
                mt-[6px]
                font-sans text-[26px] font-bold leading-[1.08]
                tracking-[-0.035em] text-foreground
                sm:text-[30px]
                md:text-[34px]
                lg:text-[36px]
              "
            >
              Blogs and Articles
            </h2>
          </div>

          {/* Blog cards grid */}
          <div
            ref={gridRef}
            className="
              grid gap-[14px]
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              md:gap-[16px]
            "
          >
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
