import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const PHONE = '(248) 931-9009'
const PHONE_HREF = 'tel:+12489319009'

const NAV_LINKS = [
  { to: '/about', label: 'Our Approach' },
  { to: '/homes', label: 'The Homes' },
  { to: '/care', label: 'Care' },
  { to: '/locations', label: 'Locations' },
  { to: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="Adored Living — Home" onClick={close}>
          <span className="mark"><span /></span>
          <span>
            <b>Adored Living</b>
            <small>Assisted Living</small>
          </span>
        </Link>

        <nav className="links" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <a href={PHONE_HREF} className="nav-phone">{PHONE}</a>
          <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
        </div>

        <button
          className="nav-hamburger"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={close}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary mobile-nav-cta" onClick={close}>Schedule a Tour</Link>
        <a href={PHONE_HREF} className="mobile-nav-phone" onClick={close}>{PHONE}</a>
      </nav>
    </header>
  )
}
