import CTABand from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Placeholder from '../components/ui/Placeholder'

const STATS = [
  { n: '1:4', l: 'Caregiver-to-resident ratio' },
  { n: '2', l: 'Intimate Michigan homes' },
  { n: '24/7', l: 'On-site personal care' },
  { n: '100%', l: 'Person-first care plans' },
]

const VALUES = [
  { ic: 's1', h: 'Dignity, always', p: 'Every resident is met as the whole person they\'ve always been — their stories, their preferences, their pace.' },
  { ic: 's2', h: 'Small by design', p: 'We keep our homes intentionally small so caregivers truly know each resident, and no one is ever just a room number.' },
  { ic: 's3', h: 'Family partnership', p: 'We treat families as partners — open communication, regular updates, and a door that\'s always open.' },
  { ic: 's4', h: 'A genuine home', p: 'Warm rooms, shared meals, familiar comforts. Care delivered in a place that actually feels like home.' },
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
              <span className="eyebrow">Our story</span>
              <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginBottom: 22 }}>A different idea of assisted living.</h2>
              <p>We started Adored Living because we saw too many older adults cared for in places that felt like institutions — large, impersonal, and rushed. We knew aging could be met with something gentler.</p>
              <p>So we built small residential homes in <strong>Rochester Hills</strong> and <strong>Clarkston</strong>, where a familiar team knows every resident by name, meals are shared at one table, and care is shaped around the person — never the schedule.</p>
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
              <span className="eyebrow">What guides us</span>
              <h2>The values behind every day here.</h2>
            </div>
            <p>These aren't words on a wall — they're the standard we hold ourselves to in every interaction, every shift, every meal.</p>
          </div>
          <div className="cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {VALUES.map((v, i) => (
              <div className="card reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`ic ${v.ic}`}><span /></div>
                <h3>{v.h}</h3>
                <p>{v.p}</p>
              </div>
            ))}
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
