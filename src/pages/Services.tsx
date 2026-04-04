import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/ui/CTABanner'

interface ServiceDetail {
  id: string
  img: string
  imgAlt: string
  icon: string
  title: string
  description: string
  includes: string[]
  reverse?: boolean
}

const SERVICES: ServiceDetail[] = [
  {
    id: 'meals',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
    imgAlt: 'Beautifully prepared, colorful nutritious meal with fresh vegetables',
    icon: '🍽️',
    title: 'Meals & Nutrition',
    description: 'Good food is good care. Our residents enjoy three fresh, home-cooked meals every day — prepared with nutrition, flavor, and love. We accommodate dietary restrictions and preferences, and snacks and beverages are available throughout the day.',
    includes: [
      'Three nutritious, home-cooked meals daily',
      'Snacks and beverages included throughout the day',
      'Dietary accommodations for health conditions',
      'Meal assistance provided as needed',
      'Hydration monitoring for resident health',
    ],
  },
  {
    id: 'personal-care',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    imgAlt: 'Caregiver assisting an elderly resident with gentle, dignified support',
    icon: '🤗',
    title: 'Personal Care Assistance',
    description: 'We provide compassionate, dignified personal care that respects each resident\'s privacy and independence. Our caregivers are trained to assist in ways that empower — never diminish — the people in their care.',
    includes: [
      'Bathing and personal hygiene assistance',
      'Grooming, dressing, and appearance support',
      'Mobility assistance to meals and activities',
      'Monitoring of behavioral and appetite changes',
      'Individualized care plans for each resident',
    ],
    reverse: true,
  },
  {
    id: 'medication',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    imgAlt: 'Organized medication management with careful record-keeping',
    icon: '💊',
    title: 'Medication Management',
    description: 'Medication management is one of the most critical aspects of senior care. Our staff follow physician recommendations precisely, maintain secure and accurate records, and take the worry of medication schedules completely off families\' shoulders.',
    includes: [
      'Medication administered per physician instructions',
      'Secure medication inventory and storage',
      'Accurate administration records maintained',
      'Assistance with prescription refill coordination',
      'Side effect and reaction monitoring',
    ],
  },
  {
    id: 'housekeeping',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    imgAlt: 'Clean, bright, warmly decorated residential bedroom',
    icon: '🏠',
    title: 'Housing & Housekeeping',
    description: 'Our homes are beautifully maintained, clean, and comfortable. Each resident has a furnished private room and access to warm, welcoming shared living spaces. Routine housekeeping and laundry are handled so residents can simply enjoy their home.',
    includes: [
      'Furnished private room (bed, chair, dresser, closet, side table)',
      'Shared living areas with television',
      'Routine cleaning and housekeeping services',
      'In-house laundry management',
      'Linens, pillows, sheets, and blankets provided',
      'Basic toiletry and hygiene supplies included',
    ],
    reverse: true,
  },
  {
    id: 'companionship',
    img: 'https://images.unsplash.com/photo-1609220136736-443140cfeaa8?w=800&q=80',
    imgAlt: 'Seniors laughing together and enjoying social activities',
    icon: '🌸',
    title: 'Companionship & Social Engagement',
    description: 'Loneliness is one of the greatest challenges seniors face. At Adored Living, meaningful connection is built into every day. With a small, intimate community of residents, genuine friendships naturally form — and our staff make it their mission to bring joy into each interaction.',
    includes: [
      'Daily meaningful social interaction and engagement',
      'Recreational and leisure activities',
      'Emotional support and active listening',
      'Close-knit community of fellow residents',
      'Encouragement of personal interests and hobbies',
    ],
  },
  {
    id: 'garden',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    imgAlt: 'Lush, colorful community garden in full bloom',
    icon: '🌿',
    title: 'Community Gardens & Outdoor Spaces',
    description: 'Nature is one of the most powerful healers. Our homes feature beautiful community gardens and comfortable outdoor patios, giving residents a place to breathe fresh air, enjoy seasonal beauty, and find peace in the natural world — any time they wish.',
    includes: [
      'Access to maintained community gardens',
      'Comfortable outdoor patio for relaxation',
      'Gentle outdoor walking and movement encouraged',
      'Seasonal garden activities available',
      'Safe, accessible outdoor environment',
    ],
    reverse: true,
  },
]

const INCLUDED_ITEMS = [
  { icon: '🍽️', label: 'Meals & Snacks' },
  { icon: '🧹', label: 'Housekeeping' },
  { icon: '👕', label: 'Laundry & Linens' },
  { icon: '💊', label: 'Medications' },
  { icon: '🛁', label: 'Personal Care' },
  { icon: '🧴', label: 'Toiletries' },
  { icon: '🌿', label: 'Garden Access' },
  { icon: '📺', label: 'Common Areas' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Everything Included"
        title="Comprehensive Care, Simply Covered"
        description="One all-inclusive rate. No hidden fees. Every service your loved one needs, delivered with skill and warmth every single day."
        bgImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80"
        bgAlt="Caregiver helping senior with daily activities"
      />

      {/* ===== ALL-INCLUSIVE INTRO ===== */}
      <section className="section" aria-labelledby="alinc-heading">
        <div className="container">
          <SectionHeader
            eyebrow="All-Inclusive Living"
            title="One Simple Rate — Everything Covered"
            description="We understand that families navigating care options often face confusing pricing structures. At Adored Living, we keep it simple: one straightforward, all-inclusive rate covers all basic supplies, foods, and services — so you can focus on what matters most."
            center
            id="alinc-heading"
          />
          <div className="ai-features" style={{ marginTop: 48 }} role="list">
            {INCLUDED_ITEMS.map(({ icon, label }) => (
              <div className="ai-feature" role="listitem" key={label}>
                <div className="feat-icon" aria-hidden="true">{icon}</div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section className="section section--alt" aria-labelledby="detail-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Our Care Services"
            title="What We Provide Each Day"
            center
            id="detail-heading"
          />

          <div className="services-detail">
            {SERVICES.map(({ id, img, imgAlt, icon, title, description, includes, reverse }) => (
              <article
                key={id}
                id={id}
                className={`service-row${reverse ? ' reverse' : ''}`}
                aria-labelledby={`svc-${id}`}
              >
                <div className="service-row-img">
                  <img src={img} alt={imgAlt} loading="lazy" />
                </div>
                <div className="service-row-content">
                  <div className="service-icon" aria-hidden="true">{icon}</div>
                  <h3 id={`svc-${id}`}>{title}</h3>
                  <p>{description}</p>
                  <div className="service-includes" role="list">
                    {includes.map((item) => (
                      <div className="include-item" role="listitem" key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ALL-INCLUSIVE BOX ===== */}
      <section className="section" aria-labelledby="alinc2-heading">
        <div className="container">
          <div className="all-inclusive">
            <span className="eyebrow">Transparent Pricing</span>
            <h2 id="alinc2-heading">All-Inclusive, All the Time</h2>
            <p>
              We believe care should never come with a confusing bill. Our all-inclusive rate covers
              everything described on this page — from meals and medications to housekeeping and garden
              access. Contact us to learn more about our rates and what makes Adored Living the right
              fit for your family.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Ask About Rates</Link>
              <Link to="/contact" className="btn btn-accent btn-lg">Schedule a Tour</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have Questions About Our Services?"
        description="Our team is happy to walk you through every detail of our care, answer your questions, and help you determine the best fit for your loved one."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
        secondaryLabel="Read Our FAQs"
        secondaryTo="/faq"
      />
    </>
  )
}
