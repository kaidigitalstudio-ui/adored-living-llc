import { Link } from 'react-router-dom'
import { UtensilsCrossed, Heart, Pill, Home, Laugh, Music, type LucideIcon } from 'lucide-react'
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
    description: 'Good food is good care. Our residents enjoy three fresh, home-cooked meals every day — prepared with nutrition, flavor, and love. We accommodate a wide range of dietary needs and medical conditions, and snacks and beverages are available throughout the day to keep residents comfortable and well-nourished.',
    includes: ['Three nutritious, home-cooked meals daily', 'Snacks and beverages available throughout the day', 'Dietary accommodations for medical conditions and preferences', 'Full meal assistance and feeding support as needed', 'Texture-modified and soft food options available', 'Hydration monitoring for resident health and comfort'],
  },
  {
    id: 'personal-care',
    img: '/personal-care.png',
    imgAlt: 'Caregiver smiling warmly with a senior resident',
    Icon: Heart,
    title: 'Personal Care Assistance',
    description: 'We provide hands-on, compassionate personal care for residents who need significant daily assistance. Our caregivers approach every task — no matter how intimate — with patience, gentleness, and deep respect for each person\'s dignity. For residents with dementia or cognitive decline, we are trained to offer calm, consistent, reassuring care.',
    includes: ['Bathing, showering, and full personal hygiene assistance', 'Grooming, dressing, and appearance support', 'Mobility and transfer assistance', 'Incontinence care and toileting support', 'Dementia and memory care support', 'Close monitoring of behavioral and physical changes', 'Individualized care plans developed with families'],
    reverse: true,
  },
  {
    id: 'medication',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    imgAlt: 'Organized medication management with careful record-keeping',
    Icon: Pill,
    title: 'Medication Management',
    description: 'For residents with complex medication needs, consistency and accuracy are essential. Our staff administer all medications precisely as prescribed, maintain thorough records, and monitor residents carefully for any changes in condition or response. Families can rest knowing this critical responsibility is handled with care.',
    includes: ['Medication administered per physician instructions', 'Secure medication storage and inventory management', 'Accurate administration records maintained', 'Coordination with physicians and pharmacies', 'Monitoring for side effects and changes in condition', 'Hospice medication support in coordination with care teams'],
  },
  {
    id: 'housekeeping',
    img: '/housekeeping.png',
    imgAlt: 'Caregiver folding fresh laundry in front of a washing machine',
    Icon: Home,
    title: 'Housing & Housekeeping',
    description: 'Our homes are warm, calm, and immaculately maintained. Each resident has their own furnished private room — a peaceful retreat they can personalize with cherished belongings. Our comfortable shared living spaces are designed for relaxation, where residents can watch television, rest, and spend time together throughout the day.',
    includes: ['Furnished private room (bed, chair, dresser, closet, side table)', 'Warm shared living areas with television', 'Routine room cleaning and full housekeeping', 'In-house laundry management', 'Linens, pillows, sheets, and blankets provided', 'Basic toiletry and hygiene supplies included'],
    reverse: true,
  },
  {
    id: 'companionship',
    img: '/companionship.png',
    imgAlt: 'Caregiver holding the hand of an elderly resident in a wheelchair outdoors',
    Icon: Laugh,
    title: 'Companionship & Presence',
    description: 'For many of our residents — especially those with dementia — simply not being alone is the most important thing we can offer. Our caregivers are present, attentive, and genuinely connected to the people they care for. We sit with residents, watch television together, hold a hand, and offer a calm, familiar face throughout the day.',
    includes: ['Consistent caregiver presence throughout the day and night', 'Shared television time in comfortable living areas', 'Gentle conversation, comfort, and emotional reassurance', 'Patient, specialized support for residents with dementia', 'Small resident community for a quiet, home-like atmosphere', 'Compassionate end-of-life presence and support'],
  },
  {
    id: 'enrichment',
    img: '/enrichment.png',
    imgAlt: 'Elderly resident playing piano alongside a young musician during a music session',
    Icon: Music,
    title: 'Enrichment & Spiritual Care',
    description: 'Even in the later stages of life, moments of beauty, comfort, and meaning matter deeply. We welcome live musicians who play for residents on holidays and special occasions, offer music therapy for memory and mood support, and coordinate visits from pastors, priests, and chaplains for residents and families who wish it.',
    includes: ['Live music performances on holidays and special occasions', 'Music therapy for comfort, memory, and emotional well-being', 'Pastoral and spiritual care visits (pastors, priests, chaplains)', 'Gentle sensory engagement suited to each resident\'s abilities', 'Holiday traditions and seasonal celebrations', 'Quiet, peaceful environment that supports rest and comfort'],
    reverse: true,
  },
]


export default function Services() {
  return (
    <>
      {/* ===== SERVICES DETAIL ===== */}
      <section className="section section--top" aria-labelledby="detail-heading">
        <div className="container">
          <SectionHeader eyebrow="Our Services" title="What We Provide Each Day" description="Comprehensive, compassionate care for seniors who need significant daily support — all covered under one simple all-inclusive rate." center id="detail-heading" as="h1" />

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
            <p>We believe families navigating this season of life shouldn't have to worry about complicated billing. Our all-inclusive rate covers everything described on this page — meals, medication management, personal care, housekeeping, and enrichment. Contact us to learn more about our rates and whether Adored Living is the right fit for your loved one.</p>
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
