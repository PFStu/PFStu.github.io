'use client'
import React from 'react'
import { useTheme } from './theme-provider'
import { Particles } from './components/Particles'
import { Button } from './components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const { resolvedTheme } = useTheme()
  const router = useRouter()
  const isDark = resolvedTheme === 'dark'
  
  const bgColor = isDark ? 'bg-gray-900' : 'bg-gray-50'
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900'
  const glassBg = isDark ? 'bg-black/30' : 'bg-white/50'

  return (
    <div className={`relative min-h-screen overflow-hidden ${bgColor} transition-colors duration-300`}>
      <Particles />
      <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className={`${glassBg} backdrop-blur-lg rounded-2xl p-12 max-w-2xl w-full text-center border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}>
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 bg-gradient-to-br blur-md opacity-30"></div>
              <div className="relative flex items-center justify-center w-full h-full">
                <span className="text-5xl font-bold text-blue-500">Err_0x00000194</span>
              </div>
            </div>
          </div>
          
          <h2 className={`text-3xl font-bold mb-4 ${textColor} flex items-center justify-center`}>
            <span className="mr-2">404
            </span>
            这里没有什么东西
            <span className="ml-2"></span>
          </h2>

          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            您寻找的页面可能已被黑洞吞噬，或者从未存在过
          </p>

          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => router.back()}
              variant="primary"
              className="px-6 py-3 glass hover:neon-border-blue"
            >
              ← 返回上一页
            </Button>
            <Button 
              onClick={() => router.push('/')}
              variant="secondary" 
              className="px-6 py-3 bg-gradient-to-r bg-green-600 hover:scale-110"
            >
              返回主页 →
            </Button>
          </div>
        </div>

        <div className={`mt-20 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          <a href="/2022-08-24">???0x01348B98</a>
        </div>
      </div>
    </div>
  )
}
