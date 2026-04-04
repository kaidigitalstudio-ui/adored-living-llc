import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/ui/CTABanner'

interface Location {
  id: string
  badge: string
  title: string
  address: string
  mapUrl: string
  phone: string
  phoneHref: string
  email: string
  img: string
  imgAlt: string
  details: { icon: string; label: string; value: string }[]
  features: string[]
}

const LOCATIONS: Location[] = [
  {
    id: 'rochester-hills',
    badge: 'Rochester Hills',
    title: 'Rochester Hills Home',
    address: '185 E South Blvd, Rochester Hills, MI 48307',
    mapUrl: 'https://www.google.com/maps?q=185+E+South+Blvd,+Rochester+Hills,+MI+48307',
    phone: '(248) 931-9009',
    phoneHref: 'tel:+12489319009',
    email: 'adoredlivingllc@gmail.com',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80',
    imgAlt: 'Warm residential home exterior surrounded by trees and greenery',
    details: [
      { icon: '📍', label: 'Address', value: '185 E South Blvd, Rochester Hills, MI 48307' },
      { icon: '📞', label: 'Phone', value: '(248) 931-9009' },
      { icon: '✉️', label: 'Email', value: 'adoredlivingllc@gmail.com' },
      { icon: '👥', label: 'Capacity', value: 'Maximum 6 residents' },
    ],
    features: [
      'Community garden & outdoor patio',
      'Private furnished bedrooms',
      'Shared living room with TV',
      'Quiet residential neighborhood',
      'Easy access for family visits',
      'State-licensed facility',
    ],
  },
  {
    id: 'clarkston',
    badge: 'Clarkston',
    title: 'Clarkston Home',
    address: '5111 Heath Ave, Clarkston, MI 48346',
    mapUrl: 'https://www.google.com/maps?q=5111+Heath+Ave,+Clarkston,+MI+48346',
    phone: '(248) 931-9009',
    phoneHref: 'tel:+12489319009',
    email: 'adoredlivingllc@gmail.com',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    imgAlt: 'Welcoming home in a peaceful suburban neighborhood',
    details: [
      { icon: '📍', label: 'Address', value: '5111 Heath Ave, Clarkston, MI 48346' },
      { icon: '📞', label: 'Phone', value: '(248) 931-9009' },
      { icon: '✉️', label: 'Email', value: 'adoredlivingllc@gmail.com' },
      { icon: '👥', label: 'Capacity', value: 'Maximum 6 residents' },
    ],
    features: [
      'Peaceful residential neighborhood',
      'Private furnished bedrooms',
      'Shared living room with TV',
      'Beautiful outdoor spaces',
      'Close to local amenities',
      'State-licensed facility',
    ],
  },
]

export default function Locations() {
  return (
    <>
      <PageHero
        eyebrow="Our Homes"
        title="Two Warm Michigan Locations"
        description="Both of our homes offer the same intimate, compassionate care in beautiful residential settings — each a true home for every resident."
        bgImage="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80"
        bgAlt="Warm residential home exterior"
      />

      {/* ===== LOCATIONS INTRO ===== */}
      <section className="section" aria-labelledby="loc-intro">
        <div className="container">
          <SectionHeader
            eyebrow="Where We Are"
            title="Serving Rochester Hills & Clarkston"
            description="Our two licensed care homes in Oakland County, Michigan are both nestled in quiet residential neighborhoods — giving residents the peace of a real home with the security of professional care."
            center
            id="loc-intro"
          />
        </div>
      </section>

      {/* ===== LOCATION CARDS ===== */}
      {LOCATIONS.map(({ id, badge, title, address, mapUrl, phone, phoneHref, email, img, imgAlt, details, features }, idx) => (
        <section
          key={id}
          id={id}
          className={`section${idx % 2 === 1 ? ' section--alt' : ''}`}
          aria-labelledby={`loc-${id}`}
        >
          <div className="container">
            <div className="grid-2" style={{ gap: 60 }}>
              {idx % 2 === 0 ? (
                <>
                  <div className="about-image">
                    <img src={img} alt={imgAlt} loading="lazy" />
                    <div className="about-badge">
                      <div className="badge-icon" aria-hidden="true">📍</div>
                      <div className="badge-text">
                        <strong>{badge}</strong>
                        <span>Michigan</span>
                      </div>
                    </div>
                  </div>
                  <LocationContent
                    id={id}
                    badge={badge}
                    title={title}
                    address={address}
                    mapUrl={mapUrl}
                    phone={phone}
                    phoneHref={phoneHref}
                    email={email}
                    details={details}
                    features={features}
                  />
                </>
              ) : (
                <>
                  <LocationContent
                    id={id}
                    badge={badge}
                    title={title}
                    address={address}
                    mapUrl={mapUrl}
                    phone={phone}
                    phoneHref={phoneHref}
                    email={email}
                    details={details}
                    features={features}
                  />
                  <div className="about-image">
                    <img src={img} alt={imgAlt} loading="lazy" />
                    <div className="about-badge">
                      <div className="badge-icon" aria-hidden="true">📍</div>
                      <div className="badge-text">
                        <strong>{badge}</strong>
                        <span>Michigan</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="section" aria-labelledby="expect-heading">
        <div className="container">
          <SectionHeader
            eyebrow="What to Expect"
            title="When You Come to Visit"
            description="We warmly welcome families to tour either of our homes at any time. Here's what a typical visit looks like."
            center
            id="expect-heading"
          />
          <div className="why-grid" style={{ marginTop: 56 }} role="list">
            {[
              { icon: '☕', title: 'A Warm Welcome', desc: 'You\'ll be greeted personally by our owners or caregivers. We\'ll offer you a cup of tea or coffee and get to know you before the tour begins.' },
              { icon: '🏠', title: 'A Full Home Tour', desc: 'We\'ll walk you through every room — bedrooms, living areas, kitchen, and of course our beautiful gardens and outdoor spaces.' },
              { icon: '💬', title: 'Open Q&A', desc: 'There are no rushed timelines here. Ask us anything — about care, pricing, routines, staff, or whatever is on your heart.' },
              { icon: '📋', title: 'Personalized Next Steps', desc: 'If you\'re interested, we\'ll discuss your loved one\'s specific needs and talk through how we can best support them.' },
              { icon: '💜', title: 'Meet the Residents', desc: 'With permission, you may have the chance to briefly meet current residents and get a real sense of the warmth and community here.' },
              { icon: '❓', title: 'No Pressure, Ever', desc: 'We know this is a deeply personal decision. Our goal is simply to give you the information and comfort you need to make the best choice for your family.' },
            ].map(({ icon, title, desc }) => (
              <div className="why-card" role="listitem" key={title}>
                <div className="why-icon" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Come See For Yourself"
        title="Schedule a Personal Tour Today"
        description="We'd love to show you our home. Contact us to arrange a visit at whichever location is most convenient for your family."
        primaryLabel="Book a Tour"
        primaryTo="/contact"
        secondaryLabel="📞 (248) 931-9009"
        secondaryHref="tel:+12489319009"
      />
    </>
  )
}

interface LocationContentProps {
  id: string
  badge: string
  title: string
  address: string
  mapUrl: string
  phone: string
  phoneHref: string
  email: string
  details: { icon: string; label: string; value: string }[]
  features: string[]
}

function LocationContent({ id, title, address, mapUrl, phone, phoneHref, email, features }: LocationContentProps) {
  return (
    <div className="about-content">
      <span className="eyebrow">Our Home</span>
      <h2 id={`loc-${id}`}>{title}</h2>
      <div className="location-address" style={{ marginBottom: 24 }}>
        <span aria-hidden="true">📍</span>
        <span>{address}</span>
      </div>

      <div className="location-details" style={{ marginBottom: 28 }}>
        <div className="loc-detail">
          <div className="detail-icon" aria-hidden="true">📞</div>
          <a href={phoneHref}>{phone}</a>
        </div>
        <div className="loc-detail">
          <div className="detail-icon" aria-hidden="true">✉️</div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="loc-detail">
          <div className="detail-icon" aria-hidden="true">👥</div>
          <span>Maximum 6 residents — intimate, family-style care</span>
        </div>
      </div>

      <div className="service-includes" style={{ marginBottom: 32 }} role="list">
        {features.map((f) => (
          <div className="include-item" role="listitem" key={f}>{f}</div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link to="/contact" className="btn btn-primary">Schedule a Visit</Link>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
          📍 Get Directions
        </a>
      </div>
    </div>
  )
}
