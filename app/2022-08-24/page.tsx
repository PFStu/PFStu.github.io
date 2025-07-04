'use client'
import React, { useEffect, useState, useRef } from 'react'
import { useTheme } from '../theme-provider'
import { Particles } from '../components/Particles'
import { Button } from '../components/ui/button'
import { useRouter } from 'next/navigation'
import confetti from 'canvas-confetti'

export default function Anniversary() {
  const { resolvedTheme } = useTheme()
  const router = useRouter()
  const isDark = resolvedTheme === 'dark'
  const [daysSince, setDaysSince] = useState(0)
  const confettiRef = useRef<Promise<void> | null>(null)

  useEffect(() => {
    const startDate = new Date('2022-08-24')
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    setDaysSince(Math.floor(diffTime / (1000 * 60 * 60 * 24)))

    // Launch confetti
    confettiRef.current = confetti({
      particleCount: 500,
      spread: 70,
      origin: { y: 0.6 },
      disableForReducedMotion: true
    })

    const timer = setTimeout(() => {
      if (confettiRef.current) {
        confettiRef.current = null
      }
    }, 5000)

    return () => {
      clearTimeout(timer)
      if (confettiRef.current) {
        confettiRef.current = null
      }
    }
  }, [])

  const bgColor = isDark ? 'bg-gray-900' : 'bg-gray-50'
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900'
  const glassBg = isDark ? 'bg-black/30' : 'bg-white/50'

  return (
    <div className={`relative min-h-screen overflow-hidden ${bgColor} transition-colors duration-300`}>
      <Particles />
      <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className={`${glassBg} backdrop-blur-lg rounded-2xl p-12 max-w-2xl w-full text-center border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}>
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full blur-md opacity-30 animate-pulse"></div>
              <div className="relative flex items-center justify-center w-full h-full">
                <span className="text-6xl font-bold text-yellow-400">🎉</span>
              </div>
            </div>
          </div>
          
          <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>
            PixelForge 工作室
          </h2>

          <div className={`text-2xl mb-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            成立于 2022年8月24日
          </div>

          <div className={`text-xl mb-8 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            已经陪伴您 {daysSince} 天
          </div>

          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            感谢一路以来的支持与信任！
          </p>

          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => router.push('/')}
              variant="primary"
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600"
            >
              返回主页
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
