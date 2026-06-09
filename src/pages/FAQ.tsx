import { useState } from 'react'
import CTABand from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'

interface FAQItem { question: string; answer: string }
interface FAQGroup { cat: string; items: FAQItem[] }

const FAQ_GROUPS: FAQGroup[] = [
  {
    cat: 'Getting started',
    items: [
      { question: 'How do I know if assisted living is the right fit?', answer: 'If everyday tasks — bathing, dressing, medications, meals, or mobility — have become difficult or unsafe to manage alone, assisted living can help. The best first step is a visit and a care assessment; we\'ll talk honestly about needs and whether our homes are the right match.' },
      { question: 'How do I schedule a tour?', answer: 'Call either home and we\'ll arrange a private tour at a time that suits you — including evenings and weekends. We\'ll walk you through the home, introduce the care team, and answer every question, with no pressure.' },
      { question: 'Is there a waitlist?', answer: 'Because our homes are intentionally small, availability is limited and can change quickly. We\'ll always tell you exactly what\'s open today, and we keep a gentle waitlist so we can reach out the moment a suite becomes available.' },
    ],
  },
  {
    cat: 'Care & daily life',
    items: [
      { question: 'What level of care do you provide?', answer: 'We support everything from light daily assistance to full personal care — help with bathing, dressing, grooming, mobility, and medication management, plus memory and companion care. Care is assessed individually and adjusts gently as needs change.' },
      { question: 'What is the caregiver-to-resident ratio?', answer: 'We maintain a 1:4 caregiver-to-resident ratio so no one waits to be cared for. Trained staff are on site 24 hours a day, every day.' },
      { question: 'Can care change as my loved one\'s needs change?', answer: 'Yes. We review and adjust care plans continuously, so residents can stay in the home they know rather than moving somewhere new as needs evolve.' },
      { question: 'What do meals look like?', answer: 'Three home-style meals plus snacks are served daily and shared at one table. We accommodate dietary needs and the dishes residents love most.' },
    ],
  },
  {
    cat: 'Logistics & cost',
    items: [
      { question: 'What\'s included in the monthly cost?', answer: 'Personal care, meals, housekeeping and laundry, activities, and 24/7 staffing are included. Because needs vary, we provide a clear, personalized quote after a care assessment — with no hidden fees.' },
      { question: 'Do you accept long-term care insurance?', answer: 'Many families use long-term care insurance, VA benefits, or private funds. Coverage varies by plan and program — we\'re happy to walk through your specific situation and what documentation is typically needed.' },
      { question: 'Can residents bring their own furniture?', answer: 'Absolutely. Familiar furnishings and treasured belongings are welcome and encouraged — they\'re a big part of what makes a suite feel like home.' },
      { question: 'Are there visiting hours?', answer: 'Family is welcome anytime. We do ask for a quick hello to staff on arrival so we can support a great visit, but there are no fixed visiting hours.' },
    ],
  },
]

function FAQItemRow({ question, answer, open, onToggle, id }: {
  question: string; answer: string; open: boolean; onToggle: () => void; id: string
}) {
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        className="faq-q"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-answer`}
        id={`${id}-btn`}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true" />
      </button>
      <div className="faq-a" id={`${id}-answer`} role="region" aria-labelledby={`${id}-btn`}>
        <div className="faq-a-inner"><p>{answer}</p></div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string>('0-0')

  return (
    <>
      <PageHero
        crumb="FAQ"
        eyebrow="Questions & answers"
        title="The questions families <em>ask us most.</em>"
        lede="Choosing care for someone you love is a big decision. Here are honest answers to the things families ask — and we're always a phone call away for the rest."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="faq">
            {FAQ_GROUPS.map((group, gi) => (
              <div className="faq-cat" key={gi}>
                <span className="eyebrow">{group.cat}</span>
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`
                  return (
                    <FAQItemRow
                      key={key}
                      id={`faq-${key}`}
                      question={item.question}
                      answer={item.answer}
                      open={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? '' : key)}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
