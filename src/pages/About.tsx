import { Link } from 'react-router-dom'
import { Heart, Star, Users, Smile, Home, ClipboardList, Check, type LucideIcon } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/ui/CTABanner'

interface ValueItem  { Icon: LucideIcon; title: string; desc: string }
interface PromiseItem { title: string; desc: string }

const VALUES: ValueItem[] = [
  { Icon: Heart,         title: 'Compassion',           desc: 'We lead with empathy. Every interaction — from morning greetings to medication reminders — is an opportunity to show each resident that they are seen, valued, and loved.' },
  { Icon: Star,          title: 'Dignity',               desc: 'We preserve the independence and self-worth of every resident. Assistance is provided in ways that empower, never diminish — always with respect for privacy and personal choice.' },
  { Icon: Users,         title: 'Respect',               desc: 'Every life story deserves honor. We take time to understand where our residents have come from, what they have built, and who they continue to be — and we celebrate that every day.' },
  { Icon: Smile,         title: 'Holistic Wellness',     desc: 'True wellbeing is physical, emotional, and social. Our activities, meals, companionship, and comfortable spaces are all designed to nurture the whole person — mind, body, and spirit.' },
  { Icon: Home,          title: 'Home-Like Environment', desc: 'Clinical settings can feel cold. We deliberately create warm, comfortable, personal spaces that feel like real homes — because they are real homes, and our residents are real family.' },
  { Icon: ClipboardList, title: 'Accountability',        desc: 'Families trust us with the people they love most. We honor that trust with transparency, open communication, and an unwavering commitment to the highest standards of care.' },
]

const PROMISE_ITEMS: PromiseItem[] = [
  { title: 'Open Communication',            desc: 'You will always be able to reach us. We keep families informed, involved, and at ease.' },
  { title: 'Consistent, Quality Caregivers', desc: 'We invest in our staff — because stable, trained, caring people make all the difference.' },
  { title: 'A Stress-Free Atmosphere',      desc: 'Our homes are peaceful, clean, and serene — designed for residents and families to feel at ease the moment they walk in.' },
  { title: 'No Surprises',                  desc: 'Our all-inclusive rate means you know exactly what to expect. Care, meals, supplies, and services — all covered, simply.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Built on Love, Rooted in Community"
        description="We started Adored Living because we believe every senior deserves a home — not just a facility. Discover the heart behind our care."
        bgImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80"
        bgAlt="Caregiver with senior resident"
      />

      {/* ===== MISSION ===== */}
      <section className="section" aria-labelledby="mission-heading">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 id="mission-heading">A Home, Not a Facility</h2>
              <p style={{ fontSize: '1.1rem' }}>
                Adored Living LLC was founded with one simple belief: that aging deserves to be met with
                grace, joy, and genuine human connection. We operate two intimate, licensed residential care
                homes in Michigan — in Rochester Hills and Clarkston — each licensed by the State of Michigan.
              </p>
              <p>
                Unlike large institutional settings, our homes accommodate a maximum of 6 residents at a
                time. This is intentional. It means our caregivers truly know each person — their routines,
                their favorites, their history, and their hopes. It means no one gets lost in the crowd.
              </p>
              <p>
                Our owners are not distant executives. They are here. Present. Working alongside staff,
                getting to know residents and families, and holding themselves personally accountable for
                every person in their care. That closeness is what sets Adored Living apart.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=900&q=80" alt="Senior resident enjoying morning light in a bright, welcoming room" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section section--alt" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeader eyebrow="What Guides Us" title="Our Core Values" description="Everything we do flows from these principles — they are not posters on a wall but the daily practice of everyone on our team." center id="values-heading" />
          <div className="why-grid" style={{ marginTop: 56 }} role="list">
            {VALUES.map(({ Icon, title, desc }) => (
              <div className="why-card" role="listitem" key={title}>
                <div className="why-icon" aria-hidden="true"><Icon size={28} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PROMISE ===== */}
      <section className="section" aria-labelledby="promise-heading">
        <div className="container">
          <div className="grid-2">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=900&q=80" alt="Two seniors laughing together over a cup of tea" loading="lazy" />
              <div className="about-badge">
                <div className="badge-icon" aria-hidden="true"><Heart size={24} strokeWidth={1.5} color="white" /></div>
                <div className="badge-text">
                  <strong>Family-First Always</strong>
                  <span>You are never alone in this journey</span>
                </div>
              </div>
            </div>

            <div className="about-content">
              <span className="eyebrow">Our Promise</span>
              <h2 id="promise-heading">What You Can Always Expect From Us</h2>
              <p>When you choose Adored Living, you are choosing a partner. We promise:</p>

              <div className="values-list" role="list">
                {PROMISE_ITEMS.map(({ title, desc }) => (
                  <div className="value-item" role="listitem" key={title}>
                    <div className="value-icon" aria-hidden="true"><Check size={20} strokeWidth={2.5} /></div>
                    <p><strong>{title}</strong> {desc}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 8 }}>Schedule a Visit</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to See Our Home in Person?"
        description="We warmly invite you and your family for a personal tour. See for yourself what makes Adored Living a place where residents truly thrive."
        primaryLabel="Book a Tour"
        primaryTo="/contact"
        secondaryLabel="(248) 931-9009"
        secondaryHref="tel:+12489319009"
      />
    </>
  )
}
