import CTABand from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'

const PHONE = '(248) 931-9009'
const PHONE_HREF = 'tel:+12489319009'

const CONTACTS = [
  { place: 'Location One', city: 'Rochester Hills', address: ['185 E South Blvd', 'Rochester Hills, MI 48307'] },
  { place: 'Location Two', city: 'Clarkston', address: ['5111 Heath Ave', 'Clarkston, MI 48346'] },
]

function ContactCard({ c }: { c: typeof CONTACTS[number] }) {
  return (
    <div className="contact-card reveal">
      <span className="place">{c.place}</span>
      <h3>{c.city}</h3>
      <div className="line"><span className="k">Call</span><a className="phone" href={PHONE_HREF}>{PHONE}</a></div>
      <div className="line"><span className="k">Email</span><a href="mailto:adoredlivingllc@gmail.com" style={{ color: 'var(--ink)' }}>adoredlivingllc@gmail.com</a></div>
      <div className="line"><span className="k">Visit</span><span>{c.address[0]}<br />{c.address[1]}</span></div>
      <a className="btn btn-primary" href={PHONE_HREF}>Call this home</a>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact & Tours"
        eyebrow="Contact & tours"
        title="Let's find the right home, <em>together.</em>"
        lede="The best way to know if Adored Living is right for your family is to visit. Call either home and we'll arrange a private tour at a time that suits you."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact-grid">
            {CONTACTS.map((c, i) => <ContactCard c={c} key={i} />)}
          </div>

          <div className="feature-grid" style={{ marginTop: 64, alignItems: 'start' }}>
            <div className="reveal">
              <span className="eyebrow">What to expect</span>
              <h2 style={{ fontSize: 'clamp(26px,3vw,38px)' }}>A warm, unhurried visit.</h2>
              <p style={{ color: 'var(--ink-soft)', fontSize: 17.5, marginTop: 18 }}>
                We'll walk you through the home, introduce the care team, talk through daily
                life and care needs, and answer every question — no pressure, no rush.
              </p>
            </div>
            <div className="reveal">
              <div className="info-card">
                <h4>Hours</h4>
                <div className="hours-list">
                  <div className="h"><span>Tours (by appointment)</span><b>9:00am – 6:00pm</b></div>
                  <div className="h"><span>Family visits</span><b>Anytime</b></div>
                  <div className="h"><span>Phone answered</span><b>24 / 7</b></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band call-band reveal">
            <h2 style={{ fontSize: 'clamp(24px,3vw,34px)' }}>Prefer to talk it through?</h2>
            <p style={{ marginBottom: 4 }}>We're here around the clock. Call us anytime — a real person will answer.</p>
            <a className="big-phone" href={PHONE_HREF}>{PHONE}</a>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
