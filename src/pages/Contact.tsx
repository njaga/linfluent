import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="overflow-hidden min-h-screen">
      {/* Hero Section avec hauteur explicite */}
      <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#00adef] to-[#5659a8] w-full">
        {/* Motif de fond */}
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
        
        {/* Cercles décoratifs et points lumineux */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse delay-300 pointer-events-none" />
        <div className="absolute top-20 right-40 w-2 h-2 bg-white rounded-full animate-ping pointer-events-none" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-white rounded-full animate-ping delay-300 pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6"
            >
              Parlons de votre projet
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Contactez-nous
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Notre équipe est à votre écoute pour donner vie à vos projets
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="relative -mt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informations de contact */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Nos Coordonnées</h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "contact@linfluentsn.com",
                        href: "mailto:contact@linfluentsn.com"
                      },
                      {
                        icon: Phone,
                        label: "Téléphone",
                        value: "+221 76 769 80 42",
                        href: "tel:+221767698042"
                      },
                      {
                        icon: MapPin,
                        label: "Adresse",
                        value: "Dakar - Sénégal"
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-center space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300">
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-[#00adef] to-[#5659a8] rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity" />
                              <div className="relative bg-gradient-to-r from-[#00adef] to-[#5659a8] p-4 rounded-lg transform group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                            {item.href ? (
                              <a 
                                href={item.href}
                                className="text-lg text-gray-900 font-medium hover:text-[#00adef] transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-lg text-gray-900 font-medium">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <form className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h2>
                {[
                  { name: "name", label: "Nom complet", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "message", label: "Message", type: "textarea" }
                ].map((field, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={4}
                        className="w-full rounded-xl border-gray-200 focus:border-[#00adef] focus:ring-[#00adef] transition-all duration-300 resize-none bg-gray-50 hover:bg-white"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        className="w-full rounded-xl border-gray-200 focus:border-[#00adef] focus:ring-[#00adef] transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                    )}
                  </motion.div>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00adef] to-[#5659a8] text-white py-4 px-6 rounded-xl
                           flex items-center justify-center space-x-2
                           hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5
                           transition-all duration-300"
                >
                  <span>Envoyer le message</span>
                  <Send className="w-5 h-5 ml-2 animate-pulse" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 