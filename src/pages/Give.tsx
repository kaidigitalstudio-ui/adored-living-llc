import { useState } from 'react'
import PageHero from '../components/ui/PageHero'

const VENMO_URL = 'https://account.venmo.com/u/adoredlivingllcDonation'
const VENMO_HANDLE = '@adoredlivingllcDonation'
const PHONE = '(248) 931-9009'
const PHONE_HREF = 'tel:+12489319009'

const USES = [
  { h: 'Music & visiting performers', p: 'Live musicians and sing-alongs that bring residents together and bring back favorite memories.' },
  { h: 'Holidays & celebrations', p: 'Birthday cakes, holiday dinners, and themed parties that make every season feel special.' },
  { h: 'Arts, crafts & activities', p: 'Paints, puzzles, and supplies for the creative afternoons residents look forward to.' },
  { h: 'Comfort & the garden', p: 'Cozy blankets, outdoor seating, and flowers for the garden where residents and families gather.' },
]

const WORDING = [
  {
    label: 'For an obituary',
    text: `In lieu of flowers, the family suggests memorial gifts to Adored Living, where [Name] was lovingly cared for. Gifts may be made through Venmo at ${VENMO_HANDLE}.`,
  },
  {
    label: 'For a service program or card',
    text: `[Name] spent their final [months/years] surrounded by kindness at Adored Living. If you wish to honor [Name]'s memory, the family welcomes gifts to Adored Living in support of the residents and caregivers who became their second family. Venmo: ${VENMO_HANDLE}`,
  },
]

function CopyBlock({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked; the text stays visible to copy by hand.
    }
  }
  return (
    <div className="copy-block">
      <div className="copy-head">
        <span>{label}</span>
        <button type="button" onClick={copy} className="copy-btn">{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default function Give() {
  return (
    <>
      <PageHero
        crumb="Give in Memory"
        eyebrow="Give in memory"
        title="Honor a life by <em>brightening another.</em>"
        lede="Many families choose to remember someone they love with a gift to the home where they were cared for. Your donation goes directly toward the comfort and joy of the residents who live here now."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="feature-grid">
            <div className="reveal">
              <img className="ph" src="/life/hug.jpg" alt="Resident and family member sharing a hug" />
            </div>
            <div className="reveal prose">
              <span className="eyebrow">Why families give</span>
              <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginBottom: 22 }}>A way to carry their love forward.</h2>
              <p>When someone we've cared for passes, their family often tells us they want to give something back — to the caregivers who knew their loved one by name, and to the residents who became their neighbors and friends.</p>
              <p>A memorial gift keeps that love going. It helps fill everyday life here with music, celebration, and small comforts — the very moments that made this place feel like home for the person you're remembering.</p>
              <p>Gifts of any size are meaningful, and each one is received with deep gratitude.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section feature">
        <div className="wrap">
          <div className="care-head reveal">
            <div>
              <span className="eyebrow">Where your gift goes</span>
              <h2>Small joys, every day.</h2>
            </div>
            <p>Donations go toward the extras that make life here warm and full.</p>
          </div>
          <div className="give-uses reveal">
            {USES.map(u => (
              <div className="info-card" key={u.h}>
                <h3>{u.h}</h3>
                <p>{u.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="give">
        <div className="wrap">
          <div className="give-grid">
            <div className="reveal">
              <span className="eyebrow">In lieu of flowers</span>
              <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)', marginBottom: 14 }}>Wording you're welcome to use.</h2>
              <p style={{ color: 'var(--ink-soft)', fontSize: 17, marginBottom: 24, maxWidth: '52ch' }}>
                If you'd like to mention Adored Living in an obituary or service program, copy either version below and replace the bracketed words.
              </p>
              {WORDING.map(w => <CopyBlock key={w.label} {...w} />)}
            </div>
            <div className="reveal">
              <div className="info-card give-card">
                <h4>Make a gift</h4>
                <a href={VENMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Give through Venmo</a>
                <p className="handle">{VENMO_HANDLE}</p>
                <p>Please add your loved one's name in the Venmo note so we know who your gift remembers.</p>
                <p>Prefer to give another way? Call us at <a href={PHONE_HREF}>{PHONE}</a>.</p>
                <p className="fine">Adored Living is a privately owned care home, not a charity, so gifts are not tax-deductible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
