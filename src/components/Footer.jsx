import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa'
import { brand, navItems, socialLinks } from '../data/siteData'
import Button from './Button'

const socialIconMap = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  pinterest: FaPinterestP,
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={brand.logo} alt={`${brand.name} logo`} />
          <p className="footer__tagline">{brand.tagline}</p>
          <p className="footer__tagline footer__tagline--accent">{brand.taglineAccent}</p>
        </div>

        <nav className="footer__links" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__location">
          <h3>Location</h3>
          <a href={brand.mapsUrl} target="_blank" rel="noreferrer noopener">
            <FaMapMarkerAlt aria-hidden="true" />
            {brand.location}
          </a>
          <div className="footer__socials">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.id]
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 JVM Studio. All Rights Reserved.</p>
        <span>Photography | Album Design | Candid Stories | Vellore</span>
      </div>
    </footer>
  )
}
