import { type JSX, useState, useMemo, useEffect, useCallback } from 'react';
import { Pencil, Trash2, Plus, LayoutDashboard, Search, ArrowUpDown } from 'lucide-react';
import { supabase, SUPABASE_TABLE } from '@/api/supabase';
import { type BlogPost } from '@/types/schema';
import { BlogPostForm } from './components/BlogPostForm';
import type { SupabaseBlogPost } from '@/pages/blog/data/blogPostsSupabase';
import Button from '@/components/button';

type SortField = 'header' | 'created_at';
type SortOrder = 'asc' | 'desc';

export function AdminDashboardPage(): JSX.Element {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<SupabaseBlogPost | null>(null);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from(SUPABASE_TABLE.BLOG_POSTS)
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const { error } = await supabase
      .from(SUPABASE_TABLE.BLOG_POSTS)
      .delete()
      .eq('id', id);

    if (!error) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post as unknown as SupabaseBlogPost);
    setShowForm(true);
  };

  const handleCreateNew = () => {
    setEditingPost(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingPost(null);
  };

  const handleFormSuccess = () => {
    fetchPosts();
    handleFormClose();
  };

  const filteredAndSortedPosts = useMemo(() => {
    let result = [...posts];

    if (searchQuery) {
      result = result.filter((post) =>
        post.header.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === 'header') {
        comparison = a.header.localeCompare(b.header);
      } else if (sortField === 'created_at') {
        comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [posts, searchQuery, sortField, sortOrder]);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-[1380px] px-[30px] py-10">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <LayoutDashboard
                className="h-5 w-5 text-primary-foreground"
                strokeWidth={2}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                CMS Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Manage your blog posts
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            size="default"
            onClick={handleCreateNew}
            className="!hover:bg-[#f26422] !hover:text-white rounded-lg"
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
            Add New Post
          </Button>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-full text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Thumbnail
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    onClick={() => handleSort('header')}
                  >
                    <span className="flex items-center gap-1">
                      Title
                      <ArrowUpDown className={`w-3 h-3 ${sortField === 'header' ? 'text-primary' : ''}`} />
                    </span>
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    onClick={() => handleSort('created_at')}
                  >
                    <span className="flex items-center gap-1">
                      Date
                      <ArrowUpDown className={`w-3 h-3 ${sortField === 'created_at' ? 'text-primary' : ''}`} />
                    </span>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedPosts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                      No blog posts found. Create your first post!
                    </td>
                  </tr>
                ) : (
                  filteredAndSortedPosts.map((post) => (
                    <tr
                      key={post.id}
                      className="border-b border-border last:border-0 hover:bg-muted/20"
                    >
                      <td className="px-6 py-4">
                        {post.thumbnail_url ? (
                          <img
                            src={post.thumbnail_url}
                            alt={post.header}
                            className="h-12 w-20 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="h-12 w-20 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground">
                            No image
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-foreground line-clamp-1">
                          {post.header}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.created_at).toLocaleDateString('en-IN', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            post.published
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleEdit(post)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                          >
                            <Pencil className="h-3.5 w-3.5" strokeWidth={2} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(post.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-red-500 hover:text-red-500"
                          >
                            <Trash2 className="h-3.5 w-3.5" strokeWidth={2} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {showForm && (
        <BlogPostForm
          post={editingPost || undefined}
          onClose={handleFormClose}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  );
}
