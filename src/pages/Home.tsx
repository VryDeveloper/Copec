import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import LocationSection from '../components/sections/LocationSection';
import ProductsSection from '../components/sections/ProductsSection';
import VideoHighlight from '../components/sections/VideoHighlight';
import ContactSection from '../components/sections/ContactSection';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Home() {
  usePageMeta({
    title: 'Aços Copec | Aço Carbono, Inox e Alumínio em Camaçari, BA',
    description:
      'Fornecedora de materiais para metalurgia e siderurgia em Camaçari, Bahia: aço carbono, inox, alumínio, bronze e nylon técnico. Corte, dobra e tratamento térmico sob medida.',
  });

  return (
    <>
      <Hero />
      <About />
      <LocationSection />
      <ProductsSection />
      <VideoHighlight />
      <ContactSection />
    </>
  );
}
