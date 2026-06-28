import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import About from './components/sections/About'
import FlagsMarquee from './components/layout/FlagsMarquee'
import Products from './components/sections/Products'
import OurProcess from './components/sections/OurProcess'
import GlobalPresence from './components/sections/GlobalPresence'
import WhyChooseUs from './components/sections/WhyChooseUs'
import ContactSection from './components/sections/Contact'
import Testimonials from './components/sections/Testimonials'
import Contact from './pages/Contact'
import Footer from './components/layout/Footer'
import Varieties from './pages/Varieties'
import ChilliDetail from './pages/ChilliDetail'
import ChilliPowder from './pages/ChilliPowder'
import AboutCompany from './pages/AboutCompany'
import QualityAssurance from './pages/QualityAssurance'
import Facility from './pages/Facility'
import Certifications from './pages/Certifications'
import SEO from './components/common/SEO'
import WhatsAppFAB from './components/common/WhatsAppFAB'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-surface font-body text-text-dark flex flex-col justify-between w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SEO
                    title="Guntur Dry Red Chilli Exporter | Minha Imports & Exports"
                    description="India's trusted Guntur Dry Red Chilli and Chilli Powder exporter. Bulk Indian Chilli Supplier for spice industries worldwide. FSSAI, APEDA & ISO certified."
                    keywords="Guntur Dry Red Chillies, Chilli Exporter India, Chilli Powder Exporter, Indian Chilli Supplier, Bulk Chilli Supplier, dry red chilli export India"
                    url="/"
                  />
                  <Hero />
                  <About />
                  <WhyChooseUs />
                  <Products />
                  <OurProcess />
                  <GlobalPresence />
                  <FlagsMarquee />
                  <Testimonials />
                  <ContactSection />
                </>
              }
            />
            <Route path="/varieties" element={<Varieties />} />
            <Route path="/varieties/:id" element={<ChilliDetail />} />
            <Route path="/powder" element={<ChilliPowder />} />
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/quality" element={<QualityAssurance />} />
            <Route path="/facility" element={<Facility />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppFAB />
        <Footer />
      </div>
    </Router>
  )
}

export default App
