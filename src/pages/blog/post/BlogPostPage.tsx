import { type JSX, useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fetchPostBySlug, fetchPublishedPosts, type BlogPostUI } from "../data/blogPostsSupabase";
import { Skeleton } from "@/components/ui/Skeleton";
import { IntroSection } from "./sections/IntroSection";
import { ArticleSection } from "./sections/ArticleSection";
import { GallerySection } from "./sections/GallerySection";
import { LatestBlogsSidebar } from "./components/LatestBlogsSidebar";
import { NewsletterCard } from "./components/NewsletterCard";
import { RelatedBlogsSection } from "./components/RelatedBlogsSection";
import img1 from "@/assets/construction-company/img1.webp";
import img2 from "@/assets/construction-company/img2.webp";
import img7 from "@/assets/construction-company/img7.webp";
import img8 from "@/assets/construction-company/img8.webp";

gsap.registerPlugin(ScrollTrigger);

const MOSAIC_IMAGES = [img1, img2, img7, img8];

export function BlogPostPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostUI | null>(null);
  const [sidebarPosts, setSidebarPosts] = useState<BlogPostUI[]>([]);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostUI[]>([]);
  const [loading, setLoading] = useState(true);

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      if (!slug) {
        setLoading(false);
        return;
      }

      const [postData, allPosts] = await Promise.all([
        fetchPostBySlug(slug),
        fetchPublishedPosts(0, 20),
      ]);

      setPost(postData);

      if (postData && allPosts.length > 0) {
        const sidebar = allPosts.filter((p) => p.id !== postData.id).slice(0, 5);
        const related = allPosts.filter((p) => p.id !== postData.id).slice(0, 3);
        setSidebarPosts(sidebar);
        setRelatedPosts(related);
      }

      setLoading(false);
    };
    loadPost();
  }, [slug]);

  useEffect(() => {
    if (loading || !post) return;

    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      ScrollTrigger.getAll().forEach((t) => t.kill());

      const reveals = page.querySelectorAll<HTMLElement>("[data-reveal]");
      reveals.forEach((el) => {
        const delay = parseFloat(el.dataset.delay ?? "0");
        const duration = parseFloat(el.dataset.duration ?? "0.9");
        const xFrom = parseFloat(el.dataset.x ?? "0");
        const yFrom = parseFloat(el.dataset.y ?? "40");

        gsap.fromTo(
          el,
          { opacity: 0, x: xFrom, y: yFrom },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      const staggerGroups = page.querySelectorAll<HTMLElement>("[data-reveal-stagger]");
      staggerGroups.forEach((parent) => {
        const children = Array.from(parent.children) as HTMLElement[];
        if (children.length === 0) return;
        const parentDelay = parseFloat((parent as HTMLElement).dataset.delay ?? "0");
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: parentDelay,
            stagger: 0.1,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: parent,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, page);

    return () => {
      ctx.revert();
    };
  }, [loading, post]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <section
          className="mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(48px,7vw,88px)] pb-[clamp(32px,4vw,56px)]"
          style={{ maxWidth: "1660px" }}
        >
          <div className="grid grid-cols-1 gap-10 items-start sm:grid-cols-2 sm:gap-[clamp(32px,3.5vw,60px)] lg:grid-cols-[1.15fr_1fr] lg:gap-[clamp(48px,4vw,72px)]">
            <div className="space-y-4">
              <Skeleton className="w-full max-w-[640px] h-[clamp(30px,4.2vw,52px)] rounded-xl" />
              <div className="flex gap-3">
                <Skeleton className="w-20 h-6 rounded-md" />
                <Skeleton className="w-24 h-6 rounded-md" />
                <Skeleton className="w-16 h-6 rounded-md" />
              </div>
              <Skeleton className="w-full max-w-[580px] h-[clamp(16px,1.8vw,20px)] rounded-md" />
            </div>
            <div className="w-full self-end pb-2">
              <Skeleton className="w-full h-[clamp(260px,30vw,400px)] rounded-xl" />
            </div>
          </div>
        </section>
        <section className="px-[clamp(20px,4vw,64px)] pb-[clamp(32px,4vw,56px)]">
          <div className="max-w-[1660px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            <div className="space-y-4">
              <Skeleton className="w-full h-64 rounded-xl" />
              <Skeleton className="w-full h-40 rounded-xl" />
            </div>
            <div className="space-y-6">
              <Skeleton className="w-full h-48 rounded-xl" />
              <Skeleton className="w-full h-32 rounded-xl" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="min-h-screen">
      <IntroSection post={post} />

      <ArticleSection
        post={post}
        sidebar={
          <div className="flex flex-col gap-8">
            <LatestBlogsSidebar posts={sidebarPosts} />
            <NewsletterCard />
          </div>
        }
      />

      <GallerySection images={MOSAIC_IMAGES} />
      <RelatedBlogsSection posts={relatedPosts} />
    </div>
  );
}
