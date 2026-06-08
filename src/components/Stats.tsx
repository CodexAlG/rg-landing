export default function Stats() {
  return (
    <section className="bg-[#0A0A0F] py-16 w-full px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-16">
        {/* Stat 1 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[#AAFF00] text-6xl font-black">200+</span>
          <span className="text-white/50 text-sm tracking-widest uppercase mt-2">
            Eventos Realizados
          </span>
        </div>

        {/* Divider 1 */}
        <div className="hidden md:block w-px h-12 bg-white/10" />

        {/* Stat 2 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[#AAFF00] text-6xl font-black">10+</span>
          <span className="text-white/50 text-sm tracking-widest uppercase mt-2">
            Años de Experiencia
          </span>
        </div>

        {/* Divider 2 */}
        <div className="hidden md:block w-px h-12 bg-white/10" />

        {/* Stat 3 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[#AAFF00] text-6xl font-black">100%</span>
          <span className="text-white/50 text-sm tracking-widest uppercase mt-2">
            Puntualidad
          </span>
        </div>
      </div>
    </section>
  );
}
