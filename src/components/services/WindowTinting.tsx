import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { ServiceSection } from './ServiceSection';
import { useNavigate } from 'react-router-dom';

export const WindowTinting: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ServiceSection
      title="Profesionalno zatamnjivanje"
      subtitle="stakala"
      description="Unapredite izgled i funkcionalnost vašeg vozila uz našu profesionalnu uslugu zatamnjivanja stakala. Koristimo samo najkvalitetnije folije koje pružaju:"
      features={[
        "Vrhunsku UV zaštitu do 99%",
        "Značajno smanjenje toplote u vozilu",
        "Maksimalnu privatnost i eleganciju"
      ]}
      buttonText="Saznaj više"
      onButtonClick={() => navigate('/zatamnjivanje-stakla')}
      image="https://res.cloudinary.com/daf91w2yr/image/upload/v1740408471/Nenaslovljeni_dizajn_1_g3ecpd.png"
      imageAlt="Zatamnjeno staklo automobila"
    />
  );
};