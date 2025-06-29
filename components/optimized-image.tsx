import Image, { ImageProps } from 'next/image'
import { IMAGE_SIZES, BLUR_DATA_URL } from '@/lib/image-utils'

interface OptimizedImageProps
  extends Omit<ImageProps, 'placeholder' | 'blurDataURL' | 'sizes'> {
  imageType?: keyof typeof IMAGE_SIZES
  loading?: 'lazy' | 'eager'
  style?: React.CSSProperties
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  imageType = 'project',
  className = '',
  priority = false,
  loading,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} transition-opacity duration-700 ease-in-out`}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      sizes={IMAGE_SIZES[imageType]}
      priority={priority}
      loading={loading || (priority ? 'eager' : 'lazy')}
      quality={85}
      {...props}
    />
  )
}
