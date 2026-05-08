import { type JSX, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPostBySlug, type BlogPostUI } from "../data/blogPostsSupabase";
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

const MOSAIC_IMAGES = [img1, img2, img7, img8];

export function BlogPostPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostUI | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      if (slug) {
        const data = await fetchPostBySlug(slug);
        setPost(data);
      }
      setLoading(false);
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <IntroSection post={post} />

      <ArticleSection
        post={post}
        sidebar={
          <div className="flex flex-col gap-8">
            <LatestBlogsSidebar />
            <NewsletterCard />
          </div>
        }
      />

      <GallerySection images={MOSAIC_IMAGES} />
      <RelatedBlogsSection excludeId={post.id} />
    </div>
  );
}
