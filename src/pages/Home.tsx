import { Link } from 'react-router-dom'
import CTABand from '../components/ui/CTABanner'
import Placeholder from '../components/ui/Placeholder'

const PHONE = '(248) 931-9009'
const PHONE_HREF = 'tel:+12489319009'

const DIFFERENCE_ITEMS = [
  'Consistent caregivers who build meaningful relationships',
  'Personalized care tailored to each resident',
  'Small home setting with a 1:3 caregiver-to-resident ratio',
  'Compassionate support focused on dignity and independence',
  'Peace of mind for residents and families',
  'A place where everyone is known, valued, and truly adored',
]

const LOCATIONS = [
  { place: 'Location One', city: 'Rochester Hills', addr: 'Oakland County, Michigan', img: '/rochester-hills.jpg', imgAlt: 'Rochester Hills home exterior', p: 'A serene residence near Rochester\'s parks and medical corridor — minutes from family, calm and close to everything.' },
  { place: 'Location Two', city: 'Clarkston', addr: 'Oakland County, Michigan', img: '/clarkston.webp', imgAlt: 'Clarkston home exterior', p: 'Nestled among Clarkston\'s lakes and woods, a warm home offering the same attentive, personal care in a peaceful setting.' },
]

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Rochester Hills &amp; Clarkston, Michigan</span>
              <h1>A home where every life is <em>truly adored.</em></h1>
              <p className="lede">
                Intimate residential assisted living built around the person — not the
                schedule. Familiar faces, home-cooked meals, and care that knows you by name.
              </p>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
                <a href={PHONE_HREF} className="btn btn-ghost">Call {PHONE}</a>
              </div>
              <div className="hero-chips">
                <span className="chip"><i />Licensed in Michigan</span>
                <span className="chip"><i />24/7 personal care</span>
                <span className="chip"><i />Small, home-like settings</span>
              </div>
            </div>
            <div className="hero-figure">
              <Placeholder label="interior — sunlit living room" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="wrap">
          <div className="care-head reveal">
            <div>
              <span className="eyebrow">Why families choose us</span>
              <h2>The Adored Living Difference</h2>
            </div>
          </div>
          <ul className="reveal" style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px 40px', marginTop: 8 }}>
            {DIFFERENCE_ITEMS.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 13, fontSize: 17, color: 'var(--ink)' }}>
                <span style={{ flexShrink: 0, width: 22, height: 22, marginTop: 2, borderRadius: '50%', background: 'var(--accent-tint)', backgroundImage: 'radial-gradient(circle at center, var(--accent-deep) 3.5px, transparent 4px)', display: 'inline-block' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section feature" id="homes">
        <div className="wrap">
          <div className="feature-grid">
            <div className="reveal">
              <Placeholder label="interior — dining & common room" />
            </div>
            <div className="reveal">
              <span className="eyebrow">The homes</span>
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
              <Link to="/homes" className="btn btn-primary" style={{ marginTop: 28 }}>Explore the homes</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="locations">
        <div className="wrap">
          <div className="care-head reveal" style={{ marginBottom: 44 }}>
            <div>
              <span className="eyebrow">Two Michigan homes</span>
              <h2>Find the one nearest your family.</h2>
            </div>
            <p>Both residences share the same standard of care and the same family ethos — choose the location that's most convenient for visits.</p>
          </div>
          <div className="loc-grid">
            {LOCATIONS.map((l, i) => (
              <div className="loc reveal" key={i} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="photo" style={{ aspectRatio: '16/9' }}>
                  <img src={l.img} alt={l.imgAlt} loading="lazy" />
                </div>
                <div className="loc-body">
                  <span className="place">{l.place}</span>
                  <h3>{l.city}</h3>
                  <div className="addr">{l.addr}</div>
                  <p>{l.p}</p>
                  <Link to="/locations" className="link-arrow">View this home →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature">
        <div className="wrap quote reveal">
          <div className="stars"><i /><i /><i /><i /><i /></div>
          <blockquote>
            "Mom isn't just looked after here — she's <span>known and loved.</span> We finally stopped worrying."
          </blockquote>
          <div className="by">Sarah M. <em>— daughter of a resident, Rochester Hills</em></div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center', paddingBottom: 0 }}>
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
