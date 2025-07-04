'use client'
import React from 'react'
import { Header } from './Header'
import Image from 'next/image'
import { Particles } from './Particles'
import { useTheme } from '../theme-provider'
import { Typewriter } from 'react-simple-typewriter'

export function Welcome() {
    const { theme } = useTheme()

    const getThemeClass = () => {
      switch(theme) {
        case 'morning':
          return 'bg-gradient-to-b from-white to-gray-50'
        case 'midnight':
          return 'bg-gradient-to-b from-blue-900/50 to-purple-900/50'
        default:
          return 'bg-gradient-to-b from-transparent to-black/10'
      }
    }
        return (
            <div className="relative">
                <Header />
                <div className={`flex flex-col items-center justify-center min-h-screen px-4 py-20 ${getThemeClass()} relative overflow-hidden`}>
                    <Particles />
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <div className="mb-8">
                            <Image 
                                src="/logo.png" 
                                alt="Logo" 
                                className="mx-auto rounded-full shadow-md glass"
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className="w-full max-w-2xl mx-auto text-left px-4">
                            <h1 className="text-4xl font-mono font-bold text-gray-800 dark:text-gray-200 mb-6">
                                <Typewriter
                                    words={['PixelForge Studio','PixelForge 工作室']}
                                    loop={-1}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={3000}
                                />
                            </h1>
                            <p className="font-mono text-gray-600 dark:text-gray-400 mb-8">
                                <Typewriter
                                    words={['Crafting digital experiences with code and care','用代码和关爱打造数字体验']}
                                    loop={-1}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={30}
                                    deleteSpeed={30}
                                    delaySpeed={3000}
                                />
                            </p>
                        </div>
                        <div className="mt-12">
                            <div className="flex space-x-4">
                                <a 
                                    href="#projects"
                                    className="px-6 py-3 font-mono text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    View Projects
                                </a>
                                <a 
                                    href="#contact"
                                    className="px-6 py-3 font-mono text-sm bg-gray-800 text-white dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 animate-fade-in delay-700">
                            <svg 
                                className="w-8 h-8 neon-text-blue mx-auto animate-float" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                            <p className="mt-2 text-gray-500">向下滑动</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}
