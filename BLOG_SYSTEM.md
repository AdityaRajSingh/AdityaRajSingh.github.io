# Optimized Blog System Documentation

## Overview

A high-performance, markdown-based blog system with intelligent caching, custom hooks, and streamlined content management.

## Architecture

### Core Components
- **Blog Library** (`src/lib/blog.ts`) - Core data management with caching
- **Custom Hooks** (`src/hooks/useBlog.ts`) - React hooks for data fetching
- **Pages** - Blog listing and individual post components
- **Content** (`src/content/posts/`) - Markdown files with frontmatter

### Performance Features
- **Intelligent Caching** - Posts and HTML content cached in memory
- **Lazy Loading** - Content parsed only when needed
- **Memoization** - React hooks prevent unnecessary re-renders
- **Optimized Imports** - Vite's glob imports for efficient bundling

## File Structure
```
src/
├── content/posts/          # Markdown blog posts
├── hooks/useBlog.ts       # Custom React hooks
├── lib/blog.ts           # Core blog functionality
└── pages/
    ├── Blog.tsx          # Blog listing page
    └── BlogPost.tsx      # Individual post page
```

## Adding New Posts

### Quick Creation
```bash
npm run new-post "Your Amazing Post Title"
```

### Frontmatter Format
```yaml
---
title: "Your Post Title"        # Required
slug: "your-post-slug"          # Required, URL-friendly
date: "2024-12-15"              # Required, YYYY-MM-DD
excerpt: "Brief description"    # Required for SEO
heroImage: "/path/to/image.jpg" # Optional
tags: ["Tech", "React"]         # Optional array
---
```

## Custom Hooks

### `useBlogPosts()`
Returns all blog posts with caching:
```tsx
const posts = useBlogPosts();
```

### `useBlogPost(slug)`
Returns specific post with HTML content:
```tsx
const { post, content, notFound } = useBlogPost(slug);
```

### `useRecentPosts(limit)`
Returns recent posts for homepage:
```tsx
const recentPosts = useRecentPosts(3);
```

## Performance Optimizations

1. **Memory Caching** - Posts cached after first load
2. **HTML Caching** - Rendered markdown cached per post
3. **Memoized Hooks** - Prevent unnecessary re-computations
4. **Efficient Parsing** - Frontmatter validation and error handling
5. **Bundle Optimization** - Vite's tree-shaking for unused posts

## SEO Features

- Dynamic meta tags from frontmatter
- Open Graph and Twitter Card support
- Structured data for search engines
- Clean, semantic URLs

## Best Practices

### Content Creation
- Use descriptive, SEO-friendly titles
- Write compelling excerpts (150-160 characters)
- Choose relevant, specific tags
- Optimize images before adding

### File Management
- Use kebab-case for filenames
- Match slug to filename (without .md)
- Include required frontmatter fields
- Validate markdown syntax

## Troubleshooting

### Common Issues
1. **Posts not appearing** - Check frontmatter syntax
2. **Build errors** - Verify all required fields present
3. **Styling issues** - Ensure proper markdown structure
4. **Performance** - Check for large images or content

### Debug Mode
Add to blog.ts for debugging:
```typescript
console.log('Posts loaded:', getAllPosts().length);
```

## Future Enhancements

- **Search** - Full-text search with indexing
- **Categories** - Hierarchical content organization
- **Reading Time** - Automatic calculation
- **Related Posts** - Content-based recommendations
- **RSS Feed** - Automated feed generation
- **Comments** - Integration with external services