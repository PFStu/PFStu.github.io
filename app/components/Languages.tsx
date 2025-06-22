'use client'
import React from 'react'
import { useTheme } from '../theme-provider'
import { Icon } from '@iconify/react'
import typescriptIcon from '@iconify-icons/simple-icons/typescript'
import cppIcon from '@iconify-icons/simple-icons/cplusplus'
import pythonIcon from '@iconify-icons/simple-icons/python'
import nodejsIcon from '@iconify-icons/simple-icons/nodedotjs'
import javascriptIcon from '@iconify-icons/simple-icons/javascript'
import linuxIcon from '@iconify-icons/simple-icons/linux'
import phpIcon from '@iconify-icons/simple-icons/php'

const languages = [
  { name: 'TypeScript', icon: typescriptIcon, level: 90 },
  { name: 'C++', icon: cppIcon, level: 85 },
  { name: 'Python', icon: pythonIcon, level: 80 },
  { name: 'Node.js', icon: nodejsIcon, level: 85 },
  { name: 'JavaScript', icon: javascriptIcon, level: 90 },
  { name: 'Linux', icon: linuxIcon, level: 75 },
  { name: 'PHP', icon: phpIcon, level: 70 }
]

const Languages = () => {
  const { theme } = useTheme()

  const getThemeStyles = () => {
    switch (theme) {
      case 'morning':
        return {
          bg: 'bg-blue-50',
          cardBg: 'bg-white',
          text: 'text-blue-900',
          progressBg: 'bg-blue-100',
          progressBar: 'bg-blue-600'
        }
      case 'midnight':
        return {
          bg: 'bg-purple-900/95',
          cardBg: 'bg-purple-800/80',
          text: 'text-purple-100',
          progressBg: 'bg-purple-700',
          progressBar: 'bg-purple-400'
        }
      default:
        return {
          bg: 'bg-gray-900',
          cardBg: 'bg-gray-800',
          text: 'text-gray-100',
          progressBg: 'bg-gray-700',
          progressBar: 'bg-blue-500'
        }
    }
  }

  const styles = getThemeStyles()

  return (
    <section className={`${styles.bg} py-16 px-4 transition-colors duration-300`} id="languages">
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold ${styles.text} mb-8 text-center`}>Our Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language) => (
            <div 
              key={language.name}
              className={`${styles.cardBg} ${styles.text} rounded-xl p-6 shadow-lg transition-all hover:shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <Icon icon={language.icon} width="32" height="32" className="mr-3" />
                <h3 className="text-xl font-semibold">{language.name}</h3>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Proficiency</span>
                  <span>{language.level}%</span>
                </div>
                <div className={`w-full ${styles.progressBg} rounded-full h-2.5`}>
                  <div 
                    className={`${styles.progressBar} h-2.5 rounded-full`} 
                    style={{ width: `${language.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
