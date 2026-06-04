import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import About from './components/sections/About'
import Products from './components/sections/Products'
import OurProcess from './components/sections/OurProcess'
import GlobalPresence from './components/sections/GlobalPresence'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-bg-light font-body text-text-dark">
              <Hero />
              <About />
              <WhyChooseUs />
              <Products />
              <OurProcess />
              <GlobalPresence />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
