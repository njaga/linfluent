import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-[#00adef] to-[#5659a8] overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      
      {/* Cercles décoratifs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl" />
      
      {/* Points lumineux */}
      <div className="absolute top-20 right-40 w-2 h-2 bg-white rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-white rounded-full animate-pulse delay-300" />
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-white rounded-full animate-pulse delay-700" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
                Agence l'influent🚀
              </span>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
                Transformez votre{" "}
                <span className="relative">
                  <span className="relative z-10">Vision Digitale</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-3 bg-[#00adef]/30 rounded-full -z-0"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-white/90 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Nous créons des solutions digitales innovantes pour propulser votre entreprise vers le succès. Expertise, créativité et résultats garantis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <Link
                to="/devis"
                className="group flex items-center px-8 py-4 text-lg font-medium rounded-full bg-white text-[#00adef] hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group flex items-center px-8 py-4 text-lg font-medium rounded-full border-2 border-white/30 text-white backdrop-blur-sm hover:bg-white hover:text-[#00adef] hover:border-white transition-all duration-300"
              >
                Nos services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full h-[600px]">
              {/* Effet de brillance */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
              
              <img
                src="/images/Hero-Illustration.webp"
                alt="Hero Illustration"
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;