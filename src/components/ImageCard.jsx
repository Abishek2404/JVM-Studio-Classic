import { FaArrowRight } from 'react-icons/fa'

/**
 * Reusable photography card with overlay metadata and a gold arrow affordance.
 * variant: 'story' (tall editorial card) | 'gallery' (masonry grid tile)
 */
export default function ImageCard({
  image,
  alt,
  label,
  title,
  variant = 'story',
  ratio,
  className = '',
  ...rest
}) {
  const style = ratio ? { aspectRatio: ratio } : undefined

  return (
    <article
      className={`image-card image-card--${variant} ${className}`.trim()}
      style={style}
      {...rest}
    >
      <img src={image} alt={alt || title || label || 'JVM Studio photograph'} loading="lazy" />
      <span className="image-card__overlay" aria-hidden="true" />
      <div className="image-card__content">
        {label && <span className="image-card__label">{label}</span>}
        <div className="image-card__row">
          <h3 className="image-card__title">{title}</h3>
          <span className="image-card__arrow" aria-hidden="true">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </article>
  )
}
