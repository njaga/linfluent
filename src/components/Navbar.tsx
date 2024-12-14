import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

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
            <Link to="/a-propos" className="text-gray-700 hover:text-[#00adef]">À propos</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#00adef]">Services</Link>
            <Link to="/realisations" className="text-gray-700 hover:text-[#00adef]">Réalisations</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#00adef]">Contact</Link>
            <div className="flex space-x-4">
              <a href="https://twitter.com/l_influent" className="text-gray-500 hover:text-[#00adef]">
                <Twitter size={20} />
              </a>
              <a href="https://web.facebook.com/linfluentsn" className="text-gray-500 hover:text-[#00adef]">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/linfluentsn/" className="text-gray-500 hover:text-[#00adef]">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/l-influent" className="text-gray-500 hover:text-[#00adef]">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/a-propos" className="block px-3 py-2 text-gray-700 hover:text-[#00adef]">À propos</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-[#00adef]">Services</Link>
            <Link to="/realisations" className="block px-3 py-2 text-gray-700 hover:text-[#00adef]">Réalisations</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-[#00adef]">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;