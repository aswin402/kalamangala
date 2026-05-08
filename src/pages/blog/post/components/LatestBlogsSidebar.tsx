/* LatestBlogsSidebar — compact left-aligned blog list
   ◎ MORE ARTICLES label → large "Latest Blogs" heading →
   stacked items: [thumb with overlay] | [muted date] [medium title] */
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../../data/blogPosts";

export function LatestBlogsSidebar() {
  const posts = BLOG_POSTS.slice(0, 5);

  return (
    <div className="latest-sidebar bg-black/8 rounded-xl">
      {/* Label */}
      <div className="latest-sidebar__label-row">
        <span className="latest-sidebar__circle-icon" />
        <span className="latest-sidebar__label-text">MORE ARTICLES</span>
      </div>

      {/* Heading */}
      <h3 className="latest-sidebar__heading">Latest Blogs</h3>

      {/* Posts list */}
      <ul className="latest-sidebar__list">
        {posts.map((p) => (
          <li key={p.id} className="latest-sidebar__item">
            <Link to={`/blog/${p.slug}`} className="latest-sidebar__link">
              {/* Thumbnail with overlay */}
              <div className="latest-sidebar__thumb-wrap">
                <img
                  src={p.image}
                  alt={p.title}
                  className="latest-sidebar__thumb"
                  loading="lazy"
                />
                {/* Overlay with styled text */}
                <div className="latest-sidebar__thumb-overlay">
                  <div className="latest-sidebar__thumb-overlay-content">
                    {p.overlayContent}
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="latest-sidebar__info">
                <span className="latest-sidebar__date">{p.date}</span>
                <span className="latest-sidebar__title">{p.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
