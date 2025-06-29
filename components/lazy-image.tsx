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
  const [isInView, setIsInView] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <div ref={imageRef}>
      {isInView ? (
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          imageType={imageType}
          priority={priority}
        />
      ) : (
        <div
          className={`animate-pulse bg-muted ${className}`}
          style={{
            aspectRatio: `${width} / ${height}`,
          }}
        />
      )}
    </div>
  )
}