import { FaArrowRight } from 'react-icons/fa'
import { storyHighlights } from '../data/siteData'
import Button from './Button'
import ImageCard from './ImageCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function StorySection() {
  return (
    <section id="about" className="story section">
      <div className="container">
        <div className="story__grid">
          <Reveal className="story__copy">
            <SectionHeading
              eyebrow="Our Story"
              title={'Moments Become\nMemories Here'}
              description="At JVM Studio, we believe every wedding is a unique story filled with real emotions, beautiful people and once-in-a-lifetime moments. We capture them with an artistic eye and design albums that let you relive the feeling, not just the event."
            />
            <Button href="#services" variant="outline" withArrow>
              Know More
            </Button>
          </Reveal>

          <div className="story__cards">
            {storyHighlights.map((card, index) => (
              <Reveal key={card.label} delay={index * 120}>
                <ImageCard
                  variant="story"
                  image={card.image}
                  label={card.label}
                  title={card.title}
                  alt={`${card.label} — ${card.title}`}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="story__signature" delay={160}>
          <FaArrowRight aria-hidden="true" />
          <span>Crafted in Vellore, with an artist&rsquo;s eye</span>
        </Reveal>
      </div>
    </section>
  )
}
