import { FaChevronUp } from 'react-icons/fa'
import useScrolled from '../hooks/useScrolled'

export default function BackToTop() {
  const visible = useScrolled(520)

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <FaChevronUp aria-hidden="true" />
    </button>
  )
}
