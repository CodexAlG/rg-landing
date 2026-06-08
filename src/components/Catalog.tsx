import { useState } from 'react';
import { categories } from '../data/packages';
import type { Package } from '../data/packages';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'musica-programada' | 'teknobanda'>('all');
  const allPackages: { pkg: Package; categoryName: string }[] = [];

  categories.forEach((category) => {
    category.packages.forEach((pkg) => {
      allPackages.push({ pkg, categoryName: category.name });
    });
  });

  const filteredPackages = allPackages.filter(({ pkg }) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'musica-programada') return pkg.id.startsWith('mp-');
    if (activeCategory === 'teknobanda') return pkg.id.startsWith('tb-');
    return true;
  });

  const whatsappBaseUrl = 'https://wa.me/521XXXXXXXXXX?text=';

  return (
    <section className="bg-[#0A0A0F] pt-28 pb-20 px-4 w-full min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl md:text-4xl font-bold">Nuestros Paquetes</h1>
          <p className="text-white/50 text-sm tracking-widest uppercase mt-2">
            Explora todas las opciones para tu evento
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1A1A2E]/50 border border-white/10 rounded-full p-1.5 flex flex-wrap gap-2 justify-center backdrop-blur-md">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#AAFF00] text-[#0A0A0F] shadow-lg shadow-[#AAFF00]/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveCategory('musica-programada')}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === 'musica-programada'
                  ? 'bg-[#AAFF00] text-[#0A0A0F] shadow-lg shadow-[#AAFF00]/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Música Programada
            </button>
            <button
              onClick={() => setActiveCategory('teknobanda')}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === 'teknobanda'
                  ? 'bg-[#AAFF00] text-[#0A0A0F] shadow-lg shadow-[#AAFF00]/20'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Teknobanda
            </button>
          </div>
        </div>

        {/* Packages List */}
        <div key={activeCategory} className="space-y-8 animate-fade-in">
          {filteredPackages.map(({ pkg, categoryName }) => {
            const { equipment } = pkg;
            const whatsappLink = `${whatsappBaseUrl}${encodeURIComponent(
              pkg.whatsappMessage
            )}`;

            return (
              <div
                key={pkg.id}
                className="bg-[#1A1A2E] rounded-2xl overflow-hidden flex flex-col md:flex-row border border-white/5 hover:border-white/10 transition-colors duration-200"
              >
                {/* Left: Image Container */}
                <div className="relative w-full md:w-80 h-48 md:h-auto min-h-[16rem] bg-[#0A0A0F] flex flex-shrink-0 items-center justify-center select-none">
                  <span className="text-white/20 text-sm font-medium">
                    Foto del equipo
                  </span>

                  {/* Category Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="text-white font-bold text-sm">
                      {categoryName}
                    </span>
                  </div>

                  {/* "MÁS SOLICITADO" Badge */}
                  {pkg.isFeatured && (
                    <div className="absolute top-4 right-4 bg-[#AAFF00] text-[#0A0A0F] text-xs font-bold px-3 py-1 rounded-full">
                      MÁS SOLICITADO
                    </div>
                  )}
                </div>

                {/* Right: Info and CTA */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-white font-bold text-2xl">{pkg.name}</h3>
                    <p className="text-white/50 text-sm mt-2">{pkg.description}</p>

                    {/* Equipment List */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span>🔊</span>
                        <span>
                          {equipment.bajos}{' '}
                          {equipment.bajos === 1 ? 'bajo' : 'bajos'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span>📢</span>
                        <span>
                          {equipment.bocinas}{' '}
                          {equipment.bocinas === 1 ? 'bocina' : 'bocinas'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span>💡</span>
                        <span>
                          {equipment.luces}{' '}
                          {equipment.luces === 1 ? 'luz' : 'luces'}
                        </span>
                      </div>
                      {equipment.humo && (
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <span>🌫️</span>
                          <span>Máquina de humo</span>
                        </div>
                      )}
                      {equipment.teknobanda && (
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <span>🎺</span>
                          <span>Teknobanda</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 md:mt-6">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#AAFF00] hover:bg-[#bbfb26] text-[#0A0A0F] font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm uppercase tracking-widest"
                    >
                      Cotizar paquete
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
