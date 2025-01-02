'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Home, Moon, Sun, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

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
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 500.000000 500.000000"
            preserveAspectRatio="xMidYMid meet"
            className="rounded-full bg-white"
          >
            <g
              transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
              fill="hsl(var(--primary))"
              stroke="none"
            >
              <path
                d="M2340 4989 c-445 -25 -905 -186 -1285 -451 -223 -155 -468 -407 -626
-643 -232 -347 -360 -698 -414 -1137 -35 -288 -7 -616 80 -932 156 -569 517
-1067 1015 -1401 314 -210 621 -329 1025 -396 119 -20 174 -24 370 -23 205 0
246 3 380 27 396 71 705 193 1020 403 201 134 484 410 623 607 174 247 314
546 383 816 58 227 71 327 76 586 4 207 2 260 -16 390 -88 630 -378 1154 -871
1579 -191 164 -495 340 -744 431 -307 112 -667 163 -1016 144z m1037 -481 c-3
-13 -143 -666 -312 -1451 -168 -785 -321 -1483 -340 -1551 -122 -444 -308
-691 -609 -807 -178 -69 -451 -102 -666 -81 -107 11 -238 32 -292 48 -17 5
-18 29 -18 330 0 178 3 324 6 324 3 0 52 -9 107 -21 141 -28 329 -29 411 0 32
11 73 30 92 41 85 53 172 198 213 355 11 44 151 690 311 1435 160 745 294
1365 297 1378 l5 22 400 0 400 0 -5 -22z"
              />
            </g>
          </svg>
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
