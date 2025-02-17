// src/components/Services.js
import React from 'react';

const servicesData = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/198/198476.png", // Ikona dysku HDD/SSD
    title: "Odzyskiwanie danych z dysków HDD i SSD",
    description: "Szybka i skuteczna pomoc przy utracie danych z dysków.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1256/1256653.png", // Ikona kart pamięci
    title: "Odzyskiwanie danych z kart pamięci",
    description: "Przywracamy utracone zdjęcia i pliki z uszkodzonych lub sformatowanych kart.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/179/179405.png", // Ikona pendrive
    title: "Odzyskiwanie danych z pendrive",
    description: "Naprawa uszkodzonych pamięci USB i odzyskiwanie ważnych plików.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3642/3642489.png", // Ikona macierzy RAID
    title: "Odzyskiwanie danych z macierzy RAID",
    description: "Rozwiązania dla awarii w macierzach RAID 0,1,5 i innych.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2413/2413721.png", // Ikona telefonu – narzędzia naprawcze
    title: "Naprawa telefonów",
    description: "Usuwanie blokad, wymiana podzespołów i przywracanie danych.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2815/2815425.png", // Ikona tabletu – z narzędziami
    title: "Naprawa tabletów",
    description: "Diagnostyka i odzyskiwanie plików z uszkodzonych tabletów.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Usługi</h2>
        <p className="text-center max-w-3xl mx-auto text-lg mb-10">
          Odzyskujemy dane z dysków, kart pamięci, pendrive'ów, telefonów i tabletów. Naprawiamy również uszkodzone urządzenia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
