'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="absolute top-5 right-5 md:right-1"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      <div className="relative">
        <Sun className="h-5 w-5 scale-0 rotate-90 transition-all md:h-4 md:w-4 dark:scale-100 dark:rotate-0" />
        <Moon className="absolute top-0 left-0 h-5 w-5 scale-100 rotate-0 transition-all md:h-4 md:w-4 dark:scale-0 dark:-rotate-90" />
      </div>
    </button>
  )
}
