import { Clock, Shield, Truck, Users } from 'lucide-react';
import facilityPhoto from '../../assets/images/acosCopecFrente.jpg';
import Reveal from '../Reveal';

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
        <Reveal>
          <h2 className="font-bold text-4xl md:text-5xl text-[var(--secondary-color)] mb-14">Quem somos</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <Reveal delay={100}>
              <p className="text-lg text-gray-600 leading-relaxed max-w-[62ch]">
                A Aços Copec é referência no fornecimento de materiais para metalurgia e siderurgia — aço carbono,
                inox, alumínio, bronze e nylon técnico de alta qualidade. Nossa missão é ser parceira no crescimento
                dos nossos clientes, oferecendo soluções completas em aço e materiais industriais no Polo Industrial
                de Camaçari.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }, index) => (
                <Reveal key={title} delay={150 + index * 100}>
                  <div className="group flex items-start gap-3 rounded-lg p-3 -m-3 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5">
                    <Icon className="text-[var(--primary-color)] h-6 w-6 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold text-[var(--secondary-color)]">{title}</h3>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={200} className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={facilityPhoto}
              alt="Fachada das instalações da Aços Copec em Camaçari, Bahia"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
