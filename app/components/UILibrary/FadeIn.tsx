'use client'
import { useEffect, useRef, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number // delay in ms
  shouldFade?: boolean
}

export default function FadeIn({ children, className = '', delay = 0, shouldFade = true }: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldFade) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100')
              entry.target.classList.remove('translate-y-10', 'opacity-0')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '50px', // Start transition slightly before element comes into view
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay, shouldFade, elementRef])

  if (!shouldFade) {
    return children;
  }

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-1000 ease-out translate-y-10 opacity-0 ${className}`}
    >
      {children}
    </div>
  )
} 