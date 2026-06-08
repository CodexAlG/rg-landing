const services = [
  {
    icon: '🔊',
    title: 'Audio Profesional',
    description: 'Sistemas de sonido de alta fidelidad y potencia adaptados al tamaño de tu espacio para un audio nítido.',
  },
  {
    icon: '💡',
    title: 'Iluminación DMX',
    description: 'Cabezas móviles, luces LED y ambientación inteligente totalmente sincronizada para crear una atmósfera de antro.',
  },
  {
    icon: '🎺',
    title: 'Teknobanda en Vivo',
    description: 'La máxima energía musical en vivo con nuestro servicio integrado de teknobanda para poner a todos a bailar.',
  },
  {
    icon: '🌫️',
    title: 'Efectos Especiales',
    description: 'Máquina de humo y efectos visuales para hacer lucir los momentos más importantes de tu celebración.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0A0F] py-20 px-4 w-full">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl font-bold">Nuestros Servicios</h2>
          <p className="text-white/50 text-sm tracking-widest uppercase mt-2">
            Soluciones de alta calidad para tu evento
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A2E] rounded-2xl p-6 border border-white/5 hover:border-[#AAFF00]/30 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Badge */}
              <div className="w-16 h-16 rounded-full bg-[#0A0A0F] flex items-center justify-center text-3xl mb-6 shadow-md border border-white/10 group-hover:border-[#AAFF00]/50 transition-colors duration-300 select-none">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
