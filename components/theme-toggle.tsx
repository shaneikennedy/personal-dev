'use client'

import { useTheme } from '@/lib/theme-context'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4">
        <div className="relative inline-block w-12 h-6">
          <div 
            className="w-12 h-6 rounded-full border border-current opacity-50"
            style={{ backgroundColor: 'var(--theme-bg)' }}
          >
            <div 
              className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-300"
              style={{ backgroundColor: 'var(--theme-text)' }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={toggleTheme}
        className="relative inline-block w-12 h-6 cursor-pointer"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        role="switch"
        aria-checked={theme === 'dark'}
      >
        <div 
          className="w-12 h-6 rounded-full border border-current transition-all duration-300 hover:border-opacity-80"
          style={{ backgroundColor: 'var(--theme-bg)' }}
        >
          <div 
            className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 ${
              theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
            }`}
            style={{ backgroundColor: theme === 'light' ? '#5c28eb' : 'var(--theme-text)' }}
          >
            <span className="absolute inset-0 flex items-center justify-center text-xs">
              {theme === 'dark' ? '⭐' : '☀️'}
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}
