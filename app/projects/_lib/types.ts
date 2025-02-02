export interface ProjectLinkProps {
  href: string
  label: string
  icon: keyof typeof IconType
}

export interface GithubIconProps {
  size: number
}

export interface ProjectImageProps {
  src: string
  alt: string
}

export interface Project {
  title: string
  description: string
  image: {
    src: string
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
}

export enum IconType {
  ExternalLink = 'ExternalLink',
  BookOpen = 'BookOpen',
  GithubIcon = 'GithubIcon',
}
