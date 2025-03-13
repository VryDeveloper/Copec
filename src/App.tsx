import React, { useEffect, useState } from 'react';
import Logo  from './components/Logo';
import Contato from './components/ContactForm';
import Mapa from './components/Map';
import { ProductCarousel } from './components/ProductCarousel';

import {
  Building2,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Shield,
  Truck,
  Users,
  Clock,
  MessageSquare,
  Facebook,
  Linkedin,
  Instagram,
  Send,
} from 'lucide-react';
import acosCopecFrente from './assets/images/acosCopecFrente.jpg';
import ImgCarousel1 from './assets/images/ImgCarousel1.jpg';
import ImgCarousel2 from './assets/images/ImgCarousel2.jpg';
import ImgCarousel3 from './assets/images/ImgCarousel3.jpg';

function App() {
  const [imagemAtual, setImagemAtual] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const imagens = [
    'url("https://images.unsplash.com/photo-1522322512347-a0e57fd1744c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://images.unsplash.com/photo-1681108212545-04cabe9cf771?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  ];

  useEffect(() => {
    const loadImages = () => {
      imagens.forEach((img) => {
        const image = new Image();
        image.src = img.match(/url\("(.*)"\)/)?.[1] || '';
      });
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const intervalo = setInterval(() => {
      setImagemAtual((prev) => {
        const nextIndex = (prev + 1) % imagens.length;
        const nextImg = new Image();
        nextImg.src = imagens[nextIndex].match(/url\("(.*)"\)/)?.[1] || '';
        return nextIndex;
      });
    }, 4000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowArrow(window.scrollY <= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(intervalo);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imagens.length, isLoaded]);

  const products = [
    {
      title: 'Materiais Industriais',
      image: ImgCarousel1,
      description: 'Carbono, Inox, Alumínio, Nylon',
    },
    {
      title: 'Indústria, Náutica, Automotiva e mais',
      image: ImgCarousel3,
      description: 'Perfis, chapas e materiais estruturais',
    },
    {
      title: 'Pronto sobe medida!',
      image: ImgCarousel2,
      description: 'Corte, dobra e tratamentos térmicos',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 w-full z-50 header-scroll transition-all duration-300 ${
          scrolled ? 'scrolled bg-white shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex space-x-8">
              <div className="flex space-x-4">
                {['INICIO', 'SOBRE', 'PRODUTOS'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`${
                      scrolled ? 'text-black font-bold' : 'text-white font-bold'
                    } hover:text-yellow-600 transform hover:scale-110 transition-all duration-300`}
                    aria-label={`Ir para ${item}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </div>
              {/* Redes Sociais */}
              <div className="flex space-x-4 socials">
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/people/Aços-Copec/61571114510237/' },
                  { icon: Linkedin, href: '#' },
                  {
                    icon: Instagram,
                    href: 'https://www.instagram.com/acoscopec/?igsh=MWU0Z2o2bnhlMXFpNw%3D%3D',
                  },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`${
                      scrolled ? 'text-gray-600' : 'text-white'
                    } hover:text-yellow-600 transition-colors duration-300`}
                  >
                    <Icon className="h-6 w-6 icon-hover" />
                  </a>
                ))}
              </div>
            </nav>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-all duration-300 buttonNavCustom hover:scale-105 hover:shadow-lg">
              <a href="#contato" aria-label="Ir para a seção de contato">
                Contato
              </a>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="INICIO"
        className="pt-24 pb-20 px-4 bg-cover bg-center h-screen flex items-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), ${imagens[imagemAtual]}`,
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto text-white relative">
          <h1
            className="text-5xl font-bold mb-6 max-w-2xl fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Soluções em Aço e Materiais Industriais para o Seu Negócio
          </h1>
          <p
            className="text-xl mb-8 max-w-xl fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Materiais industriais de alta qualidade com agilidade e excelência
            para impulsionar o crescimento da sua empresa.
          </p>
          <button
            className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg hover:bg-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            <a href='#PRODUTOS'>
              Conheça Nossos Produtos
            </a>
            <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Seta Animada */}
          {showArrow && (
            <div
              className="arrow fixed bottom-8 left-1/2 z-50 cursor-pointer"
              onClick={() => {
                const nextSection = document.getElementById('SOBRE');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div
                className="animate-bounce"
                style={{
                  width: '24px',
                  height: '24px',
                  border: '2px solid white',
                  borderWidth: '0 2px 2px 0',
                  transform: 'rotate(45deg)',
                }}
              />
            </div>
          )}

        </div>
      </section>

      {/* About Section */}
      <section id="SOBRE" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">
            Quem Somos?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-up">
              <p className="text-lg text-gray-600 hover:scale-105 transition-all duration-500">
                Aços Copec se destaca como referência no fornecimento de
                materiais industriais, como aço carbono, inox, alumínio, bronze entre outros 
                de alta qualidade. Nossa missão é ser parceira no crescimento
                dos nossos clientes, oferecendo soluções completas em aço e
                materiais industriais.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: 'Qualidade Garantida',
                    desc: 'Produtos certificados',
                  },
                  {
                    icon: Truck,
                    title: 'Logística eficiente',
                    desc: 'Retirada Rápida',
                  },
                  {
                    icon: Users,
                    title: 'Atendimento',
                    desc: 'Suporte especializado',
                  },
                  {
                    icon: Clock,
                    title: 'Disponibilidade',
                    desc: 'Estoque completo',
                  },
                ].map(({ icon: Icon, title, desc }, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 hover:scale-105 transition-all duration-300"
                  >
                    <Icon className="text-yellow-600 h-6 w-6 icon-hover" />
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 ">
              <img
                src={acosCopecFrente}
                alt="Instalações Aços Copec"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
          <h2 className="text-4xl font-bold text-center mb-8 fade-in">
            Localização da Empresa
          </h2>
          <div className="w-full max-w-4xl h-96 bg-white rounded-lg shadow-lg overflow-hidden">
            <div id="map" className="w-full h-full">
              <Mapa />
            </div>
          </div>
        </div>
      </section>
                
      {/* Products Section */}
      <section id="PRODUTOS" className="w-full">
        <ProductCarousel products={products} />
      </section>
      {/* Contact Section */}
      <section
        id="contato"
        className="py-20 bg-gradient-to-b from-[#082c5c] to-gray-900"
      >
        <div className="container mx-auto px-4 ">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in text-white">
            Entre em Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in-up">
            <Contato />
          </div>

            <div className="space-y-8 slide-in-right text-white">
              {[
                {
                  icon: MapPin,
                  title: 'Endereço',
                  content:
                    'Rod BA 522 VIA COPEC, R. Alto do Triângulo, sn, Camaçari - BA, 42804-001',
                },
                {
                  icon: Phone,
                  title: 'Telefone',
                  content: ['(71) 3190-0313', '(71)98837-2629'],
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'copec@acoscopec.com.br',
                },
                {
                  icon: MessageSquare,
                  title: 'Atendimento',
                  content: 'Segunda a Sexta, 7:30h às 16:30h',
                },
              ].map(({ icon: Icon, title, content }, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 hover:scale-105 transition-all duration-300 hover:cursor-default"
                >
                  <Icon className="text-yellow-600 h-6 w-6 mt-1 icon-hover" />
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    {Array.isArray(content) ? (
                      content.map((item, i) => (
                        <p key={i} className="text-white hover:cursor-default">
                          {item}
                        </p>
                      ))
                    ) : (
                      <p className="text-white hover:cursor-default">
                        {content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="fade-in-up">
              <div className="flex items-center space-x-2 mb-6">
                <Building2 className="h-8 w-8 icon-hover" />
                <span className="text-2.3xl font-bold">Aços Copec</span>
              </div>
              <p className="text-gray-400">
                Soluções completas em materiais industriais para sua empresa.
              </p>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {['INICIO', 'SOBRE', 'PRODUTOS', 'contato'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Linkedin, href: '#' },
                  {
                    icon: Instagram,
                    href: 'https://www.instagram.com/acoscopec/?igsh=MWU0Z2o2bnhlMXFpNw%3D%3D',
                  },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Icon className="h-6 w-6 icon-hover" />
                  </a>
                ))}
              </div>
            </div>
            
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2025 Aços Copec. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/message/E7HYMGL6UBBLO1?autoload=1&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 whatsapp-pulse hover:scale-110"
      >
        <svg
          className="w-9 h-9"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

export default App;