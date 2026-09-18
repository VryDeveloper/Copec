import { ProductCarousel } from '../ProductCarousel';
import Reveal from '../Reveal';
import carousel1 from '../../assets/images/ImgCarousel1.jpg';
import carousel2 from '../../assets/images/ImgCarousel2.jpg';
import carousel3 from '../../assets/images/ImgCarousel3.jpg';

const PRODUCTS = [
  {
    title: 'Materiais industriais',
    image: carousel1,
    description: 'Aço carbono, inox, alumínio e nylon técnico',
  },
  {
    title: 'Indústria, náutica, automotiva e mais',
    image: carousel3,
    description: 'Perfis, chapas e materiais estruturais',
  },
  {
    title: 'Pronto ou sob medida',
    image: carousel2,
    description: 'Corte, dobra e tratamentos térmicos',
  },
];

export default function ProductsSection() {
  return (
    <section id="PRODUTOS" className="w-full">
      <div className="py-16 text-center bg-white">
        <Reveal>
          <h2 className="font-bold text-4xl md:text-5xl text-[var(--secondary-color)]">Nossos produtos</h2>
        </Reveal>
      </div>
      <ProductCarousel products={PRODUCTS} />
    </section>
  );
}
