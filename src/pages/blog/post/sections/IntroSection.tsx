import { type JSX } from 'react';
import { BlogPostMeta } from '../components/BlogPostMeta';
import type { BlogPostUI } from '../../data/blogPostsSupabase';

export function IntroSection({ post }: { post: BlogPostUI }): JSX.Element {
  return (
    <section
      className="mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(48px,7vw,88px)] pb-[clamp(32px,4vw,56px)]"
      style={{ maxWidth: '1800px' }}
    >
      <div data-reveal data-x="-40" data-duration="1.2" className="mb-6">
          <h1
            className="font-['Inter',sans-serif] text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.04] tracking-[-0.05em] text-foreground text-start"
          >
            {post.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 items-start sm:grid-cols-2 sm:gap-[clamp(32px,3.5vw,60px)] lg:grid-cols-[1.15fr_1fr] lg:gap-[clamp(48px,4vw,72px)]">
          <div data-reveal data-y="30" data-duration="1.0">
            <BlogPostMeta post={post} />
            {post.sub_header && (
              <p className="font-['Inter',sans-serif] text-[24px] font-semibold leading-[1.3] tracking-[-0.04em] text-[#1d322d] mt-5 max-w-[920px]">
                {post.sub_header}
              </p>
            )}
          </div>

          <div
            data-reveal
            data-x="40"
            data-duration="1.2"
            data-delay="0.15"
            className="w-full self-end pb-2"
          >
            <div className="relative rounded-xl overflow-hidden w-full">
              <img
                src={post.image}
                alt={post.title}
                className="block w-full h-[clamp(300px,35vw,500px)] object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
    </section>
  );
}
