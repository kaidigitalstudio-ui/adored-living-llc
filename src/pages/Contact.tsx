import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Home } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'

interface FormState {
  firstName: string; lastName: string; email: string; phone: string
  location: string; relationship: string; message: string
}

const INITIAL_FORM: FormState = { firstName: '', lastName: '', email: '', phone: '', location: '', relationship: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(INITIAL_FORM)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <PageHero
        eyebrow="Reach Out"
        title="We're Here to Help"
        description="Whether you have questions, want to schedule a tour, or simply need someone to talk to — we're here with open arms and no pressure."
        bgImage="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1600&q=80"
        bgAlt="Warm, welcoming home interior"
      />

      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <SectionHeader eyebrow="Get in Touch" title="Let's Start a Conversation" description="Every family's situation is unique. Reach out today and let us help you find the right path forward for your loved one." id="contact-heading" />

          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info" data-animate>
              <h3>Contact Information</h3>
              <p>We're available to speak with you Monday through Sunday. Don't hesitate to call, email, or fill out the form — we'll respond promptly with care and warmth.</p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true"><Phone size={20} strokeWidth={1.75} /></div>
                  <div className="contact-item-text">
                    <strong>Phone</strong>
                    <span><a href="tel:+12489319009">(248) 931-9009</a></span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true"><Mail size={20} strokeWidth={1.75} /></div>
                  <div className="contact-item-text">
                    <strong>Email</strong>
                    <span><a href="mailto:adoredlivingllc@gmail.com">adoredlivingllc@gmail.com</a></span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true"><MapPin size={20} strokeWidth={1.75} /></div>
                  <div className="contact-item-text">
                    <strong>Rochester Hills</strong>
                    <span>185 E South Blvd, Rochester Hills, MI 48307</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" aria-hidden="true"><MapPin size={20} strokeWidth={1.75} /></div>
                  <div className="contact-item-text">
                    <strong>Clarkston</strong>
                    <span>5111 Heath Ave, Clarkston, MI 48346</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 40, padding: '28px 24px', background: 'var(--lavender-bg)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--lavender)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Home size={18} strokeWidth={1.75} color="var(--lavender)" aria-hidden="true" />
                  <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text)', margin: 0 }}>Come Visit Us</h4>
                </div>
                <p style={{ fontSize: '.92rem', marginBottom: 0 }}>We warmly invite you for a personal tour. See the home, meet our team, and experience the warmth of Adored Living for yourself — no commitment required.</p>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form" data-animate data-delay={150}>
              <h3>Send Us a Message</h3>
              <p style={{ fontSize: '.95rem', color: 'var(--text-mid)', marginBottom: 28, marginTop: 4 }}>We read every message personally and typically respond within a few hours.</p>

              {submitted ? (
                <div role="alert" style={{ background: 'var(--lavender-bg)', border: '1px solid var(--lavender-pale)', borderRadius: 'var(--radius-md)', padding: '32px 28px', textAlign: 'center' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--lavender)', marginBottom: 8 }}>Thank You!</h4>
                  <p style={{ marginBottom: 0 }}>Your message has been received. We'll be in touch with you very soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input id="firstName" name="firstName" type="text" required autoComplete="given-name" value={form.firstName} onChange={handleChange} placeholder="Jane" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input id="lastName" name="lastName" type="text" required autoComplete="family-name" value={form.lastName} onChange={handleChange} placeholder="Smith" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="(248) 555-0100" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="location">Preferred Location</label>
                      <select id="location" name="location" value={form.location} onChange={handleChange}>
                        <option value="">Select a location…</option>
                        <option value="rochester-hills">Rochester Hills</option>
                        <option value="clarkston">Clarkston</option>
                        <option value="either">Either / Not Sure Yet</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="relationship">Your Relationship</label>
                      <select id="relationship" name="relationship" value={form.relationship} onChange={handleChange}>
                        <option value="">Select…</option>
                        <option value="self">Inquiring for Myself</option>
                        <option value="spouse">Spouse / Partner</option>
                        <option value="child">Son / Daughter</option>
                        <option value="sibling">Sibling</option>
                        <option value="other">Other Family Member</option>
                        <option value="professional">Healthcare Professional</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">How Can We Help? *</label>
                    <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell us a little about your loved one's needs, or what questions you'd like to discuss…" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Your Message</button>
                  <p style={{ fontSize: '.85rem', color: 'var(--text-light)', textAlign: 'center', marginTop: 12, marginBottom: 0 }}>No sales pressure — just a warm conversation.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAPS ===== */}
      <section className="section section--alt" aria-labelledby="map-heading">
        <div className="container">
          <SectionHeader eyebrow="Find Us" title="Our Michigan Locations" center id="map-heading" />
          <div className="locations-grid" style={{ marginTop: 48 }}>
            {[
              { title: 'Rochester Hills Home', address: '185 E South Blvd, Rochester Hills, MI 48307', src: 'https://maps.google.com/maps?q=185+E+South+Blvd,+Rochester+Hills,+MI+48307&output=embed' },
              { title: 'Clarkston Home', address: '5111 Heath Ave, Clarkston, MI 48346', src: 'https://maps.google.com/maps?q=5111+Heath+Ave,+Clarkston,+MI+48346&output=embed' },
            ].map(({ title, address, src }) => (
              <div key={title} style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--cream-dark)', boxShadow: 'var(--shadow-sm)' }}>
                <iframe title={`${title} Map`} src={src} width="100%" height="280" style={{ border: 0, display: 'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div style={{ padding: '24px 28px' }}>
                  <h3 style={{ marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: '.9rem', marginBottom: 0 }}>{address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
