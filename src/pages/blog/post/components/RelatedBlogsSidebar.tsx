import { type JSX, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { BlogPostUI } from "../../data/blogPostsSupabase";

interface Props {
  posts: BlogPostUI[];
  className?: string;
}

export function RelatedBlogsSidebar({ posts, className = "" }: Props): JSX.Element {
  if (posts.length === 0) return <></>;

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2.5 h-2.5 rounded-full border-2 border-foreground bg-transparent shrink-0" />
        <span className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-foreground">
          SIMILAR TOPICS
        </span>
      </div>

      <h3 className="font-['Inter',sans-serif] text-[clamp(34px,5vw,42px)] font-black tracking-[-0.045em] leading-[1.05] text-foreground mb-1">
        Related Blogs
      </h3>

      <div className="flex flex-col gap-6" data-reveal-stagger>
        {posts.map((post) => (
          <RelatedSidebarCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-start gap-0">
        <Link
          to="/blog"
          className="inline-flex cursor-pointer items-center justify-center rounded-l-lg border-none bg-foreground px-7 py-3.5 font-['Inter',sans-serif] text-[13px] font-bold tracking-[0.02em] text-background no-underline transition-opacity hover:opacity-85"
        >
          Read All Blogs
        </Link>
        <Link
          to="/blog"
          aria-label="Read all blogs"
          className="inline-flex h-12 w-12 items-center justify-center rounded-r-lg bg-primary text-primary-foreground transition-opacity hover:opacity-85"
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </div>
  );
}

function RelatedSidebarCard({ post }: { post: BlogPostUI }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group relative flex flex-col gap-3.5 rounded-xl bg-black/8 p-4 transition-all duration-300 hover:bg-black/[0.12]"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="absolute inset-0 z-10 no-underline"
        aria-label={post.title}
      />

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <img
          src={post.image}
          alt={post.title}
          className="block h-full w-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
          loading="lazy"
        />

        <div className="absolute bottom-2 left-2 z-20 flex flex-wrap gap-1">
          <span className="inline-flex h-5 items-center rounded bg-background/90 px-1.5 text-[8px] font-bold uppercase tracking-[0.01em] text-foreground backdrop-blur-sm">
            {post.date}
          </span>
          <span className="inline-flex h-5 items-center rounded bg-background/90 px-1.5 text-[8px] font-bold uppercase tracking-[0.01em] text-foreground backdrop-blur-sm">
            {post.readTime}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <h4 className="font-['Inter',sans-serif] text-[18px] font-semibold leading-[1.3] tracking-[-0.02em] text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h4>
        {post.sub_header && (
          <p className="text-[13.5px] leading-[1.5] text-muted-foreground line-clamp-2 m-0">
            {post.sub_header}
          </p>
        )}
      </div>
    </article>
  );
}
