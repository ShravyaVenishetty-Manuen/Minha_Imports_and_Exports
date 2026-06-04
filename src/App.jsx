import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="min-h-screen bg-bg-light flex flex-col justify-center items-center font-body text-text-dark p-6 pt-28">
              <div className="card-premium max-w-md w-full text-center mt-4">
                <span className="text-xs font-bold tracking-[0.2em] text-brand-green uppercase block">
                  Minha Imports & Exports
                </span>
                <h1 className="text-3xl font-heading font-extrabold text-brand-red mt-2 mb-4">
                  Design System Initialized
                </h1>
                <p className="text-text-gray text-sm mb-6">
                  The color palette, Poppins/Inter typography scales, responsive breakpoints, custom shadows, and premium layout foundations have been fully configured.
                </p>
                <div className="flex flex-col gap-3">
                  <button className="btn-primary w-full">Primary Red Button</button>
                  <button className="btn-secondary w-full">Secondary Green Button</button>
                  <button className="btn-outline w-full">Outline Gold Button</button>
                </div>
              </div>
            </div>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
