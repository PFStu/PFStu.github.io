'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useEffect } from 'react'

/**
 * Theme types
 */
export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

/**
 * Theme store definition
 */
interface ThemeStore {
  mode: ThemeMode
  resolvedTheme: ResolvedTheme
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
      setTheme: (mode) => set({ mode }),
    }),
    {
      name: 'theme-preference',
    }
  )
)

/**
 * Theme provider component
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    useThemeStore.setState({ resolvedTheme: newResolvedTheme })

    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newResolvedTheme)
    document.documentElement.style.colorScheme = newResolvedTheme

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => {
      if (mode === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light'
        useThemeStore.setState({ resolvedTheme: systemTheme })
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
  const { mode, resolvedTheme, setTheme } = useThemeStore()
  return { mode, resolvedTheme, setTheme }
}
