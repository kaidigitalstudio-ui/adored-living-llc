interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  center?: boolean
  id?: string
  lightEyebrow?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  id,
  lightEyebrow = false,
}: SectionHeaderProps) {
  return (
    <div className={`section-header${center ? ' text-center' : ''}`} data-animate="fade">
      <span
        className="eyebrow"
        style={lightEyebrow ? { color: 'var(--lavender-pale)' } : undefined}
      >
        {eyebrow}
      </span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
