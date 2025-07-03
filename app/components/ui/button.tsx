'use client'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className, ...props }, ref) => {
    const baseClasses = 'inline-block px-4 py-2 text-sm font-medium rounded transition-all opacity-90 hover:opacity-100 transform hover:scale-105 text-shadow-lg'
    const variantClasses = {
      primary: 'bg-green-400 text-white hover:shadow-[0_0_25px_10px_rgba(74,222,128,0.8)]',
      secondary: 'bg-blue-400 text-white hover:shadow-[0_0_25px_10px_rgba(96,165,250,0.8)]'
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        style={{textShadow: '0 0 5px rgba(0,0,0,0.3)'}}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
