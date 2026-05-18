import { Link } from 'react-router-dom'
import {
  Users, MessageCircle, Pill, Home as HomeIcon, UtensilsCrossed, ShieldCheck,
  Heart, Phone, Mail, MapPin,
  Shirt, Bath, Droplets, Tv,
  type LucideIcon,
} from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/ui/CTABanner'

interface WhyItem { Icon: LucideIcon; title: string; desc: string }
interface LocationItem {
  id: string; img: string; imgAlt: string; badge: string; title: string
  address: string; phone: string; phoneHref: string; email: string; feature: string
}

const WHY_ITEMS: WhyItem[] = [
  { Icon: Users,        title: 'Intimate, Family Environment',   desc: 'With a maximum of 6 residents, your loved one receives genuine individual attention — not just a bed in a crowd. Our caregivers know every resident\'s story, preferences, and needs.' },
  { Icon: MessageCircle,title: 'Open Family Communication',      desc: 'We keep families informed, involved, and at ease. Our owners are always reachable — you\'ll never feel out of the loop about your loved one\'s day-to-day wellbeing.' },
  { Icon: Pill,         title: 'All-Inclusive, One Simple Rate', desc: 'No hidden fees, no surprise charges. All basic supplies, meals, housekeeping, medication management, and personal care are covered under one clear, cost-effective rate.' },
  { Icon: Heart,        title: 'Owner-Involved Daily',           desc: 'Our owners are hands-on, present every day, and personally invested in each resident\'s wellbeing. This isn\'t a corporate facility — it\'s a home run by people who truly care.' },
  { Icon: UtensilsCrossed, title: 'Nourishing Home-Cooked Meals', desc: 'Three nutritious, delicious meals prepared fresh daily — including snacks and beverages — tailored to dietary needs and preferences so residents look forward to every meal.' },
  { Icon: ShieldCheck,  title: 'Safe, Licensed & Trusted',       desc: 'Fully licensed by the State of Michigan with all health and safety standards met. Families can visit freely, and peace of mind comes standard with every aspect of our care.' },
]

interface IncludedItem { Icon: LucideIcon; label: string }

const INCLUDED_ITEMS: IncludedItem[] = [
  { Icon: UtensilsCrossed, label: 'Meals & Snacks' },
  { Icon: HomeIcon,        label: 'Housekeeping' },
  { Icon: Shirt,           label: 'Laundry & Linens' },
  { Icon: Pill,            label: 'Medications' },
  { Icon: Bath,            label: 'Personal Care' },
  { Icon: Droplets,        label: 'Toiletries' },
  { Icon: Heart,           label: 'Companionship' },
  { Icon: Tv,              label: 'Common Areas' },
]

const TESTIMONIALS = [
  { quote: '"Moving mom into Adored Living was the best decision our family ever made. She has blossomed — she\'s happier, healthier, and the staff treat her like their own family."', name: 'Sandra M.', role: 'Daughter of Resident', initial: 'S' },
  { quote: '"I toured several facilities before choosing Adored Living for my father. Nothing compared to the warmth here — it truly feels like a home. The owners are present, caring, and always communicate with us."', name: 'Robert K.', role: 'Son of Resident', initial: 'R' },
  { quote: '"The all-inclusive pricing was such a relief — no surprises or confusing bills. But more than that, my aunt is thriving. She loves the other residents, enjoys the meals, and sleeps peacefully every night."', name: 'Linda P.', role: 'Niece of Resident', initial: 'L' },
]

const HOW_IT_WORKS = [
  { step: 1, title: 'Reach Out', desc: 'Call, email, or fill out our contact form. We\'ll answer your questions warmly, with no pressure and no commitment required.' },
  { step: 2, title: 'Tour Our Home', desc: 'Visit either location to meet our team, see the space, and get a genuine feel for what daily life at Adored Living looks like.' },
  { step: 3, title: 'Welcome Your Loved One', desc: 'We\'ll build a personalized care plan together and guide your family through every step of a smooth, comfortable transition.' },
]

const LOCATIONS: LocationItem[] = [
  { id: 'rochester-hills', img: '/rochester-hills.jpg', imgAlt: 'Rochester Hills home exterior', badge: 'Rochester Hills', title: 'Rochester Hills Home', address: '185 E South Blvd, Rochester Hills, MI 48307', phone: '(248) 931-9009', phoneHref: 'tel:+12489319009', email: 'adoredlivingllc@gmail.com', feature: 'Comfortable outdoor seating areas' },
  { id: 'clarkston', img: '/clarkston.webp', imgAlt: 'Clarkston home exterior with accessible ramp and flower beds', badge: 'Clarkston', title: 'Clarkston Home', address: '5111 Heath Ave, Clarkston, MI 48346', phone: '(248) 931-9009', phoneHref: 'tel:+12489319009', email: 'adoredlivingllc@gmail.com', feature: 'Peaceful residential neighborhood' },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-inner">
          <div className="hero-content" data-animate="fade">
            <span className="eyebrow">Michigan's Home-Style Assisted Living</span>
            <h1 id="hero-heading">
              Where Every Day Feels<br />
              Like <em>Coming Home</em>
            </h1>
            <p className="hero-desc">
              A peaceful, family-like setting where compassionate caregivers support your loved one's
              independence — in a warm, welcoming home they can truly call their own.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary btn-lg">Explore Our Care</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Schedule a Visit</Link>
            </div>

            <p className="hero-phone">
              <Phone size={15} strokeWidth={2.5} aria-hidden="true" />
              <a href="tel:+12489319009">(248) 931-9009</a>
              <span className="hero-phone-sep">— Available 7 days a week</span>
            </p>

          </div>
          <div className="hero-img-wrap" data-animate data-delay={200}>
            <img src="/hero-caregiver.png" alt="Caregiver warmly embracing a senior resident at home" loading="eager" />
          </div>
          </div>

          <div className="hero-trust" aria-label="Quick facts">
            {[
              { num: '6',             label: 'Max Residents' },
              { num: '2',             label: 'Michigan Locations' },
              { num: 'All‑Inclusive', label: 'Care & Services' },
              { num: 'Licensed',      label: 'State of Michigan' },
            ].map(({ num, label }) => (
              <div className="trust-item" key={label}>
                <span className="trust-number">{num}</span>
                <span className="trust-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO BAND ===== */}
      <div className="intro-band">
        <div className="container">
          <div className="intro-band-inner">
            {[
              { Icon: HomeIcon,    text: 'Residential, home-like setting' },
              { Icon: Users,       text: 'Maximum 6 residents per home' },
              { Icon: Heart,       text: 'Owner-operated, family-run care' },
              { Icon: ShieldCheck, text: 'Michigan state licensed' },
            ].map(({ Icon, text }, i) => (
              <div className="intro-pill" key={text} data-animate data-delay={i * 80}>
                <div className="pill-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.75} /></div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== LOCATIONS PREVIEW ===== */}
      <section className="section section--alt" aria-labelledby="locations-heading">
        <div className="container">
          <SectionHeader eyebrow="Our Homes" title="Two Beautiful Michigan Locations" description="Serving the Rochester Hills and Clarkston communities with the same warm, personalized care at each home." center id="locations-heading" />
          <div className="locations-grid" role="list">
            {LOCATIONS.map(({ id, img, imgAlt, title, address, phone, phoneHref, email, feature }, i) => (
              <article className="location-card" role="listitem" key={id} data-animate data-delay={i * 120}>
                <div className="location-img" style={{ backgroundImage: `url('${img}')` }} role="img" aria-label={imgAlt} />
                <div className="location-body">
                  <h3>{title}</h3>
                  <div className="location-address">
                    <MapPin size={15} strokeWidth={2} aria-hidden="true" />
                    <span>{address}</span>
                  </div>
                  <div className="location-details">
                    <div className="loc-detail">
                      <div className="detail-icon" aria-hidden="true"><Phone size={14} strokeWidth={2} /></div>
                      <a href={phoneHref}>{phone}</a>
                    </div>
                    <div className="loc-detail">
                      <div className="detail-icon" aria-hidden="true"><Mail size={14} strokeWidth={2} /></div>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                    <div className="loc-detail">
                      <div className="detail-icon" aria-hidden="true"><HomeIcon size={14} strokeWidth={2} /></div>
                      <span>{feature}</span>
                    </div>
                  </div>
                  <Link to={`/locations/${id}`} className="btn btn-primary">Learn More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY ADORED ===== */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <SectionHeader eyebrow="Why Families Choose Us" title="A Different Kind of Care" description="We believe seniors deserve more than just assistance — they deserve a vibrant, joyful community where they are truly known and cherished." center id="why-heading" />
          <div className="why-grid" role="list">
            {WHY_ITEMS.map(({ Icon, title, desc }, i) => (
              <div className="why-card" role="listitem" key={title} data-animate data-delay={i * 80}>
                <div className="why-icon" aria-hidden="true"><Icon size={28} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SPLIT ===== */}
      <section className="section section--alt" aria-labelledby="about-heading">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div className="about-image" data-animate style={{ marginTop: '36px' }}>
              <img src="/caregiver-assist.png" alt="Caregiver assisting a senior resident in a wheelchair" loading="lazy" />
            </div>

            <div className="about-content" data-animate data-delay={150}>
              <span className="eyebrow">Our Mission</span>
              <h2 id="about-heading">Care Built on Compassion, Dignity &amp; Respect</h2>
              <p>At Adored Living LLC, we operate <Link to="/locations">two licensed residential care homes in Michigan</Link> — each designed to feel like exactly that: a home. We believe seniors shouldn't have to choose between independence and the support they need.</p>
              <p>Our residents are treated like family, because to us, they are. We love our residents and feel truly blessed to serve them and their families every single day.</p>

              <div className="mission-values-row">
                {[
                  { title: 'Compassion First',  desc: 'Genuine warmth in every interaction' },
                  { title: 'Dignity Always',    desc: 'Care that preserves independence' },
                  { title: 'Personalized Care', desc: 'Tailored to each resident\'s needs' },
                ].map(({ title, desc }) => (
                  <div className="mission-value" key={title}>
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn-primary">Learn Our Story</Link>
            </div>
          </div>
        </div>
      </section>

{/* ===== WHAT'S INCLUDED ===== */}
      <section className="section" aria-labelledby="included-heading">
        <div className="container">
          <SectionHeader eyebrow="All-Inclusive Care" title="Everything Your Loved One Needs" description="One simple monthly rate — no hidden fees, no surprise add-ons. Every service below is included. Have questions about pricing? Contact us — we're happy to walk you through it." center id="included-heading" />
          <div className="ai-features" style={{ marginTop: 48 }} role="list">
            {INCLUDED_ITEMS.map(({ Icon, label }, i) => (
              <div className="ai-feature" role="listitem" key={label} data-animate data-delay={i * 60}>
                <div className="feat-icon" aria-hidden="true"><Icon size={26} strokeWidth={1.5} /></div>
                {label}
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Link to="/services" className="btn btn-primary btn-lg">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section section--alt" aria-labelledby="how-heading">
        <div className="container">
          <SectionHeader eyebrow="Getting Started" title="How It Works" description="Taking the first step can feel overwhelming. We've made the process as simple and pressure-free as possible." center id="how-heading" />
          <div className="steps-grid" role="list">
            {HOW_IT_WORKS.map(({ step, title, desc }, i) => (
              <div className="step-card" role="listitem" key={step} data-animate data-delay={i * 120}>
                <div className="step-number" aria-hidden="true">{step}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <a href="tel:+12489319009" className="btn btn-primary btn-lg">Call (248) 931-9009</a>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <SectionHeader eyebrow="Family Stories" title="Voices of Those We Serve" description="The trust families place in us is the greatest honor we know. Here is what they say about life at Adored Living." center id="testimonials-heading" />
          <div className="testimonials-grid" role="list">
            {TESTIMONIALS.map(({ quote, name, role, initial }, i) => (
              <article className="testimonial-card" role="listitem" key={name} data-animate data-delay={i * 120}>
                <p className="testimonial-text">{quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar" aria-hidden="true">{initial}</div>
                  <div className="author-info">
                    <strong>{name}</strong>
                    <span>{role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTABanner
        eyebrow="Take the Next Step"
        title="We'd Love to Welcome Your Family"
        description="Schedule a personal tour, ask questions, or simply talk through your loved one's needs. We're here to help — with no pressure and all the warmth you'd expect."
        primaryLabel="Schedule a Tour"
        primaryTo="/contact"
        secondaryLabel="Call Us Today"
        secondaryHref="tel:+12489319009"
      />
    </>
  )
}
