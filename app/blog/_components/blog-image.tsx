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
    <div className="relative h-48 w-full overflow-hidden rounded-t-lg md:h-60">
      <OptimizedImage
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        width={700}
        height={400}
        priority={priority}
        imageType="blogThumbnail"
      />
    </div>
  )
}
