'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-md transition-all duration-200
        ${
          theme === 'dark'
            ? 'hover:bg-gray-800 hover:text-custom-blue'
            : 'hover:bg-gray-100 hover:text-custom-blue'
        }
      `}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
} 
