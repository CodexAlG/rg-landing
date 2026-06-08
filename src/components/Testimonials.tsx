const testimonials = [
  {
    quote: "Excelente servicio, muy puntuales y el ambiente de la teknobanda estuvo increíble. Los recomiendo ampliamente para bodas.",
    name: "Mariana S.",
    stars: 5,
  },
  {
    quote: "Hicieron que mi fiesta pareciera un antro de primer nivel. Superaron mis expectativas.",
    name: "Carlos R.",
    stars: 5,
  },
  {
    quote: "Muy buen sonido, cero fallas técnicas en todo el evento. Un trato sumamente profesional desde la cotización.",
    name: "Familia López",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0A0A0F] py-20 px-4 w-full">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-bold">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#121214] rounded-2xl p-6 border-l-2 border-[#AAFF00] flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="text-[#AAFF00] text-sm mb-4 select-none">
                  {'★'.repeat(t.stars)}
                </div>

                {/* Quote Text */}
                <p className="text-white text-sm leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Customer Name */}
              <div className="text-white/40 text-xs tracking-widest uppercase mt-4">
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
