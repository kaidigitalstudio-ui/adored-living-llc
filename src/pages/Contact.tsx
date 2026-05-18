import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

export default function Contact() {
  return (
    <>
      <section className="section section--top" aria-labelledby="contact-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Contact Us"
            title="We'd Love to Hear From You"
            description="The best way to reach us is by phone — we're available seven days a week and happy to answer any questions about our homes, care, and availability."
            center
            id="contact-heading"
            as="h1"
          />

          {/* Primary call CTA */}
          <div style={{ textAlign: 'center', margin: '48px 0' }} data-animate>
            <a href="tel:+12489319009" className="btn btn-primary btn-lg" style={{ fontSize: '1.2rem', padding: '18px 48px', gap: 12, display: 'inline-flex', alignItems: 'center' }}>
              <Phone size={20} strokeWidth={2} aria-hidden="true" />
              (248) 931-9009
            </a>
            <p style={{ marginTop: 16, color: 'var(--text-light)', fontSize: '.95rem' }}>Available Monday – Sunday · No pressure, just a warm conversation</p>
          </div>

          {/* Contact info cards */}
          <div className="contact-cards" data-animate data-delay={100}>
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true"><Phone size={22} strokeWidth={1.75} /></div>
              <div className="contact-item-text">
                <strong>Phone</strong>
                <a href="tel:+12489319009">(248) 931-9009</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true"><Mail size={22} strokeWidth={1.75} /></div>
              <div className="contact-item-text">
                <strong>Email</strong>
                <a href="mailto:adoredlivingllc@gmail.com">adoredlivingllc@gmail.com</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true"><Clock size={22} strokeWidth={1.75} /></div>
              <div className="contact-item-text">
                <strong>Availability</strong>
                <span>Monday – Sunday, 7 days a week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAPS ===== */}
      <section className="section section--alt" aria-labelledby="map-heading">
        <div className="container">
          <SectionHeader eyebrow="Find Us" title="Our Michigan Locations" center id="map-heading" />
          <div className="locations-grid" style={{ marginTop: 48 }}>
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
