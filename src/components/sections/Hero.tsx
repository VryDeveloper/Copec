import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import heroImage1 from '../../assets/images/acoscarbono.jpg';
import heroImage2 from '../../assets/images/acosCopecFrente.jpg';

const MATERIALS = ['Aço carbono', 'Inox', 'Alumínio', 'Nylon técnico'];

const HERO_SLIDES = [
  { src: heroImage1, alt: 'Barras de aço carbono estocadas no pátio da Aços Copec, em Camaçari' },
  { src: heroImage2, alt: 'Fachada das instalações da Aços Copec, em Camaçari' },
];

const SLIDE_INTERVAL_MS = 5000;

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY <= 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section id="INICIO" className="relative min-h-screen flex items-end pt-32 pb-24 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover animate-hero-zoom transition-opacity duration-[1500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,31,63,0.15) 0%, rgba(0,31,63,0.45) 55%, rgba(0,31,63,0.82) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
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

      {HERO_SLIDES.length > 1 && (
        <div className="absolute z-10 bottom-28 sm:bottom-32 right-4 sm:right-8 flex gap-2">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Mostrar imagem ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[var(--primary-color)] w-6' : 'bg-white/50 w-2 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-10 hidden sm:block bg-black/40 backdrop-blur-sm border-t border-white/10">
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
