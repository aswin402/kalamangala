import { type JSX } from 'react';
import { BlogPostMeta } from '../components/BlogPostMeta';
import type { BlogPostUI } from '../../data/blogPostsSupabase';

export function IntroSection({ post }: { post: BlogPostUI }): JSX.Element {
  return (
    <section
      className="mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(48px,7vw,88px)] pb-[clamp(32px,4vw,56px)]"
      style={{ maxWidth: '1660px' }}
    >
      <div className="grid grid-cols-1 gap-10 items-start sm:grid-cols-2 sm:gap-[clamp(32px,3.5vw,60px)] lg:grid-cols-[1.15fr_1fr] lg:gap-[clamp(48px,4vw,72px)]">
        <div>
          <h1
            className="font-['Inter',sans-serif] text-[clamp(30px,4.2vw,52px)] font-black leading-[1.04] tracking-[-0.05em] text-foreground mb-4 max-w-[640px]"
          >
            {post.title}
          </h1>
          <BlogPostMeta post={post} />
          {post.sub_header && (
            <p className="font-['Inter',sans-serif] text-[clamp(16px,1.8vw,20px)] font-semibold leading-[1.5] tracking-[-0.01em] text-muted-foreground mt-5 max-w-[580px]">
              {post.sub_header}
            </p>
          )}
        </div>

        <div className="w-full self-end pb-2">
          <div className="relative rounded-xl overflow-hidden w-full">
            <img
              src={post.image}
              alt={post.title}
              className="block w-full h-[clamp(260px,30vw,400px)] object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
