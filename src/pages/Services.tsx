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
    img: '/meal-chicken-rice.png',
    imgAlt: 'Home-cooked meal of chicken, rice, and fresh salad served at Adored Living',
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
    id: 'hospice',
    img: '/rochester/IMG_7418.jpeg',
    imgAlt: 'Resident resting peacefully by the fireplace at Adored Living',
    Icon: HeartHandshake,
    title: 'Hospice & End-of-Life Support',
    description: 'Many of our residents are in the final chapter of their lives, and we consider it a privilege to walk alongside them and their families during this time. We work closely with hospice teams to ensure care is coordinated, comfortable, and dignified — so residents can spend their remaining time in a true home, not a facility.',
    includes: ['Coordination with hospice and palliative care teams', 'Comfort-focused care prioritizing dignity and peace', 'Support for families through visits and open communication', 'Attentive monitoring of comfort and changing needs', 'Gentle engagement — music, conversation, and presence', 'A calm, homelike environment throughout end of life'],
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
