'use client'
import React from 'react'
import { useTheme } from '../theme-provider'
import { projects } from '../config/site'
import { Button } from './ui/button'

/**
 * Projects component that displays a grid of project cards
 */
export const Projects: React.FC = () => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  
  // Theme-based styles
  const styles = {
    bg: isDark ? 'bg-gray-900' : 'bg-gray-100',
    cardBg: isDark ? 'bg-gray-800/90' : 'bg-white/80',
    border: isDark ? 'border-gray-700' : 'border-gray-300',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    secondaryText: isDark ? 'text-gray-300' : 'text-gray-700'
  }

  const { bg, text, cardBg, border, secondaryText } = styles
  
  return (
    <section className={`${bg} py-16 px-4 transition-colors duration-300`} id="projects">
      <div className="container mx-auto">
        <h2 className={`text-2xl font-bold ${text} mb-8`}>Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`backdrop-blur-sm ${cardBg} rounded-lg ${border} p-6 hover:border-primary transition-all duration-300 group`}
            >
              <div className="flex items-center mb-4">
                <h3 className={`text-lg font-medium ${text} group-hover:text-primary`}>{project.name}</h3>
                {project.type && (
                  <span className={`ml-2 px-2 py-1 text-xs glass ${secondaryText} rounded-full`}>
                    {project.type}
                  </span>
                )}
              </div>
              <p className={`${secondaryText} mb-4`}>{project.description}</p>
              <Button
                onClick={() => window.open(project.link, '_blank')}
                variant="primary"
                className="w-full"
              >
                {project.type === 'documentation' ? '查看文档' : 
                 project.type === 'tool' ? '使用工具' :
                 '查看项目'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
