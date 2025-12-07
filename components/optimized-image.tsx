import Image, { ImageProps } from 'next/image'
import { IMAGE_SIZES, BLUR_DATA_URL, type ImageType } from '@/lib/image-utils'

interface OptimizedImageProps
  extends Omit<
    ImageProps,
    'placeholder' | 'blurDataURL' | 'sizes' | 'fetchPriority'
  > {
  imageType?: ImageType
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
  // Static imports (StaticImageData) have auto-generated blurDataURL
  // Only use custom blur for string URLs
  const isStaticImport = typeof src === 'object'

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholder="blur"
      {...(!isStaticImport && { blurDataURL: BLUR_DATA_URL })}
      sizes={IMAGE_SIZES[imageType]}
      priority={priority}
      loading={loading || (priority ? 'eager' : 'lazy')}
      quality={85}
      fetchPriority={priority ? 'high' : 'auto'}
      {...props}
    />
  )
}
