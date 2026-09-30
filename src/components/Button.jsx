import { FaArrowRight } from 'react-icons/fa'

const isExternalUrl = (href) => /^https?:\/\//.test(href || '')

/**
 * Shared CTA. Renders an anchor so navigation stays semantic and native.
 * variant: 'solid' | 'outline' | 'link'
 */
export default function Button({
  children,
  href,
  variant = 'solid',
  withArrow = false,
  className = '',
  external,
  ...rest
}) {
  const opensNewTab = external ?? isExternalUrl(href)

  return (
    <a
      href={href}
      className={`btn btn--${variant} ${className}`.trim()}
      target={opensNewTab ? '_blank' : undefined}
      rel={opensNewTab ? 'noreferrer noopener' : undefined}
      {...rest}
    >
      <span>{children}</span>
      {withArrow && <FaArrowRight className="btn__arrow" aria-hidden="true" />}
    </a>
  )
}
