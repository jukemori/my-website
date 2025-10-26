import { OptimizedImage } from '@/components/optimized-image'

interface MdxImageProps {
  src: string
  alt?: string
  priority?: boolean
}

export function MdxImage({ src, alt, priority }: MdxImageProps) {
  // Handle relative image paths
  const imageSrc = src.startsWith('/') ? src : `/${src}`

  return (
    <span className="my-8 block w-full">
      <OptimizedImage
        src={imageSrc}
        alt={alt || 'Blog image'}
        width={700}
        height={400}
        className="h-auto w-full rounded-lg shadow-md"
        imageType="hero"
        priority={priority}
      />
    </span>
  )
}
