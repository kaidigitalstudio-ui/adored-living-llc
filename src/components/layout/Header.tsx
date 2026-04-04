import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About Us' },
  { to: '/services',  label: 'Services' },
  { to: '/locations', label: 'Locations' },
  { to: '/faq',       label: 'FAQs' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
      <nav className="nav-inner" aria-label="Main navigation">
        <NavLink to="/" className="nav-logo" aria-label="Adored Living LLC — Home" onClick={closeMenu}>
          <span className="logo-primary">Adored Living</span>
          <span className="logo-sub">LLC · Residential Care</span>
        </NavLink>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
          {NAV_ITEMS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span
            style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : undefined}
          />
          <span style={menuOpen ? { opacity: 0 } : undefined} />
          <span
            style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : undefined}
          />
        </button>
      </nav>
    </header>
  )
}
