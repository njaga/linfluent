import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Discutons de votre projet digital
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#00adef]" />
                <a href="mailto:contact@linfluentsn.com" className="text-gray-700 hover:text-[#00adef]">
                  contact@linfluentsn.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#00adef]" />
                <a href="tel:+221767698042" className="text-gray-700 hover:text-[#00adef]">
                  +221 76 769 80 42
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[#00adef]" />
                <span className="text-gray-700">Dakar - Sénégal</span>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00adef] focus:ring-[#00adef]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00adef] focus:ring-[#00adef]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00adef] focus:ring-[#00adef]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00adef] to-[#5659a8] text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-200"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;