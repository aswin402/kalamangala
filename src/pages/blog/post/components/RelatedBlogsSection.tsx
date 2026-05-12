import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { BlogPostUI } from "../../data/blogPostsSupabase";

interface Props {
  posts: BlogPostUI[];
}

function RelatedBlogCard({ post }: { post: BlogPostUI }) {
  const [hovered, setHovered] = useState(false);

  const shortId = post.id.slice(0, 8);
  const cardIdMobile = `related-mobile-${shortId}`;
  const cardIdTablet = `related-tablet-${shortId}`;
  const cardIdDesktop = `related-desktop-${shortId}`;

  return (
    <article
      className="group relative flex cursor-pointer flex-col"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          {/* Mobile */}
          <clipPath id={cardIdMobile} clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0.035,0
                L 0.965,0
                Q 1,0 1,0.04
                L 1,0.96
                Q 1,1 0.965,1
                L 0.70,1
                C 0.655,1 0.635,0.982 0.625,0.952
                C 0.615,0.925 0.595,0.895 0.545,0.895
                L 0.035,0.895
                Q 0,0.895 0,0.855
                L 0,0.04
                Q 0,0 0.035,0
                Z
              "
            />
          </clipPath>

          {/* Tablet */}
          <clipPath id={cardIdTablet} clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0.035,0
                L 0.965,0
                Q 1,0 1,0.04
                L 1,0.96
                Q 1,1 0.965,1
                L 0.64,1
                C 0.595,1 0.575,0.982 0.565,0.954
                C 0.555,0.928 0.535,0.900 0.485,0.900
                L 0.035,0.900
                Q 0,0.900 0,0.860
                L 0,0.04
                Q 0,0 0.035,0
                Z
              "
            />
          </clipPath>

          {/* Desktop */}
          <clipPath id={cardIdDesktop} clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0.035,0
                L 0.965,0
                Q 1,0 1,0.04
                L 1,0.96
                Q 1,1 0.965,1
                L 0.585,1
                C 0.545,1 0.525,0.982 0.515,0.955
                C 0.505,0.928 0.488,0.902 0.44,0.902
                L 0.035,0.902
                Q 0,0.902 0,0.862
                L 0,0.04
                Q 0,0 0.035,0
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      <Link
        to={`/blog/${post.slug}`}
        className="absolute inset-0 z-10 no-underline"
        aria-label={post.title}
      />

      <div className="relative">
        <div
          className="related-blog-image relative aspect-[4/3] overflow-hidden rounded-xl"
          style={
            {
              "--mobile-clip": `url(#${cardIdMobile})`,
              "--tablet-clip": `url(#${cardIdTablet})`,
              "--desktop-clip": `url(#${cardIdDesktop})`,
            } as React.CSSProperties
          }
        >
          <img
            src={post.image}
            alt={post.title}
            className="block h-full w-full object-cover"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 700ms ease-out",
            }}
            loading="lazy"
          />

          <div
            className="pointer-events-none absolute inset-0 z-[3] bg-black"
            style={{
              opacity: hovered ? 0.65 : 0,
              transition: "opacity 500ms ease-out",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 z-[4] flex items-center justify-center p-6 text-center"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 500ms ease-out",
            }}
          >
            <h3
              className="max-w-[420px] font-['Inter',sans-serif] text-[clamp(20px,2.2vw,32px)] font-black leading-[1.05] tracking-[-0.045em] text-white"
              style={{
                transform: hovered ? "translateY(0)" : "translateY(20px)",
                transition: "transform 500ms ease-out",
                textShadow: "0 4px 18px rgba(0,0,0,0.5)",
              }}
            >
              {post.title}
            </h3>
          </div>
        </div>

        <div className="absolute bottom-[2px] left-[2px] z-20 flex items-center gap-[4px] md:gap-[5px]">
          <span className="inline-flex h-[21px] items-center whitespace-nowrap rounded-[5px] border border-border bg-background px-[7px] text-[8px] font-bold uppercase leading-none tracking-[0.01em] text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:h-[22px] md:px-[8px] md:text-[8.3px] lg:h-[23px] lg:text-[8.5px]">
            {post.date}
          </span>

          <span className="inline-flex h-[21px] items-center whitespace-nowrap rounded-[5px] border border-border bg-background px-[7px] text-[8px] font-bold uppercase leading-none tracking-[0.01em] text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:h-[22px] md:px-[8px] md:text-[8.3px] lg:h-[23px] lg:text-[8.5px]">
            {post.category}
          </span>

          <span className="inline-flex h-[21px] items-center whitespace-nowrap rounded-[5px] border border-border bg-background px-[7px] text-[8px] font-bold uppercase leading-none tracking-[0.01em] text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:h-[22px] md:px-[8px] md:text-[8.3px] lg:h-[23px] lg:text-[8.5px]">
            {post.readTime}
          </span>
        </div>
      </div>

      <Link
        to={`/blog/${post.slug}`}
        className="flex items-start gap-1.5 pt-3 font-['Inter',sans-serif] text-[15px] font-semibold leading-[1.4] tracking-[-0.02em] text-foreground no-underline transition-colors group-hover:text-primary"
      >
        <span className="inline-block w-0 shrink-0 translate-x-[-6px] overflow-hidden opacity-0 transition-all duration-300 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100">
          ↳
        </span>

        <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
          {post.title}
        </span>
      </Link>

      <style>{`
        .related-blog-image {
          clip-path: var(--mobile-clip);
        }

        @media (min-width: 640px) {
          .related-blog-image {
            clip-path: var(--tablet-clip);
          }
        }

        @media (min-width: 1024px) {
          .related-blog-image {
            clip-path: var(--desktop-clip);
          }
        }
      `}</style>
    </article>
  );
}

export function RelatedBlogsSection({ posts }: Props): JSX.Element {
  return (
    <section className="px-0 pb-[clamp(56px,7vw,96px)] pt-[clamp(48px,6vw,80px)]">
      <div
        className="mx-auto px-5 sm:px-[30px] md:px-10 lg:px-[60px]"
        style={{ maxWidth: "1800px" }}
      >
        <div data-reveal data-y="30" className="mb-8">
          <SectionLabel className="font-semibold">Similar Topic</SectionLabel>

          <h2 className="mt-2 font-['Inter',sans-serif] text-[clamp(28px,3.5vw,40px)] font-black leading-none tracking-[-0.045em] text-foreground">
            Related Blogs
          </h2>
        </div>

        <div
          data-reveal-stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((p) => (
            <RelatedBlogCard key={p.id} post={p} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-0">
          <Link
            to="/blog"
            className="inline-flex cursor-pointer items-center justify-center rounded-l-lg border-none bg-foreground px-7 py-3.5 font-['Inter',sans-serif] text-[13px] font-bold tracking-[0.02em] text-background no-underline transition-opacity hover:text-background hover:opacity-85"
          >
            Read All Blogs
          </Link>

          <Link
            to="/blog"
            aria-label="Read all blogs"
            className="inline-flex h-12 w-12 items-center justify-center rounded-r-lg bg-primary text-primary-foreground transition-opacity hover:text-primary-foreground hover:opacity-85"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}