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
              <h2>More Home Than a Facility—By Design.</h2>
              <p>When you walk through our doors, you'll notice something different. It's not just the warmth of a beautiful home—it's the feeling of being truly known. As a small residential care home, our residents are never one of many. Consistent caregivers, meaningful relationships, and personalized support create an environment where comfort, dignity, and belonging come naturally. Here, every person is treated like family because we believe treating the human soul allows the body to heal.</p>
              <ul>
                <li>Private rooms in a peaceful, home-like setting</li>
                <li>Consistent caregivers who build lasting relationships</li>
                <li>Personalized care tailored to each resident's unique needs</li>
                <li>Home-cooked meals shared around the table</li>
                <li>Beautiful outdoor spaces for family visits and quiet moments</li>
                <li>Compassionate support that honors dignity, independence, and choice</li>
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

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="wrap reveal">
          <p style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(26px,3.2vw,42px)', fontWeight: 600, color: 'var(--accent-deep)', fontStyle: 'italic', letterSpacing: '-0.01em', marginBottom: 20 }}>
            Where Every Resident Is Truly Adored.
          </p>
          <p style={{ color: 'var(--ink-soft)', fontSize: 18, maxWidth: '52ch', margin: '0 auto' }}>
            At Adored Living, we believe treating the human soul allows the body to heal. Every day, we strive to create a home where compassion, consistency, and meaningful relationships help our residents feel safe, valued, and truly adored.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  )
}
