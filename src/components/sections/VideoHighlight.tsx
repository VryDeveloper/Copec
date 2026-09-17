import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import facilityPhoto from '../../assets/images/acosCopecFrente.jpg';
import Reveal from '../Reveal';

export default function VideoHighlight() {
  return (
    <section className="bg-[var(--secondary-color)]">
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <Reveal className="text-white order-2 md:order-1">
          <h2 className="font-bold text-4xl md:text-5xl mb-6">Conheça nossos produtos em vídeo</h2>
          <p className="text-white/80 text-lg max-w-[52ch] mb-8">
            Um vídeo curto para você ver de perto os nossos produtos: o pátio, o estoque de aço carbono, inox e
            alumínio, e como preparamos cada pedido sob medida para a indústria.
          </p>
          <Link
            to="/video"
            className="inline-flex items-center gap-2 bg-[var(--primary-color)] text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-[var(--primary-color-hover)] hover:scale-105 transition-all duration-300"
          >
            Assistir vídeo dos produtos
          </Link>
        </Reveal>

        <Reveal delay={150} className="order-1 md:order-2">
          <Link
            to="/video"
            aria-label="Assistir vídeo dos produtos da Aços Copec"
            className="group relative block rounded-lg overflow-hidden shadow-2xl aspect-video"
          >
            <video
              className="w-full h-full object-cover"
              src="/videos/acos-copec-institucional.mp4"
              poster={facilityPhoto}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
              <span className="play-pulse flex items-center justify-center h-16 w-16 rounded-full bg-white/90 text-[var(--secondary-color)] group-hover:scale-110 transition-transform duration-300">
                <Play className="h-7 w-7 ml-1" fill="currentColor" />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
