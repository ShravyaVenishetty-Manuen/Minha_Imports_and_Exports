import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// Import hero images to trigger Vite bundling and preloading
import certificationsHero from './assets/certifications-hero.png'
import contactHero from './assets/contact-hero.png'
import facilityHero from './assets/facility-hero.png'
import powderHero from './assets/powder-hero.png'
import aboutHero from './assets/about_hero_bg.png'
import varietiesHero from './assets/chilli-hero-varieties.png'

const heroImages = [
  certificationsHero,
  contactHero,
  facilityHero,
  powderHero,
  aboutHero,
  varietiesHero
];

// Preload images dynamically after initial page load is fully complete to avoid hurting Lighthouse performance
const preloadSubpageImages = () => {
  const runPreload = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        heroImages.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      });
    } else {
      setTimeout(() => {
        heroImages.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      }, 2000);
    }
  };

  if (document.readyState === 'complete') {
    runPreload();
  } else {
    window.addEventListener('load', runPreload);
  }
};

preloadSubpageImages();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

