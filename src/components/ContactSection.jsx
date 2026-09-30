import { useState } from 'react'
import {
  FaArrowRight,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa'

const contactInfo = [
  { label: 'Location', value: 'Vellore, Tamil Nadu', icon: FaMapMarkerAlt },
  { label: 'WhatsApp', value: '+91 80156 93237', icon: FaPhoneAlt },
  { label: 'Instagram', value: '@jvmstudio_vlr', icon: FaInstagram },
]

const eventOptions = [
  'Wedding',
  'Pre-Wedding',
  'Portrait',
  'Event / Function',
  'Album Design',
  'Other',
]

const initialForm = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  message: '',
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <h3>Get In Touch</h3>
      <h4>
        Let&apos;s create something
        <br />
        beautiful together.
      </h4>

      <div className="contact-brand-block">
        <p>JVM STUDIO</p>
        <span>Photography &amp; Album Design</span>
      </div>

      <div className="contact-list" aria-label="Contact information">
        {contactInfo.map(({ label, value, icon: Icon }) => (
          <div key={label} className="contact-row">
            <div className="contact-row__icon">
              <Icon aria-hidden="true" />
            </div>
            <div className="contact-row__content">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.'
    } else if (!/^\+?[0-9\s()+-]{8,}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.eventType.trim()) {
      nextErrors.eventType = 'Please select an event type.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please tell us a little about your plans.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSuccessMessage('')
      return
    }

    const message = `Hello JVM Studio 👋\n\nI would like to enquire about your photography services.\n\nName: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nEmail: ${formData.email.trim()}\nEvent Type: ${formData.eventType}\nEvent Date: ${formData.eventDate || 'Not specified'}\n\nMessage:\n${formData.message.trim()}\n\nThank you.`

    const whatsappUrl = `https://wa.me/918015693237?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setSuccessMessage('Your enquiry is ready in WhatsApp. Please tap Send to complete your enquiry.')
    setErrors({})
  }

  return (
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__header">
        <h3>Tell Us About Your Day</h3>
        <p>Share a few details and we&apos;ll get back to you shortly.</p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="contact-name">Full Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="field">
          <label htmlFor="contact-phone">Phone Number</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="field">
          <label htmlFor="contact-email">Email Address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="field">
          <label htmlFor="contact-event-type">Event Type</label>
          <select
            id="contact-event-type"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            aria-invalid={Boolean(errors.eventType)}
          >
            <option value="">Select an option</option>
            {eventOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.eventType && <span className="field-error">{errors.eventType}</span>}
        </div>

        <div className="field field--full">
          <label htmlFor="contact-date">Event Date</label>
          <input
            id="contact-date"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
          />
        </div>

        <div className="field field--full">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us a little about your plans..."
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </div>
      </div>

      <button type="submit" className="contact-submit">
        Send Enquiry <FaArrowRight aria-hidden="true" />
      </button>

      {successMessage && (
        <p className="form-success" role="status">
          {successMessage}
        </p>
      )}
    </form>
  )
}

function LocationCTA() {
  return (
    <div className="location-cta">
      <div className="location-cta__meta">
        <span className="eyebrow">Visit JVM Studio</span>
        <h3>Find Us in Vellore</h3>
        <p>Planning to meet us in person? Find our location on Google Maps.</p>
      </div>
      <a href="https://share.google/RL5mCLIgQR6Hweok0" target="_blank" rel="noreferrer noopener" className="location-cta__button">
        View Location <FaArrowRight aria-hidden="true" />
      </a>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section className="contact-section section" aria-labelledby="contact-section-title">
      <div className="container">
        <header className="contact-intro">
          <div className="contact-intro__label">
            <span className="eyebrow">Let&apos;s Connect</span>
            <span className="contact-intro__line" aria-hidden="true" />
          </div>
          <h2 id="contact-section-title" className="display-title">
            <span className="display-title__line">Your Story</span>
            <span className="display-title__line accent">Starts Here.</span>
          </h2>
          <p>
            Tell us about your special day. We&apos;d love to hear your story and create photographs
            and albums you&apos;ll treasure forever.
          </p>
        </header>

        <div className="contact-layout">
          <ContactInfo />
          <ContactForm />
        </div>

        <LocationCTA />
      </div>
    </section>
  )
}
