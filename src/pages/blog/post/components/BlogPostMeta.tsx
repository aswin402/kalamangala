import type { BlogPostUI } from '../../data/blogPostsSupabase';

export function BlogPostMeta({ post }: { post: BlogPostUI }) {
  return (
    <div className="blog-detail__meta">
      <span className="blog-detail__meta-pill">{post.category}</span>
      <span className="blog-detail__meta-dot" />
      <span className="blog-detail__meta-text">{post.date}</span>
      <span className="blog-detail__meta-dot" />
      <span className="blog-detail__meta-text">{post.readTime}</span>
    </div>
  );
}
