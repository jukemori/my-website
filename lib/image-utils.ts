/**
 * Image optimization utilities for better performance
 */

/**
 * Pre-generated blur data URL to avoid runtime generation
 * Uses a transparent 4x3 aspect ratio without rounded corners
 */
export const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InRyYW5zcGFyZW50Ii8+PC9zdmc+'

/**
 * Image dimensions for different image types
 * Used by OptimizedImage and other image components
 */
export const IMAGE_DIMENSIONS = {
  blogThumbnail: { width: 700, height: 400 },
  project: { width: 590, height: 350 },
  hero: { width: 900, height: 500 },
  profile: { width: 288, height: 288 },
  content: { width: 590, height: 350 },
} as const

/**
 * Common responsive sizes for different image types
 * Optimized for performance with more granular breakpoints
 */
export const IMAGE_SIZES = {
  // For blog thumbnails in grid
  blogThumbnail:
    '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px',

  // For project images
  project:
    '(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 590px',

  // For full-width hero images in blog posts
  hero: '(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 700px, 900px',

  // For profile/avatar images
  profile: '(max-width: 640px) 240px, (max-width: 768px) 240px, 288px',

  // For content images in about page and MDX
  content:
    '(max-width: 640px) 350px, (max-width: 768px) 350px, (max-width: 1024px) 590px, 590px',
} as const

export type ImageType = keyof typeof IMAGE_SIZES

/**
 * Helper to get dimensions for an image type
 */
export function getImageDimensions(type: ImageType) {
  return IMAGE_DIMENSIONS[type]
}
