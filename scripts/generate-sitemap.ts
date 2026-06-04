import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Load environment variables manually from .env if not already present
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach((line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      // Remove surrounding quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) {
        process.env[key] = value.trim();
      }
    }
  });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const SITE_URL = 'https://www.kalamangala.com';
const currentDate = new Date().toISOString().split('T')[0];

const staticPages = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'about', changefreq: 'monthly', priority: '0.8' },
  { path: 'the-waterfront', changefreq: 'monthly', priority: '0.9' },
  { path: 'amenities', changefreq: 'monthly', priority: '0.7' },
  { path: 'location-advantage', changefreq: 'monthly', priority: '0.8' },
  { path: 'construction-company', changefreq: 'monthly', priority: '0.8' },
  { path: 'residential-plots-coimbatore', changefreq: 'monthly', priority: '0.9' },
  { path: 'top-real-estate-contractors-in-tiruchengode', changefreq: 'monthly', priority: '0.9' },
  { path: 'real-estate-karur', changefreq: 'monthly', priority: '0.9' },
  { path: 'tiruppur-villa-gated-community-plots', changefreq: 'monthly', priority: '0.9' },
  { path: 'real-estate-plots-in-tamilnadu', changefreq: 'monthly', priority: '0.9' },
  { path: 'realestate-construction-company-erode', changefreq: 'monthly', priority: '0.9' },
  { path: 'residential-layouts-erode', changefreq: 'monthly', priority: '0.9' },
  { path: 'blog', changefreq: 'weekly', priority: '0.7' },
  { path: 'contact', changefreq: 'monthly', priority: '0.8' }
];

const fallbackBlogSlugs = [
  'trusted-building-firm-in-tiruppur',
  'quality-construction-company-in-namakkal',
  'top-property-real-estate-firm-in-karur',
  'buying-plots-building-homes-erode',
  'gated-community-homes-tamil-nadu',
  'luxury-residential-layouts-erode'
];

interface BlogPost {
  slug: string;
  published_at?: string | null;
  updated_at?: string;
  created_at?: string;
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials missing. Using fallback blog slugs.');
    return fallbackBlogSlugs.map(slug => ({ slug }));
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug, published_at, updated_at, created_at')
      .eq('published', true);

    if (error) {
      console.error('Supabase query error:', error.message);
      return fallbackBlogSlugs.map(slug => ({ slug }));
    }

    if (!data || data.length === 0) {
      console.warn('No published posts found in Supabase. Using fallback blog slugs.');
      return fallbackBlogSlugs.map(slug => ({ slug }));
    }

    console.log(`Fetched ${data.length} published blog posts from Supabase.`);
    return data;
  } catch (e) {
    console.error('Failed to fetch from Supabase:', e);
    return fallbackBlogSlugs.map(slug => ({ slug }));
  }
}

async function generateSitemap() {
  console.log('Generating sitemap.xml...');
  const blogPosts = await fetchBlogPosts();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Static Pages -->
`;

  // Append Static Pages
  staticPages.forEach((page) => {
    const loc = page.path ? `${SITE_URL}/${page.path}` : `${SITE_URL}/`;
    xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  });

  xml += `\n  <!-- Dynamic Blog Posts -->\n`;

  // Append Dynamic Blog Posts
  blogPosts.forEach((post) => {
    const loc = `${SITE_URL}/blog/${post.slug}`;
    const dateSrc = post.published_at || post.updated_at || post.created_at;
    const lastmod = dateSrc ? new Date(dateSrc).toISOString().split('T')[0] : currentDate;

    xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  xml += `</urlset>\n`;

  const outputPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');
  console.log(`Sitemap written to ${outputPath} successfully.`);
}

generateSitemap().catch((err) => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
