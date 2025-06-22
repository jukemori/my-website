'use client'

import { useEffect } from 'react'
import { useReportWebVitals } from 'next/web-vitals'
import { reportWebVitals } from '@/lib/performance'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Report to our performance monitoring
    reportWebVitals({
      [metric.name]: metric.value,
    })
  })

  useEffect(() => {
    // Additional client-side performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor resource loading times
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType(
          'navigation',
        )[0] as PerformanceNavigationTiming
        if (navigation) {
          reportWebVitals({
            TTFB: navigation.responseStart - navigation.requestStart,
          })
        }
      })
    }
  }, [])

  return null // This component doesn't render anything
}
