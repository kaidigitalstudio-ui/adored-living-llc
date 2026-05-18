import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <section className="section section--top" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-split">

            {/* Left — warm copy */}
            <div className="contact-split-left" data-animate>
              <span className="eyebrow">Contact Us</span>
              <h1 id="contact-heading">We're Here When You're Ready</h1>
              <p>Choosing care for a loved one is one of the most important — and often hardest — decisions a family makes. We want you to feel completely at ease reaching out. There's no pressure, no sales pitch, and no commitment required.</p>
              <p>Call us to ask questions, schedule a tour, or simply talk through what your loved one needs. We'll listen first and help however we can.</p>
              <div className="contact-split-links">
                <Link to="/locations/rochester-hills" className="btn btn-secondary">View Rochester Hills</Link>
                <Link to="/locations/clarkston" className="btn btn-secondary">View Clarkston</Link>
              </div>
            </div>

            {/* Right — contact info */}
            <div className="contact-split-right" data-animate data-delay={150}>
              <div className="contact-info-block">
                <div className="contact-info-item">
                  <div className="contact-info-icon" aria-hidden="true"><Phone size={18} strokeWidth={1.75} /></div>
                  <div>
                    <span className="contact-info-label">Phone</span>
                    <a href="tel:+12489319009" className="contact-info-value contact-info-phone">(248) 931-9009</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon" aria-hidden="true"><Mail size={18} strokeWidth={1.75} /></div>
                  <div>
                    <span className="contact-info-label">Email</span>
                    <a href="mailto:adoredlivingllc@gmail.com" className="contact-info-value">adoredlivingllc@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon" aria-hidden="true"><Clock size={18} strokeWidth={1.75} /></div>
                  <div>
                    <span className="contact-info-label">Availability</span>
                    <span className="contact-info-value">Monday – Sunday, 7 days a week</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon" aria-hidden="true"><MapPin size={18} strokeWidth={1.75} /></div>
                  <div>
                    <span className="contact-info-label">Locations</span>
                    <span className="contact-info-value">Rochester Hills &amp; Clarkston, MI</span>
                  </div>
                </div>
                <a href="tel:+12489319009" className="btn btn-primary btn-lg" style={{ marginTop: 8, width: '100%', justifyContent: 'center' }}>
                  Call Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== MAPS ===== */}
      <section className="section section--alt" aria-labelledby="map-heading">
        <div className="container">
          <span className="eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>Find Us</span>
          <h2 id="map-heading" style={{ textAlign: 'center', marginBottom: 48 }}>Our Michigan Locations</h2>
          <div className="locations-grid">
            {[
              { title: 'Rochester Hills Home', address: '185 E South Blvd, Rochester Hills, MI 48307', src: 'https://maps.google.com/maps?q=185+E+South+Blvd,+Rochester+Hills,+MI+48307&output=embed' },
              { title: 'Clarkston Home', address: '5111 Heath Ave, Clarkston, MI 48346', src: 'https://maps.google.com/maps?q=5111+Heath+Ave,+Clarkston,+MI+48346&output=embed' },
            ].map(({ title, address, src }) => (
              <div key={title} style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--cream-dark)', boxShadow: 'var(--shadow-sm)' }}>
                <iframe title={`${title} Map`} src={src} width="100%" height="280" style={{ border: 0, display: 'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div style={{ padding: '24px 28px' }}>
                  <h3 style={{ marginBottom: 6 }}>{title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-light)', fontSize: '.9rem' }}>
                    <MapPin size={14} strokeWidth={2} aria-hidden="true" />
                    <span>{address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
