'use client'
import React, { useState } from 'react'
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'
import { useTheme } from '../theme-provider'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { mode, setTheme } = useTheme()

  const navItems = [
    { name: 'Home', hash: '' },
    { name: 'About', hash: 'about' },
    { name: 'Projects', hash: 'projects' },
    { name: 'Contact', hash: 'contact' }
  ]

  const handleNavClick = (hash: string) => {
    setIsMenuOpen(false)
    window.location.hash = hash
  }
  
  const toggleTheme = () => {
    try {
      const nextMode = mode === 'light' ? 'dark' : 'light'
      setTheme(nextMode)
    } catch (error) {
      console.error('Failed to toggle theme:', error)
    }
  }

  const getThemeIcon = (resolvedTheme: string | undefined) => {
    return resolvedTheme === 'dark' 
      ? <FiMoon className="text-primary" /> 
      : <FiSun className="text-primary" />
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200/20 dark:border-gray-800/20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <span className="text-gray-900 dark:text-white font-semibold">PixelForge</span>
              <nav className="flex space-x-6">
                <div className="flex items-center space-x-4 border-r border-gray-200/20 dark:border-gray-800/20 pr-6">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all p-1">
                    <FiGithub size={18} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all p-1">
                    <FiTwitter size={18} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all p-1">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="mailto:ch_bow@126.com" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all p-1">
                    <FiMail size={18} />
                  </a>
                </div>
              {navItems.map((item) => (
                <button
                  key={item.hash}
                  onClick={() => handleNavClick(item.hash)}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all px-3 py-1 rounded hover:bg-gray-100/50 dark:hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/80 dark:bg-black/80 hover:bg-primary/10 transition-all border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_10px_2px_hsl(var(--primary)/0.3)]"
            aria-label="Toggle theme"
          >
            {getThemeIcon(mode)}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <span className="text-gray-900 dark:text-white font-semibold">PixelForge</span>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/30 dark:bg-black/30 hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all border border-gray-200/20 dark:border-gray-800/20"
              aria-label="Toggle theme"
            >
            {getThemeIcon(mode)}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none bg-white/30 dark:bg-black/30 p-2 rounded border border-gray-200/20 dark:border-gray-800/20"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-b border-gray-200/20 dark:border-gray-800/20">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.hash}
                  onClick={() => handleNavClick(item.hash)}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-left py-2 px-3 rounded transition-all hover:bg-gray-100/30 dark:hover:bg-white/10"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
