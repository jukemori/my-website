/**
 * Image optimization utilities for better performance
 */

/**
 * Pre-generated blur data URL to avoid runtime generation
 * Uses a 4x3 aspect ratio as a reasonable default
 */
export const BLUR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMWY1ZjkiIHJ4PSIxIi8+PC9zdmc+'

/**
 * Common responsive sizes for different image types
 * Optimized for performance with more granular breakpoints
 */
export const IMAGE_SIZES = {
  // For blog thumbnails in grid
  blogThumbnail: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px',

  // For project images
  project: '(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 590px',

  // For full-width hero images in blog posts
  hero: '(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 700px, 900px',

  // For profile/avatar images
  profile: '(max-width: 640px) 240px, (max-width: 768px) 240px, 288px',

  // For content images in about page and MDX
  content: '(max-width: 640px) 350px, (max-width: 768px) 350px, (max-width: 1024px) 590px, 590px',
} as const
