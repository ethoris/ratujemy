// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <section id="onas" className="bg-white p-8 rounded shadow my-8">
      <div className="mx-auto px-4 py-8 w-3/5">
        <h2 className="text-3xl font-heading font-bold mb-6">O nas</h2>
        <p className="text-lg mb-4 leading-relaxed">
          W dzisiejszych czasach telefony komórkowe i smartfony stały się nieodłącznym elementem naszego życia.
          Zawierają one wiele cennych informacji, takich jak kontakty, zdjęcia, filmy czy dokumenty, które mogą być
          niezwykle ważne dla naszej pracy lub życia prywatnego. Niestety, zdarza się, że dane z telefonu mogą
          zostać utracone w wyniku awarii sprzętu, przypadkowego usunięcia, błędów systemowych lub ataków wirusowych.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          W takich sytuacjach warto skorzystać z usług profesjonalnej firmy zajmującej się odzyskiwaniem danych z telefonów.
          Nasza firma specjalizuje się w odzyskiwaniu danych z urządzeń mobilnych różnych marek i modeli.
          Dysponujemy najnowocześniejszym sprzętem i oprogramowaniem, dzięki czemu możemy odzyskać nawet te dane, 
          które uważano za utracone na zawsze.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Oferujemy kompleksowe usługi odzyskiwania danych, w tym:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 leading-relaxed">
          <li>Odzyskiwanie danych z telefonów uszkodzonych mechanicznie lub elektronicznie</li>
          <li>Odzyskiwanie danych z telefonów po zalaniu</li>
          <li>Odzyskiwanie danych po przypadkowym usunięciu lub formatowaniu pamięci telefonu</li>
          <li>Odzyskiwanie danych z telefonów z zablokowanym systemem operacyjnym lub hasłem</li>
        </ul>
        <p className="text-lg leading-relaxed">
          W naszej pracy stosujemy wyłącznie sprawdzone metody odzyskiwania danych oraz gwarantujemy pełną poufność i bezpieczeństwo
          przetwarzanych informacji. Oferujemy także konkurencyjne ceny oraz szybki czas realizacji usługi, co sprawia, że jesteśmy 
          idealnym wyborem dla osób, które potrzebują szybkiego i skutecznego odzyskania danych z telefonu.
        </p>
      </div>
    </section>
  );
};

export default About;
