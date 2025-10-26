'use client'

import { useEffect } from 'react'

export function useImagePreload(imageSrcs: string[]) {
  useEffect(() => {
    const preloadImage = (src: string) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.type = 'image/webp'
      document.head.appendChild(link)
    }

    imageSrcs.forEach(preloadImage)
  }, [imageSrcs])
}
