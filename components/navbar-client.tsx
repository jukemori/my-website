'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="absolute right-5 top-5 md:right-1"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      <div className="relative">
        <Sun className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 md:h-4 md:w-4" />
        <Moon className="absolute left-0 top-0 h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 md:h-4 md:w-4" />
      </div>
    </button>
  )
}
