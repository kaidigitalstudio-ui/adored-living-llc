import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Users, Home, MessageCircle, ClipboardList, HelpCircle, Coffee, Heart, type LucideIcon } from 'lucide-react'
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
    img: '/rochester-hills.jpg',
    imgAlt: 'Rochester Hills home exterior surrounded by mature trees',
    features: ['Private furnished bedrooms', 'Shared living room with television', 'Comfortable outdoor seating areas', 'Quiet residential neighborhood', 'Easy access for family visits', 'State-licensed facility'],
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
    img: '/clarkston.webp',
    imgAlt: 'Clarkston home exterior with accessible ramp and flower beds',
    features: ['Private furnished bedrooms', 'Shared living room with television', 'Peaceful residential neighborhood', 'Outdoor patio and seating', 'Close to local amenities', 'State-licensed facility'],
  },
]

interface ExpectItem { Icon: LucideIcon; title: string; desc: string }

const EXPECT_ITEMS: ExpectItem[] = [
  { Icon: Coffee,        title: 'A Warm Welcome',       desc: 'You\'ll be greeted personally by our owners or caregivers. We\'ll offer you a cup of tea or coffee and get to know you before the tour begins.' },
  { Icon: Home,          title: 'A Full Home Tour',     desc: 'We\'ll walk you through every room — bedrooms, living areas, kitchen, and our comfortable outdoor spaces.' },
  { Icon: MessageCircle, title: 'Open Q&A',             desc: 'There are no rushed timelines here. Ask us anything — about care, pricing, routines, staff, or whatever is on your heart.' },
  { Icon: ClipboardList, title: 'Personalized Next Steps', desc: 'If you\'re interested, we\'ll discuss your loved one\'s specific needs and talk through how we can best support them.' },
  { Icon: Heart,         title: 'Meet the Residents',   desc: 'With permission, you may have the chance to briefly meet current residents and get a real sense of the warmth and community here.' },
  { Icon: HelpCircle,    title: 'No Pressure, Ever',    desc: 'We know this is a deeply personal decision. Our goal is simply to give you the information and comfort you need to make the best choice for your family.' },
]

export default function Locations() {
  return (
    <>
      {/* ===== INTRO ===== */}
      <section className="section" aria-labelledby="loc-intro">
        <div className="container">
          <SectionHeader eyebrow="Our Locations" title="Serving Rochester Hills & Clarkston" description="Our two licensed care homes in Oakland County, Michigan are both nestled in quiet residential neighborhoods — giving residents the peace of a real home with the security of professional care." center id="loc-intro" as="h1" />
        </div>
      </section>

      {/* ===== LOCATION CARDS ===== */}
      {LOCATIONS.map(({ id, badge, title, address, mapUrl, phone, phoneHref, email, img, imgAlt, features }, idx) => (
        <section key={id} id={id} className={`section${idx % 2 === 1 ? ' section--alt' : ''}`} aria-labelledby={`loc-${id}`}>
          <div className="container">
            <div className="grid-2" style={{ gap: 60 }}>
              {idx % 2 === 0 ? (
                <>
                  <div className="about-image" data-animate>
                    <img src={img} alt={imgAlt} loading="lazy" />
                    <div className="about-badge">
                      <div className="badge-icon" aria-hidden="true"><MapPin size={22} strokeWidth={1.5} color="white" /></div>
                      <div className="badge-text">
                        <strong>{badge}</strong>
                        <span>Michigan</span>
                      </div>
                    </div>
                  </div>
                  <LocationContent id={id} title={title} address={address} mapUrl={mapUrl} phone={phone} phoneHref={phoneHref} email={email} features={features} delay={150} />
                </>
              ) : (
                <>
                  <LocationContent id={id} title={title} address={address} mapUrl={mapUrl} phone={phone} phoneHref={phoneHref} email={email} features={features} />
                  <div className="about-image" data-animate data-delay={150}>
                    <img src={img} alt={imgAlt} loading="lazy" />
                    <div className="about-badge">
                      <div className="badge-icon" aria-hidden="true"><MapPin size={22} strokeWidth={1.5} color="white" /></div>
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
          <SectionHeader eyebrow="What to Expect" title="When You Come to Visit" description="We warmly welcome families to tour either of our homes at any time. Here's what a typical visit looks like." center id="expect-heading" />
          <div className="why-grid" style={{ marginTop: 56 }} role="list">
            {EXPECT_ITEMS.map(({ Icon, title, desc }, i) => (
              <div className="why-card" role="listitem" key={title} data-animate data-delay={i * 80}>
                <div className="why-icon" aria-hidden="true"><Icon size={28} strokeWidth={1.5} /></div>
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
        secondaryLabel="(248) 931-9009"
        secondaryHref="tel:+12489319009"
      />
    </>
  )
}

interface LocationContentProps {
  id: string; title: string; address: string; mapUrl: string
  phone: string; phoneHref: string; email: string; features: string[]
  delay?: number
}

function LocationContent({ id, title, address, mapUrl, phone, phoneHref, email, features, delay }: LocationContentProps) {
  return (
    <div className="about-content" data-animate data-delay={delay ?? 0}>
      <span className="eyebrow">Our Home</span>
      <h2 id={`loc-${id}`}>{title}</h2>
      <div className="location-address" style={{ marginBottom: 24 }}>
        <MapPin size={15} strokeWidth={2} aria-hidden="true" />
        <span>{address}</span>
      </div>

      <div className="location-details" style={{ marginBottom: 28 }}>
        <div className="loc-detail">
          <div className="detail-icon" aria-hidden="true"><Phone size={14} strokeWidth={2} /></div>
          <a href={phoneHref}>{phone}</a>
        </div>
        <div className="loc-detail">
          <div className="detail-icon" aria-hidden="true"><Mail size={14} strokeWidth={2} /></div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="loc-detail">
          <div className="detail-icon" aria-hidden="true"><Users size={14} strokeWidth={2} /></div>
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
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Get Directions</a>
      </div>
    </div>
  )
}
