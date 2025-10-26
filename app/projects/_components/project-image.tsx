import { ProjectImageProps } from '../_lib/types'
import { getImageDimensions } from '@/lib/image-utils'
import { LazyImage } from '@/components/lazy-image'

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  priority,
}) => {
  const { width, height } = getImageDimensions('project')

  return (
    <div className="aspect-[59/35] w-full overflow-hidden rounded-lg shadow-md">
      <LazyImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover object-center"
        priority={priority}
        imageType="project"
      />
    </div>
  )
}
