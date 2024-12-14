import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/images/logobon.png" 
                alt="L'influent" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/a-propos" className="text-gray-700 hover:text-[#5659a8]">À propos</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#5659a8]">Services</Link>
            <Link to="/realisations" className="text-gray-700 hover:text-[#5659a8]">Réalisations</Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#5659a8]">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#5659a8]">Contact</Link>
            <Link 
              to="/devis" 
              className="px-4 py-2 bg-gradient-to-r from-[#5659a8] to-[#01adef] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Devis gratuit
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 z-50 relative"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile avec overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed inset-y-0 right-0 w-full bg-white transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full justify-center items-center space-y-8 text-center">
              <Link 
                to="/a-propos" 
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-700 hover:text-[#5659a8]"
              >
                À propos
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-700 hover:text-[#5659a8]"
              >
                Services
              </Link>
              <Link 
                to="/realisations" 
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-700 hover:text-[#5659a8]"
              >
                Réalisations
              </Link>
              <Link 
                to="/blog" 
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-700 hover:text-[#5659a8]"
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-700 hover:text-[#5659a8]"
              >
                Contact
              </Link>
              <Link 
                to="/devis" 
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-[#5659a8] to-[#01adef] text-white text-xl rounded-lg hover:opacity-90 transition-opacity"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;