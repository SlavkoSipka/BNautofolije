import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { ServiceSection } from './ServiceSection';

export const VehicleWrapping: React.FC = () => {
  return (
    <ServiceSection
      reversed
      title="Kompletno presvlačenje vozila"
      subtitle="premium folijama"
      description="Transformišite izgled vašeg vozila uz našu profesionalnu uslugu presvlačenja. Koristimo samo najkvalitetnije folije koje pružaju:"
      features={[
        "Zaštitu originalne boje vozila",
        "Otpornost na ogrebotine i UV zračenje",
        "Dugotrajnost i lako održavanje"
      ]}
      buttonText="Pročitaj Zakon"
      image="https://res.cloudinary.com/daf91w2yr/image/upload/v1740400562/s6_qo7poo.png"
      imageAlt="Audi S6 sa folijom"
    />
  );
};