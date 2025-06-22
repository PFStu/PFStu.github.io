'use client'
import React, { useEffect, useState } from 'react'
import { detectBrowser } from '../utils/detectBrower'
import { useTheme } from '../theme-provider'

const Footer = () => {
  const [browserInfo, setBrowserInfo] = useState<{ name: string; version: string } | null>(null)
  const [isOnline, setIsOnline] = useState(true)
  const [currentTime, setCurrentTime] = useState('')
  const { theme } = useTheme()

  useEffect(() => {
    const { name = 'Unknown', version = 'Unknown' } = detectBrowser() || {}
    setBrowserInfo({ name, version })

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString())
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      clearInterval(timer)
    }
  }, [])

  const getThemeStyles = () => {
    switch (theme) {
      case 'morning':
        return {
          bg: 'bg-blue-50/90',
          border: 'border-blue-200',
          text: 'text-blue-800',
          online: 'bg-blue-500',
          offline: 'bg-red-500'
        }
      case 'midnight':
        return {
          bg: 'bg-purple-900/80',
          border: 'border-purple-700',
          text: 'text-purple-100',
          online: 'bg-purple-400',
          offline: 'bg-red-400'
        }
      default:
        return {
          bg: 'bg-gray-800/90',
          border: 'border-gray-700',
          text: 'text-gray-300',
          online: 'bg-green-500',
          offline: 'bg-red-500'
        }
    }
  }

  const styles = getThemeStyles()

  return (
    <footer className={`${styles.bg} ${styles.border} border-t ${styles.text} p-4 transition-colors duration-300`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${isOnline ? styles.online : styles.offline}`}></span>
            {isOnline ? 'ONLINE' : 'OFFLINE'}
          </span>
          <span>{currentTime}</span>
          <span>{browserInfo?.name} v{browserInfo?.version}</span>
        </div>
        
        <div className="flex items-center gap-4 flex-wrap">
          <span>Next.js</span>
          <span>Tailwind CSS</span>
          <span>© 2025 PixelForge Studio</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
