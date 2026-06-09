import { Link } from 'react-router-dom'

const PHONE = '(248) 931-9009'
const PHONE_HREF = 'tel:+12489319009'

export default function Footer() {
  return (
    <footer className="ft" role="contentinfo">
      <div className="wrap">
        <div className="ft-grid">
          <div className="ft-brand">
            <Link to="/" className="brand" aria-label="Adored Living — Home">
              <span className="mark"><span /></span>
              <span>
                <b>Adored Living</b>
                <small>Assisted Living</small>
              </span>
            </Link>
            <p>Compassionate residential assisted living in Rochester Hills and Clarkston, Michigan.</p>
          </div>

          <div>
            <h5>Explore</h5>
            <Link to="/about">Our Approach</Link>
            <Link to="/homes">The Homes</Link>
            <Link to="/care">Care &amp; Services</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div>
            <h5>Visit</h5>
            <Link to="/contact">Schedule a Tour</Link>
            <p>Rochester Hills, MI</p>
            <p>Clarkston, MI</p>
          </div>

          <div>
            <h5>Contact</h5>
            <a href={PHONE_HREF}>{PHONE}</a>
            <a href="mailto:adoredlivingllc@gmail.com">adoredlivingllc@gmail.com</a>
          </div>
        </div>

        <div className="ft-bottom">
          <span>© {new Date().getFullYear()} Adored Living LLC. All rights reserved.</span>
          <span>Licensed residential assisted living · State of Michigan</span>
        </div>
      </div>
    </footer>
  )
}
