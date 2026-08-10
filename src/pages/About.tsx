import CTABand from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Placeholder from '../components/ui/Placeholder'

const STATS = [
  { n: '1:3', l: 'Caregiver-to-resident ratio' },
  { n: '2', l: 'Intimate Michigan homes' },
  { n: '24/7', l: 'On-site personal care' },
  { n: '100%', l: 'Person-first care plans' },
]

const DIFFERENCE_ITEMS = [
  'Consistent caregivers who build meaningful relationships',
  'Personalized care tailored to each resident',
  'Small home setting with a 1:3 caregiver-to-resident ratio',
  'Compassionate support focused on dignity and independence',
  'Peace of mind for residents and families',
  'A place where everyone is known, valued, and truly adored',
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="Our Approach"
        eyebrow="Our approach"
        title="Care that begins with <em>knowing the person.</em>"
        lede="Adored Living was founded on a simple belief: aging deserves dignity, warmth, and genuine attention — delivered somewhere that feels like home."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="feature-grid">
            <div className="reveal"><Placeholder label="interior — sitting room with family" /></div>
            <div className="reveal prose">
              <span className="eyebrow">Our approach</span>
              <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginBottom: 22 }}>Exceptional care begins with meaningful relationships.</h2>
              <p>At Adored Living Senior Care Homes, we believe exceptional care begins with meaningful relationships. By maintaining consistency in our caregivers and a low caregiver-to-resident ratio, we create an environment where residents feel known, safe, and genuinely cared for.</p>
              <p>We honor each person's life story, preferences, and independence while providing compassionate support tailored to their changing needs. Every interaction is guided by dignity, kindness, and the belief that <strong>treating the human soul allows the body to heal.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section feature" style={{ paddingTop: 0, background: 'transparent' }}>
        <div className="wrap">
          <div className="stat-row reveal">
            {STATS.map((s, i) => (
              <div className="stat" key={i}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="care-head reveal">
            <div>
              <span className="eyebrow">What sets us apart</span>
              <h2>The Adored Living Difference</h2>
            </div>
          </div>
          <ul className="reveal" style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px 56px', marginTop: 8 }}>
            {DIFFERENCE_ITEMS.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, fontSize: 17, color: 'var(--ink)' }}>
                <span style={{ flexShrink: 0, width: 22, height: 22, marginTop: 2, borderRadius: '50%', background: 'var(--accent-tint)', backgroundImage: 'radial-gradient(circle at center, var(--accent-deep) 3.5px, transparent 4px)', display: 'inline-block' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="feature-grid">
            <div className="reveal prose">
              <span className="eyebrow">Our name</span>
              <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginBottom: 22 }}>The story behind our name.</h2>
              <p>The name Adored Living was inspired by a simple phrase spoken often by our beloved Grandma Sally. Instead of saying "I love you," she would smile and say, <strong>"I adore you."</strong> Those words carried warmth, acceptance, and a deep sense of belonging.</p>
              <p>That simple expression became the heart of our mission. We believe every person deserves to feel cherished, respected, and genuinely cared for. At Adored Living, our goal is for every resident and family to experience the same feeling Grandma Sally shared so effortlessly — to know they are valued, cared for, and truly adored.</p>
            </div>
            <div className="reveal"><Placeholder label="family moment — Grandma Sally" /></div>
          </div>
        </div>
      </section>

      <section className="section feature">
        <div className="wrap quote reveal">
          <div className="stars"><i /><i /><i /><i /><i /></div>
          <blockquote>"They didn't just care for my father — they <span>welcomed our whole family.</span>"</blockquote>
          <div className="by">James R. <em>— son of a resident, Clarkston</em></div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
