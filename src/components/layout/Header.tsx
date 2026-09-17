import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import Logo from '../Logo';

const NAV_ITEMS = [
  { label: 'Início', hash: '#INICIO' },
  { label: 'Sobre', hash: '#SOBRE' },
  { label: 'Produtos', hash: '#PRODUTOS' },
  { label: 'Vídeo', hash: '/video' },
];

const SOCIALS = [
  { icon: Facebook, href: 'https://www.facebook.com/people/A%C3%A7os-Copec/61571114510237/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/acoscopec/', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

interface HeaderProps {
  transparentOnTop?: boolean;
}

export default function Header({ transparentOnTop = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparentOnTop) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparentOnTop]);

  const solid = scrolled || menuOpen;
  const linkTo = (hash: string) => (hash.startsWith('/') ? hash : `/${hash}`);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        solid ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="shrink-0" aria-label="Aços Copec, página inicial">
            <Logo dark={solid} />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={linkTo(item.hash)}
                  className={`font-semibold transition-colors duration-300 hover:text-[var(--primary-color)] ${
                    solid ? 'text-[var(--secondary-color)]' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 pl-6 border-l border-current/20">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`transition-colors duration-300 hover:text-[var(--primary-color)] ${
                    solid ? 'text-steel-600' : 'text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <Link
              to="/#contato"
              className="bg-[var(--primary-color)] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[var(--primary-color-hover)] transition-colors duration-300"
            >
              Contato
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            className={`md:hidden p-2 -mr-2 ${solid ? 'text-[var(--secondary-color)]' : 'text-white'}`}
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-white shadow-lg transition-[max-height] duration-300 ease-in-out ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={linkTo(item.hash)}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--secondary-color)] font-semibold text-lg py-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-full font-semibold text-center"
          >
            Contato
          </Link>
          <div className="flex gap-5 pt-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-steel-600">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
