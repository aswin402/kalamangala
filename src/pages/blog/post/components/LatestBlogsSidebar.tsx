import { type JSX } from 'react';
import { Link } from "react-router-dom";
import type { BlogPostUI } from "../../data/blogPostsSupabase";

interface Props {
  posts: BlogPostUI[];
}

export function LatestBlogsSidebar({ posts }: Props): JSX.Element {
  if (posts.length === 0) {
    return <div className="p-6 bg-black/8 rounded-xl text-sm text-muted-foreground">No articles yet</div>;
  }

  return (
    <div data-reveal data-x="-30" data-duration="0.9" data-delay="0.05" className="p-8 bg-black/8 rounded-xl">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2.5 h-2.5 rounded-full border-2 border-foreground bg-transparent shrink-0" />
        <span className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-foreground">MORE ARTICLES</span>
      </div>

      <h3 className="font-['Inter',sans-serif] text-[clamp(34px,5vw,42px)] font-black tracking-[-0.045em] leading-[1.05] text-foreground mb-3.5">
        Latest Blogs
      </h3>

      <ul className="list-none m-0 p-0 flex flex-col gap-0" data-reveal-stagger>
        {posts.map((p) => (
          <li key={p.id} className="border-b border-border first:border-t border-border">
            <Link to={`/blog/${p.slug}`} className="flex gap-3 items-start py-3.5 no-underline text-inherit opacity-75 hover:opacity-100 transition-opacity">
              <div className="shrink-0 w-[130px] h-[116px] rounded-lg overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-1 min-w-0 pt-1">
                <span className="text-[13px] font-semibold tracking-[0.04em] uppercase text-muted-foreground">
                  {p.date}
                </span>
                <span className="text-[18px] font-medium leading-[1.25] tracking-[-0.01em] text-foreground line-clamp-3">
                  {p.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
