'use client'
import React from 'react'
import { useTheme } from '../theme-provider'
import { contactMethods } from '../config/site'
import { Button } from './ui/button'
import { icons } from './ui/icons'

export const Contact = () => {
  const { resolvedTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'
  const sectionTheme = !isDark ? 'bg-gray-200 border-gray-300' : 'bg-gray-800 border-gray-800'
  const themeClass = isDark ? 'bg-gray-800/90 border-gray-600' : 'bg-blue-50 border-blue-200'

  return (
    <section className={`py-16 px-4 ${sectionTheme}`} id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Links</h2>
        
        <div className={`rounded-xl border p-8 ${themeClass} transition-colors duration-300`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div 
                key={method.name}
                className="p-6 rounded-lg flex flex-col items-center text-center glass transition-all hover:neon-border-blue group"
              >
                <div className="p-3 rounded-full mb-4 neon-text-blue">
                  {icons[method.icon as keyof typeof icons]()}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:neon-text-blue">{method.name}</h3>
                <p className="mb-4 opacity-80 group-hover:opacity-100">{method.value}</p>
                <Button 
                  onClick={method.action}
                  className="mt-auto"
                >
                  Contact via {method.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
