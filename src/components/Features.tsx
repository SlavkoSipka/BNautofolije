import React from 'react';
import { Shield, Award, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    icon: Shield,
    title: "Garantovan kvalitet",
    description: "Koristimo samo najkvalitetnije materijale sa garancijom"
  },
  {
    icon: Award,
    title: "Dugogodišnje iskustvo",
    description: "Preko 10 godina iskustva u radu sa auto folijama"
  },
  {
    icon: Sparkles,
    title: "Profesionalna ugradnja",
    description: "Stručni tim sa sertifikovanim instalaterima"
  }
];

export const Features: React.FC = () => {
  const featureRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  
  features.forEach((_, index) => {
    useScrollReveal(React.useRef(featureRefs.current[index]));
  });

  return (
    <div className="relative py-24 bg-gray-100">
      <div className="px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 reveal-element"
            >
              <feature.icon className="mx-auto mb-6 text-orange-500" size={48} />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};