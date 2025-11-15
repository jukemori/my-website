/**
 * Image optimization utilities for better performance
 */

/**
 * Pre-generated blur data URL with shimmer effect for better perceived performance
 * Creates a subtle animated gradient that indicates loading
 */
export const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2YzZjRmNiIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlNWU3ZWIiIG9mZnNldD0iNTAlIiAvPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZjNmNGY2IiBvZmZzZXQ9IjcwJSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSIjZjNmNGY2IiAvPgogIDxyZWN0IGlkPSJyIiB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0idXJsKCNnKSIgLz4KICA8YW5pbWF0ZSB4bGluazpocmVmPSIjciIgYXR0cmlidXRlTmFtZT0ieCIgZnJvbT0iLTcwMCIgdG89IjcwMCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+Cjwvc3ZnPg=='

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
