/**
 * Eyebrow + display heading used across every section.
 * Title supports "\n" so callers control the editorial line breaks.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  children,
}) {
  return (
    <header className={`section-heading section-heading--${align} ${className}`.trim()}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && (
        <h2 className="display-title">
          {String(title)
            .split('\n')
            .map((line, index) => (
              <span key={line + index} className="display-title__line">
                {line}
              </span>
            ))}
        </h2>
      )}
      {description && <p className="section-heading__description">{description}</p>}
      {children}
    </header>
  )
}
