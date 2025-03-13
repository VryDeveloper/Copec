// src/components/Logo.jsx
import React, { useEffect } from 'react';
import logo from '../assets/images/logoA.png'; // Ajuste o caminho da logo

const Logo = () => {
  // Efeito de scroll
  useEffect(() => {
    const logoImage = document.getElementById('logo-image');
    const logoText = document.getElementById('logo-text');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        logoImage.classList.add('invert'); // Inverte a imagem
        logoText.classList.add('invert'); // Inverte o texto
      } else {
        logoImage.classList.remove('invert'); // Remove a inversão da imagem
        logoText.classList.remove('invert'); // Remove a inversão do texto
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpa o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center space-x-2 ">
      <img
        id="logo-image"
        src={logo}
        alt="Aços Copec"
        className="logo-image h-9 w-9 transition-transform duration-300 hover:scale-110"
      />
      <span
        id="logo-text"
        className="logo-text text-3xl font-bold bg-gradient-to-r from-[#EA9900] to-[#f7a905] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
      >
        Aços Copec
      </span>
    </div>
  );
};

export default Logo;
