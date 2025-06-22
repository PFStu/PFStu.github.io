'use client'
import React from 'react'
import { Header } from './Header'
import Image from 'next/image'

export function Welcome() {
    return (
        <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 tech-grid bg-gradient-to-b from-transparent to-black/10">
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
                <h1 className="text-5xl font-bold neon-text-blue mb-4 animate-fade-in-up">
                    PixelForge 工作室
                </h1>
                <p className="text-xl text-gray-300 mb-8 animate-fade-in-up delay-300">
                    用代码创造数字体验，用心打造每一个细节
                </p>
                <div className="mt-8 animate-fade-in-up delay-500">
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="px-6 py-3 glass text-white rounded-lg hover:bg-blue-500/30 transition-all">
                            查看项目
                        </a>
                        <a href="#contact" className="px-6 py-3 glass text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all">
                            联系我们
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
        </>
    )
}
