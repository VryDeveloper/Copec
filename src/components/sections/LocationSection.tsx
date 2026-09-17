import Mapa from '../Map';
import Reveal from '../Reveal';

export default function LocationSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <Reveal className="text-center">
          <h2 className="font-bold text-4xl md:text-5xl text-[var(--secondary-color)] mb-12">Onde estamos</h2>
        </Reveal>
        <Reveal delay={250} className="max-w-4xl mx-auto h-96 rounded-lg shadow-lg overflow-hidden">
          <Mapa />
        </Reveal>
      </div>
    </section>
  );
}
