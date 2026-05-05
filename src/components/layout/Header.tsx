import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const NAV_ITEMS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Services' },
]

const LOCATION_ITEMS = [
  { to: '/locations/rochester-hills', label: 'Rochester Hills' },
  { to: '/locations/clarkston',       label: 'Clarkston' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const { pathname } = useLocation()
  const onLocations = pathname.startsWith('/locations')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close dropdown on route change
  useEffect(() => { setDropdownOpen(false) }, [pathname])

  const closeMenu = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

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

          {/* Locations dropdown */}
          <li className="nav-dropdown" ref={dropdownRef}>
            <button
              className={`nav-dropdown-trigger${onLocations ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(prev => !prev)}
            >
              Locations <ChevronDown size={13} strokeWidth={2.5} className={dropdownOpen ? 'rotated' : ''} />
            </button>

            {/* Desktop dropdown */}
            {dropdownOpen && (
              <ul className="nav-dropdown-menu" role="list">
                {LOCATION_ITEMS.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? 'active' : ''}
                      onClick={closeMenu}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}

            {/* Mobile sub-links (always visible when mobile menu is open) */}
            <div className="nav-dropdown-mobile">
              {LOCATION_ITEMS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `nav-dropdown-mobile-link${isActive ? ' active' : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </li>

          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMenu}
            >
              FAQs
            </NavLink>
          </li>
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
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : undefined} />
          <span style={menuOpen ? { opacity: 0 } : undefined} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : undefined} />
        </button>
      </nav>
    </header>
  )
}
