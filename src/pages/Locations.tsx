import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import CTABand from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Placeholder from '../components/ui/Placeholder'

function Lightbox({ photos, startIndex, onClose }: { photos: string[]; startIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex)
  const prev = useCallback(() => setIdx(i => (i - 1 + photos.length) % photos.length), [photos.length])
  const next = useCallback(() => setIdx(i => (i + 1) % photos.length), [photos.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const btnStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'fixed', top: '50%', transform: 'translateY(-50%)',
    [side]: 16,
    background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff',
    fontSize: 28, width: 48, height: 48, borderRadius: '50%',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    backdropFilter: 'blur(4px)',
  })

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.82)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}
    >
      <button onClick={onClose} aria-label="Close" style={{
        position: 'fixed', top: 20, right: 24,
        background: 'none', border: 'none', color: '#fff',
        fontSize: 32, lineHeight: 1, cursor: 'pointer', opacity: 0.8,
      }}>×</button>

      {photos.length > 1 && <>
        <button aria-label="Previous" onClick={e => { e.stopPropagation(); prev() }} style={btnStyle('left')}>‹</button>
        <button aria-label="Next" onClick={e => { e.stopPropagation(); next() }} style={btnStyle('right')}>›</button>
      </>}

      <img
        src={photos[idx]}
        alt=""
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw', maxHeight: '90vh',
          objectFit: 'contain', borderRadius: 4,
          boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
        }}
      />

      {photos.length > 1 && (
        <div onClick={e => e.stopPropagation()} style={{
          position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.5)', fontSize: 13, letterSpacing: '0.05em',
        }}>
          {idx + 1} / {photos.length}
        </div>
      )}
    </div>
  )
}

const PHONE = '(248) 931-9009'
const PHONE_HREF = 'tel:+12489319009'
const EMAIL = 'adoredlivingllc@gmail.com'

interface HomeData {
  place: string
  city: string
  blurb: string
  address: string[]
  landmarks: string
  amenities: string[]
  gallery: string[]
  events: { cap: string; tall?: boolean; wide?: boolean; src?: string }[]
  video?: string
  photos?: string[]
}

const HOMES: HomeData[] = [
  {
    place: 'Location One',
    city: 'Rochester Hills',
    blurb: 'A serene residence near Rochester\'s parks and medical corridor — calm, leafy, and minutes from family.',
    address: ['185 E South Blvd', 'Rochester Hills, MI 48307'],
    landmarks: 'Near Rochester Municipal Park · 10 min to Ascension Providence Rochester',
    amenities: ['Private & companion suites', 'Chef-prepared meals', 'Sunroom & reading lounge', 'Landscaped, secure garden', '24/7 personal care', 'Salon & grooming visits'],
    gallery: ['exterior — front', 'great room', 'bedroom suite', 'garden'],
    photos: [
      '/rochester/IMG_5184.jpg', '/rochester/IMG_5186.jpg', '/rochester/IMG_5189.jpg',
      '/rochester/IMG_5195.jpg', '/rochester/IMG_5198.jpg', '/rochester/IMG_5200.jpg',
      '/rochester/IMG_5203.jpg', '/rochester/IMG_5204.jpg', '/rochester/IMG_5205.jpg',
      '/rochester/IMG_5207.jpg', '/rochester/IMG_5211.jpg', '/rochester/IMG_5212.jpg',
      '/rochester/IMG_5214.jpg', '/rochester/IMG_5219.jpg', '/rochester/IMG_5220.jpg',
      '/rochester/IMG_5225.jpg', '/rochester/IMG_5227.jpg', '/rochester/IMG_5228.jpg',
      '/rochester/IMG_5240.jpg', '/rochester/IMG_5243.jpg',
    ],
    events: [
      { cap: 'summer cookout', tall: true }, { cap: '100th birthday celebration', src: '/rochester/birthday-100.jpg' },
      { cap: 'garden afternoon' }, { cap: 'live music day', wide: true },
      { cap: 'family visit' }, { cap: 'Halloween craft afternoon', src: '/rochester/halloween-craft.jpg' },
    ],
  },
  {
    place: 'Location Two',
    city: 'Clarkston',
    blurb: 'Nestled among Clarkston\'s lakes and woods — the same attentive care in a peaceful, wooded setting.',
    address: ['5111 Heath Ave', 'Clarkston, MI 48346'],
    landmarks: 'Near Deer Lake · 12 min to McLaren Clarkston',
    amenities: ['Private & companion suites', 'Chef-prepared meals', 'Wooded patio & walking paths', 'Cozy fireside common room', '24/7 personal care', 'Memory & companion care'],
    gallery: ['exterior — front', 'living room', 'dining table', 'patio'],
    video: '/clarkston-home.mov',
    events: [
      { cap: 'lakeside picnic', tall: true }, { cap: 'craft afternoon' },
      { cap: 'movie night' }, { cap: 'autumn walk', wide: true },
      { cap: 'game day' }, { cap: 'celebration' },
    ],
  },
]

const PHOTOS_PREVIEW = 6

function PhotoGallery({ photos, city, onPhoto }: { photos: string[]; city: string; onPhoto: (photos: string[], index: number) => void }) {
  const [expanded, setExpanded] = useState(false)
  const preview = photos.slice(0, PHOTOS_PREVIEW)
  const rest = photos.slice(PHOTOS_PREVIEW)
  const imgStyle = (extra?: object) => ({
    display: 'block', width: '100%', borderRadius: 3,
    imageOrientation: 'from-image' as const, cursor: 'zoom-in',
    ...extra,
  })
  return (
    <div className="reveal" style={{ marginBottom: 28 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: expanded ? 10 : 0 }}>
        {preview.map((src, i) => (
          <img key={i} src={src} alt={`${city} home interior`}
            onClick={() => onPhoto(photos, i)}
            style={imgStyle({ height: 280, objectFit: 'cover' })}
          />
        ))}
      </div>
      {expanded && rest.length > 0 && (
        <div style={{ columns: '3 280px', columnGap: 10 }}>
          {rest.map((src, i) => (
            <img key={i} src={src} alt={`${city} home interior`}
              onClick={() => onPhoto(photos, PHOTOS_PREVIEW + i)}
              style={imgStyle({ marginBottom: 10 })}
            />
          ))}
        </div>
      )}
      {photos.length > PHOTOS_PREVIEW && (
        <button onClick={() => setExpanded(e => !e)} className="btn btn-ghost" style={{ marginTop: 8 }}>
          {expanded ? 'Show fewer photos' : `See all ${photos.length} photos`}
        </button>
      )}
    </div>
  )
}

function LocationBlock({ h, onPhoto }: { h: HomeData; onPhoto: (photos: string[], index: number) => void }) {
  return (
    <section className="loc-detail">
      <div className="wrap">
        <div className="loc-head reveal">
          <div>
            <span className="place">{h.place}</span>
            <h2>{h.city}</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: 18, marginTop: 12, maxWidth: '46ch' }}>{h.blurb}</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Schedule a tour</Link>
        </div>

        {h.photos ? (
          <PhotoGallery photos={h.photos} city={h.city} onPhoto={onPhoto} />
        ) : (
          <div className="gallery reveal" style={{ gridAutoRows: '190px', marginBottom: 28 }}>
            <Placeholder className="g-wide g-tall" label={h.gallery[0]} />
            <Placeholder label={h.gallery[1]} />
            <Placeholder label={h.gallery[2]} />
            <Placeholder className="g-wide" label={h.gallery[3]} />
          </div>
        )}

        {h.video && (
          <div className="reveal" style={{ marginBottom: 48 }}>
            <video
              src={h.video}
              controls
              playsInline
              poster={h.video.replace('.mov', '-poster.jpg')}
              style={{
                width: '100%',
                borderRadius: 4,
                display: 'block',
                background: '#000',
              }}
            />
          </div>
        )}

        <div className="loc-2col">
          <div className="reveal">
            <div className="map">
              <div className="pin" />
              <span className="map-label">map — {h.city}, MI</span>
            </div>
            <div style={{ marginTop: 30 }}>
              <h4 style={{ background: 'transparent', border: 'none', padding: 0, marginBottom: 16 }}>Amenities</h4>
              <div className="amen-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {h.amenities.map((a, i) => <div className="a" key={i}>{a}</div>)}
              </div>
            </div>
          </div>
          <div className="reveal">
            <div className="info-card">
              <h4>Address</h4>
              {h.address.map((line, i) => (
                <div className="row" key={i}><span>{line}</span></div>
              ))}
              <div className="row" style={{ marginTop: 16, color: 'var(--ink-faint)', fontSize: 14 }}>{h.landmarks}</div>
            </div>
            <div className="info-card" style={{ marginTop: 18 }}>
              <h4>Contact</h4>
              <div className="row"><span className="k">Phone</span><a href={PHONE_HREF} style={{ color: 'var(--ink)', fontWeight: 600 }}>{PHONE}</a></div>
              <div className="row"><span className="k">Email</span><a href={`mailto:${EMAIL}`} style={{ color: 'var(--ink)' }}>{EMAIL}</a></div>
            </div>
            <Link to="/contact" className="btn btn-ghost" style={{ width: '100%', marginTop: 18 }}>Get directions &amp; hours</Link>
          </div>
        </div>

        <div className="events">
          <div className="events-head reveal">
            <div>
              <span className="eyebrow">Life at {h.city}</span>
              <h3>Moments &amp; events</h3>
            </div>
            <p>Cookouts, birthdays, music afternoons, family visits — a glimpse of everyday joy.</p>
          </div>
          <div className="events-grid reveal">
            {(() => {
              const eventPhotos = h.events.filter(e => e.src).map(e => e.src!)
              let photoIdx = -1
              return h.events.map((e, i) => {
                if (e.src) photoIdx++
                const idx = photoIdx
                return e.src ? (
                <img
                  key={i}
                  src={e.src}
                  alt={e.cap}
                  onClick={() => onPhoto(eventPhotos, idx)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 3,
                    display: 'block',
                    cursor: 'zoom-in',
                    gridColumn: e.wide ? 'span 2' : undefined,
                    gridRow: e.tall ? 'span 2' : undefined,
                  }}
                />
              ) : (
                <Placeholder
                  key={i}
                  label={e.cap}
                  style={{
                    gridColumn: e.wide ? 'span 2' : undefined,
                    gridRow: e.tall ? 'span 2' : undefined,
                  }}
                />
              )
            })
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Locations() {
  const [lightbox, setLightbox] = useState<{ photos: string[]; index: number } | null>(null)
  const openPhoto = useCallback((photos: string[], index: number) => setLightbox({ photos, index }), [])
  const closePhoto = useCallback(() => setLightbox(null), [])

  return (
    <>
      <PageHero
        crumb="Locations"
        eyebrow="Two Michigan homes"
        title="Find the home <em>nearest your family.</em>"
        lede="Both residences share the same standard of care and the same family ethos. Choose the location most convenient for visits — or tour both."
      />
      {HOMES.map((h, i) => (
        <LocationBlock h={h} key={i} onPhoto={openPhoto} />
      ))}
      <CTABand />
      {lightbox && <Lightbox photos={lightbox.photos} startIndex={lightbox.index} onClose={closePhoto} />}
    </>
  )
}
