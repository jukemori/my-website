'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Home, User } from 'lucide-react'

export function Navbar() {
  // Change Background Header
  useEffect(() => {
    const header = document.querySelector('.header')
    const isScreenWidthAboveThreshold = window.innerWidth > 768

    if (header && isScreenWidthAboveThreshold) {
      const handleScroll = () => {
        if (window.scrollY >= 80) {
          header.classList.add('shadow-md')
        } else {
          header.classList.remove('shadow-md')
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <header className="fixed bottom-0 left-0 z-[100] w-full bg-background md:bottom-auto md:top-0">
      <nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 md:h-14">
        <Link
          href="/"
          className="h-[30px] w-[30px] bg-black bg-cover bg-center bg-no-repeat"
        />

        <div className="fixed bottom-0 left-0 w-full border-t border-black/10 bg-[var(--body-color)] p-4 transition-all duration-300 md:relative md:w-auto md:border-0 md:bg-transparent md:p-0">
          <ul className="grid grid-cols-4 gap-8 md:flex md:gap-8">
            <li>
              <Link
                href="/"
                className="flex flex-col items-center text-sm font-medium text-[var(--title-color)] transition-colors duration-300 hover:text-[var(--orange-color)]"
              >
                <Home className="h-4 w-4 md:hidden" /> Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="flex flex-col items-center text-sm font-medium text-[var(--title-color)] transition-colors duration-300 hover:text-[var(--orange-color)]"
              >
                <User className="h-4 w-4 md:hidden" /> About
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="flex flex-col items-center text-sm font-medium text-[var(--title-color)] transition-colors duration-300 hover:text-[var(--orange-color)]"
              >
                <BookOpen className="h-4 w-4 md:hidden" /> Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
