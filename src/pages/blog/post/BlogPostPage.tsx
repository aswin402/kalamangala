/* BlogPostPage — thin orchestrator
   Each visual section is imported from sections/.
   All article text lives in data/articleContent.ts.
   All reusable UI lives in components/.
*/
import { useParams } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogPosts";
import { ARTICLE_PART_1, ARTICLE_PART_2 } from "./data/articleContent";
import { IntroSection } from "./sections/IntroSection";
import { ArticleSection } from "./sections/ArticleSection";
import { GallerySection } from "./sections/GallerySection";
import { LatestBlogsSidebar } from "./components/LatestBlogsSidebar";
import { NewsletterCard } from "./components/NewsletterCard";
import { RelatedBlogsSection } from "./components/RelatedBlogsSection";
import img1 from "@/assets/construction-company/img1.webp";
import img2 from "@/assets/construction-company/img2.webp";
import img7 from "@/assets/construction-company/img7.webp";
import img8 from "@/assets/construction-company/img8.webp";
import "./blog-post.css";
import "../blog.css";

const MOSAIC_IMAGES = [img1, img2, img7, img8];

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug) ?? BLOG_POSTS[0];

  return (
    <div className="blog-detail">

      {/* 1. Editorial intro — title, lead paragraph, hero image */}
      <IntroSection post={post} />

      {/* 2. Article body & stacked sidebar (Latest Blogs + Newsletter) */}
      <ArticleSection
        blocks={[...ARTICLE_PART_1, ...ARTICLE_PART_2]}
        sidebar={
          <div className="blog-detail__sidebar-stack">
            <LatestBlogsSidebar />
            <NewsletterCard />
          </div>
        }
      />

      {/* 4. Image mosaic gallery */}
      <GallerySection images={MOSAIC_IMAGES} />

      {/* 5. Related blogs with CTA */}
      <RelatedBlogsSection excludeId={post.id} />

    </div>
  );
}
