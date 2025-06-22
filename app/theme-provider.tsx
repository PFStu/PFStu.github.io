'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useEffect } from 'react'

/**
 * Theme types
 */
export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'
export type ThemeName = 'morning' | 'midnight' | 'default'

/**
 * Theme store definition
 */
interface ThemeStore {
  mode: ThemeMode
  resolvedTheme: ResolvedTheme
  theme: ThemeName
  setTheme: (mode: ThemeMode) => void
}

/**
 * Theme store initialization
 */
const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: 'system',
      resolvedTheme: 'light',
      theme: 'morning',
      setTheme: (mode) => set({ mode }),
    }),
    {
      name: 'theme-preference',
    }
  )
)

/**
 * Calculate theme name based on time and resolved theme
 */
const calculateTheme = (resolvedTheme: ResolvedTheme): ThemeName => {
  const hours = new Date().getHours()
  const isDaytime = hours >= 6 && hours < 18
  
  if (resolvedTheme === 'light') {
    return isDaytime ? 'morning' : 'midnight'
  }
  return 'default'
}

/**
 * Theme provider component
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { mode, resolvedTheme, setTheme } = useThemeStore()

  // Resolve theme based on mode and system preference
  useEffect(() => {
    const resolveTheme = (): ResolvedTheme => {
      if (mode === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light'
      }
      return mode
    }

    const newResolvedTheme = resolveTheme()
    const theme = calculateTheme(newResolvedTheme)
    useThemeStore.setState({ resolvedTheme: newResolvedTheme, theme })

    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newResolvedTheme)
    document.documentElement.style.colorScheme = newResolvedTheme

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => {
      if (mode === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light'
        const theme = calculateTheme(systemTheme)
        useThemeStore.setState({ resolvedTheme: systemTheme, theme })
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(systemTheme)
        document.documentElement.style.colorScheme = systemTheme
      }
    }

    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [mode])

  return children
}

/**
 * Hook to use theme in components
 */
export function useTheme() {
  const { mode, resolvedTheme, theme, setTheme } = useThemeStore()
  return { mode, resolvedTheme, theme, setTheme }
}
