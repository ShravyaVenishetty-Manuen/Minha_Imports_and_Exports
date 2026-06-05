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
import Varieties from './pages/Varieties'
import ChilliDetail from './pages/ChilliDetail'
import ChilliPowder from './pages/ChilliPowder'

function App() {
  return (
    <Router>
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
                  <Contact />
                </>
              }
            />
            <Route path="/varieties" element={<Varieties />} />
            <Route path="/varieties/:id" element={<ChilliDetail />} />
            <Route path="/powder" element={<ChilliPowder />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
