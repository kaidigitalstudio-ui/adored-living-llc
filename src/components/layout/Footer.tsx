import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
              <span className="logo-primary">Adored Living</span>
              <span className="logo-sub">LLC · Residential Care</span>
            </Link>
            <p>A compassionate, family-run assisted living community in Michigan — where every resident is truly adored.</p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul role="list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul role="list">
              <li><Link to="/services">Meals &amp; Nutrition</Link></li>
              <li><Link to="/services">Personal Care</Link></li>
              <li><Link to="/services">Medication Management</Link></li>
              <li><Link to="/services">Housekeeping</Link></li>
              <li><Link to="/services">Companionship</Link></li>
              <li><Link to="/services">Community Gardens</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <span className="fc-icon" aria-hidden="true">📞</span>
              <span><a href="tel:+12489319009">(248) 931-9009</a></span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon" aria-hidden="true">✉️</span>
              <span><a href="mailto:adoredlivingllc@gmail.com">adoredlivingllc@gmail.com</a></span>
            </div>
            <div className="footer-contact-item">
              <span className="fc-icon" aria-hidden="true">📍</span>
              <span>Rochester Hills, MI &amp; Clarkston, MI</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Adored Living LLC. All rights reserved. Licensed by the State of Michigan.</p>
          <Link to="/contact">Schedule a Tour</Link>
        </div>
      </div>
    </footer>
  )
}
