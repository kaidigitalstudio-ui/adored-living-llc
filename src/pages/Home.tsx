import { Link } from 'react-router-dom'
import CTABand from '../components/ui/CTABanner'
import Placeholder from '../components/ui/Placeholder'

const PHONE = '(248) 931-9009'
const PHONE_HREF = 'tel:+12489319009'

const CARE_CARDS = [
  { ic: 's1', h: 'Care plans, personally tailored', p: 'We learn each resident\'s history, preferences, and routines — then build daily care around the person they\'ve always been.' },
  { ic: 's2', h: 'A real home, beautifully kept', p: 'Private and shared suites, shared meals at one table, and warm common rooms designed to feel like family — never a facility.' },
  { ic: 's3', h: 'Trained caregivers, around the clock', p: 'Medication management, mobility support, and gentle companionship from a team that\'s there every hour of every day.' },
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
              <span className="eyebrow">Our approach</span>
              <h2>Compassion you can feel the moment you walk in.</h2>
            </div>
            <p>
              Adored Living was founded on a simple belief: aging deserves dignity, warmth,
              and genuine attention. Our homes are small on purpose — so care stays personal.
            </p>
          </div>
          <div className="cards">
            {CARE_CARDS.map((c, i) => (
              <div className="card reveal" key={i} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className={`ic ${c.ic}`}><span /></div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
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
              <h2>More home than facility — by design.</h2>
              <p>
                Step inside and you'll notice what's missing: the long corridors, the
                fluorescent hum, the feeling of being one of many. Our residences are
                actual homes in quiet neighborhoods, thoughtfully appointed for comfort,
                safety, and belonging.
              </p>
              <ul>
                <li>Chef-prepared, home-style meals shared together each day</li>
                <li>Private &amp; companion suites with familiar furnishings welcome</li>
                <li>Landscaped grounds, sunrooms, and quiet places to gather</li>
                <li>Housekeeping, laundry, and transportation handled with care</li>
              </ul>
              <Link to="/homes" className="btn btn-primary">Explore the homes</Link>
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

      <CTABand />
    </>
  )
}
