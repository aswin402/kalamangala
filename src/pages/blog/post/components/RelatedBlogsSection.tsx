import { type JSX } from 'react';
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "../../components/BlogCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { BlogPostUI } from "../../data/blogPostsSupabase";

interface Props {
  posts: BlogPostUI[];
}

export function RelatedBlogsSection({ posts }: Props): JSX.Element {
  return (
    <section className="px-0 pt-[clamp(48px,6vw,80px)] pb-[clamp(56px,7vw,96px)]">
      <div className="mx-auto px-5 sm:px-[30px] md:px-10 lg:px-[60px]" style={{ maxWidth: '1800px' }}>
        <div data-reveal data-y="30" className="mb-8">
          <SectionLabel className="font-semibold">Similar Topic</SectionLabel>
          <h2 className="font-['Inter',sans-serif] text-[clamp(28px,3.5vw,40px)] font-black tracking-[-0.045em] text-foreground mt-2 leading-none">
            Related Blogs
          </h2>
        </div>

        <div data-reveal-stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-0 mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center font-['Inter',sans-serif] text-[13px] font-bold tracking-[0.02em] no-underline border-none cursor-pointer px-7 py-3.5 rounded-l-lg bg-foreground text-background hover:opacity-85 hover:text-background transition-opacity"
          >
            Read All Blogs
          </Link>
          <Link
            to="/blog"
            aria-label="Read all blogs"
            className="inline-flex items-center justify-center w-12 h-12 rounded-r-lg bg-primary text-primary-foreground hover:opacity-85 hover:text-primary-foreground transition-opacity"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
