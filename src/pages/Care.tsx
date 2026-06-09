import { Link } from 'react-router-dom'
import CTABand from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Placeholder from '../components/ui/Placeholder'

const SERVICES = [
  { h: 'Personal care & daily living', p: 'Discreet, respectful help with bathing, dressing, grooming, and mobility — as much or as little as each resident needs.', tag: 'Every day' },
  { h: 'Medication management', p: 'Trained staff store, schedule, and administer medications accurately, coordinating with physicians and pharmacies.', tag: 'Licensed' },
  { h: 'Chef-prepared meals', p: 'Three home-style meals and snacks daily, accommodating dietary needs and the dishes residents love most.', tag: '3 daily' },
  { h: 'Housekeeping & laundry', p: 'Light housekeeping, linens, and personal laundry handled with care so days are spent living, not chores.', tag: 'Included' },
  { h: 'Memory & companion care', p: 'Gentle, structured support for residents living with memory loss, plus warm companionship for everyone.', tag: 'Specialized' },
  { h: 'Appointments & transportation', p: 'We coordinate medical appointments and arrange transportation so getting where you need to go is simple.', tag: 'On request' },
]

const LEVELS = [
  'A personalized care assessment before move-in',
  'Care plans reviewed and adjusted as needs change',
  'Support that scales from light assistance to full daily care',
  'Open coordination with your family and physicians',
]

const AMENITIES = [
  'Home-cooked meals together', 'Daily activities & outings', 'Housekeeping & laundry',
  'On-site personal care 24/7', 'Wellness & mobility support', 'Family visits anytime',
  'Beautiful common rooms', 'Landscaped, secure grounds', 'Salon & grooming visits',
]

export default function Care() {
  return (
    <>
      <PageHero
        crumb="Care & Services"
        eyebrow="Care & services"
        title="Personal care, <em>thoughtfully delivered.</em>"
        lede="From a little daily help to full, attentive support, our care is shaped around each resident and adjusts gently as needs change."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="svc-list reveal">
            {SERVICES.map((s, i) => (
              <div className="svc" key={i}>
                <div className="idx">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
                <div className="tag">{s.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature">
        <div className="wrap">
          <div className="feature-grid">
            <div className="reveal">
              <span className="eyebrow">Levels of care</span>
              <h2>Care that grows with you.</h2>
              <p>Needs change — and care should change with them, without the upheaval of moving somewhere new. We assess thoughtfully and adjust continuously, so residents stay in the home they know.</p>
              <ul>
                {LEVELS.map((l, i) => <li key={i}>{l}</li>)}
              </ul>
              <Link to="/contact" className="btn btn-primary">Talk through your needs</Link>
            </div>
            <div className="reveal"><Placeholder label="interior — caregiver with resident" /></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="care-head reveal">
            <div>
              <span className="eyebrow">Daily life</span>
              <h2>Comfortable days, gently supported.</h2>
            </div>
            <p>Beyond hands-on care, life here is full and unhurried — shared meals, quiet corners, good company, and the small comforts of home.</p>
          </div>
          <div className="amen-grid reveal">
            {AMENITIES.map((a, i) => (
              <div className="a" key={i}>{a}</div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
