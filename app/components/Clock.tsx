'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from '../theme-provider'
import { themeColors } from '../config/theme'

/**
 * Clock component that displays current time with theme-based styling
 */
const Clock: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null)
  const { theme } = useTheme()

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

  const getHandAngle = (type: 'hour' | 'minute' | 'second') => {
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    switch (type) {
      case 'hour': return (hours % 12) * 30 + minutes / 2
      case 'minute': return minutes * 6 + seconds / 10
      case 'second': return seconds * 6
    }
  }

  const colors = themeColors[theme]

  const handBaseStyles = {
    bottom: '50%',
    left: '50%',
    transformOrigin: 'bottom',
    borderRadius: '4px'
  }

  const hourHandStyles = {
    ...handBaseStyles,
    transform: `rotate(${getHandAngle('hour')}deg)`,
    width: '4px',
    height: '25%',
    backgroundColor: colors.hour
  }

  const minuteHandStyles = {
    ...handBaseStyles,
    transform: `rotate(${getHandAngle('minute')}deg)`,
    width: '3px',
    height: '35%',
    backgroundColor: colors.minute
  }

  const secondHandStyles = {
    ...handBaseStyles,
    transform: `rotate(${getHandAngle('second')}deg)`,
    width: '2px',
    height: '40%',
    backgroundColor: colors.second
  }

  return (
    <div className="fixed bottom-0 right-0 m-4 backdrop-filter backdrop-blur-lg rounded-full p-4 z-50">
      <div className={`relative border rounded-full w-32 h-32 ${colors.clock} transition-colors duration-300`}>
        <div className="absolute" style={hourHandStyles}></div>
        <div className="absolute" style={minuteHandStyles}></div>
        <div className="absolute" style={secondHandStyles}></div>
        <h2 className={`text-xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${colors.text}`}>
          {formatTime(time)}
        </h2>
      </div>
    </div>
  )
}

export default Clock
