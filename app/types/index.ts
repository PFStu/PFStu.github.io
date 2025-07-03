/**
 * Shared type definitions for the application
 */

export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'
export type ThemeName = 'morning' | 'midnight' | 'default'

export interface NavItem {
  name: string
  hash: string
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

export interface Project {
  name: string
  type?: 'documentation' | 'tool' | 'extension' | 'game' | 'os' | 'app-resources'
  description: string
  link: string
}

export interface ContactMethod {
  name: string
  value: string
  icon: string
  action: () => void
}

export interface ThemeColors {
  clock: string
  text: string
  hour: string
  minute: string
  second: string
}
