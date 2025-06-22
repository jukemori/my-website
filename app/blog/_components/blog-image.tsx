import { OptimizedImage } from '@/components/optimized-image'

export function BlogImage({
  src,
  alt,
  priority = false,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className="h-48 rounded-t-lg object-cover md:h-60"
      width={700}
      height={700}
      priority={priority}
      imageType="blogThumbnail"
    />
  )
}
