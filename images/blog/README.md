# Blog Hero Images

Place your blog post hero images in this folder.

## Usage

1. **Add images**: Place your hero images here (e.g., `my-post.jpg`)
2. **Reference in markdown**: Use just the filename in your frontmatter:
   ```yaml
   heroImage: "my-post.jpg"
   ```

## Supported formats
- JPG/JPEG
- PNG
- WebP
- SVG

## Recommended specs
- **Dimensions**: 800x400px (2:1 aspect ratio)
- **File size**: Under 500KB for optimal loading
- **Format**: WebP for best compression, JPG as fallback

## Examples
```yaml
# Just filename (recommended)
heroImage: "ai-revolution.jpg"

# Full path from public folder
heroImage: "/images/blog/ai-revolution.jpg"

# External URL
heroImage: "https://example.com/image.jpg"

# Placeholder (will show fallback design)
heroImage: "/api/placeholder/800/400"
```