// Coordenadas da empresa
const LAT = -12.690850621303637;
const LNG = -38.343762814515536;

// Área ao redor do ponto (para o zoom do mapa incorporado)
const LAT_OFFSET = 0.004;
const LNG_OFFSET = 0.008;

const bbox = [LNG - LNG_OFFSET, LAT - LAT_OFFSET, LNG + LNG_OFFSET, LAT + LAT_OFFSET].join(',');
const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT},${LNG}`;
const osmLink = `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=16/${LAT}/${LNG}`;
const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

const Map = () => {
  return (
    <div className="relative w-full h-full">
      <iframe
        title="Localização da Aços Copec no mapa"
        src={embedUrl}
        className="w-full h-full border-0"
        loading="lazy"
      />
      <div className="absolute bottom-3 left-3 flex gap-2 text-xs font-medium">
        <a
          href={osmLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/95 text-[var(--secondary-color)] px-3 py-1.5 rounded-full shadow hover:bg-white transition-colors duration-300"
        >
          Ver mapa ampliado
        </a>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/95 text-[var(--secondary-color)] px-3 py-1.5 rounded-full shadow hover:bg-white transition-colors duration-300"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
};

export default Map;
