import { Link } from 'react-router-dom'
import { UtensilsCrossed, Heart, Pill, Home, Laugh, Music, Shirt, Tv, Bath, Droplets, type LucideIcon } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/ui/CTABanner'

interface ServiceDetail {
  id: string
  img: string
  imgAlt: string
  Icon: LucideIcon
  title: string
  description: string
  includes: string[]
  reverse?: boolean
}

interface IncludedItem { Icon: LucideIcon; label: string }

const SERVICES: ServiceDetail[] = [
  {
    id: 'meals',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
    imgAlt: 'Beautifully prepared, nutritious home-cooked meal',
    Icon: UtensilsCrossed,
    title: 'Meals & Nutrition',
    description: 'Good food is good care. Our residents enjoy three fresh, home-cooked meals every day — prepared with nutrition, flavor, and love. We accommodate dietary restrictions and preferences, and snacks and beverages are available throughout the day.',
    includes: ['Three nutritious, home-cooked meals daily', 'Snacks and beverages included throughout the day', 'Dietary accommodations for health conditions', 'Meal assistance provided as needed', 'Hydration monitoring for resident health'],
  },
  {
    id: 'personal-care',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    imgAlt: 'Caregiver assisting an elderly resident with gentle, dignified support',
    Icon: Heart,
    title: 'Personal Care Assistance',
    description: 'We provide compassionate, dignified personal care that respects each resident\'s privacy and independence. Our caregivers are trained to assist in ways that empower — never diminish — the people in their care.',
    includes: ['Bathing and personal hygiene assistance', 'Grooming, dressing, and appearance support', 'Mobility assistance to meals and activities', 'Monitoring of behavioral and appetite changes', 'Individualized care plans for each resident'],
    reverse: true,
  },
  {
    id: 'medication',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    imgAlt: 'Organized medication management with careful record-keeping',
    Icon: Pill,
    title: 'Medication Management',
    description: 'Medication management is one of the most critical aspects of senior care. Our staff follow physician recommendations precisely, maintain secure and accurate records, and take the worry of medication schedules completely off families\' shoulders.',
    includes: ['Medication administered per physician instructions', 'Secure medication inventory and storage', 'Accurate administration records maintained', 'Assistance with prescription refill coordination', 'Side effect and reaction monitoring'],
  },
  {
    id: 'housekeeping',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    imgAlt: 'Clean, bright, warmly decorated residential bedroom',
    Icon: Home,
    title: 'Housing & Housekeeping',
    description: 'Our homes are beautifully maintained, clean, and comfortable. Each resident has a furnished private room and access to warm, welcoming shared living spaces. Routine housekeeping and laundry are handled so residents can simply enjoy their home.',
    includes: ['Furnished private room (bed, chair, dresser, closet, side table)', 'Shared living areas with television', 'Routine cleaning and housekeeping services', 'In-house laundry management', 'Linens, pillows, sheets, and blankets provided', 'Basic toiletry and hygiene supplies included'],
    reverse: true,
  },
  {
    id: 'companionship',
    img: 'https://images.unsplash.com/photo-1609220136736-443140cfeaa8?w=800&q=80',
    imgAlt: 'Seniors laughing together and enjoying social activities',
    Icon: Laugh,
    title: 'Companionship & Social Engagement',
    description: 'Loneliness is one of the greatest challenges seniors face. At Adored Living, meaningful connection is built into every day. With a small, intimate community of residents, genuine friendships naturally form — and our staff make it their mission to bring joy into each interaction.',
    includes: ['Daily meaningful social interaction and engagement', 'Recreational and leisure activities', 'Emotional support and active listening', 'Close-knit community of fellow residents', 'Encouragement of personal interests and hobbies'],
  },
  {
    id: 'activities',
    img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
    imgAlt: 'Seniors enjoying recreational activities and social time together',
    Icon: Music,
    title: 'Activities & Recreation',
    description: 'A fulfilling daily life goes far beyond physical care. We prioritize meaningful engagement, social connection, and joy — offering a variety of activities and recreational opportunities that keep residents active, stimulated, and happily connected to those around them.',
    includes: ['Engaging daily activities tailored to residents\' interests', 'Music, games, and creative pursuits', 'Social outings and community events', 'Comfortable shared spaces for gathering', 'Outdoor seating areas and walking paths', 'Encouragement of personal hobbies'],
    reverse: true,
  },
]

const INCLUDED_ITEMS: IncludedItem[] = [
  { Icon: UtensilsCrossed, label: 'Meals & Snacks' },
  { Icon: Home,            label: 'Housekeeping' },
  { Icon: Shirt,           label: 'Laundry & Linens' },
  { Icon: Pill,            label: 'Medications' },
  { Icon: Bath,            label: 'Personal Care' },
  { Icon: Droplets,        label: 'Toiletries' },
  { Icon: Music,           label: 'Activities' },
  { Icon: Tv,              label: 'Common Areas' },
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
          <SectionHeader eyebrow="All-Inclusive Living" title="One Simple Rate — Everything Covered" description="We understand that families navigating care options often face confusing pricing structures. At Adored Living, we keep it simple: one straightforward, all-inclusive rate covers all basic supplies, foods, and services — so you can focus on what matters most." center id="alinc-heading" />
          <div className="ai-features" style={{ marginTop: 48 }} role="list">
            {INCLUDED_ITEMS.map(({ Icon, label }) => (
              <div className="ai-feature" role="listitem" key={label}>
                <div className="feat-icon" aria-hidden="true"><Icon size={26} strokeWidth={1.5} /></div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section className="section section--alt" aria-labelledby="detail-heading">
        <div className="container">
          <SectionHeader eyebrow="Our Care Services" title="What We Provide Each Day" center id="detail-heading" />

          <div className="services-detail">
            {SERVICES.map(({ id, img, imgAlt, Icon, title, description, includes, reverse }) => (
              <article key={id} id={id} className={`service-row${reverse ? ' reverse' : ''}`} aria-labelledby={`svc-${id}`}>
                <div className="service-row-img">
                  <img src={img} alt={imgAlt} loading="lazy" />
                </div>
                <div className="service-row-content">
                  <div className="service-icon" aria-hidden="true"><Icon size={24} strokeWidth={1.5} /></div>
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
            <p>We believe care should never come with a confusing bill. Our all-inclusive rate covers everything described on this page — from meals and medications to housekeeping and activities. Contact us to learn more about our rates and what makes Adored Living the right fit for your family.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Ask About Rates</Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">Schedule a Tour</Link>
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
