import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import CTABanner from '../components/ui/CTABanner'

interface FAQItem { question: string; answer: string }

const FAQS: FAQItem[] = [
  { question: 'What is a residential care facility for the elderly (RCFE)?', answer: 'A residential care facility for the elderly (RCFE) — sometimes called a "board and care home" or "adult foster care home" — is a licensed, non-medical residence providing room, meals, personal care, and supervision for seniors who may need additional support but do not require skilled nursing care. Our homes in Michigan are licensed and regulated by the State of Michigan.' },
  { question: 'How many residents live in each home?', answer: 'Each of our homes is licensed for a maximum of 6 residents. This small, intimate setting is intentional — it allows our caregivers to provide deeply personalized attention, build genuine relationships with each resident, and create a true home environment rather than an institutional one.' },
  { question: 'What is included in the monthly rate?', answer: 'Our pricing is all-inclusive, meaning there are no surprise add-ons or hidden fees. The monthly rate covers room and board, all three meals plus snacks and beverages, housekeeping and laundry, personal care assistance, medication management, basic toiletries and hygiene supplies, and access to all common areas.' },
  { question: 'What level of care do you provide?', answer: 'We provide non-medical personal care and daily living assistance. This includes help with bathing, grooming, dressing, medication management, mobility support, and meal assistance. We do not provide skilled nursing or medical procedures. Residents may continue to see their own physicians and receive home health visits as needed.' },
  { question: 'Can my loved one bring their own furniture and personal items?', answer: 'Absolutely. While each room comes fully furnished, we encourage residents to personalize their space with their own belongings — photos, a favorite chair, cherished keepsakes, or decorative items. Making the space feel familiar and personal is important to us.' },
  { question: 'How are medications managed?', answer: 'Our trained staff administer all medications according to each resident\'s physician-prescribed schedule. We maintain secure, organized records of all medications, monitor for any side effects or changes, and assist with prescription refills and coordination with healthcare providers.' },
  { question: 'Can family members visit whenever they like?', answer: 'Yes. We warmly welcome family visits. We believe open family involvement is essential to a resident\'s wellbeing and happiness. Families are encouraged to visit, share meals, and stay connected with their loved ones in whatever way feels natural.' },
  { question: 'What happens if my loved one\'s care needs increase over time?', answer: 'We evaluate each resident\'s needs on an ongoing basis. If care needs evolve, we work closely with families and healthcare providers to adjust care plans accordingly. We will always communicate openly about what we can support and will help families find additional resources if more intensive medical care becomes necessary.' },
  { question: 'Are your homes licensed and regulated?', answer: 'Yes. Both of our homes are fully licensed by the State of Michigan and comply with all applicable health, safety, and regulatory standards. We are committed to maintaining the highest standards of care and transparency.' },
  { question: 'How do I get started or schedule a tour?', answer: 'Simply reach out to us by phone at (248) 931-9009 or by email at adoredlivingllc@gmail.com. You can also fill out the contact form on our website. We\'d love to invite you for a personal tour of either location — no pressure, just a warm conversation about what\'s best for your loved one.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <>
      <PageHero
        eyebrow="Common Questions"
        title="We're Here to Help You Understand"
        description="Choosing care for a loved one brings up many questions. We've answered the most common ones here — and we're always just a phone call away."
        bgImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80"
        bgAlt="Caregiver and senior resident sharing a warm moment"
      />

      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <SectionHeader eyebrow="Frequently Asked Questions" title="Answers to What Families Ask Most" description="If you don't see your question here, please don't hesitate to reach out — we love talking with families and are always happy to help." center id="faq-heading" />

          <div className="faq-list" role="list">
            {FAQS.map(({ question, answer }, i) => (
              <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`} role="listitem">
                <button
                  className="faq-question"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  onClick={() => toggle(i)}
                >
                  {question}
                  <span className="faq-chevron" aria-hidden="true">
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </span>
                </button>
                <div className="faq-answer" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`}>
                  <div className="faq-answer-inner">{answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="still-q-heading">
        <div className="container text-center">
          <span className="eyebrow">Still Have Questions?</span>
          <h2 id="still-q-heading">We'd Love to Talk</h2>
          <p>No question is too small. Whether you're just beginning to explore care options or ready to make a decision, our team is here to guide you with patience and warmth.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <a href="tel:+12489319009" className="btn btn-primary btn-lg">Call (248) 931-9009</a>
            <a href="mailto:adoredlivingllc@gmail.com" className="btn btn-accent btn-lg">Send an Email</a>
          </div>
        </div>
      </section>

      <CTABanner
        title="See Our Home For Yourself"
        description="The best way to understand what makes Adored Living special is to walk through our doors. Schedule a personal tour at either location."
        primaryLabel="Schedule a Tour"
        primaryTo="/contact"
        secondaryLabel="View Our Services"
        secondaryTo="/services"
      />
    </>
  )
}
