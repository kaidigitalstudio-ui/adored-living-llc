import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import CTABand from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import JustifiedGallery from '../components/ui/JustifiedGallery'
import Lightbox from '../components/ui/Lightbox'

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
  events: { cap: string; src: string }[]
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
    amenities: ['Private & companion suites', 'Cozy fireside common room', 'Sunroom & reading lounge', 'Landscaped, secure garden', '24/7 personal care', 'Salon & grooming visits'],
    video: '/rochester-home.mp4',
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
      { cap: 'Summer cookout on the deck', src: '/rochester/summer-cookout.jpg' },
      { cap: '100th birthday celebration', src: '/rochester/birthday-100.jpg' },
      { cap: 'Fireside afternoon', src: '/rochester/fireside.jpg' },
      { cap: 'Live music afternoon', src: '/rochester/live-music.jpg' },
      { cap: 'Halloween craft afternoon', src: '/rochester/halloween-craft.jpg' },
      { cap: 'Birthday party under the pergola', src: '/rochester/deck-birthday.jpg' },
      { cap: 'Puzzle morning', src: '/rochester/puzzle-morning.jpg' },
    ],
  },
  {
    place: 'Location Two',
    city: 'Clarkston',
    blurb: 'Nestled among Clarkston\'s lakes and woods — the same attentive care in a peaceful, wooded setting.',
    address: ['5111 Heath Ave', 'Clarkston, MI 48346'],
    landmarks: 'Near Deer Lake · 12 min to McLaren Clarkston',
    amenities: ['Private & companion suites', 'Wooded patio & walking paths', '24/7 personal care', 'Memory & companion care'],
    photos: ['/clarkston.webp', '/clarkston/living-room-music.jpg', '/life/puzzle.jpg', '/life/living-room-chat.jpg'],
    video: '/clarkston-home.mp4',
    events: [
      { cap: 'Afternoon with a puppy visitor', src: '/clarkston/puppy-visit.jpg' },
      { cap: 'Piano practice', src: '/clarkston/piano.jpg' },
      { cap: 'Western theme night', src: '/clarkston/western-night.jpg' },
      { cap: 'Group chair exercise class', src: '/clarkston/movement-class.jpg' },
      { cap: 'Stretching together', src: '/clarkston/chair-exercise.jpg' },
    ],
  },
]

const PHOTOS_PREVIEW = 6

function PhotoGallery({ photos, city, onPhoto }: { photos: string[]; city: string; onPhoto: (photos: string[], index: number) => void }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? photos : photos.slice(0, PHOTOS_PREVIEW)
  return (
    <div className="reveal" style={{ marginBottom: 28 }}>
      <JustifiedGallery
        photos={shown.map(src => ({ src, alt: `${city} home` }))}
        onOpen={i => onPhoto(photos, i)}
      />
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

        {h.photos && <PhotoGallery photos={h.photos} city={h.city} onPhoto={onPhoto} />}

        {h.video && (
          <div className="reveal" style={{ marginBottom: 48 }}>
            <video
              src={h.video}
              controls
              playsInline
              preload="metadata"
              poster={h.video.replace(/\.\w+$/, '-poster.jpg')}
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
              <iframe
                title={`Map of the ${h.city} home`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(h.address.join(', '))}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ marginTop: 30 }}>
              <h4 style={{ background: 'transparent', border: 'none', padding: 0, marginBottom: 16 }}>Amenities</h4>
              <div className="amen-grid cols-2">
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
          <div className="reveal">
            <JustifiedGallery
              photos={h.events.map(e => ({ src: e.src, alt: e.cap }))}
              onOpen={i => onPhoto(h.events.map(e => e.src), i)}
            />
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
