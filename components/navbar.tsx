'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Home, Moon, Sun, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/blog', label: 'Blog', icon: BookOpen },
] as const

interface NavLinkProps {
  href: string
  label: string
  icon: React.ElementType
}

function NavLink({ href, label, icon: Icon }: NavLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="text-muted data-[active=true]:text-primary data-[active=true]:border-primary hover:text-primary flex flex-col items-center text-sm font-medium transition-colors duration-300 data-[active=true]:border-b-2 data-[active=true]:font-bold md:text-base"
        data-active={usePathname() === href}
      >
        <Icon className="h-4 w-4 md:hidden" /> {label}
      </Link>
    </li>
  )
}

function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="absolute right-5 top-5 md:right-1"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      <div className="relative">
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all md:h-4 md:w-4 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute left-0 top-0 h-5 w-5 rotate-90 scale-0 transition-all md:h-4 md:w-4 dark:rotate-0 dark:scale-100" />
      </div>
    </button>
  )
}

export function Navbar() {
  useEffect(() => {
    const header = document.querySelector('.header')
    if (!header || window.innerWidth <= 768) return

    const handleScroll = () => {
      header.classList.toggle('shadow-md', window.scrollY >= 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header fixed left-0 top-0 z-[100] w-full">
      <nav className="container relative mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 md:h-14">
        <Link href="/" className="relative h-[30px] w-[30px]">
          <Image
            src="/images/logo-light.png"
            width={30}
            height={30}
            alt="Logo"
            className="h-full w-full object-contain dark:hidden"
          />
          <Image
            src="/images/logo-dark.png"
            width={30}
            height={30}
            alt="Logo"
            className="hidden h-full w-full object-contain dark:block"
          />
        </Link>

        <div className="w-full md:w-auto md:border-0 md:bg-transparent md:p-0 md:pr-10">
          <ul className="fixed bottom-0 left-0 z-[100] grid w-full grid-cols-3 gap-8 border-t border-black/10 p-4 md:relative md:flex md:w-auto md:border-0 md:bg-transparent md:p-0">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
