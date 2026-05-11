import { useEffect, useRef, useState, useCallback } from "react";
import { MarqueeText } from "../../global/components/MarqueeText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlogCard } from "./components/BlogCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { BLOG_POSTS } from "./data/blogPosts";
import { fetchPublishedPosts, fetchPublishedPostsCount, type BlogPostUI } from "./data/blogPostsSupabase";
import "./blog-page.css";

const MARQUEE_TEXT = "Blogs. Articles. Informations. Blogs. Articles. ";
const PAGE_SIZE = 6;

export function BlogPage() {
  const sentinelRef = useRef<HTMLDivElement>(null);

  const [posts, setPosts] = useState<BlogPostUI[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const loadedPagesRef = useRef<Set<number>>(new Set([0]));

  /* ── Data fetching ── */
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Infinite scroll observer ── */
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

  return (
    <>
      {/* ── Hero marquee ── */}
      <section className="relative">
        <div
          className="
            relative w-full overflow-hidden
            h-[250px]
            sm:h-[300px]
            md:h-[340px]
            lg:h-[384px]
          "
        >
          <div className="blog-hero-fade-in">
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

      {/* ── Blog grid section ── */}
      <section className="relative pt-[40px] pb-[72px] md:pt-[52px] md:pb-[100px]">
        <div className="mx-auto w-full max-w-[1720px] px-[16px] sm:px-[20px] md:px-[28px] lg:px-[44px] 3xl:max-w-[2000px]">
          <div className="mb-[24px] md:mb-[32px] blog-heading-enter">
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
                className="
                  grid gap-[14px]
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  md:gap-[16px]
                "
              >
                {posts.map((post, index) => (
                  <div
                    key={post.id}
                    className="km-reveal"
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>

              <div ref={sentinelRef} className="h-4" />

              {isLoadingMore && (
                <div className="flex justify-center w-full mt-8 mb-4">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
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
