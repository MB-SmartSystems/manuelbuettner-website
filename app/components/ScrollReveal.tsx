'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: boolean
}

export default function ScrollReveal({ children, className = '', delay = 0, stagger = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger) {
              const items = el.querySelectorAll('.stagger-item')
              items.forEach((item, i) => {
                setTimeout(() => {
                  item.classList.add('visible')
                }, i * 100)
              })
            }
            setTimeout(() => {
              el.classList.add('visible')
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, stagger])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
