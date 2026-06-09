import { Link } from 'react-router-dom'

const PHONE = '(248) 931-9009'
const PHONE_HREF = 'tel:+12489319009'

export default function CTABand() {
  return (
    <section className="section" id="tour">
      <div className="wrap">
        <div className="cta-band reveal">
          <h2>Come see it for yourself.</h2>
          <p>Schedule a private tour and meet the team. We'll walk you through daily life, answer every question, and help you picture home.</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-light">Schedule a Tour</Link>
            <a href={PHONE_HREF} className="btn btn-ghost">Call {PHONE}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
