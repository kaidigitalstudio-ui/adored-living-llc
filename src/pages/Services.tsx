import { Link } from 'react-router-dom'
import { UtensilsCrossed, Heart, Pill, Home, Laugh, HeartHandshake, type LucideIcon } from 'lucide-react'
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


const SERVICES: ServiceDetail[] = [
  {
    id: 'meals',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
    imgAlt: 'Fresh, home-cooked meal served at the dining table',
    Icon: UtensilsCrossed,
    title: 'Meals & Nutrition',
    description: 'Good food is good care. Your loved one will enjoy three fresh, home-cooked meals every day — prepared with nutrition, flavor, and love. We accommodate dietary restrictions and health-related needs, and snacks and beverages are always available throughout the day.',
    includes: ['Three nutritious, home-cooked meals daily', 'Snacks and beverages included throughout the day', 'Dietary accommodations for health conditions', 'Meal assistance provided as needed', 'Hydration monitoring for resident health'],
  },
  {
    id: 'personal-care',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    imgAlt: 'Caregiver providing gentle, attentive assistance to an elderly resident',
    Icon: Heart,
    title: 'Personal Care Assistance',
    description: 'Your loved one receives compassionate, dignified personal care that respects their privacy and individuality at every level of ability. Our caregivers are present around the clock — so whether it\'s 2pm or 2am, someone is always there.',
    includes: ['Bathing and personal hygiene assistance', 'Grooming, dressing, and appearance support', 'Mobility assistance as needed throughout the day', 'Monitoring of behavioral and appetite changes', 'Individualized care plans for each resident', 'Around-the-clock staff presence, including overnight care', 'Regular updates so families always know how their loved one is doing'],
    reverse: true,
  },
  {
    id: 'medication',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    imgAlt: 'Organized medication management with careful record-keeping',
    Icon: Pill,
    title: 'Medication Management',
    description: 'Keeping track of medications, dosages, and schedules is one of the heaviest burdens families carry. We take that completely off your plate — following physician instructions precisely, maintaining accurate records, and flagging any concerns so you never have to wonder if something was missed.',
    includes: ['Medication administered per physician instructions', 'Secure medication inventory and storage', 'Accurate administration records maintained', 'Assistance with prescription refill coordination', 'Side effect and reaction monitoring'],
  },
  {
    id: 'housekeeping',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    imgAlt: 'Warm and comfortable residential living room',
    Icon: Home,
    title: 'Housing & Housekeeping',
    description: 'Your loved one will have a beautifully maintained, clean, and comfortable place to truly call home. Each resident has a furnished private room and access to warm shared living spaces — and all housekeeping and laundry are handled, so they can simply rest and be.',
    includes: ['Furnished private room (bed, chair, dresser, closet, side table)', 'Shared living areas with television', 'Routine cleaning and housekeeping services', 'In-house laundry management', 'Linens, pillows, sheets, and blankets provided', 'Basic toiletry and hygiene supplies included'],
    reverse: true,
  },
  {
    id: 'companionship',
    img: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80',
    imgAlt: 'Elderly residents sharing a warm moment together',
    Icon: Laugh,
    title: 'Companionship & Social Engagement',
    description: 'Loneliness is one of the greatest challenges seniors face — and one families worry about most. At Adored Living, your loved one is never just a room number. With a small, intimate community, genuine connection happens naturally, and our staff make it their mission to bring warmth into every interaction.',
    includes: ['Daily social interaction and meaningful engagement', 'Live music, games, and celebrations', 'Emotional support and compassionate presence', 'Close-knit community of fellow residents', 'Honoring each person\'s personality, history, and preferences'],
  },
  {
    id: 'hospice',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    imgAlt: 'A caregiver gently holding the hand of an elderly person',
    Icon: HeartHandshake,
    title: 'Compassionate Care for Every Stage',
    description: 'As needs evolve, our care evolves with them. We are committed to walking alongside each resident — and their family — through every chapter, ensuring that comfort, dignity, and genuine human connection remain constant no matter what stage of life they are in. We coordinate closely with outside medical teams so that nothing falls through the cracks.',
    includes: ['Coordination with hospice and palliative care teams', 'Comfort-focused care that adapts as needs change', 'Open, ongoing communication with families', 'Attentive monitoring of comfort and wellbeing', 'Gentle engagement — music, conversation, and presence', 'A calm, homelike environment at every stage'],
    reverse: true,
  },
]


export default function Services() {
  return (
    <>
      {/* ===== SERVICES DETAIL ===== */}
      <section className="section section--top" aria-labelledby="detail-heading">
        <div className="container">
          <SectionHeader eyebrow="Our Services" title="What We Provide Each Day" description="Everything your loved one needs, covered under one simple all-inclusive rate." center id="detail-heading" as="h1" />

          <div className="services-detail">
            {SERVICES.map(({ id, img, imgAlt, title, description, includes, reverse }, i) => (
              <article key={id} id={id} className={`service-row${reverse ? ' reverse' : ''}`} aria-labelledby={`svc-${id}`} data-animate data-delay={i * 60}>
                <div className="service-row-img">
                  <img src={img} alt={imgAlt} loading="lazy" />
                </div>
                <div className="service-row-content">
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
            <p>We believe care should never come with a confusing bill. Our all-inclusive rate covers everything described on this page — from meals and medications to housekeeping and around-the-clock care. Contact us to learn more about our rates and what makes Adored Living the right fit for your family.</p>
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
