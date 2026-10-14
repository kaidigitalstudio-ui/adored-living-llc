import { useState, useCallback } from 'react'
import Lightbox from './Lightbox'

const PHOTOS = [
  { src: '/life/hug.jpg', alt: 'Resident and family member sharing a hug' },
  { src: '/life/painting-class.jpg', alt: 'Resident painting at an easel during art class' },
  { src: '/life/pup-visit.jpg', alt: 'Resident smiling with a visiting dog' },
  { src: '/life/tent-picnic.jpg', alt: 'Residents and families at an outdoor picnic' },
  { src: '/life/corn-on-the-cob.jpg', alt: 'Resident laughing over corn on the cob' },
  { src: '/life/snowman-painting.jpg', alt: 'Resident holding her snowman painting' },
  { src: '/life/93rd-birthday.jpg', alt: 'Residents celebrating a 93rd birthday' },
  { src: '/life/baby-visit.jpg', alt: 'Resident holding a visiting baby' },
  { src: '/life/egg-dyeing.jpg', alt: 'Resident dyeing Easter eggs' },
  { src: '/life/porch-afternoon.jpg', alt: 'Resident relaxing on the porch' },
  { src: '/life/guitarist.jpg', alt: 'Visiting musician playing guitar' },
  { src: '/life/fall-crafts.jpg', alt: 'Residents doing fall crafts outdoors' },
  { src: '/life/birthday-candles.jpg', alt: 'Resident blowing out birthday candles' },
  { src: '/life/chair-exercise.jpg', alt: 'Resident during chair exercise' },
  { src: '/life/morning-coffee.jpg', alt: 'Resident enjoying morning coffee' },
  { src: '/life/bandana.jpg', alt: 'Smiling resident in a red bandana' },
  { src: '/life/puzzle.jpg', alt: 'Resident working on a jigsaw puzzle' },
  { src: '/life/fall-picnic-smile.jpg', alt: 'Resident smiling at a fall picnic' },
  { src: '/life/garden.jpg', alt: 'Flower garden in bloom' },
  { src: '/life/garden-party-portrait.jpg', alt: 'Resident smiling at a garden party' },
  { src: '/life/porch-smile.jpg', alt: 'Resident smiling on the deck' },
]

const PREVIEW = 9

export default function LifeGallery() {
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState<number | null>(null)
  const close = useCallback(() => setOpen(null), [])
  const shown = expanded ? PHOTOS : PHOTOS.slice(0, PREVIEW)

  return (
    <div className="life-gallery reveal">
      <div className="life-grid">
        {shown.map((p, i) => (
          <img key={p.src} src={p.src} alt={p.alt} loading="lazy" onClick={() => setOpen(i)} />
        ))}
      </div>
      <button onClick={() => setExpanded(e => !e)} className="btn btn-ghost" style={{ marginTop: 18 }}>
        {expanded ? 'Show fewer photos' : `See all ${PHOTOS.length} photos`}
      </button>
      {open !== null && <Lightbox photos={PHOTOS.map(p => p.src)} startIndex={open} onClose={close} />}
    </div>
  )
}
