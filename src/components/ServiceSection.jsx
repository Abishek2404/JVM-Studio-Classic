import {
  FaBookOpen,
  FaCameraRetro,
  FaGlassCheers,
  FaHeart,
  FaLayerGroup,
  FaUserAlt,
  FaVideo,
} from 'react-icons/fa'
import { services } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const iconMap = {
  camera: FaCameraRetro,
  video: FaVideo,
  album: FaBookOpen,
  heart: FaHeart,
  event: FaGlassCheers,
  portrait: FaUserAlt,
  layers: FaLayerGroup,
}

export default function ServiceSection() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title={'Candid Albums\n| Storytelling Design'}
            align="center"
          />
        </Reveal>

        <div className="service-list">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? FaCameraRetro
            return (
              <Reveal key={service.name} className="service-item" delay={index * 70}>
                <span className="service-item__icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="service-item__index">{String(index + 1).padStart(2, '0')}</span>
                <span className="service-item__name">{service.name}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
