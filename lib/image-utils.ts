/**
 * Image optimization utilities for better performance
 */

/**
 * Generates blur data URL that matches skeleton loading colors (primary/10 with pulse)
 * @param width - Image width
 * @param height - Image height
 * @returns Base64 encoded SVG blur placeholder matching skeleton style
 */
export function generateBlurDataURL(width: number, height: number): string {
  // Match the skeleton's bg-primary/10 color and add subtle pulse animation
  // Using CSS custom properties that will match your theme
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <radialGradient id="skeleton-gradient" cx="50%" cy="50%" r="70%">
          <stop offset="0%" style="stop-color:hsl(var(--primary));stop-opacity:0.08" />
          <stop offset="50%" style="stop-color:hsl(var(--primary));stop-opacity:0.12" />
          <stop offset="100%" style="stop-color:hsl(var(--primary));stop-opacity:0.06" />
        </radialGradient>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </defs>
      <rect width="100%" height="100%" fill="url(#skeleton-gradient)" rx="6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </rect>
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
