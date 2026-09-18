import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import facilityPhoto from '../assets/images/acosCopecFrente.jpg';
import { usePageMeta } from '../hooks/usePageMeta';

export default function VideoPage() {
  usePageMeta({
    title: 'Vídeo dos produtos | Aços Copec',
    description:
      'Assista ao vídeo dos nossos produtos e conheça o pátio, o estoque de aço carbono, inox e alumínio, e como preparamos pedidos sob medida em Camaçari, BA.',
  });

  return (
    <main>
      <div className="bg-[var(--secondary-color)] pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors duration-300 mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>
          <h1 className="font-bold text-4xl md:text-5xl text-white max-w-3xl">
            Vídeo dos nossos produtos
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-2xl aspect-video bg-black">
            <video
              className="w-full h-full"
              src="/videos/acos-copec-institucional.mp4"
              poster={facilityPhoto}
              controls
              preload="metadata"
            >
              Seu navegador não suporta a reprodução de vídeo. Você pode{' '}
              <a href="/videos/acos-copec-institucional.mp4">baixar o vídeo aqui</a>.
            </video>
          </div>

          <div className="mt-10 max-w-[65ch]">
            <p className="text-lg text-gray-600 leading-relaxed">
              Neste vídeo, mostramos de perto os nossos produtos: o pátio de estocagem de aço carbono, inox e
              alumínio, a organização do material por bitola e liga, e o processo de corte, dobra e tratamento
              térmico que preparamos sob medida para clientes da metalurgia, siderurgia, indústria náutica e
              automotiva no Polo Industrial de Camaçari.
            </p>
            <Link
              to="/#contato"
              className="inline-flex items-center gap-2 mt-8 bg-[var(--primary-color)] text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-[var(--primary-color-hover)] transition-colors duration-300"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
