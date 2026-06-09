interface PlaceholderProps {
  label: string
  className?: string
  style?: React.CSSProperties
}

export default function Placeholder({ label, className = '', style }: PlaceholderProps) {
  return (
    <div className={`ph ${className}`.trim()} style={style}>
      <span className="ph-label">{label}</span>
    </div>
  )
}
