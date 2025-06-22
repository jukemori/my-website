/**
 * Performance monitoring utilities for Core Web Vitals
 */

export interface PerformanceMetrics {
  FCP?: number // First Contentful Paint
  LCP?: number // Largest Contentful Paint
  FID?: number // First Input Delay
  CLS?: number // Cumulative Layout Shift
  TTFB?: number // Time to First Byte
}

/**
 * Reports Core Web Vitals to analytics
 * @param metric - The performance metric to report
 */
export function reportWebVitals(metric: PerformanceMetrics) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // You can integrate with analytics services here
    console.log('Performance metric:', metric)

    // Example: Send to Google Analytics
    // gtag('event', metric.name, {
    //   event_category: 'Web Vitals',
    //   event_label: metric.id,
    //   value: Math.round(metric.value),
    //   non_interaction: true,
    // })
  }
}

/**
 * Preloads critical images for better performance
 * @param imageSrc - Image source URL
 * @param priority - Whether to use high priority
 */
export function preloadImage(imageSrc: string, priority: boolean = true) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = imageSrc
    if (priority) {
      link.setAttribute('fetchpriority', 'high')
    }
    document.head.appendChild(link)
  }
}

/**
 * Lazy loads images with Intersection Observer
 * @param imageElement - The image element to observe
 * @param callback - Callback function when image enters viewport
 */
export function lazyLoadImage(
  imageElement: HTMLImageElement,
  callback?: () => void,
) {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
            }
            observer.unobserve(img)
            callback?.()
          }
        })
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before entering viewport
        threshold: 0.1,
      },
    )

    observer.observe(imageElement)
  }
}

/**
 * Calculates image loading performance
 * @param imageSrc - Image source URL
 * @returns Promise with loading metrics
 */
export function measureImageLoading(imageSrc: string): Promise<{
  loadTime: number
  imageSize: { width: number; height: number }
}> {
  return new Promise((resolve, reject) => {
    const startTime = performance.now()
    const img = new Image()

    img.onload = () => {
      const loadTime = performance.now() - startTime
      resolve({
        loadTime,
        imageSize: {
          width: img.naturalWidth,
          height: img.naturalHeight,
        },
      })
    }

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${imageSrc}`))
    }

    img.src = imageSrc
  })
}
