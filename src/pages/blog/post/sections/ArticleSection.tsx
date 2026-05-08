/* ArticleSection — sidebar + article content
   Accepts:
     blocks   → typed ArticleBlock[] data from articleContent.ts
     sidebar  → ReactNode (LatestBlogsSidebar or NewsletterCard)
*/
import type { ReactNode } from "react";
import type { ArticleBlock } from "../data/articleContent";

interface Props {
  blocks: ArticleBlock[];
  sidebar: ReactNode;
}

/* Renders a single typed block */
function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="blog-detail__section-title">
          {block.content as string}
        </h2>
      );
    case "h2-center":
      return (
        <h2 className="blog-detail__section-title blog-detail__section-title--centered">
          {block.content as string}
        </h2>
      );
    case "h3":
      return (
        <h3 className="blog-detail__subsection-title">
          {block.content as string}
        </h3>
      );
    case "p":
      return <p>{block.content as string}</p>;
    case "ul":
      return (
        <ul>
          {(block.content as string[]).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export function ArticleSection({ blocks, sidebar }: Props) {
  return (
    <section className="blog-detail__body">
      <div className="blog-detail__body-grid">

        {/* Sidebar slot — swapped per section (Latest Blogs | Newsletter) */}
        <aside className="blog-detail__sidebar">{sidebar}</aside>

        {/* Article content — rendered from typed block data */}
        <article className="blog-detail__article">
          {blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

      </div>
    </section>
  );
}
