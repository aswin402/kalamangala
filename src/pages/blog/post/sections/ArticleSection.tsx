import { type JSX, type ReactNode } from "react";
import type { BlogPostUI } from "../../data/blogPostsSupabase";

interface Props {
  post: BlogPostUI;
  sidebar: ReactNode;
}

export function ArticleSection({ post, sidebar }: Props): JSX.Element {
  return (
    <section className="blog-detail__body">
      <div className="blog-detail__body-grid">
        <aside className="blog-detail__sidebar">{sidebar}</aside>

        <article className="blog-detail__article">
          <div dangerouslySetInnerHTML={{ __html: post.body || "" }} />
        </article>
      </div>
    </section>
  );
}
