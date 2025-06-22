import React from 'react'
import { ProjectImageProps } from '../_lib/types'
import { IMAGE_DIMENSIONS } from '../_lib/constants'
import { OptimizedImage } from '@/components/optimized-image'

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  priority,
}) => (
  <OptimizedImage
    src={src}
    alt={alt}
    width={IMAGE_DIMENSIONS.width}
    height={IMAGE_DIMENSIONS.height}
    className="rounded-lg object-cover shadow-md"
    priority={priority}
    imageType="project"
  />
)
