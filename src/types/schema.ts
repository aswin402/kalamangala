import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['admin', 'user', 'guest']),
});

export type User = z.infer<typeof UserSchema>;

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;

export const BlogPostSchema = z.object({
  id: z.string().uuid(),
  thumbnail_url: z.string().url().nullable(),
  slug: z.string(),
  meta_title: z.string().nullable(),
  meta_description: z.string().nullable(),
  header: z.string(),
  sub_header: z.string().nullable(),
  body: z.string(),
  published: z.boolean().default(false),
  published_at: z.string().datetime().nullable(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  read_time_minutes: z.number().int().positive().nullable(),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

export const BlogPostInputSchema = BlogPostSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type BlogPostInput = z.infer<typeof BlogPostInputSchema>;
