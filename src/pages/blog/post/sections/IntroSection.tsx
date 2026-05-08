/* IntroSection — 2-column editorial intro
   Left: title → meta → body paragraphs
   Right: image with dark overlay + styled text */
import type { BlogPost } from "../../data/blogPosts";
import { BlogPostMeta } from "../components/BlogPostMeta";

interface Props {
  post: BlogPost;
}

export function IntroSection({ post }: Props) {
  return (
    <section className="blog-detail__intro">
      <div className="blog-detail__intro-grid">

        {/* ── Left: title + meta + body paragraphs ── */}
        <div className="blog-detail__intro-left">
          <h1 className="blog-detail__title">{post.title}</h1>
          <BlogPostMeta post={post} />

          <div className="blog-detail__intro-body">
            <p>
              Whether you are planning to build your dream home, invest in
              commercial property, or develop a residential layout, selecting a
              Trusted building firm in Tiruppur is essential for long-term value
              and peace of mind.
            </p>
            <p>
              Construction is not just about completing a structure; it is about
              delivering durability, functionality, and timeless design.
              Kalamangala has established itself as a dependable construction
              partner by consistently delivering projects that combine structural
              strength with architectural excellence.
            </p>
            <p>
              With a commitment to transparency, quality craftsmanship, and
              customer satisfaction, Kalamangala continues to redefine
              construction standards in Tiruppur.
            </p>
          </div>
        </div>

        {/* ── Right: image with overlay title ── */}
        <div className="blog-detail__intro-right">
          <div className="blog-detail__intro-img-wrap">
            <img
              src={post.image}
              alt={post.title}
              className="blog-detail__intro-img"
              loading="eager"
            />
            {/* Overlay — replicates the blog card overlay content */}
            <div className="blog-detail__intro-overlay">
              <div className="blog-detail__intro-overlay-content">
                <span className="overlay-bold">Trusted Building</span>{" "}
                <span className="overlay-script">Firm</span>
                <br />
                <span className="overlay-script overlay-script--sm">in</span>{" "}
                <span className="overlay-bold overlay-bold--xl">Tiruppur</span>
                <br />
                <span className="overlay-script overlay-golden">Kalamangala</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
