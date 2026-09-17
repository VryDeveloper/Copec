import { Clock, Shield, Truck, Users } from 'lucide-react';
import facilityPhoto from '../../assets/images/acosCopecFrente.jpg';

const HIGHLIGHTS = [
  { icon: Shield, title: 'Qualidade garantida', desc: 'Produtos certificados' },
  { icon: Truck, title: 'Logística eficiente', desc: 'Retirada rápida' },
  { icon: Users, title: 'Atendimento', desc: 'Suporte especializado' },
  { icon: Clock, title: 'Disponibilidade', desc: 'Estoque completo' },
];

export default function About() {
  return (
    <section id="SOBRE" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--secondary-color)] mb-14">
          Quem somos
        </h2>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed max-w-[62ch]">
              A Aços Copec é referência no fornecimento de materiais para metalurgia e siderurgia — aço carbono,
              inox, alumínio, bronze e nylon técnico de alta qualidade. Nossa missão é ser parceira no crescimento
              dos nossos clientes, oferecendo soluções completas em aço e materiais industriais no Polo Industrial
              de Camaçari.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="text-[var(--primary-color)] h-6 w-6 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[var(--secondary-color)]">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={facilityPhoto}
              alt="Fachada das instalações da Aços Copec em Camaçari, Bahia"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
