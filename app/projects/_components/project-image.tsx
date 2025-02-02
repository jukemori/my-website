import React from 'react'
import Image from 'next/image'
import { ProjectImageProps } from '../_lib/types'
import { IMAGE_DIMENSIONS } from '../_lib/constants'

export const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={IMAGE_DIMENSIONS.width}
    height={IMAGE_DIMENSIONS.height}
    className="rounded-lg object-cover shadow-md"
  />
)
