import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Users } from 'lucide-react'
import CTABanner from '../components/ui/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'

export default function Clarkston() {
  return (
    <>
      {/* ===== INTRO ===== */}
      <section className="section section--top" aria-labelledby="clark-intro">
        <div className="container">
          <SectionHeader
            eyebrow="Clarkston, Michigan"
            title="Our Clarkston Home"
            description="Tucked in a peaceful residential neighborhood in Clarkston, our licensed care home provides a warm, homelike environment where residents receive personalized attention and compassionate care every day."
            center
            id="clark-intro"
            as="h1"
          />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Schedule a Visit</Link>
            <a href="https://www.google.com/maps?q=5111+Heath+Ave,+Clarkston,+MI+48346" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">Get Directions</a>
          </div>
        </div>
      </section>

      {/* ===== LOCATION INFO ===== */}
      <section className="section section--alt" aria-labelledby="clark-details">
        <div className="container">
          <div className="location-stacked-img" data-animate>
            <img src="/clarkston.webp" alt="Clarkston home exterior" loading="lazy" />
          </div>

          <div className="location-stacked" data-animate data-delay={100}>
            <span className="eyebrow" id="clark-details">Location Details</span>
            <h2>5111 Heath Ave</h2>
            <p>Clarkston, MI 48346</p>

            <div className="location-details" style={{ marginTop: 28, marginBottom: 32 }}>
              <div className="loc-detail">
                <div className="detail-icon" aria-hidden="true"><MapPin size={14} strokeWidth={2} /></div>
                <span>5111 Heath Ave, Clarkston, MI 48346</span>
              </div>
              <div className="loc-detail">
                <div className="detail-icon" aria-hidden="true"><Phone size={14} strokeWidth={2} /></div>
                <a href="tel:+12489319009">(248) 931-9009</a>
              </div>
              <div className="loc-detail">
                <div className="detail-icon" aria-hidden="true"><Mail size={14} strokeWidth={2} /></div>
                <a href="mailto:adoredlivingllc@gmail.com">adoredlivingllc@gmail.com</a>
              </div>
              <div className="loc-detail">
                <div className="detail-icon" aria-hidden="true"><Users size={14} strokeWidth={2} /></div>
                <span>Maximum 6 residents — intimate, family-style care</span>
              </div>
            </div>

            <div className="service-includes" role="list">
              {[
                'Private furnished bedrooms',
                'Shared living room with television',
                'Peaceful residential neighborhood',
                'Outdoor patio and seating',
                'Close to local amenities',
                'State-licensed facility',
                'Personalized care plans',
                'Family visits always welcome',
              ].map(f => (
                <div className="include-item" role="listitem" key={f}>{f}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Come See For Yourself"
        title="Schedule a Tour of Our Clarkston Home"
        description="We'd love to show you around. Contact us to arrange a visit at a time that works for your family."
        primaryLabel="Book a Tour"
        primaryTo="/contact"
        secondaryLabel="(248) 931-9009"
        secondaryHref="tel:+12489319009"
      />
    </>
  )
}
