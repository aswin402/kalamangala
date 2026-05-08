import { type JSX } from 'react';
import { BlogPostMeta } from '../components/BlogPostMeta';
import type { BlogPostUI } from '../../data/blogPostsSupabase';

interface Props {
  post: BlogPostUI;
}

export function IntroSection({ post }: Props): JSX.Element {
  return (
    <section className="blog-detail__intro">
      <div className="blog-detail__intro-grid">
        <div className="blog-detail__intro-left">
          <h1 className="blog-detail__title">{post.title}</h1>
          <BlogPostMeta post={post} />
          {post.sub_header && (
            <p className="blog-detail__sub-header">{post.sub_header}</p>
          )}
        </div>

        <div className="blog-detail__intro-right">
            <div className="blog-detail__intro-img-wrap">
              <img
                src={post.image}
                alt={post.title}
                className="blog-detail__intro-img"
                loading="eager"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
