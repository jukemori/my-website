'use client'

import { useState, useEffect, useRef } from 'react'
import { OptimizedImage } from './optimized-image'
import { StaticImageData } from 'next/image'

interface LazyImageProps {
  src: string | StaticImageData
  alt: string
  width: number
  height: number
  className?: string
  imageType?: 'blogThumbnail' | 'project' | 'hero' | 'profile' | 'content'
  priority?: boolean
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  imageType = 'content',
  priority = false,
}: LazyImageProps) {
  const [shouldLoad, setShouldLoad] = useState(priority)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '200px 0px',
        threshold: 0,
      },
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <span ref={imageRef} className="relative block">
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        imageType={imageType}
        priority={priority}
        loading={shouldLoad ? 'eager' : 'lazy'}
        style={{
          opacity: shouldLoad ? 1 : 0,
        }}
      />
      {!shouldLoad && (
        <span
          className={`absolute inset-0 animate-pulse bg-muted ${className}`}
          style={{
            aspectRatio: `${width} / ${height}`,
          }}
        />
      )}
    </span>
  )
}
