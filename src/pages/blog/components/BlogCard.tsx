import { useState } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blogPosts";

export type { BlogPost };

export function BlogCard({ post }: { post: BlogPost }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="blog-card group"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Inline SVG clipPath — scales with element via objectBoundingBox */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id={`mc-clip-${post.id}`} clipPathUnits="objectBoundingBox">
            <path d="
              M 0.037,0
              L 0.963,0
              Q 1,0 1,0.049
              L 1,0.951
              Q 1,1 0.963,1
              L 0.650,1
              Q 0.617,1 0.617,0.956
              L 0.617,0.929
              Q 0.617,0.885 0.584,0.885
              L 0.037,0.885
              Q 0,0.885 0,0.836
              L 0,0.049
              Q 0,0 0.037,0
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      {/* Visual container */}
      <div className="relative">
        {/* Image card — clipped to memory-card shape */}
        <div
          className="relative aspect-[4/3]"
          style={{ clipPath: `url(#mc-clip-${post.id})` }}
        >
          {/* Image */}
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 700ms ease-out",
            }}
            loading="lazy"
          />

          {/* Normal image overlay text — dims on hover */}
          <div
            className="blog-card__overlay"
            style={{
              opacity: hovered ? 0.15 : 1,
              filter: hovered ? "blur(1px)" : "blur(0px)",
              transition: "opacity 500ms ease-out, filter 500ms ease-out",
            }}
          >
            <div className="blog-card__overlay-content">
              {post.overlayContent}
            </div>
          </div>

          {/* Dark luxury overlay — fades in on hover */}
          <div
            className="absolute inset-0 z-[3] bg-black"
            style={{
              opacity: hovered ? 0.65 : 0,
              transition: "opacity 500ms ease-out",
            }}
          />

          {/* Hover title — slides up and fades in */}
          <div
            className="absolute inset-0 z-[4] flex items-center justify-center px-8 text-center"
            style={{
              opacity: hovered ? 1 : 0,
              pointerEvents: "none",
              transition: "opacity 500ms ease-out",
            }}
          >
            <h3
              className="max-w-[520px] text-[28px] font-black leading-[1.05] tracking-[-0.045em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.5)] md:text-[34px] lg:text-[38px]"
              style={{
                transform: hovered ? "translateY(0)" : "translateY(20px)",
                transition: "transform 500ms ease-out",
              }}
            >
              {post.title}
            </h3>
          </div>
        </div>

        {/* Badges — bg-transparent, page bg shows through the clip notch */}
        <div
          className="
            absolute bottom-[6px] left-[6px] z-20
            flex gap-[6px]
            bg-transparent
          "
        >
          <span className="blog-card__tag">{post.date}</span>
          <span className="blog-card__tag">{post.category}</span>
          <span className="blog-card__tag">{post.readTime}</span>
        </div>
      </div>

      {/* Title below */}
      <div className="pt-[14px]">
        <Link to={`/blog/${post.slug}`} className="blog-card__title">
          <span className="blog-card__title-arrow">↳</span>
          <span className="blog-card__title-text">{post.title}</span>
        </Link>
      </div>
    </article>
  );
}
