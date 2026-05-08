import { type JSX, useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import Button from '@/components/button';
import { supabase, SUPABASE_TABLE } from '@/api/supabase';
import type { SupabaseBlogPost } from '@/pages/blog/data/blogPostsSupabase';
import { RichTextEditor } from './RichTextEditor';

interface BlogPostFormProps {
  post?: SupabaseBlogPost;
  onClose: () => void;
  onSuccess: () => void;
}

export function BlogPostForm({ post, onClose, onSuccess }: BlogPostFormProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    header: post?.header || '',
    slug: post?.slug || '',
    meta_title: post?.meta_title || '',
    meta_description: post?.meta_description || '',
    sub_header: post?.sub_header || '',
    body: post?.body || '',
    thumbnail_url: post?.thumbnail_url || '',
    read_time_minutes: post?.read_time_minutes || 5,
    published: post?.published || false,
    published_at: post?.published_at || '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(post?.thumbnail_url || '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleHeaderChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      header: value,
      slug: prev.slug || generateSlug(value),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = (requireAll: boolean = true) => {
    const newErrors: Record<string, string> = {};
    if (!formData.header.trim()) newErrors.header = 'Title is required';
    if (requireAll) {
      if (!formData.slug.trim()) newErrors.slug = 'Slug is required';
      if (!formData.body.trim() || formData.body === '<p></p>') newErrors.body = 'Content is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Upload error:', error);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(fileName);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(true)) return;

    setIsLoading(true);

    try {
      let thumbnail_url = formData.thumbnail_url;

      if (imageFile) {
        const uploadedUrl = await uploadImage(imageFile);
        if (uploadedUrl) {
          thumbnail_url = uploadedUrl;
        } else {
          alert('Failed to upload thumbnail image. Please try again.');
          setIsLoading(false);
          return;
        }
      } else if (!imagePreview && formData.thumbnail_url) {
        thumbnail_url = '';
      }

      const postData = {
        header: formData.header,
        slug: formData.slug,
        meta_title: formData.meta_title || null,
        meta_description: formData.meta_description || null,
        sub_header: formData.sub_header || null,
        body: formData.body,
        thumbnail_url: thumbnail_url || null,
        read_time_minutes: formData.read_time_minutes,
        published: formData.published,
        published_at: formData.published ? (formData.published_at || new Date().toISOString()) : null,
      };

      if (post?.id) {
        const { error } = await supabase
          .from(SUPABASE_TABLE.BLOG_POSTS)
          .update(postData)
          .eq('id', post.id);

        if (error) {
          console.error('Update error:', error);
          alert(`Failed to update post: ${error.message}`);
          setIsLoading(false);
          return;
        }
      } else {
        const { error } = await supabase
          .from(SUPABASE_TABLE.BLOG_POSTS)
          .insert([postData]);

        if (error) {
          console.error('Insert error:', error);
          alert(`Failed to create post: ${error.message}`);
          setIsLoading(false);
          return;
        }
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to save post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col w-screen h-screen max-w-[1600px] max-h-screen bg-card shadow-2xl">
        <div className="shrink-0 flex items-center justify-between px-8 py-5 border-b border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground">
            {post ? 'Edit Post' : 'Create New Post'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form id="blog-post-form" onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.header}
                  onChange={(e) => handleHeaderChange(e.target.value)}
                  placeholder="Enter post title"
                  className={`w-full px-4 py-3 bg-background border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.header ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.header && <p className="text-xs text-red-600">{errors.header}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Sub Header
                </label>
                <textarea
                  value={formData.sub_header}
                  onChange={(e) => setFormData((p) => ({ ...p, sub_header: e.target.value }))}
                  placeholder="Optional sub header"
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={formData.meta_title}
                  onChange={(e) => setFormData((p) => ({ ...p, meta_title: e.target.value }))}
                  placeholder="SEO title"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Meta Description
                </label>
                <textarea
                  value={formData.meta_description}
                  onChange={(e) => setFormData((p) => ({ ...p, meta_description: e.target.value }))}
                  placeholder="SEO description"
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData((p) => ({ ...p, slug: e.target.value }))}
                  placeholder="post-url-slug"
                  className={`w-full px-4 py-3 bg-background border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.slug ? 'border-red-500' : 'border-border'
                  }`}
                />
                {errors.slug && <p className="text-xs text-red-600">{errors.slug}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Read Time (minutes)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={formData.read_time_minutes}
                    onChange={(e) => setFormData((p) => ({ ...p, read_time_minutes: parseInt(e.target.value) || 5 }))}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Status
                  </label>
                  <div className="flex items-center gap-3 h-[50px]">
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, published: true }))}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        formData.published
                          ? 'bg-green-500 text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      Published
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, published: false }))}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        !formData.published
                          ? 'bg-yellow-500 text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      Draft
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Thumbnail Image
                </label>
                <div className="relative">
                  <div className="w-full h-48 rounded-lg border-2 border-dashed border-border bg-background flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary transition-colors overflow-hidden">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">IMG</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Click to upload image
                        </span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml,image/avif,application/pdf"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  {imagePreview && (
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview('');
                      }}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-foreground">
                    Content *
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="text-xs text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    {showPreview ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    {showPreview ? 'Edit' : 'Preview'}
                  </button>
                </div>
                {showPreview ? (
                  <div
                    className="w-full min-h-[300px] p-4 bg-background border border-border rounded-lg prose prose-sm max-w-none overflow-y-auto"
                    dangerouslySetInnerHTML={{ __html: formData.body }}
                  />
                ) : (
                  <RichTextEditor
                    content={formData.body}
                    onChange={(html) => setFormData((p) => ({ ...p, body: html }))}
                    placeholder="Write your content here..."
                  />
                )}
                {errors.body && <p className="text-xs text-red-600">{errors.body}</p>}
              </div>
            </div>
          </div>
        </form>

        <div className="shrink-0 flex items-center justify-end gap-3 px-8 py-5 border-t border-border bg-card">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          {formData.published ? (
            <Button
              type="submit"
              form="blog-post-form"
              variant="primary"
              className="!hover:bg-[#f26422] !hover:text-white rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {post ? 'Updating...' : 'Creating...'}
                </span>
              ) : (
                post ? 'Update Post' : 'Publish Post'
              )}
            </Button>
          ) : (
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="secondary"
                onClick={async (e) => {
                  e.preventDefault();
                  if (!validateForm(false)) return;
                  setIsLoading(true);
                  try {
                    let thumbnail_url = formData.thumbnail_url;
                    if (imageFile) {
                      const uploadedUrl = await uploadImage(imageFile);
                      if (uploadedUrl) thumbnail_url = uploadedUrl;
                    }
                    const postData = {
                      header: formData.header,
                      slug: formData.slug,
                      meta_title: formData.meta_title || null,
                      meta_description: formData.meta_description || null,
                      sub_header: formData.sub_header || null,
                      body: formData.body,
                      thumbnail_url: thumbnail_url || null,
                      read_time_minutes: formData.read_time_minutes,
                      published: false,
                      published_at: null,
                    };
                    if (post?.id) {
                      await supabase.from(SUPABASE_TABLE.BLOG_POSTS).update(postData).eq('id', post.id);
                    } else {
                      await supabase.from(SUPABASE_TABLE.BLOG_POSTS).insert([postData]);
                    }
                    onSuccess();
                    onClose();
                  } catch (error) {
                    console.error('Save draft error:', error);
                    alert('Failed to save draft. Please try again.');
                  } finally {
                    setIsLoading(false);
                  }
                }}
                disabled={isLoading}
                className="rounded-lg"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Saving...
                  </span>
                ) : (
                  'Save as Draft'
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setFormData((p) => ({ ...p, published: true }))}
                className="rounded-lg text-green-600 border-green-600 hover:bg-green-50"
              >
                Publish Instead
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
