interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  bgImage: string
  bgAlt: string
}

export default function PageHero({ eyebrow, title, description, bgImage, bgAlt }: PageHeroProps) {
  return (
    <section className="page-hero" aria-label={title}>
      <div
        className="page-hero-img"
        style={{ backgroundImage: `url('${bgImage}')` }}
        role="img"
        aria-label={bgAlt}
      />
      <div className="container">
        <div className="page-hero-content" data-animate="fade">
          <span className="eyebrow" style={{ color: 'var(--lavender-pale)' }}>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}
