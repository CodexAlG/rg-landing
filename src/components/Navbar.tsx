import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        isScrolled || isOpen
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

          {/* Center: Nav links (Desktop) */}
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

          {/* Right side: CTA button and Mobile Menu toggle */}
          <div className="flex items-center gap-4">
            <div>
              <a
                href="#"
                className="bg-[#AAFF00] hover:bg-[#bbfb26] text-[#0A0A0F] font-bold text-sm rounded-full px-5 py-2 transition-colors duration-200 inline-block"
              >
                Cotizar
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-[#AAFF00] focus:outline-none cursor-pointer p-1"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0F] border-t border-white/5 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#AAFF00] py-3 rounded-md text-base font-medium transition-colors"
            >
              Inicio
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#AAFF00] py-3 rounded-md text-base font-medium transition-colors"
            >
              Paquetes
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#AAFF00] py-3 rounded-md text-base font-medium transition-colors"
            >
              Servicios
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#AAFF00] py-3 rounded-md text-base font-medium transition-colors"
            >
              Testimonios
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
