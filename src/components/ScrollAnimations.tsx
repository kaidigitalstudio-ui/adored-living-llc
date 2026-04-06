import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollAnimations() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Small delay lets the new page's DOM render before we observe
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('[data-animate]')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay ? +el.dataset.delay : 0
            setTimeout(() => el.classList.add('in-view'), delay)
            observer.unobserve(el)
          })
        },
        { threshold: 0.1 }
      )
      els.forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 60)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
