import { Link } from 'react-router-dom'
import { Heart, Star, Users, Home, ClipboardList, Check, type LucideIcon } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/ui/CTABanner'

interface PromiseItem { title: string; desc: string }

const VALUES: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Heart,         title: 'Compassion',     desc: 'Genuine warmth in every interaction' },
  { Icon: Star,          title: 'Dignity',         desc: 'Care that preserves independence' },
  { Icon: Users,         title: 'Respect',         desc: 'Every life story deserves honor' },
  { Icon: Home,          title: 'Home First',      desc: 'A real home, not a facility' },
  { Icon: ClipboardList, title: 'Accountability',  desc: 'Transparent, trustworthy partnership' },
]

const PROMISE_ITEMS: PromiseItem[] = [
  { title: 'Open Communication',             desc: 'You will always be able to reach us. We keep families informed, involved, and at ease.' },
  { title: 'Consistent, Quality Caregivers', desc: 'We invest in our staff — because stable, trained, caring people make all the difference.' },
  { title: 'A Stress-Free Atmosphere',       desc: 'Our homes are peaceful, clean, and serene — designed for residents and families to feel at ease the moment they walk in.' },
  { title: 'No Surprises',                   desc: 'Our all-inclusive rate means you know exactly what to expect. Care, meals, supplies, and services — all covered, simply.' },
]

const TEAM = [
  {
    name: '[Owner Name]',
    role: 'Co-Founder & Owner',
    img: '',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: '[Owner Name]',
    role: 'Co-Founder & Owner',
    img: '',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

export default function About() {
  return (
    <>
      {/* ===== FOUNDERS' STORY ===== */}
      <section className="section section--top" aria-labelledby="story-heading" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: 80 }}>
            <div data-animate>
              <span className="eyebrow">How It Began</span>
              <h1 id="story-heading" style={{ marginBottom: '1.5rem' }}>We Created the Home We Wished Had Existed</h1>
              <p>
                Adored Living was born from a deeply personal experience. When our founders were searching
                for care for someone they loved, they were struck by how few options truly felt like
                <em> home</em>. Most facilities were clean and capable — but cold. The warmth, the
                individuality, the sense of belonging that seniors deserve simply wasn't there.
              </p>
              <p>
                So they decided to build something different. Something smaller, more personal, and rooted
                in the belief that the later years of life should be filled with dignity, connection, and joy
                — not just medical management. Today, Adored Living operates two licensed homes in Rochester
                Hills and Clarkston, and every decision still flows from that original intention: to love our
                residents the way we'd want our own family loved.
              </p>
            </div>
            <div className="about-image" data-animate data-delay={150} style={{ marginTop: 36 }}>
              <img src="/caregiver-garden.png" alt="Caregiver and senior resident laughing together outdoors in a garden" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section section--alt" aria-labelledby="team-heading">
        <div className="container">
          <SectionHeader eyebrow="Who We Are" title="Meet the Owners" description="Adored Living is owner-operated — meaning the people who built this vision are present every day, personally invested in every resident." center id="team-heading" />
          <div className="team-grid">
            {TEAM.map(({ name, role, img, bio }, i) => (
              <div className="team-card" key={name + i} data-animate data-delay={i * 120}>
                <div className="team-photo" aria-hidden="true">
                  {img
                    ? <img src={img} alt={name} loading="lazy" />
                    : <div className="team-photo-placeholder"><Heart size={32} strokeWidth={1.5} color="var(--lavender-pale)" /></div>
                  }
                </div>
                <div className="team-info">
                  <strong className="team-name">{name}</strong>
                  <span className="team-role">{role}</span>
                  <p>{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES STRIP ===== */}
      <section className="section" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeader eyebrow="What Guides Us" title="Our Core Values" description="These principles aren't posters on a wall — they're the daily practice of everyone on our team." center id="values-heading" />
          <div className="values-strip" role="list">
            {VALUES.map(({ Icon, title, desc }, i) => (
              <div className="values-strip-item" role="listitem" key={title} data-animate data-delay={i * 70}>
                <div className="values-strip-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.5} /></div>
                <strong>{title}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PROMISE ===== */}
      <section className="section section--alt" aria-labelledby="promise-heading">
        <div className="container">
          <SectionHeader eyebrow="Our Promise" title="What You Can Always Expect From Us" description="When you choose Adored Living, you are choosing a partner." center id="promise-heading" />
          <div className="promise-grid" role="list">
            {PROMISE_ITEMS.map(({ title, desc }, i) => (
              <div className="promise-card" role="listitem" key={title} data-animate data-delay={i * 80}>
                <div className="promise-icon" aria-hidden="true"><Check size={20} strokeWidth={2.5} /></div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Link to="/contact" className="btn btn-primary">Schedule a Visit</Link>
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
