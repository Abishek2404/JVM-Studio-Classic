import { useCallback, useState } from 'react'
import './App.css'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import StorySection from './components/StorySection'
import ServiceSection from './components/ServiceSection'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import AlbumShowcase from './components/AlbumShowcase'
import InstagramSection from './components/InstagramSection'
import useActiveSection from './hooks/useActiveSection'
import { navItems } from './data/siteData'

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), [])

  return (
    <div className="app-shell">
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
      />

      <main id="main">
        <Hero />
        <StorySection />
        <ServiceSection />
        <Gallery />
        <Testimonials />
        <AlbumShowcase />
        <InstagramSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
