interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  center?: boolean
  id?: string
  lightEyebrow?: boolean
  as?: 'h1' | 'h2'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  id,
  lightEyebrow = false,
  as: Tag = 'h2',
}: SectionHeaderProps) {
  return (
    <div className={`section-header${center ? ' text-center' : ''}`} data-animate="fade">
      <span
        className="eyebrow"
        style={lightEyebrow ? { color: 'var(--lavender-pale)' } : undefined}
      >
        {eyebrow}
      </span>
      <Tag id={id}>{title}</Tag>
      {description && <p>{description}</p>}
    </div>
  )
}
