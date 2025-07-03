'use client'
import React from 'react'
import Image from 'next/image'
import { useTheme } from '../theme-provider'
import Languages from './Languages'

export const About: React.FC = () => {
  const { resolvedTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'
  
  const bg = isDark ? 'from-gray-900 to-gray-800' : 'from-blue-50 to-blue-100'
  const border = isDark ? 'border-gray-700' : 'border-blue-200'
  const headerBorder = isDark ? 'border-gray-700' : 'border-blue-200'
  const terminalText = isDark ? 'text-green-400' : 'text-blue-700'
  const prompt = isDark ? 'text-purple-400' : 'text-blue-500'
  const cursor = isDark ? 'text-gray-300' : 'text-blue-900'

  return (
    <>
    <section className={`bg-gradient-to-br ${bg} py-20 items-center flex flex-col transition-colors duration-300`} id="about">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2 mb-8 md:mb-0 group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
          <Image 
            src="/about.png" 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1" 
            width={500} 
            height={500} 
          />
        </div>
        <div className="md:w-1/2">
          <div className={`glass ${border} rounded-lg overflow-hidden transition-colors duration-300`}>
            <div className={`px-4 py-3 bg-black/30 border-b ${headerBorder} flex items-center neon-border-blue`}>
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2 neon-text-pink"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2 neon-text-blue"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 neon-text-blue"></div>
                <div className={`ml-4 font-mono ${terminalText} text-sm neon-text-blue`}>about.md</div>
            </div>
            <div className={`p-6 font-mono code-terminal ${terminalText} text-sm leading-relaxed`}>
              <div className="mb-4">
                <span className={prompt}>#</span> <span className={prompt}>PixelForge Studio</span>
              </div>
              <div className="mb-4 ml-4">
                <span className={prompt}>##</span> <span className={prompt}>关于我们</span>
              </div>
              <div className="mb-4 ml-8">
                <span className={cursor}>-</span> 我们是一群热爱编程，热爱创造的学生组成的团队
              </div>
              <div className="mb-4 ml-8">
                <span className={cursor}>-</span> 致力于开发各种新鲜、实用的项目
              </div>
              <div className="mb-4 ml-8">
                <span className={cursor}>-</span> 提供创意作品，凝聚心血和创意
              </div>
              <div className="mb-4 ml-4">
                <span className={prompt}>##</span> <span className={prompt}>我们的理念</span>
              </div>
              <div className="mb-4 ml-8">
                <span className={cursor}>-</span> 重视每一个细节，从布局到UI
              </div>
              <div className="mb-4 ml-8">
                <span className={cursor}>-</span> 通过不断的努力和创新满足需求
              </div>
              <div className={`mt-6 pt-4 border-t ${headerBorder}`}>
                <span className={prompt}>$</span> <span className={cursor}>npm start</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <a 
          href="#languages" 
          className="inline-block px-6 py-3 rounded-lg bg-green-400 text-white transition-all opacity-90 hover:opacity-100 hover:shadow-[0_0_25px_10px_rgba(74,222,128,0.8)] transform hover:scale-105 text-shadow-lg"
          style={{textShadow: '0 0 5px rgba(0,0,0,0.3)'}}
        >
          View Our Skills
        </a>
      </div>
    </section>

    <Languages />
    </>
  )
}