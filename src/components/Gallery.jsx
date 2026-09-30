import { useMemo, useState } from 'react'
import { galleryCategories, galleryImages } from '../data/siteData'
import Button from './Button'
import ImageCard from './ImageCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const formatCategory = (value) =>
  value === 'pre-wedding' ? 'Pre-Wedding' : value.charAt(0).toUpperCase() + value.slice(1)

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') return galleryImages
    return galleryImages.filter((image) => image.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="gallery__header">
          <Reveal>
            <SectionHeading eyebrow="Our Gallery" title={'A Glimpse of\nReal Moments'} />
          </Reveal>

          <Reveal className="gallery__filters" delay={100}>
            <div role="tablist" aria-label="Gallery categories">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === category.id}
                  className={`filter-chip ${activeFilter === category.id ? 'is-active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="gallery__masonry">
          {filteredImages.map((image, index) => (
            <Reveal
              key={image.id}
              className="gallery__tile"
              delay={(index % 3) * 90}
            >
              <ImageCard
                variant="gallery"
                image={image.src}
                title={image.title}
                label={formatCategory(image.category)}
                alt={`${image.title} — ${formatCategory(image.category)} photography by JVM Studio`}
                ratio={image.ratio}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="gallery__cta">
          <Button href="#contact" variant="outline" withArrow>
            View More
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
