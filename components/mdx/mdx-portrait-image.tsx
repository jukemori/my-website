import { OptimizedImage } from '@/components/optimized-image'

interface PortraitImageProps {
  src: string
  alt?: string
  priority?: boolean
}

export function PortraitImage({ src, alt, priority }: PortraitImageProps) {
  // Handle relative image paths
  const imageSrc = src.startsWith('/') ? src : `/${src}`

  return (
    <span className="my-8 flex justify-center">
      <span className="block max-w-md">
        <OptimizedImage
          src={imageSrc}
          alt={alt || 'Blog image'}
          width={400}
          height={600}
          className="h-auto w-full rounded-lg shadow-md"
          imageType="content"
          priority={priority}
        />
      </span>
    </span>
  )
}
