import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import heroImage from '../../assets/images/acoscarbono.jpg';

const MATERIALS = ['Aço carbono', 'Inox', 'Alumínio', 'Nylon técnico'];

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY <= 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="INICIO" className="relative min-h-screen flex items-end pt-32 pb-24 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Barras de aço carbono estocadas no pátio da Aços Copec, em Camaçari"
          className="w-full h-full object-cover animate-hero-zoom"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,31,63,0.15) 0%, rgba(0,31,63,0.45) 55%, rgba(0,31,63,0.82) 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1
            className="font-bold text-white text-5xl sm:text-6xl md:text-[4.5rem] leading-[0.95] tracking-tight fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            Aço e materiais industriais prontos para sua produção
          </h1>
          <div className="w-20 h-1.5 bg-[var(--primary-color)] my-7 fade-in-up" style={{ animationDelay: '0.35s' }} />
          <p
            className="text-white/85 text-lg md:text-xl max-w-xl mb-9 fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            Aço carbono, inox, alumínio e nylon técnico para metalurgia, siderurgia, indústria náutica e automotiva —
            com corte, dobra e tratamento térmico sob medida, direto do Polo Industrial de Camaçari.
          </p>
          <div className="flex flex-wrap gap-4 fade-in-up" style={{ animationDelay: '0.65s' }}>
            <a
              href="#PRODUTOS"
              className="inline-flex items-center gap-2 bg-[var(--primary-color)] text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-[var(--primary-color-hover)] hover:scale-105 transition-all duration-300"
            >
              Conheça nossos produtos
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 hidden sm:block bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 flex divide-x divide-white/15 text-white/90 text-sm md:text-base font-medium">
          {MATERIALS.map((material) => (
            <div key={material} className="flex-1 text-center py-4 transition-colors duration-300 hover:text-[var(--primary-color)]">
              {material}
            </div>
          ))}
        </div>
      </div>

      {showArrow && (
        <button
          type="button"
          aria-label="Rolar para a seção Sobre"
          onClick={() => document.getElementById('SOBRE')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden sm:block absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        >
          <span className="block w-4 h-4 border-white border-b-2 border-r-2 rotate-45" />
        </button>
      )}
    </section>
  );
}
