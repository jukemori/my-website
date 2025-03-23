import { StaticImageData } from 'next/image'

export interface ProjectLinkProps {
  href: string
  label: string
  icon: keyof typeof IconType
}

export interface GithubIconProps {
  size: number
}

export interface ProjectImageProps {
  src: string | StaticImageData
  alt: string
  priority: boolean
}

export interface Project {
  title: string
  description: string
  image: {
    src: string | StaticImageData
    alt: string
  }
  techStack: string[]
  links: {
    href: string
    label: string
    icon: IconType
  }[]
}

export interface ProjectCardProps {
  project: Project
  index: number
}

export enum IconType {
  ExternalLink = 'ExternalLink',
  BookOpen = 'BookOpen',
  GithubIcon = 'GithubIcon',
}
