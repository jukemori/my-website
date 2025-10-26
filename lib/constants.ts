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
