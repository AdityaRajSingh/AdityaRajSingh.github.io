import { Buffer } from 'buffer';
import matter from 'gray-matter';
import { marked } from 'marked';

// Polyfill Buffer for browser
if (typeof window !== 'undefined') {
  (window as any).Buffer = Buffer;
}

// Configure marked once
marked.setOptions({ breaks: true, gfm: true });

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  heroImage?: string;
  tags: string[];
  content?: string;
}

// Import all markdown files
const modules = import.meta.glob('/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

// Cache
let postsCache: BlogPost[] | null = null;
const htmlCache = new Map<string, string>();

// Parse posts with validation
function parsePosts(): BlogPost[] {
  if (postsCache) return postsCache;

  const posts = Object.entries(modules)
    .map(([path, content]) => {
      try {
        const { data, content: markdownContent } = matter(content);

        if (!data.title || !data.slug || !data.date) {
          console.warn(`Invalid frontmatter: ${path}`);
          return null;
        }

        return {
          title: data.title,
          slug: data.slug,
          date: data.date,
          excerpt: data.excerpt || '',
          heroImage: data.heroImage,
          tags: Array.isArray(data.tags) ? data.tags : [],
          content: markdownContent
        };
      } catch (error) {
        console.error(`Parse error ${path}:`, error);
        return null;
      }
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  postsCache = posts;
  return posts;
}

export const getAllPosts = () => parsePosts();
export const getPostBySlug = (slug: string) => {
  if (!slug || typeof slug !== 'string' || slug.length > 100) return undefined;
  const sanitizedSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '');
  return getAllPosts().find(p => p.slug === sanitizedSlug);
};
export const getRecentPosts = (limit = 3) => getAllPosts().slice(0, limit);

export function getPostContent(slug: string): string {
  if (!slug || typeof slug !== 'string') return '';

  const cached = htmlCache.get(slug);
  if (cached) return cached;

  const post = getPostBySlug(slug);
  if (!post?.content) return '';

  const html = marked(post.content) as string;
  htmlCache.set(slug, html);
  return html;
}

const iconCache = new Map<string, string>();
const icons = ['💡', '🚀', '⚡', '🎯', '🔮', '🌟', '📝', '🎨', '⭐', '🔥'];

export const getBlogIcon = (title: string) => {
  if (iconCache.has(title)) {
    return iconCache.get(title)!;
  }
  
  const hash = title.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const icon = icons[Math.abs(hash) % icons.length];
  iconCache.set(title, icon);
  return icon;
};

export const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

export const getShareUrls = (title: string, url: string) => ({
  twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  copyLink: url
});