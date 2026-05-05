import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Users, X, ChevronLeft, ChevronRight } from 'lucide-react'
import CTABanner from '../components/ui/CTABanner'
import SectionHeader from '../components/ui/SectionHeader'

const GALLERY_PHOTOS = [
  { src: '/rochester/IMG_0087.jpeg', alt: 'Birthday celebration with residents and family' },
  { src: '/rochester/IMG_2960.jpeg', alt: 'Residents enjoying a meal together in the dining room' },
  { src: '/rochester/IMG_3545.jpeg', alt: 'Caregiver assisting resident with mobility' },
  { src: '/rochester/IMG_3551.jpeg', alt: 'Resident working on a jigsaw puzzle' },
  { src: '/rochester/IMG_5974.jpeg', alt: 'Summer patio gathering with residents and families' },
  { src: '/rochester/IMG_6342.jpeg', alt: 'Resident exercising in the common area' },
  { src: '/rochester/IMG_7029.jpeg', alt: 'Halloween pumpkin painting activity' },
  { src: '/rochester/IMG_7418.jpeg', alt: 'Cozy evening by the fireplace at Christmas' },
  { src: '/rochester/IMG_8204.jpeg', alt: 'Live guitar music performance for residents' },
  { src: '/rochester/IMG_8788.jpeg', alt: 'Outdoor birthday party on the deck' },
  { src: '/rochester/IMG_9289.jpeg', alt: '100th birthday celebration with family' },
  { src: '/rochester/IMG_9295.jpeg', alt: '100th birthday celebration — a century of life' },
  { src: '/rochester/IMG_9307.jpeg', alt: '100th birthday cake and festivities' },
  { src: '/rochester/IMG_9870.jpeg', alt: 'Large outdoor birthday party gathering' },
]

export default function Rochester() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)
  }, [])

  const next = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i + 1) % GALLERY_PHOTOS.length)
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, closeLightbox, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <>
      {/* ===== INTRO ===== */}
      <section className="section section--top" aria-labelledby="roch-intro">
        <div className="container">
          <SectionHeader
            eyebrow="Rochester Hills, Michigan"
            title="Our Rochester Hills Home"
            description="Nestled in a quiet residential neighborhood in Rochester Hills, our licensed care home offers a warm, intimate environment where residents are truly at home — surrounded by compassionate caregivers and a close-knit community."
            center
            id="roch-intro"
            as="h1"
          />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Schedule a Visit</Link>
            <a href="https://www.google.com/maps?q=185+E+South+Blvd,+Rochester+Hills,+MI+48307" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">Get Directions</a>
          </div>
        </div>
      </section>

      {/* ===== LOCATION INFO ===== */}
      <section className="section section--alt" aria-labelledby="roch-details">
        <div className="container">
          <div className="grid-2" style={{ gap: 60 }}>
            <div data-animate>
              <span className="eyebrow">Location Details</span>
              <h2 id="roch-details">185 E South Blvd</h2>
              <p>Rochester Hills, MI 48307</p>

              <div className="location-details" style={{ marginTop: 28, marginBottom: 32 }}>
                <div className="loc-detail">
                  <div className="detail-icon" aria-hidden="true"><MapPin size={14} strokeWidth={2} /></div>
                  <span>185 E South Blvd, Rochester Hills, MI 48307</span>
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
                  'Shared living room with fireplace',
                  'Spacious outdoor deck & patio',
                  'Quiet residential neighborhood',
                  'Easy access for family visits',
                  'State-licensed facility',
                  'Live entertainment & activities',
                  'Birthday & holiday celebrations',
                ].map(f => (
                  <div className="include-item" role="listitem" key={f}>{f}</div>
                ))}
              </div>
            </div>

            <div className="about-image" data-animate data-delay={150}>
              <img src="/rochester-hills.jpg" alt="Rochester Hills home exterior" loading="lazy" />
              <div className="about-badge">
                <div className="badge-icon" aria-hidden="true"><MapPin size={22} strokeWidth={1.5} color="white" /></div>
                <div className="badge-text">
                  <strong>Rochester Hills</strong>
                  <span>Michigan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section" aria-labelledby="gallery-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Life at Our Home"
            title="Moments That Make Us Home"
            description="From birthday celebrations and live music to quiet evenings by the fireplace — take a look at everyday life at our Rochester Hills location."
            center
            id="gallery-heading"
          />

          <div className="rochester-gallery" style={{ marginTop: 56 }} role="list">
            {GALLERY_PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                className="gallery-item"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View photo: ${photo.alt}`}
                role="listitem"
                data-animate
                data-delay={i * 40}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <div className="gallery-overlay" aria-hidden="true">
                  <span>View Photo</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close photo viewer">
            <X size={28} />
          </button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous photo">
            <ChevronLeft size={36} />
          </button>
          <div className="lightbox-img-wrap" onClick={e => e.stopPropagation()}>
            <img
              src={GALLERY_PHOTOS[lightboxIndex].src}
              alt={GALLERY_PHOTOS[lightboxIndex].alt}
            />
            <p className="lightbox-caption">{GALLERY_PHOTOS[lightboxIndex].alt}</p>
          </div>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); next() }} aria-label="Next photo">
            <ChevronRight size={36} />
          </button>
        </div>
      )}

      <CTABanner
        eyebrow="Come See For Yourself"
        title="Schedule a Tour of Our Rochester Hills Home"
        description="We'd love to show you around. Contact us to arrange a visit at a time that works for your family."
        primaryLabel="Book a Tour"
        primaryTo="/contact"
        secondaryLabel="(248) 931-9009"
        secondaryHref="tel:+12489319009"
      />
    </>
  )
}
