import Mapa from '../Map';

export default function LocationSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--secondary-color)] text-center mb-12">
          Onde estamos
        </h2>
        <div className="max-w-4xl mx-auto h-96 rounded-lg shadow-lg overflow-hidden">
          <Mapa />
        </div>
      </div>
    </section>
  );
}
