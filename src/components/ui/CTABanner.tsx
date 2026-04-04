import { Link } from 'react-router-dom'

interface CTABannerProps {
  eyebrow?: string
  title: string
  description: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel: string
  secondaryHref?: string
  secondaryTo?: string
}

export default function CTABanner({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryHref,
  secondaryTo,
}: CTABannerProps) {
  return (
    <section className="cta-banner" aria-label={title}>
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            {eyebrow && (
              <span className="eyebrow" style={{ color: 'var(--sage-pale)' }}>{eyebrow}</span>
            )}
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="cta-actions">
            <Link to={primaryTo} className="btn btn-accent btn-lg">{primaryLabel}</Link>
            {secondaryHref ? (
              <a href={secondaryHref} className="btn btn-outline btn-lg">{secondaryLabel}</a>
            ) : secondaryTo ? (
              <Link to={secondaryTo} className="btn btn-outline btn-lg">{secondaryLabel}</Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
