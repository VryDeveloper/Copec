import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import Contato from '../ContactForm';
import Reveal from '../Reveal';

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Rod BA 522 VIA COPEC, R. Alto do Triângulo, sn, Camaçari - BA, 42804-001',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: ['(71) 3190-0313', '(71) 98837-2629'],
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'copec@acoscopec.com.br',
  },
  {
    icon: MessageSquare,
    title: 'Atendimento',
    content: 'Segunda a sexta, 7:30h às 16:30h',
  },
];

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-[#082c5c] to-gray-900">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="font-bold text-4xl md:text-5xl text-center mb-14 text-white">Entre em contato</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-14">
          <Reveal delay={100}>
            <Contato />
          </Reveal>
          <div className="space-y-8 text-white">
            {CONTACT_ITEMS.map(({ icon: Icon, title, content }, index) => (
              <Reveal key={title} delay={150 + index * 100}>
                <div className="group flex items-start gap-4">
                  <Icon className="text-[var(--primary-color)] h-6 w-6 mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    {Array.isArray(content) ? (
                      content.map((item) => <p key={item}>{item}</p>)
                    ) : (
                      <p>{content}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
