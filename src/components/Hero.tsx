export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="flex h-full animate-marquee w-fit">
          {/* Track 1 */}
          <div className="flex gap-4 h-full pr-4">
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 1
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 2
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 3
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 4
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 5
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 6
            </div>
          </div>
          {/* Track 2 (Duplicate) */}
          <div className="flex gap-4 h-full pr-4">
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 1
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 2
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 3
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 4
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 5
            </div>
            <div className="w-64 h-full bg-[#1A1A2E] flex items-center justify-center text-white/20 font-medium">
              Foto 6
            </div>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        {/* Logo Placeholder */}
        <div className="text-white font-bold text-4xl tracking-wider">
          RG LUCES Y SONIDO
        </div>

        {/* Tagline */}
        <h1 className="text-white text-2xl md:text-4xl font-bold mt-4 leading-tight">
          El alma de tu evento en Hermosillo
        </h1>

        {/* CTA Button */}
        <a
          href="#"
          className="bg-[#AAFF00] hover:bg-[#bbfb26] text-[#0A0A0F] font-bold text-sm tracking-widest uppercase rounded-full px-8 py-4 mt-8 transition-colors duration-200 shadow-lg shadow-[#AAFF00]/10"
        >
          Cotizar mi evento &rarr;
        </a>
      </div>
    </div>
  );
}
