import { OptimizedImage } from '@/components/optimized-image'
import { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

interface ContentImageProps {
  src: string | StaticImageData
  alt: string
  priority?: boolean
  className?: string
}

export function ContentImage({
  src,
  alt,
  priority = false,
  className,
}: ContentImageProps) {
  return (
    <div
      className={cn(
        'mx-auto my-12 aspect-[59/35] w-full max-w-[350px] overflow-hidden rounded-lg shadow-lg md:max-w-[590px]',
        className,
      )}
    >
      <OptimizedImage
        width={590}
        height={350}
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        priority={priority}
        imageType="content"
      />
    </div>
  )
}
