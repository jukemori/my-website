import { ProjectImageProps } from '../_lib/types'
import { IMAGE_DIMENSIONS } from '../_lib/constants'
import { LazyImage } from '@/components/lazy-image'

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  priority,
}) => (
  <div className="aspect-[59/35] w-full overflow-hidden rounded-lg shadow-md">
    <LazyImage
      src={src}
      alt={alt}
      width={IMAGE_DIMENSIONS.width}
      height={IMAGE_DIMENSIONS.height}
      className="h-full w-full object-cover object-center"
      priority={priority}
      imageType="project"
    />
  </div>
)
