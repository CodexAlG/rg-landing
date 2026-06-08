import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import StickyFooter from './components/StickyFooter'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Packages />
      <Testimonials />
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
