import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import About from './components/sections/About'
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

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-bg-light font-body text-text-dark flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <WhyChooseUs />
                  <Products />
                  <OurProcess />
                  <GlobalPresence />
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
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
