import CTABand from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Placeholder from '../components/ui/Placeholder'

const AMENITY_TAGS = [
  'Home-cooked meals', 'Housekeeping & laundry', '24/7 personal care', 'Wi-Fi & cable',
  'Salon & grooming', 'Daily activities', 'Transportation', 'Family visits anytime',
  'Wheelchair accessible', 'Medication support',
]

export default function Homes() {
  return (
    <>
      <PageHero
        crumb="The Homes"
        eyebrow="The homes"
        title="More home than facility — <em>by design.</em>"
        lede="No long corridors, no fluorescent hum. Just real homes in quiet neighborhoods, thoughtfully appointed for comfort, safety, and belonging."
      />

      <section style={{ paddingBottom: 'calc(40px * var(--section-scale, 1))' }}>
        <div className="wrap">
          <div className="gallery reveal">
            <Placeholder className="g-wide g-tall" label="interior — great room" />
            <Placeholder label="bedroom suite" />
            <Placeholder label="kitchen" />
            <Placeholder label="dining table" />
            <Placeholder label="sunroom" />
            <Placeholder className="g-wide" label="garden & patio" />
            <Placeholder label="reading nook" />
          </div>
        </div>
      </section>

      <section className="section feature">
        <div className="wrap">
          <div className="feature-grid">
            <div className="reveal"><Placeholder label="interior — shared dining" /></div>
            <div className="reveal">
              <span className="eyebrow">A real home</span>
              <h2>Designed to feel like family.</h2>
              <p>Our residences are actual houses — warm, residential, and small. Meals are shared at one table. Common rooms invite gathering. Residents are welcome to bring familiar furnishings that make a space their own.</p>
              <ul>
                <li>Private &amp; companion suites, personalized to each resident</li>
                <li>Bright common rooms, sunrooms, and quiet corners</li>
                <li>Secure, landscaped grounds and patios</li>
                <li>Safe, accessible bathrooms and walkways throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="feature-grid flip">
            <div className="reveal"><Placeholder label="interior — bright bedroom suite" /></div>
            <div className="reveal">
              <span className="eyebrow">Daily comforts</span>
              <h2>The small things, well looked after.</h2>
              <p>Home isn't just the rooms — it's the rhythm of the day and the comforts that make it easy. We handle the details so residents can simply enjoy living.</p>
            </div>
          </div>
          <div style={{ marginTop: 46 }} className="reveal">
            <div className="tags">
              {AMENITY_TAGS.map((t, i) => (
                <span className="tag-pill" key={i}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
