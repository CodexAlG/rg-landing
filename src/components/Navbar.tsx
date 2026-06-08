import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0F] border-b border-[rgba(255,255,255,0.08)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-lg">
              RG Luces y Sonido
            </a>
          </div>

          {/* Center: Nav links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white text-sm transition-colors duration-200 hover:text-[#AAFF00]"
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-white text-sm transition-colors duration-200 hover:text-[#AAFF00]"
            >
              Paquetes
            </a>
            <a
              href="#"
              className="text-white text-sm transition-colors duration-200 hover:text-[#AAFF00]"
            >
              Servicios
            </a>
            <a
              href="#"
              className="text-white text-sm transition-colors duration-200 hover:text-[#AAFF00]"
            >
              Testimonios
            </a>
          </div>

          {/* Right side: CTA button */}
          <div>
            <a
              href="#"
              className="bg-[#AAFF00] text-[#0A0A0F] font-bold text-sm rounded-full px-5 py-2 transition-opacity duration-200 hover:opacity-90 inline-block"
            >
              Cotizar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
