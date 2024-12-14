import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projets = [
  {
    titre: "Site Vitrine - Cabinet d'Avocats",
    description: "Site web professionnel avec système de prise de rendez-vous",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    lien: "#"
  },
  {
    titre: "E-commerce - Mode Africaine",
    description: "Boutique en ligne avec paiement Wave et Orange Money",
    image: "https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    lien: "#"
  },
  {
    titre: "Site Institutionnel - ONG",
    description: "Plateforme de présentation des projets et collecte de dons",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technologies: ["React", "Sanity CMS", "Node.js"],
    lien: "#"
  },
  {
    titre: "Portail Immobilier",
    description: "Site d'annonces immobilières avec filtres avancés",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technologies: ["Next.js", "PostgreSQL", "Express"],
    lien: "#"
  }
];

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

const ITEMS_PER_PAGE = 4;

const Realisations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projets.length / ITEMS_PER_PAGE);
  
  // Obtenir les projets pour la page courante
  const getCurrentProjects = () => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return projets.slice(start, end);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-center bg-gradient-to-r from-[#00adef] to-[#5659a8] overflow-hidden">
        {/* Motif de fond */}
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        
        {/* Cercles décoratifs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6"
          >
            Découvrez nos créations
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Nos Réalisations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Une sélection de nos meilleurs projets web
          </motion.p>
        </div>
      </div>

      {/* Projets avec Pagination */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {getCurrentProjects().map((projet, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image avec overlay au hover */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={projet.image} 
                    alt={projet.titre} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00adef] transition-colors">
                    {projet.titre}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {projet.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projet.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={projet.lien}
                    className="inline-flex items-center text-sm font-medium text-[#00adef] hover:text-[#5659a8] transition-colors group/link"
                  >
                    <span className="relative">
                      Voir le projet
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00adef] scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex justify-center items-center gap-2"
            >
              {/* Bouton précédent */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Numéros de page */}
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNumber = idx + 1;
                const isActive = pageNumber === currentPage;

                // Si nous avons beaucoup de pages, afficher seulement certains numéros
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`
                        w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium
                        transition-all duration-200
                        ${isActive 
                          ? 'bg-gradient-to-r from-[#00adef] to-[#5659a8] text-white shadow-md' 
                          : 'text-gray-600 hover:bg-gray-100'}
                      `}
                    >
                      {pageNumber}
                    </button>
                  );
                }

                // Afficher des points de suspension si nécessaire
                if (
                  (idx === 1 && currentPage > 3) ||
                  (idx === totalPages - 2 && currentPage < totalPages - 2)
                ) {
                  return (
                    <span key={idx} className="px-2 text-gray-400">
                      ...
                    </span>
                  );
                }

                return null;
              })}

              {/* Bouton suivant */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Realisations; 