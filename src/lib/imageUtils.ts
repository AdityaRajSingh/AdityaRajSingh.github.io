export function getBlogHeroImage(heroImage?: string): string | null {
  if (!heroImage || typeof heroImage !== 'string') return null;

  // Validate HTTP URLs properly
  if (heroImage.startsWith('http://') || heroImage.startsWith('https://')) {
    try {
      new URL(heroImage);
      return heroImage;
    } catch {
      return null;
    }
  }

  // Handle absolute paths
  if (heroImage.startsWith('/')) return heroImage;

  // Sanitize relative paths to prevent directory traversal
  const sanitized = heroImage
    .replace(/\.\./g, '') // Remove ../ sequences
    .replace(/[^a-zA-Z0-9._-]/g, '') // Allow only safe characters
    .substring(0, 100); // Limit length

  if (!sanitized) return null;

  // Validate file extension
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const hasValidExtension = allowedExtensions.some(ext =>
    sanitized.toLowerCase().endsWith(ext)
  );

  if (!hasValidExtension) return null;

  return `/images/blog/${sanitized}`;
}