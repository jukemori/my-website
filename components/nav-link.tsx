'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BookOpen,
  BriefcaseBusiness,
  FolderKanban,
  Home,
  User,
} from 'lucide-react'

interface NavLinkProps {
  href: string
  label: string
  iconName: 'Home' | 'User' | 'BriefcaseBusiness' | 'FolderKanban' | 'BookOpen'
}

const iconMap = {
  Home,
  User,
  BriefcaseBusiness,
  FolderKanban,
  BookOpen,
}

export function NavLink({ href, label, iconName }: NavLinkProps) {
  const pathname = usePathname()
  const Icon = iconMap[iconName]

  // Check if the nav item should be active
  const isActive =
    href === '/'
      ? pathname === href
      : pathname === href || pathname.startsWith(href + '/')

  return (
    <li>
      <Link
        href={href}
        className="text-muted hover:text-primary data-[active=true]:border-primary data-[active=true]:text-primary flex flex-col items-center text-xs font-medium transition-colors duration-300 data-[active=true]:font-bold sm:text-sm md:text-base md:data-[active=true]:border-b-2"
        data-active={isActive}
      >
        <Icon className="mb-1 h-5 w-5 md:hidden" /> {label}
      </Link>
    </li>
  )
}
