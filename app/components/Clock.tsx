'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from '../theme-provider'

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setTime(new Date())
    const timerId = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timerId)
  }, [])

  if (!time) return null

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const getThemeColors = () => {
    const hours = time.getHours()
    const isDaytime = hours >= 6 && hours < 18
    
    if (resolvedTheme === 'light') {
      return isDaytime 
        ? {
            clock: 'bg-white/90 border-blue-200',
            text: 'text-blue-900',
            hour: 'bg-blue-600',
            minute: 'bg-blue-400',
            second: 'bg-blue-300'
          }
        : {
            clock: 'bg-purple-900/80 border-purple-700',
            text: 'text-purple-100',
            hour: 'bg-purple-500',
            minute: 'bg-purple-400',
            second: 'bg-purple-300'
          }
    } else {
      return {
        clock: 'bg-gray-800/80 border-gray-700',
        text: 'text-gray-100',
        hour: 'bg-green-500',
        minute: 'bg-green-400',
        second: 'bg-green-300'
      }
    }
  }

  const colors = getThemeColors()

  const getHandStyles = (type: 'hour' | 'minute' | 'second') => {
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    const hourAngle = (hours % 12) * 30 + minutes / 2
    const minuteAngle = minutes * 6 + seconds / 10
    const secondAngle = seconds * 6

    const angle = type === 'hour' ? hourAngle : type === 'minute' ? minuteAngle : secondAngle
    const bgColor = type === 'hour' ? colors.hour : type === 'minute' ? colors.minute : colors.second

    return {
      transform: `rotate(${angle}deg)`,
      width: type === 'hour' ? '4px' : type === 'minute' ? '3px' : '2px',
      height: type === 'hour' ? '25%' : type === 'minute' ? '35%' : '40%',
      backgroundColor: bgColor,
      bottom: '50%',
      left: '50%',
      transformOrigin: 'bottom',
      borderRadius: '4px'
    }
  }

  return (
    <div className="fixed bottom-0 right-0 m-4 backdrop-filter backdrop-blur-lg rounded-full p-4 z-50">
      <div className={`relative border rounded-full w-32 h-32 ${colors.clock} transition-colors duration-300`}>
        <div className="absolute transform origin-bottom" style={getHandStyles('hour')}></div>
        <div className="absolute transform origin-bottom" style={getHandStyles('minute')}></div>
        <div className="absolute transform origin-bottom" style={getHandStyles('second')}></div>
        <h2 className={`text-xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${colors.text}`}>
          {formatTime(time)}
        </h2>
      </div>
    </div>
  )
}

export default Clock
