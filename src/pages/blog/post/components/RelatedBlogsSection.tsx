import { type JSX, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "../../components/BlogCard";
import { fetchPublishedPosts, type BlogPostUI } from "../../data/blogPostsSupabase";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Props {
  excludeId?: string;
}

export function RelatedBlogsSection({ excludeId }: Props): JSX.Element {
  const [posts, setPosts] = useState<BlogPostUI[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPublishedPosts();
      setPosts(data.filter((p) => p.id !== excludeId).slice(0, 3));
    };
    loadPosts();
  }, [excludeId]);

  return (
    <section className="blog-detail__related">
      <div className="blog-detail__related-inner">
        <div className="blog-detail__related-header">
          <SectionLabel className="font-semibold">Similar Topic</SectionLabel>
          <h2 className="blog-detail__related-title">Related Blogs</h2>
        </div>
        <div className="blog-detail__related-grid">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
        <div className="blog-detail__related-cta">
          <Link to="/blog" className="blog-detail__cta-btn blog-detail__cta-btn--primary">
            Read All Blogs
          </Link>
          <Link to="/blog" className="blog-detail__cta-btn blog-detail__cta-btn--arrow" aria-label="Read all blogs">
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
