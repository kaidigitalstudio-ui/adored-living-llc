import { useState, useRef, useLayoutEffect } from 'react'

export interface GalleryPhoto {
  src: string
  alt: string
}

const GAP = 10

// Split photos into rows whose aspect-ratio sums are as even as possible, keeping order.
function partition(ratios: number[], rows: number) {
  const total = ratios.reduce((a, b) => a + b, 0)
  const out: number[][] = []
  let row: number[] = [], acc = 0
  ratios.forEach((r, i) => {
    row.push(i)
    acc += r
    const remainingRows = rows - out.length - 1
    const remainingItems = ratios.length - i - 1
    if (remainingRows > 0 && acc >= (total / rows) * (out.length + 1) - r / 2 && remainingItems >= remainingRows) {
      out.push(row)
      row = []
    }
  })
  if (row.length) out.push(row)
  return out
}

// Justified rows: every row spans the full width at one shared height, and each photo's
// width follows its own aspect ratio, so nothing is cropped. Ratios are read on load.
export default function JustifiedGallery({ photos, onOpen, rowHeight = 320 }: { photos: GalleryPhoto[]; onOpen: (index: number) => void; rowHeight?: number }) {
  const [ratios, setRatios] = useState<Record<string, number>>({})
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    setWidth(el.clientWidth)
    const ro = new ResizeObserver(() => setWidth(el.clientWidth))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const rs = photos.map(p => ratios[p.src] ?? 4 / 3)
  const target = width < 600 ? rowHeight * 0.6 : rowHeight
  const sum = rs.reduce((a, b) => a + b, 0)
  const rowCount = width ? Math.max(1, Math.min(photos.length, Math.round((sum * target) / width))) : 1
  const rows = width ? partition(rs, rowCount) : []

  return (
    <div ref={ref} className="justified">
      {rows.map((row, ri) => {
        const rowSum = row.reduce((a, i) => a + rs[i], 0)
        const h = (width - GAP * (row.length - 1)) / rowSum
        return (
          <div className="j-row" key={ri}>
            {row.map(i => (
              <img
                key={photos[i].src}
                src={photos[i].src}
                alt={photos[i].alt}
                loading="lazy"
                style={{ width: rs[i] * h, height: h }}
                onClick={() => onOpen(i)}
                onLoad={e => {
                  const img = e.currentTarget
                  const actual = img.naturalWidth / img.naturalHeight
                  if (Math.abs(actual - rs[i]) > 0.01) setRatios(m => ({ ...m, [photos[i].src]: actual }))
                }}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}
