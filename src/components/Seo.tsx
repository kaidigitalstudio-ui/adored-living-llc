import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import seo from '../seo.json'

type Page = { title: string; description: string }
const pages = seo.pages as Record<string, Page>

// Keeps the tab title, description, and canonical URL in sync on client-side navigation.
// The initial HTML for each route already has these (see scripts/seo-pages.mjs).
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const key = pathname === '/donate' ? '/give' : pathname.replace(/\/+$/, '') || '/'
    const page = pages[key] ?? pages['/']
    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', seo.siteUrl + (key === '/' ? '/' : key))
  }, [pathname])

  return null
}
