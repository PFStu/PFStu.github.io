'use client'
import React from 'react'
import { useTheme } from '../theme-provider'

const contactMethods = [
  {
    name: 'Email',
    value: 'ch_bow@126.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    action: () => window.open('mailto:ch_bow@126.com')
  },
  {
    name: 'GitHub',
    value: 'github.com/PFStu',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    action: () => window.open('https://github.com/PFStu/')
  },
  {
    name: 'Skype',
    value: 'Join our group',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L12 21l2.31-1.31C18.16 19.67 21 16.17 21 12a9 9 0 0 0-9-9z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    action: () => window.open('https://join.skype.com/qVWyvjpuOYeG')
  }
]

export const Contact = () => {
  const { resolvedTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'
  const themeClass = isDark ? 'bg-gray-800/90 border-gray-600' : 'bg-blue-50 border-blue-200'

  return (
    <section className="py-16 px-4" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        
        <div className={`rounded-xl border p-8 ${themeClass} transition-colors duration-300`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div 
                key={method.name}
                className="p-6 rounded-lg flex flex-col items-center text-center glass transition-all hover:neon-border-blue group"
              >
                <div className="p-3 rounded-full mb-4 neon-text-blue">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:neon-text-blue">{method.name}</h3>
                <p className="mb-4 opacity-80 group-hover:text-white">{method.value}</p>
                <button 
                  onClick={method.action}
                  className="mt-auto px-4 py-2 bg-green-400 text-white rounded transition-all opacity-90 hover:opacity-100 hover:shadow-[0_0_25px_10px_rgba(74,222,128,0.8)] transform hover:scale-105 text-shadow-lg"
                  style={{textShadow: '0 0 5px rgba(0,0,0,0.3)'}}
                >
                  Contact via {method.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
