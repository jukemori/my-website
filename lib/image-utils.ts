/**
 * Image optimization utilities for better performance
 */

/**
 * Converts HSL color to hex with opacity
 * @param h - Hue (0-360)
 * @param s - Saturation (0-100)
 * @param l - Lightness (0-100)
 * @param opacity - Opacity (0-1)
 * @returns Hex color with opacity
 */
function hslToHex(
  h: number,
  s: number,
  l: number,
  opacity: number = 1,
): string {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }

  if (opacity === 1) {
    return `#${f(0)}${f(8)}${f(4)}`
  } else {
    const alpha = Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0')
    return `#${f(0)}${f(8)}${f(4)}${alpha}`
  }
}

/**
 * Gets CSS custom property value and converts to hex with opacity
 * @param property - CSS custom property name (e.g., '--primary')
 * @param opacity - Opacity level (0-1)
 * @returns Hex color string
 */
function getCSSVariableAsHex(property: string, opacity: number = 0.1): string {
  if (typeof window === 'undefined') {
    // Server-side fallback - use actual theme colors with skeleton opacity
    return opacity === 0.1
      ? '#3b82f61a'
      : `#3b82f6${Math.round(opacity * 255)
          .toString(16)
          .padStart(2, '0')}`
  }

  try {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(property)
      .trim()

    if (value.startsWith('hsl')) {
      // Parse HSL: hsl(222.2 84% 4.9%)
      const match = value.match(
        /hsl\((\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%\)/,
      )
      if (match) {
        const [, h, s, l] = match.map(Number)
        return hslToHex(h, s, l, opacity)
      }
    }

    if (value.startsWith('#')) {
      // Already hex, just add opacity
      if (opacity === 1) return value
      const alpha = Math.round(opacity * 255)
        .toString(16)
        .padStart(2, '0')
      return `${value}${alpha}`
    }

    // Fallback to blue with opacity
    return opacity === 0.1
      ? '#3b82f61a'
      : `#3b82f6${Math.round(opacity * 255)
          .toString(16)
          .padStart(2, '0')}`
  } catch {
    return opacity === 0.1
      ? '#3b82f61a'
      : `#3b82f6${Math.round(opacity * 255)
          .toString(16)
          .padStart(2, '0')}`
  }
}

/**
 * Gets the appropriate skeleton color based on theme with 10% opacity like bg-primary/10
 * @param theme - 'light' | 'dark' | 'auto'
 * @returns Hex color with 10% opacity that matches skeleton style
 */
function getSkeletonColor(theme: 'light' | 'dark' | 'auto' = 'auto'): string {
  // Try to get actual CSS custom property value first
  if (typeof window !== 'undefined' && theme === 'auto') {
    return getCSSVariableAsHex('--primary', 0.1)
  }

  // Your actual theme colors with skeleton opacity (10%)
  const skeletonColors = {
    // Light theme: Blue hsl(247 75% 52%) with 10% opacity
    light: hslToHex(247, 75, 52, 0.1), // #3b82f61a

    // Dark theme: Pink hsl(302 83% 44%) with 10% opacity
    dark: hslToHex(302, 83, 44, 0.1), // #c944c71a
  }

  if (theme === 'auto') {
    // Default to light theme color
    return skeletonColors.light
  }

  return skeletonColors[theme]
}

/**
 * Generates blur data URL that matches skeleton loading colors
 * @param width - Image width
 * @param height - Image height
 * @param theme - Optional theme override
 * @returns Base64 encoded SVG blur placeholder matching skeleton style
 */
export function generateBlurDataURL(
  width: number,
  height: number,
  theme: 'light' | 'dark' | 'auto' = 'auto',
): string {
  const fillColor = getSkeletonColor(theme)

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
