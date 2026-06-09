import { Link } from 'react-router-dom'

interface PageHeroProps {
  crumb: string
  eyebrow: string
  title: string
  lede: string
}

export default function PageHero({ crumb, eyebrow, title, lede }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          {crumb}
        </div>
        <div className="inner">
          <span className="eyebrow">{eyebrow}</span>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p className="lede">{lede}</p>
        </div>
      </div>
    </section>
  )
}
