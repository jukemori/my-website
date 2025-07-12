'use client'

import { useEffect } from 'react'

export function ResourceHints({ imageUrls }: { imageUrls: string[] }) {
  useEffect(() => {
    // Prefetch next likely pages based on current page
    const currentPath = window.location.pathname
    let prefetchPages: string[] = []

    if (currentPath === '/') {
      prefetchPages = ['/about', '/projects', '/blog']
    } else if (currentPath === '/blog') {
      prefetchPages = ['/projects', '/about']
    } else if (currentPath === '/projects') {
      prefetchPages = ['/blog', '/about']
    }

    prefetchPages.forEach((href) => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = href
      document.head.appendChild(link)
    })
  }, [])

  return (
    <>
      {imageUrls.map((url) => (
        <link
          key={url}
          rel="preload"
          as="image"
          href={url}
          type="image/webp"
          fetchPriority="high"
        />
      ))}
    </>
  )
}