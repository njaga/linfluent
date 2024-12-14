import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white">L'influent</h3>
            <p className="mt-4 text-gray-400">
              Votre partenaire de confiance pour la transformation digitale au Sénégal
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Liens rapides</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Suivez-nous</h3>
            <div className="mt-4 flex space-x-6">
              <a href="https://twitter.com/l_influent" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="https://web.facebook.com/linfluentsn" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/linfluentsn/" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/l-influent" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} L'influent. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;