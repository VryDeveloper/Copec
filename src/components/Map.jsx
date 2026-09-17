import React, { useEffect, useRef, useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';

// Estilos do mapa
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

// Coordenadas do centro do mapa
const center = {
  lat: -12.690850621303637,
  lng: -38.343762814515536,
};

// Opções do mapa
const options = {
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!isLoaded || !window.google) return;

    async function initMap() {
      try {
        // Importa as bibliotecas necessárias
        const { Map } = await window.google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

        // Cria o mapa
        const mapInstance = new Map(document.getElementById("map"), {
          center,
          zoom: 15,
          mapId: '4504f8b37365c3d0', // Substitua pelo seu Map ID, se necessário
        });

        setMap(mapInstance);

        // Adiciona um Advanced Marker ao mapa
        new AdvancedMarkerElement({
          map: mapInstance,
          position: center,
          title: "Localização da Empresa",
        });
      } catch (error) {
        console.error("Erro ao carregar o mapa:", error);
      }
    }

    initMap();
  }, [isLoaded]);

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
        Erro ao carregar o mapa
      </div>
    );
  }
  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
        Carregando mapa...
      </div>
    );
  }

  return <div id="map" style={mapContainerStyle}></div>;
};

export default Map;
