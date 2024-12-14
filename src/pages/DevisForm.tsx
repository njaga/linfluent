import React from 'react';
import { useState } from 'react';

type ServiceOption = {
  id: string;
  label: string;
  subOptions?: {
    id: string;
    label: string;
    conditions?: string[];
  }[];
};

const services: ServiceOption[] = [
  {
    id: 'site-web',
    label: 'Site Web',
    subOptions: [
      { id: 'vitrine', label: 'Site Vitrine' },
      { id: 'ecommerce', label: 'Site E-commerce' },
      { id: 'application', label: 'Application Web' }
    ]
  },
  {
    id: 'marketing',
    label: 'Marketing Digital',
    subOptions: [
      { id: 'seo', label: 'Référencement SEO' },
      { id: 'reseaux-sociaux', label: 'Gestion Réseaux Sociaux' },
      { id: 'publicite', label: 'Campagnes Publicitaires' }
    ]
  },
  {
    id: 'design',
    label: 'Design',
    subOptions: [
      { id: 'logo', label: 'Création Logo' },
      { id: 'charte-graphique', label: 'Charte Graphique' },
      { id: 'ui-ux', label: 'Design UI/UX' }
    ]
  }
];

const DevisForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    subService: '',
    budget: '',
    delai: '',
    description: ''
  });

  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedSubService, setSelectedSubService] = useState<string>('');

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const service = e.target.value;
    setSelectedService(service);
    setSelectedSubService('');
    setFormData({ ...formData, service, subService: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informations personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Nom complet
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5659a8] focus:border-transparent"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5659a8] focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5659a8] focus:border-transparent"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Entreprise
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5659a8] focus:border-transparent"
              value={formData.entreprise}
              onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
            />
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Service souhaité
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5659a8] focus:border-transparent"
              value={selectedService}
              onChange={handleServiceChange}
            >
              <option value="">Sélectionnez un service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          {selectedService && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Type de service
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5659a8] focus:border-transparent"
                value={selectedSubService}
                onChange={(e) => {
                  setSelectedSubService(e.target.value);
                  setFormData({ ...formData, subService: e.target.value });
                }}
              >
                <option value="">Sélectionnez une option</option>
                {services
                  .find((s) => s.id === selectedService)
                  ?.subOptions?.map((subOption) => (
                    <option key={subOption.id} value={subOption.id}>
                      {subOption.label}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>

        {/* Budget et délai */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Budget estimé
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5659a8] focus:border-transparent"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="">Sélectionnez une fourchette</option>
              <option value="< 1000">Moins de 1 000 €</option>
              <option value="1000-5000">1 000 € - 5 000 €</option>
              <option value="5000-10000">5 000 € - 10 000 €</option>
              <option value="> 10000">Plus de 10 000 €</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Délai souhaité
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5659a8] focus:border-transparent"
              value={formData.delai}
              onChange={(e) => setFormData({ ...formData, delai: e.target.value })}
            >
              <option value="">Sélectionnez un délai</option>
              <option value="urgent">Urgent (moins de 1 mois)</option>
              <option value="normal">Normal (1-3 mois)</option>
              <option value="flexible">Flexible (plus de 3 mois)</option>
            </select>
          </div>
        </div>

        {/* Description du projet */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Description de votre projet
          </label>
          <textarea
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5659a8] focus:border-transparent"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Décrivez votre projet en quelques lignes..."
          />
        </div>

        {/* Bouton de soumission */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-[#5659a8] to-[#01adef] text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#5659a8] focus:ring-offset-2 transition-opacity"
          >
            Envoyer la demande
          </button>
        </div>
      </form>
    </div>
  );
};

export default DevisForm; 