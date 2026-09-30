import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { testimonials } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section id="stories" className="testimonials section">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title={'What Our\nCouples Say'} />
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal as="article" className="testimonial" key={testimonial.names} delay={index * 120}>
              <FaQuoteLeft className="testimonial__quote-mark" aria-hidden="true" />
              <p className="testimonial__quote">{testimonial.quote}</p>
              <div className="testimonial__footer">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.names} — JVM Studio couple`}
                  loading="lazy"
                />
                <div className="testimonial__meta">
                  <div className="testimonial__stars" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <FaStar key={starIndex} aria-hidden="true" />
                    ))}
                  </div>
                  <h3>{testimonial.names}</h3>
                  <span className="testimonial__context">{testimonial.context}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
