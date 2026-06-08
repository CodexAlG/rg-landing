import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import FeaturedPackages from './components/FeaturedPackages'
import Testimonials from './components/Testimonials'
import StickyFooter from './components/StickyFooter'
import Catalog from './components/Catalog'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const text = anchor.textContent?.trim();
        const href = anchor.getAttribute('href');

        if (text === 'Paquetes' || href === '/paquetes') {
          e.preventDefault();
          window.history.pushState({}, '', '/paquetes');
          setCurrentPath('/paquetes');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (text === 'Inicio' || text === 'RG Luces y Sonido' || href === '/') {
          e.preventDefault();
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (text === 'Testimonios' || href === '#testimonials') {
          e.preventDefault();
          if (window.location.pathname !== '/') {
            window.history.pushState({}, '', '/');
            setCurrentPath('/');
            setTimeout(() => {
              const el = document.getElementById('testimonials');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            const el = document.getElementById('testimonials');
            el?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <>
      <Navbar />
      {currentPath === '/paquetes' ? (
        <Catalog />
      ) : (
        <>
          <Hero />
          <Stats />
          <FeaturedPackages />
          <Testimonials />
        </>
      )}
      <main className="text-center text-xs text-white/20 py-4">RG Luces y Sonido</main>
      <footer className="bg-[#0A0A0F] border-t border-white/10 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <span className="text-white font-bold">RG Luces y Sonido</span>
          <span className="text-white/40 text-sm">
            © 2024 RG Luces y Sonido. Hermosillo, Sonora.
          </span>
        </div>
      </footer>
      <StickyFooter />
    </>
  )
}

export default App
