import { useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { brand, navItems } from '../data/siteData'
import useScrolled from '../hooks/useScrolled'
import Button from './Button'

const whatsappUrl = `https://wa.me/918015693237?text=${encodeURIComponent(
  'Hello JVM Studio, I would like to know more about your services.',
)}`

export default function Navbar({ activeSection, menuOpen, onToggleMenu, onCloseMenu }) {
  const scrolled = useScrolled(20)

  // Close the mobile menu on Escape and lock scroll while it is open.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onCloseMenu()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onCloseMenu])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" aria-label={`${brand.name} home`} onClick={onCloseMenu}>
          <img src={brand.logo} alt={`${brand.name} logo`} />
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? 'nav-link is-active' : 'nav-link'}
                aria-current={isActive ? 'true' : undefined}
                onClick={onCloseMenu}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="navbar__actions">
          <Button href={whatsappUrl} variant="outline" className="navbar__cta">
            Massages Us
          </Button>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu__inner" aria-label="Mobile">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={activeSection === item.href.replace('#', '') ? 'is-active' : ''}
              style={{ transitionDelay: menuOpen ? `${80 + index * 45}ms` : '0ms' }}
              onClick={onCloseMenu}
            >
              {item.label}
            </a>
          ))}
          <Button href={whatsappUrl} variant="outline" className="navbar__cta">
            Massages Us
          </Button>
        </nav>
      </div>
    </header>
  )
}
