import { type JSX } from 'react';
import { BlogPostMeta } from '../components/BlogPostMeta';
import type { BlogPostUI } from '../../data/blogPostsSupabase';

export function IntroSection({ post }: { post: BlogPostUI }): JSX.Element {
  return (
    <section
      className="mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(48px,7vw,88px)] pb-[clamp(32px,4vw,56px)]"
      style={{ maxWidth: '1800px' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Hero image — big & centered */}
        <div
          data-reveal
          data-y="30"
          data-duration="1.2"
          className="w-full max-w-[1200px] mt-[30px]"
        >
          <div className="relative rounded-2xl overflow-hidden w-full">
            <img
              src={post.image}
              alt={post.title}
              className="block w-full h-auto"
              loading="eager"
            />
          </div>
        </div>

        {/* Title — centered below image */}
        <div data-reveal data-y="24" data-duration="1.0" data-delay="0.1" className="w-full max-w-[920px] text-center">
          <h1
            className="font-['Inter',sans-serif] text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.04] tracking-[-0.05em] text-foreground"
          >
            {post.title}
          </h1>
        </div>

        {/* Badges — centered below title */}
        <div data-reveal data-y="20" data-duration="1.0" data-delay="0.15" className="flex justify-center">
          <BlogPostMeta post={post} />
        </div>

        {/* Sub-header — centered below badges */}
        {post.sub_header && (
          <div data-reveal data-y="20" data-duration="1.0" data-delay="0.2" className="w-full max-w-[920px] text-center">
            <p className="font-['Inter',sans-serif] text-[clamp(16px,1.8vw,24px)] font-semibold leading-[1.3] tracking-[-0.04em] text-[#1d322d]">
              {post.sub_header}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
