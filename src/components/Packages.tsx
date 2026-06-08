import { useState } from 'react';
import { categories } from '../data/packages';
import type { Package } from '../data/packages';

export default function Packages() {
  const [showAll, setShowAll] = useState(false);

  // Extract featured and non-featured packages
  const featuredPackages: { pkg: Package; categoryName: string }[] = [];
  const nonFeaturedPackages: { pkg: Package; categoryName: string }[] = [];

  categories.forEach((category) => {
    category.packages.forEach((pkg) => {
      if (pkg.isFeatured) {
        featuredPackages.push({ pkg, categoryName: category.name });
      } else {
        nonFeaturedPackages.push({ pkg, categoryName: category.name });
      }
    });
  });

  const whatsappBaseUrl = 'https://wa.me/521XXXXXXXXXX?text=';

  const renderCard = (pkg: Package, categoryName: string, showBadge: boolean) => {
    const { equipment } = pkg;
    const whatsappLink = `${whatsappBaseUrl}${encodeURIComponent(pkg.whatsappMessage)}`;

    return (
      <div
        key={pkg.id}
        className="bg-[#1A1A2E] rounded-2xl overflow-hidden flex flex-col justify-between"
      >
        <div>
          {/* Top Image Area */}
          <div className="relative h-48 w-full bg-[#0A0A0F] flex items-center justify-center select-none">
            <span className="text-white/20 text-sm font-medium">Foto del evento</span>

            {/* Category Label Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="text-white font-bold text-sm">{categoryName}</span>
            </div>

            {/* "MÁS SOLICITADO" Badge */}
            {showBadge && (
              <div className="absolute top-4 right-4 bg-[#AAFF00] text-[#0A0A0F] text-xs font-bold px-3 py-1 rounded-full">
                MÁS SOLICITADO
              </div>
            )}
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-white font-bold text-xl">{pkg.name}</h3>
            <p className="text-white/50 text-sm mt-1">{pkg.description}</p>

            {/* Equipment List */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span>🔊</span>
                <span>
                  {equipment.bajos} {equipment.bajos === 1 ? 'bajo' : 'bajos'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span>📢</span>
                <span>
                  {equipment.bocinas} {equipment.bocinas === 1 ? 'bocina' : 'bocinas'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span>💡</span>
                <span>
                  {equipment.luces} {equipment.luces === 1 ? 'luz' : 'luces'}
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
        </div>

        {/* Card CTA */}
        <div className="px-6 pb-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#AAFF00] hover:bg-[#bbfb26] text-[#0A0A0F] font-bold py-3 rounded-full transition-colors duration-200 mt-6"
          >
            Cotizar paquete
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#0A0A0F] py-20 px-4 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-bold">Paquetes Estrella</h2>
          <p className="text-white/50 text-sm tracking-widest uppercase mt-2">
            Nuestras opciones más populares
          </p>
        </div>

        {/* Featured Packages Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPackages.map(({ pkg, categoryName }) =>
            renderCard(pkg, categoryName, true)
          )}
        </div>

        {/* Expansion Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border-2 border-[#AAFF00] text-[#AAFF00] hover:bg-[#AAFF00]/10 bg-transparent px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-colors duration-200 cursor-pointer"
          >
            {showAll ? 'Ver menos ↑' : 'Ver todos los paquetes ↓'}
          </button>
        </div>

        {/* Expanded Non-Featured Packages */}
        {showAll && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {nonFeaturedPackages.map(({ pkg, categoryName }) =>
              renderCard(pkg, categoryName, false)
            )}
          </div>
        )}
      </div>
    </section>
  );
}
