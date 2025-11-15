import Link from 'next/link'
import { ExternalLink, BookOpen } from 'lucide-react'
import { GithubIcon } from '@/components/icons/github-icon'
import { ProjectLinkProps, IconType } from '../_lib/types'

const iconMap = {
  [IconType.ExternalLink]: ExternalLink,
  [IconType.BookOpen]: BookOpen,
  [IconType.GithubIcon]: GithubIcon,
}

export const ProjectLink: React.FC<ProjectLinkProps> = ({
  href,
  label,
  icon,
}) => {
  const IconComponent = iconMap[icon]
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-1 text-muted transition-colors duration-300 hover:text-primary"
      prefetch={false}
    >
      <IconComponent className="h-3.5 w-3.5" />
      {label}
    </Link>
  )
}
