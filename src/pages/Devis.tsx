import DevisForm from './DevisForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Devis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#5659a8] to-[#01adef] py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#5659a8] to-[#01adef] mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Demandez votre devis
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transformez votre vision en réalité. Obtenez une estimation personnalisée pour votre projet digital.
            </p>
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Carte d'information */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#5659a8] mb-8">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-[#5659a8]/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#5659a8]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Téléphone</p>
                    <p className="text-base font-medium text-gray-900">+221 76 769 80 42</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-[#5659a8]/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#5659a8]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-base font-medium text-gray-900">contact@linfluent.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-[#5659a8]/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#5659a8]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Adresse</p>
                    <p className="text-base font-medium text-gray-900">
                      Dakar, Sénégal<br />
                      Point E, Rue de Saint-Louis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-gradient-to-br from-[#5659a8] to-[#01adef] rounded-xl shadow-sm p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Horaires</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-sm text-white/80">Lundi - Vendredi</span>
                  <span className="text-sm font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-sm text-white/80">Samedi</span>
                  <span className="text-sm font-medium">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm text-white/80">Dimanche</span>
                  <span className="text-sm font-medium">Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-2">
            <DevisForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devis; 