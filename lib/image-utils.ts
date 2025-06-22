/**
 * Image optimization utilities for better performance
 */

/**
 * Generates optimized blur data URL for better perceived performance
 * @param width - Image width
 * @param height - Image height
 * @param color - Background color (default: #e2e8f0)
 * @returns Base64 encoded SVG blur placeholder
 */
export function generateBlurDataURL(
  width: number,
  height: number,
  color: string = '#e2e8f0',
): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="${color}"/>
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

/**
 * Image priority calculation based on position
 * @param index - Image index in a list
 * @param threshold - Number of images to prioritize (default: 2)
 * @returns Whether the image should be prioritized
 */
export function shouldPrioritizeImage(
  index: number,
  threshold: number = 2,
): boolean {
  return index < threshold
}

/**
 * Get optimal image dimensions for different screen sizes
 * @param baseWidth - Base width for desktop
 * @param baseHeight - Base height for desktop
 * @returns Object with responsive dimensions
 */
export function getResponsiveDimensions(baseWidth: number, baseHeight: number) {
  return {
    mobile: {
      width: Math.round(baseWidth * 0.6),
      height: Math.round(baseHeight * 0.6),
    },
    tablet: {
      width: Math.round(baseWidth * 0.8),
      height: Math.round(baseHeight * 0.8),
    },
    desktop: {
      width: baseWidth,
      height: baseHeight,
    },
  }
}
