import Image, { ImageProps } from 'next/image'
import { generateBlurDataURL, IMAGE_SIZES } from '@/lib/image-utils'

interface OptimizedImageProps
  extends Omit<ImageProps, 'placeholder' | 'blurDataURL' | 'sizes'> {
  imageType?: keyof typeof IMAGE_SIZES
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  imageType = 'project',
  className = '',
  priority = false,
  ...props
}: OptimizedImageProps) {
  const blurDataURL = generateBlurDataURL(
    typeof width === 'number' ? width : 700,
    typeof height === 'number' ? height : 700,
  )

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} transition-opacity duration-500`}
      placeholder="blur"
      blurDataURL={blurDataURL}
      sizes={IMAGE_SIZES[imageType]}
      priority={priority}
      quality={90}
      {...props}
    />
  )
}
