import React from 'react';
import { Globe, Code, BarChart, FileText, TrendingUp, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Conception de Sites Web',
    description: 'Sites web responsifs et modernes adaptés à vos besoins',
    icon: Globe,
  },
  {
    title: 'Développement d\'Applications',
    description: 'Applications web et mobiles performantes et innovantes',
    icon: Code,
  },
  {
    title: 'Stratégies de Marketing Digital',
    description: 'Solutions marketing personnalisées pour votre croissance',
    icon: BarChart,
  },
  {
    title: 'Gestion de Contenu',
    description: 'Création et gestion de contenu engageant pour votre audience',
    icon: FileText,
  },
  {
    title: 'Analyse et Optimisation',
    description: 'Optimisation de vos performances digitales',
    icon: TrendingUp,
  },
  {
    title: 'Formation et Consultation',
    description: 'Accompagnement expert pour votre transformation digitale',
    icon: GraduationCap,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions digitales complètes pour votre succès
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#00adef] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-[#00adef] bg-opacity-10">
                  <service.icon className="h-6 w-6 text-[#00adef]" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;