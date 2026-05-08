import type { BlogPostUI } from '../../data/blogPostsSupabase';

export function BlogPostMeta({ post }: { post: BlogPostUI }) {
  return (
    <div className="flex items-center gap-[10px] flex-wrap mt-4">
      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary text-[10px] font-extrabold tracking-[0.08em] uppercase text-primary-foreground">
        {post.category}
      </span>
      <span className="w-[3px] h-[3px] rounded-full bg-muted-foreground shrink-0 inline-block" />
      <span className="text-[11px] font-bold tracking-[0.06em] uppercase text-muted-foreground">
        {post.date}
      </span>
      <span className="w-[3px] h-[3px] rounded-full bg-muted-foreground shrink-0 inline-block" />
      <span className="text-[11px] font-bold tracking-[0.06em] uppercase text-muted-foreground">
        {post.readTime}
      </span>
    </div>
  );
}
