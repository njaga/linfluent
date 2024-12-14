import { motion } from 'framer-motion';
import { Target, Rocket, Heart, ArrowRight, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const APropos = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#00adef] to-[#5659a8] py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            À Propos de Nous
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Nous sommes une agence digitale passionnée par l'innovation et déterminée à créer un impact significatif
          </motion.p>
        </div>
      </div>

      {/* Notre Histoire */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Notre Histoire</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  L'influent est né de la vision de créer un impact significatif dans le paysage digital sénégalais. 
                  Notre voyage a commencé avec une simple idée : rendre le digital accessible et efficace pour toutes les entreprises.
                </p>
                <p>
                  Depuis notre création, nous avons accompagné plus de 50 entreprises dans leur transformation digitale, 
                  en combinant expertise technique et créativité pour des solutions sur mesure.
                </p>
                <p>
                  Aujourd'hui, notre équipe passionnée continue de repousser les limites de l'innovation pour offrir 
                  des solutions toujours plus performantes et adaptées aux besoins de nos clients.
                </p>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00adef] to-[#5659a8] transform rotate-6 rounded-2xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Notre équipe" 
                className="relative rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Nos Valeurs
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Les principes qui guident nos actions et définissent notre culture
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "Nous mettons notre passion au service de votre réussite"
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque projet"
              },
              {
                icon: Rocket,
                title: "Innovation",
                description: "Nous repoussons les limites de l'innovation"
              }
            ].map((valeur, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00adef] to-[#5659a8] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                <div className="relative bg-white p-8 rounded-xl shadow-lg group-hover:translate-y-[-5px] transition-transform duration-300">
                  <valeur.icon className="w-12 h-12 text-[#00adef] mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{valeur.title}</h3>
                  <p className="text-gray-600">{valeur.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Notre Équipe
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Des experts passionnés qui donnent vie à vos projets
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sana Massaly",
                role: "CEO & Fondateur",
                image: "/images/team/sana-massaly.png"
              },
              {
                name: "Matar Fanta Dieng",
                role: "Développeur Backend",
                image: "/images/team/matar-fanta-dieng.png"
              },
              {
                name: "Ismaila Ndiaye",
                role: "Développeur Frontend",
                image: "/images/team/ismaila-ndiaye.png"
              },
              {
                name: "Oumar Baldé",
                role: "Administrateur",
                image: "/images/team/oumar-balde.png"
              },
              {
                name: "Ndiaga Ndiaye",
                role: "Digital Manager",
                image: "/images/team/ndiaga-ndiaye.jpg"
              }
            ].map((membre, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={membre.image} 
                    alt={membre.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold">{membre.name}</h3>
                    <p className="text-white/90">{membre.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 mb-3"
            >
              Pourquoi Nous Choisir
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Des raisons solides qui font de nous votre partenaire digital idéal
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Users,
                title: "Équipe Expérimentée",
                description: "Plus de 15 experts passionnés"
              },
              {
                icon: Star,
                title: "Excellence Reconnue",
                description: "98% de clients satisfaits"
              },
              {
                icon: Rocket,
                title: "Innovation Continue",
                description: "Technologies de pointe"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-[#00adef] to-[#5659a8] p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 mb-3"
            >
              Notre Approche
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Une méthodologie éprouvée pour votre succès
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="space-y-4"
          >
            {[
              {
                step: "01",
                title: "Analyse & Stratégie",
                description: "Analyse approfondie de vos besoins"
              },
              {
                step: "02",
                title: "Conception & Développement",
                description: "Solutions sur mesure avec les meilleures technologies"
              },
              {
                step: "03",
                title: "Test & Déploiement",
                description: "Tests rigoureux pour une qualité optimale"
              },
              {
                step: "04",
                title: "Suivi & Optimisation",
                description: "Optimisation continue des performances"
              }
            ].map((etape, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center space-x-6 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all group"
              >
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00adef] to-[#5659a8] group-hover:scale-110 transition-transform">
                  {etape.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{etape.title}</h3>
                  <p className="text-sm text-gray-600">{etape.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nos Références */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 mb-3"
            >
              Ils Nous Font Confiance
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Des entreprises qui nous ont choisis
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-16 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={`/images/clients/client-${index + 1}.png`}
                    alt={`Client ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-[#00adef] to-[#5659a8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Prêt à Démarrer Votre Projet ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Discutons de vos objectifs et voyons comment nous pouvons vous aider à les atteindre
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-white text-[#00adef] hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              Contactez-nous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APropos; 