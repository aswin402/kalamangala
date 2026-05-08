import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MarqueeText } from "../../global/components/MarqueeText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlogCard } from "./components/BlogCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { BLOG_POSTS } from "./data/blogPosts";
import { fetchPublishedPosts, fetchPublishedPostsCount, type BlogPostUI } from "./data/blogPostsSupabase";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_TEXT = "Blogs. Articles. Informations. Blogs. Articles. ";
const PAGE_SIZE = 6;

export function BlogPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const titlePanelRef = useRef<HTMLDivElement>(null);
  const titleContentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const [posts, setPosts] = useState<BlogPostUI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const loadedPagesRef = useRef<Set<number>>(new Set([0]));

  const loadPosts = useCallback(async (pageNum: number, append: boolean) => {
    if (append && !hasMore) return;

    if (append) {
      setIsLoadingMore(true);
    } else {
      setIsLoading(true);
    }

    const newPosts = await fetchPublishedPosts(pageNum, PAGE_SIZE);

    if (newPosts.length === 0 && append) {
      setHasMore(false);
    } else {
      setPosts((prev) => {
        if (!append) return newPosts;
        const existingIds = new Set(prev.map((p) => p.id));
        const unique = newPosts.filter((p) => !existingIds.has(p.id));
        return [...prev, ...unique];
      });
      setHasMore(newPosts.length === PAGE_SIZE);
    }

    if (append) {
      setIsLoadingMore(false);
    } else {
      setIsLoading(false);
    }
  }, [hasMore]);

  useEffect(() => {
    const init = async () => {
      const count = await fetchPublishedPostsCount();
      if (count === 0) {
        setPosts(BLOG_POSTS as unknown as BlogPostUI[]);
        setIsLoading(false);
        setHasMore(false);
      } else {
        await loadPosts(0, false);
      }
    };
    init();
  }, [loadPosts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore && !isLoading) {
          const nextPage = page + 1;
          if (!loadedPagesRef.current.has(nextPage)) {
            loadedPagesRef.current.add(nextPage);
            setPage(nextPage);
            loadPosts(nextPage, true);
          }
        }
      },
      { rootMargin: "300px" }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
      observer.disconnect();
    };
  }, [hasMore, isLoadingMore, isLoading, page, loadPosts]);

  useEffect(() => {
    const section = sectionRef.current;
    const titlePanel = titlePanelRef.current;
    const titleContentEl = titleContentRef.current;

    if (!section || !titlePanel || !titleContentEl) return;

    const ctx = gsap.context(() => {
      gsap.set(titleContentEl, { y: 50, opacity: 0 });

      gsap.to(titleContentEl, {
        y: 0,
        opacity: 1,
        duration: 1.0,
        delay: 0.15,
        ease: "power3.out",
        force3D: true,
      });

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

      ScrollTrigger.create({
        trigger: titlePanel,
        start: "top top",
        end: () => `+=${titlePanel.offsetHeight}`,
        pin: true,
        pinSpacing: false,
      });

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
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isLoading || posts.length === 0) return;

    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      const newCards = Array.from(grid.querySelectorAll(".blog-card:not(.animated)"));
      if (newCards.length === 0) return;

      newCards.forEach((card) => card.classList.add("animated"));

      gsap.fromTo(
        newCards,
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: grid,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, [posts, isLoading]);

  return (
    <>
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

      <section className="relative z-[3] pt-[40px] pb-[72px] md:pt-[52px] md:pb-[100px]">
        <div className="w-full max-w-[1600px] px-[20px] sm:px-[30px] md:pl-[40px] md:pr-[30px] lg:pl-[60px] lg:pr-[40px] 3xl:max-w-[1900px]">
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

          {isLoading ? (
            <div className="grid gap-[14px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-[16px]">
              {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <Skeleton className="w-full aspect-[4/3] rounded-xl" />
                  <Skeleton className="w-3/4 h-5 rounded-md" />
                  <Skeleton className="w-1/2 h-4 rounded-md" />
                </div>
              ))}
            </div>
          ) : (
            <>
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
                {posts.map((post) => (
                  <div
                    key={post.id}
                    ref={(el) => {
                      if (el) cardRefs.current.set(post.id, el);
                    }}
                    className="blog-card"
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>

              <div ref={sentinelRef} className="h-4" />

              {isLoadingMore && (
                <div className="grid gap-[14px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-[16px] mt-[16px]">
                  {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                    <div key={`skeleton-more-${i}`} className="flex flex-col gap-3">
                      <Skeleton className="w-full aspect-[4/3] rounded-xl" />
                      <Skeleton className="w-3/4 h-5 rounded-md" />
                      <Skeleton className="w-1/2 h-4 rounded-md" />
                    </div>
                  ))}
                </div>
              )}

              {!hasMore && posts.length > 0 && (
                <p className="text-center text-sm text-muted-foreground mt-8">
                  You&apos;ve reached the end
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default BlogPage;
