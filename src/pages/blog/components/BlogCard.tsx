import { useState } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blogPosts";
import type { BlogPostUI } from "../data/blogPostsSupabase";

export type { BlogPost };

type AnyBlogPost = BlogPost | BlogPostUI;

export function BlogCard({ post }: { post: AnyBlogPost }) {
  const [hovered, setHovered] = useState(false);
  const cardId = typeof post.id === 'number' ? post.id : post.id.slice(0, 8);

  return (
    <article
      className="flex flex-col cursor-pointer group relative"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id={`mc-${cardId}`} clipPathUnits="objectBoundingBox">
            <path d="M 0.035,0 L 0.965,0 Q 1,0 1,0.04 L 1,0.96 Q 1,1 0.965,1 L 0.68,1 C 0.635,1 0.62,0.98 0.62,0.955 C 0.62,0.93 0.615,0.91 0.585,0.91 L 0.035,0.91 Q 0,0.91 0,0.87 L 0,0.04 Q 0,0 0.035,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10 no-underline" aria-label={post.title} />
      <div className="relative">
        <div
          className="relative overflow-hidden rounded-xl aspect-[4/3]"
          style={{ clipPath: `url(#mc-${cardId})` }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="block w-full h-full object-cover"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 700ms ease-out",
            }}
            loading="lazy"
          />

          <div
            className="absolute inset-0 z-[3] bg-black pointer-events-none"
            style={{
              opacity: hovered ? 0.65 : 0,
              transition: "opacity 500ms ease-out",
            }}
          />

          <div
            className="absolute inset-0 z-[4] flex items-center justify-center p-8 text-center pointer-events-none"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 500ms ease-out",
            }}
          >
            <h3
              className="max-w-[520px] font-['Inter',sans-serif] text-[clamp(24px,2.6vw,38px)] font-black leading-[1.05] tracking-[-0.045em] text-white"
              style={{
                transform: hovered ? "translateY(0)" : "translateY(20px)",
                transition: "transform 500ms ease-out",
                textShadow: '0 4px 18px rgba(0,0,0,0.5)',
              }}
            >
              {post.title}
            </h3>
          </div>
        </div>

        <div className="absolute bottom-1.5 left-1.5 z-20 flex gap-1.5">
          <span className="inline-flex items-center h-[25px] px-2.5 rounded-md border border-border bg-background text-[10px] font-bold tracking-[0.02em] uppercase leading-none text-foreground whitespace-nowrap">
            {post.date}
          </span>
          <span className="inline-flex items-center h-[25px] px-2.5 rounded-md border border-border bg-background text-[10px] font-bold tracking-[0.02em] uppercase leading-none text-foreground whitespace-nowrap">
            {post.category}
          </span>
          <span className="inline-flex items-center h-[25px] px-2.5 rounded-md border border-border bg-background text-[10px] font-bold tracking-[0.02em] uppercase leading-none text-foreground whitespace-nowrap">
            {post.readTime}
          </span>
        </div>
      </div>

      <Link
        className="flex items-start gap-1.5 pt-3.5 font-['Inter',sans-serif] text-[16.5px] font-semibold leading-[1.45] tracking-[-0.02em] text-foreground no-underline transition-colors group-hover:text-primary"
        to={`/blog/${post.slug}`}
      >
        <span className="inline-block shrink-0 w-0 opacity-0 overflow-hidden translate-x-[-6px] transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0">
          ↳
        </span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
          {post.title}
        </span>
      </Link>
    </article>
  );
}
