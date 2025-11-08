/**
 * Application-wide constants
 */

/**
 * Number of images to load with priority (above-the-fold optimization)
 * These images will be loaded eagerly instead of lazy-loaded
 */
export const PRIORITY_IMAGE_COUNT = 2

/**
 * Reading speed in words per minute for calculating reading time
 */
export const READING_SPEED_WPM = 200

/**
 * Revalidation time in seconds for ISR (Incremental Static Regeneration)
 */
export const BLOG_REVALIDATE_SECONDS = 3600 // 1 hour
export const PROJECTS_REVALIDATE_SECONDS = 3600 // 1 hour
export const EXPERIENCE_REVALIDATE_SECONDS = 86400 // 24 hours (less frequent updates)

/**
 * Site configuration
 * Centralized site metadata and URLs
 */
export const SITE_CONFIG = {
  name: 'Jun Ukemori',
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.jun-ukemori.com',
  description:
    'Software Engineer based in Tokyo, Japan. I like to build things with Next.js and Ruby on Rails.',
  author: {
    name: 'Jun Ukemori',
    twitter: '@jukemori',
    url: 'https://www.jun-ukemori.com',
  },
} as const
