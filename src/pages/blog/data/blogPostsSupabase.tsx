import { supabase, SUPABASE_TABLE } from '@/api/supabase';

export interface SupabaseBlogPost {
  id: string;
  thumbnail_url: string | null;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  header: string;
  sub_header: string | null;
  body: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  read_time_minutes: number | null;
}

export interface BlogPostUI {
  id: string;
  title: string;
  overlayContent: React.ReactNode;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
  body?: string;
  sub_header?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  published_at?: string | null;
  created_at?: string;
}

export function mapSupabasePostToBlogPost(post: SupabaseBlogPost): BlogPostUI {
  return {
    id: post.id,
    title: post.header,
    overlayContent: (
      <>
        <span className="overlay-bold">{post.header.split(' ').slice(0, 2).join(' ')}</span>
        <br />
        <span className="overlay-script">{post.header.split(' ').slice(2, 4).join(' ')}</span>
        <br />
        <span className="overlay-script overlay-golden">Kalamangala</span>
      </>
    ),
    date: post.published_at
      ? new Date(post.published_at).toLocaleDateString('en-IN', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }).toUpperCase()
      : new Date(post.created_at).toLocaleDateString('en-IN', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }).toUpperCase(),
    category: 'ARTICLES',
    readTime: post.read_time_minutes ? `${post.read_time_minutes} MIN READ` : '5 MIN READ',
    image: post.thumbnail_url || `https://picsum.photos/seed/${post.slug}/800/600`,
    slug: post.slug,
    body: post.body,
    sub_header: post.sub_header,
    meta_title: post.meta_title,
    meta_description: post.meta_description,
    published_at: post.published_at,
    created_at: post.created_at,
  };
}

export async function fetchPublishedPosts(): Promise<BlogPostUI[]> {
  const { data, error } = await supabase
    .from(SUPABASE_TABLE.BLOG_POSTS)
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error || !data || data.length === 0) {
    return [];
  }

  return data.map(mapSupabasePostToBlogPost);
}

export async function fetchPostBySlug(slug: string): Promise<BlogPostUI | null> {
  const { data, error } = await supabase
    .from(SUPABASE_TABLE.BLOG_POSTS)
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !data) {
    return null;
  }

  return mapSupabasePostToBlogPost(data);
}
