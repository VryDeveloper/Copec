import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import acosCopecWordmark from '../../assets/images/acoscopeclogo.png';

const QUICK_LINKS = [
  { label: 'Início', to: '/#INICIO' },
  { label: 'Sobre', to: '/#SOBRE' },
  { label: 'Produtos', to: '/#PRODUTOS' },
  { label: 'Vídeo institucional', to: '/video' },
  { label: 'Contato', to: '/#contato' },
];

const SOCIALS = [
  { icon: Facebook, href: 'https://www.facebook.com/people/A%C3%A7os-Copec/61571114510237/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/acoscopec/', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img src={acosCopecWordmark} alt="Aços Copec" className="h-10 mb-5" />
            <p className="text-gray-400 max-w-xs">
              Materiais para metalurgia e siderurgia no Polo Industrial de Camaçari: aço carbono, inox, alumínio e nylon técnico.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(71) 3190-0313</li>
              <li>(71) 98837-2629</li>
              <li>copec@acoscopec.com.br</li>
              <li>Segunda a sexta, 7:30h às 16:30h</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes sociais</h4>
            <div className="flex gap-4">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Aços Copec. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
