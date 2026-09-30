import { FaInstagram } from 'react-icons/fa'
import { brand, instagramImages } from '../data/siteData'
import Button from './Button'
import Reveal from './Reveal'

export default function InstagramSection() {
  return (
    <section className="instagram section">
      <div className="container">
        <Reveal className="instagram__header">
          <div>
            <span className="eyebrow">Follow Our Journey</span>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="instagram__handle"
            >
              <FaInstagram aria-hidden="true" />
              {brand.instagramHandle}
            </a>
          </div>
          <Button href={brand.instagramUrl} variant="outline" withArrow>
            View Instagram
          </Button>
        </Reveal>

        <div className="instagram__strip">
          {instagramImages.map((image, index) => (
            <Reveal key={image} delay={(index % 5) * 60}>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="instagram__thumb"
                aria-label="Open JVM Studio on Instagram"
              >
                <img src={image} alt="JVM Studio moment shared on Instagram" loading="lazy" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
