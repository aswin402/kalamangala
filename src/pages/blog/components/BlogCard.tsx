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
      className="blog-card group"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* SVG clipPath — objectBoundingBox scales with element */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id={`mc-${cardId}`} clipPathUnits="objectBoundingBox">
            <path d="
              M 0.035,0
              L 0.965,0
              Q 1,0 1,0.04
              L 1,0.96
              Q 1,1 0.965,1
              L 0.68,1
              C 0.635,1 0.62,0.98 0.62,0.955
              C 0.62,0.93 0.615,0.91 0.585,0.91
              L 0.035,0.91
              Q 0,0.91 0,0.87
              L 0,0.04
              Q 0,0 0.035,0
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      <div className="blog-card__media">
        <div
          className="blog-card__image-shape"
          style={{ clipPath: `url(#mc-${cardId})` }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="blog-card__image"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 700ms ease-out",
            }}
            loading="lazy"
          />

          {/* Dark luxury overlay — fades in on hover */}
          <div
            className="blog-card__hover-scrim"
            style={{
              opacity: hovered ? 0.65 : 0,
              transition: "opacity 500ms ease-out",
            }}
          />

          {/* Hover title — slides up and fades in */}
          <div
            className="blog-card__hover-title-wrap"
            style={{
              opacity: hovered ? 1 : 0,
              pointerEvents: "none",
              transition: "opacity 500ms ease-out",
            }}
          >
            <h3
              className="blog-card__hover-title"
              style={{
                transform: hovered ? "translateY(0)" : "translateY(20px)",
                transition: "transform 500ms ease-out",
              }}
            >
              {post.title}
            </h3>
          </div>
        </div>

        <div className="blog-card__meta">
          <span className="blog-card__tag">{post.date}</span>
          <span className="blog-card__tag">{post.category}</span>
          <span className="blog-card__tag">{post.readTime}</span>
        </div>
      </div>

      <Link className="blog-card__title" to={`/blog/${post.slug}`}>
        <span className="blog-card__title-arrow">↳</span>
        <span className="blog-card__title-text">{post.title}</span>
      </Link>
    </article>
  );
}
