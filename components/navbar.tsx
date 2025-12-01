import Link from 'next/link'
import { Suspense } from 'react'
import { ThemeToggle } from './navbar-client'
import { NavLink } from './nav-link'

const NAV_ITEMS = [
  { href: '/', label: 'Home', iconName: 'Home' as const },
  { href: '/about', label: 'About', iconName: 'User' as const },
  {
    href: '/experience',
    label: 'Experience',
    iconName: 'BriefcaseBusiness' as const,
  },
  { href: '/projects', label: 'Projects', iconName: 'FolderKanban' as const },
  { href: '/blog', label: 'Blog', iconName: 'BookOpen' as const },
]

export function Navbar() {
  return (
    <header className="header bg-background md:bg-background/90 fixed top-0 left-0 z-100 w-full shadow-xs md:backdrop-blur-xs">
      <nav className="relative container mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 md:h-14">
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
              <path d="M2340 4989 c-445 -25 -905 -186 -1285 -451 -223 -155 -468 -407 -626 -643 -232 -347 -360 -698 -414 -1137 -35 -288 -7 -616 80 -932 156 -569 517 -1067 1015 -1401 314 -210 621 -329 1025 -396 119 -20 174 -24 370 -23 205 0 246 3 380 27 396 71 705 193 1020 403 201 134 484 410 623 607 174 247 314 546 383 816 58 227 71 327 76 586 4 207 2 260 -16 390 -88 630 -378 1154 -871 1579 -191 164 -495 340 -744 431 -307 112 -667 163 -1016 144z m1037 -481 c-3 -13 -143 -666 -312 -1451 -168 -785 -321 -1483 -340 -1551 -122 -444 -308 -691 -609 -807 -178 -69 -451 -102 -666 -81 -107 11 -238 32 -292 48 -17 5 -18 29 -18 330 0 178 3 324 6 324 3 0 52 -9 107 -21 141 -28 329 -29 411 0 32 11 73 30 92 41 85 53 172 198 213 355 11 44 151 690 311 1435 160 745 294 1365 297 1378 l5 22 400 0 400 0 -5 -22z" />
            </g>
          </svg>
        </Link>

        <div className="w-full md:w-auto md:border-0 md:bg-transparent md:p-0 md:pr-10">
          <ul className="safe-bottom md:background-transparent border-border bg-background fixed bottom-0 left-0 z-100 grid w-full grid-cols-5 gap-4 border-t pt-3 pb-3 md:relative md:flex md:w-auto md:border-none md:bg-transparent md:p-0 md:pt-0">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </ul>
          <Suspense fallback={<div className="h-5 w-5" />}>
            <ThemeToggle />
          </Suspense>
        </div>
      </nav>
    </header>
  )
}
