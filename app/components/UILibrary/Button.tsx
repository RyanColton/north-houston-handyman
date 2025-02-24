import { type ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  href?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export default function Button({ 
  variant = 'primary',
  children,
  className = '',
  size = 'lg',
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center px-4 py-2 rounded-md font-medium text-md"
  const variants = {
    primary: "bg-themeGreen text-white hover:bg-themeGreen/70",
    secondary: "text-neutral-900 hover:bg-neutral-50"
  }
  const sizes = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl"
  }

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button 
      {...props} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
} 