import { type JSX, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fetchPublishedPosts, type BlogPostUI } from "../../data/blogPostsSupabase";

export function LatestBlogsSidebar(): JSX.Element {
  const [posts, setPosts] = useState<BlogPostUI[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPublishedPosts();
      setPosts(data.slice(0, 5));
    };
    loadPosts();
  }, []);

  if (posts.length === 0) {
    return <div className="latest-sidebar bg-black/8 rounded-xl p-6 text-muted-foreground text-sm">No articles yet</div>;
  }

  return (
    <div className="latest-sidebar bg-black/8 rounded-xl">
      <div className="latest-sidebar__label-row">
        <span className="latest-sidebar__circle-icon" />
        <span className="latest-sidebar__label-text">MORE ARTICLES</span>
      </div>

      <h3 className="latest-sidebar__heading">Latest Blogs</h3>

      <ul className="latest-sidebar__list">
        {posts.map((p) => (
          <li key={p.id} className="latest-sidebar__item">
            <Link to={`/blog/${p.slug}`} className="latest-sidebar__link">
                <div className="latest-sidebar__thumb-wrap">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="latest-sidebar__thumb"
                    loading="lazy"
                  />
                </div>
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
