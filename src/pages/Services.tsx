import { UtensilsCrossed, Heart, Pill, Home, Laugh, HeartHandshake, type LucideIcon } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/ui/CTABanner'

interface ServiceDetail {
  id: string
  Icon: LucideIcon
  title: string
  description: string
  includes: string[]
}

const SERVICES: ServiceDetail[] = [
  {
    id: 'meals',
    Icon: UtensilsCrossed,
    title: 'Meals & Nutrition',
    description: 'Your loved one will enjoy three fresh, home-cooked meals every day — prepared with nutrition, flavor, and love. We accommodate dietary restrictions and health-related needs, and snacks and beverages are always available.',
    includes: ['Three home-cooked meals daily', 'Snacks & beverages throughout the day', 'Dietary accommodations for health conditions', 'Meal assistance as needed', 'Hydration monitoring'],
  },
  {
    id: 'personal-care',
    Icon: Heart,
    title: 'Personal Care',
    description: 'Your loved one receives compassionate, dignified personal care that respects their privacy and individuality at every level of ability. Our caregivers are present around the clock — so someone is always there.',
    includes: ['Bathing & personal hygiene assistance', 'Grooming, dressing & appearance support', 'Mobility assistance throughout the day', 'Monitoring of behavioral & appetite changes', 'Individualized care plans', 'Around-the-clock & overnight staffing', 'Regular family updates'],
  },
  {
    id: 'medication',
    Icon: Pill,
    title: 'Medication Management',
    description: 'Keeping track of medications, dosages, and schedules is one of the heaviest burdens families carry. We take that completely off your plate — following physician instructions precisely and flagging any concerns.',
    includes: ['Administered per physician instructions', 'Secure inventory & storage', 'Accurate administration records', 'Prescription refill coordination', 'Side effect & reaction monitoring'],
  },
  {
    id: 'housekeeping',
    Icon: Home,
    title: 'Housing & Housekeeping',
    description: 'Your loved one will have a beautifully maintained, comfortable place to truly call home. Each resident has a furnished private room and access to warm shared living spaces — housekeeping and laundry fully handled.',
    includes: ['Furnished private room', 'Shared living areas with television', 'Routine cleaning & housekeeping', 'In-house laundry', 'Linens & bedding provided', 'Basic toiletries included'],
  },
  {
    id: 'companionship',
    Icon: Laugh,
    title: 'Companionship & Connection',
    description: 'At Adored Living, your loved one is never just a room number. With a small, intimate community, genuine connection happens naturally — and our staff make it their mission to bring warmth into every interaction.',
    includes: ['Daily social interaction', 'Live music, games & celebrations', 'Emotional support & compassionate presence', 'Close-knit resident community', 'Honoring each person\'s history & preferences'],
  },
  {
    id: 'hospice',
    Icon: HeartHandshake,
    title: 'Care for Every Stage',
    description: 'As needs evolve, our care evolves with them. We walk alongside each resident and their family through every chapter — coordinating closely with outside medical teams so nothing falls through the cracks.',
    includes: ['Hospice & palliative care coordination', 'Comfort-focused care that adapts over time', 'Open, ongoing family communication', 'Attentive comfort & wellbeing monitoring', 'A calm, homelike environment always'],
  },
]

export default function Services() {
  return (
    <>
      <section className="section section--top" aria-labelledby="detail-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Our Services"
            title="What We Provide Each Day"
            description="Everything your loved one needs, covered under one simple all-inclusive rate."
            center
            id="detail-heading"
            as="h1"
          />

          <div className="why-grid" style={{ marginTop: 56 }} role="list">
            {SERVICES.map(({ id, Icon, title, description, includes }, i) => (
              <article key={id} id={id} className="why-card service-card" role="listitem" data-animate data-delay={i * 80}>
                <div className="why-icon" aria-hidden="true">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="service-includes" role="list">
                  {includes.map(item => (
                    <div className="include-item" role="listitem" key={item}>{item}</div>
                  ))}
                </div>
              </article>
            ))}
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
