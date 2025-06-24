/**
 * Image optimization utilities for better performance
 */

/**
 * Generates blur data URL with a neutral color that works well across themes
 * @param width - Image width
 * @param height - Image height
 * @returns Base64 encoded SVG blur placeholder with neutral styling
 */
export function generateBlurDataURL(width: number, height: number): string {
  // Use a subtle neutral gray that works well in both light and dark themes
  const fillColor = '#f1f5f9' // Very light neutral gray

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="${fillColor}" rx="6"/>
    </svg>
  `

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

/**
 * Common responsive sizes for different image types
 */
export const IMAGE_SIZES = {
  // For blog thumbnails
  blogThumbnail: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px',

  // For project images
  project: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 590px',

  // For full-width hero images
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px',

  // For profile/avatar images
  profile: '(max-width: 768px) 240px, 288px',

  // For content images
  content: '(max-width: 768px) 350px, 590px',
} as const
