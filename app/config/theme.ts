import { ThemeName, ThemeColors } from '../types'

export const themeColors: Record<ThemeName, ThemeColors> = {
  morning: {
    clock: 'bg-white/90 border-blue-200',
    text: 'text-blue-900',
    hour: 'bg-blue-600',
    minute: 'bg-blue-400',
    second: 'bg-blue-300'
  },
  midnight: {
    clock: 'bg-purple-900/80 border-purple-700',
    text: 'text-purple-100',
    hour: 'bg-purple-500',
    minute: 'bg-purple-400',
    second: 'bg-purple-300'
  },
  default: {
    clock: 'bg-gray-800/80 border-gray-700',
    text: 'text-gray-100',
    hour: 'bg-green-500',
    minute: 'bg-green-400',
    second: 'bg-green-300'
  }
}
