import { useState, useEffect, useCallback } from 'react'

export default function Lightbox({ photos, startIndex, onClose }: { photos: string[]; startIndex: number; onClose: () => void }) {
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
