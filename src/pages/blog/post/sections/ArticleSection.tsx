import { type JSX, type ReactNode } from "react";
import type { BlogPostUI } from "../../data/blogPostsSupabase";

interface Props {
  post: BlogPostUI;
  sidebar: ReactNode;
}

export function ArticleSection({ post, sidebar }: Props): JSX.Element {
  return (
    <section
      className="mx-auto px-[clamp(20px,4vw,64px)] pb-[clamp(40px,5vw,72px)]"
      style={{ maxWidth: '1380px' }}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[360px_1fr] lg:gap-[clamp(40px,4vw,72px)] lg:items-start">
        <aside data-reveal data-x="-30" data-duration="1.0">
          {sidebar}
        </aside>

        <article
          data-reveal
          data-y="30"
          data-duration="1.0"
          data-delay="0.1"
          className="max-w-[820px]"
          dangerouslySetInnerHTML={{ __html: post.body || "" }}
        />
      </div>
    </section>
  );
}
