import { FaArrowRight, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { brand, heroImage } from '../data/siteData'
import Button from './Button'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal as="p" className="eyebrow hero__eyebrow">
            {brand.name} • {brand.discipline}
          </Reveal>

          <Reveal as="h1" className="hero__title" delay={80}>
            <span className="hero__title-line">{brand.tagline}</span>
            <span className="hero__title-line hero__title-line--accent">{brand.taglineAccent}</span>
          </Reveal>

          <Reveal as="p" className="hero__subtitle" delay={160}>
            {brand.subtitle}
          </Reveal>

          <Reveal className="hero__meta" delay={240}>
            <a href={brand.mapsUrl} target="_blank" rel="noreferrer noopener" className="hero__location">
              <FaMapMarkerAlt aria-hidden="true" />
              {brand.location}
            </a>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hero__handle"
            >
              <FaInstagram aria-hidden="true" />
              {brand.instagramHandle}
            </a>
          </Reveal>

          <Reveal className="hero__actions" delay={320}>
            <Button href="#gallery" variant="solid" withArrow>
              View Our Work
            </Button>
            <Button href="#contact" variant="outline">
              Book a Session
            </Button>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={120}>
          <div className="hero__frame">
            <img src={heroImage.src} alt={heroImage.alt} />
            <span className="hero__handwritten" aria-hidden="true">
              {heroImage.handwritten.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          </div>
          <span className="hero__frame-outline" aria-hidden="true" />
        </Reveal>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to our story">
        <span />
        Scroll to explore
        <FaArrowRight aria-hidden="true" />
      </a>
    </section>
  )
}
