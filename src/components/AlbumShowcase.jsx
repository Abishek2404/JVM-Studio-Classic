import { albumShowcase } from '../data/siteData'
import Button from './Button'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function AlbumShowcase() {
  return (
    <section id="album-design" className="album section">
      <div className="container album__grid">
        <Reveal className="album__copy">
          <SectionHeading
            eyebrow={albumShowcase.eyebrow}
            title={albumShowcase.title}
            description={albumShowcase.description}
          />
          <Button href="#contact" variant="outline" withArrow>
            Explore Album Designs
          </Button>
        </Reveal>

        <Reveal className="album__visual" delay={120}>
          <div className="album__frame">
            <img src={albumShowcase.image} alt="Premium printed wedding album crafted by JVM Studio" />
            <span className="album__gold album__gold--circle" aria-hidden="true" />
            <span className="album__gold album__gold--square" aria-hidden="true" />
          </div>
          <div className="album__caption">
            <span>Leather bound</span>
            <span className="album__caption-dot" aria-hidden="true" />
            <span>Archival print</span>
            <span className="album__caption-dot" aria-hidden="true" />
            <span>Handcrafted in Vellore</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
