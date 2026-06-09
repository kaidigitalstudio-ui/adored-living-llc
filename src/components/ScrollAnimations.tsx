import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollAnimations() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>('.reveal:not(.in)')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            const el = entry.target as HTMLElement
            const delay = Number(el.style.transitionDelay?.replace('ms', '') || 0)
            setTimeout(() => el.classList.add('in'), delay)
            observer.unobserve(el)
          })
        },
        { threshold: 0.12 }
      )
      els.forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 60)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
