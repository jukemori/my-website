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
      className="text-muted hover:text-primary flex items-center gap-1 transition-colors duration-300"
      prefetch={false}
    >
      <IconComponent className="h-3.5 w-3.5" />
      {label}
    </Link>
  )
}
