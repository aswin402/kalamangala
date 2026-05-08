/* RelatedBlogsSection — SIMILAR TOPIC label + heading + 3 cards + CTA */
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "../../components/BlogCard";
import { BLOG_POSTS } from "../../data/blogPosts";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Props {
  excludeId?: number;
}

export function RelatedBlogsSection({ excludeId }: Props) {
  // Show up to 3; if not enough unique, show all posts
  const related = BLOG_POSTS.filter((p) => p.id !== excludeId).slice(0, 3);
  const display = related.length > 0 ? related : BLOG_POSTS.slice(0, 3);

  return (
    <section className="blog-detail__related">
      <div className="blog-detail__related-inner">
        <div className="blog-detail__related-header">
          <SectionLabel className="font-semibold">Similar Topic</SectionLabel>
          <h2 className="blog-detail__related-title">Related Blogs</h2>
        </div>
        <div className="blog-detail__related-grid">
          {display.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
        {/* CTA */}
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
