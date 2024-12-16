import { ArrowRight, Award, Users, Target, CheckCircle, Globe, Smartphone, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { SiReact, SiNodedotjs, SiLaravel, SiWordpress, SiFlutter, SiAmazon, SiFirebase, SiMongodb } from 'react-icons/si';
import { blogPosts } from '../data/blogPosts';

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

const services = [
  {
    title: "Développement Web",
    description: "Sites web professionnels et applications sur mesure avec les dernières technologies",
    icon: Globe,
    couleur: "#00adef",
    details: [
      "Sites vitrines professionnels",
      "Applications web sur mesure",
      "E-commerce",
      "Intégration CMS"
    ]
  },
  {
    title: "Applications Mobiles",
    description: "Applications iOS et Android performantes et intuitives pour votre entreprise",
    icon: Smartphone,
    couleur: "#5659a8",
    details: [
      "Applications natives iOS/Android",
      "Applications hybrides",
      "PWA",
      "Maintenance et mises à jour"
    ]
  },
  {
    title: "Marketing Digital",
    description: "Stratégies marketing complètes pour booster votre présence en ligne",
    icon: BarChart,
    couleur: "#00adef",
    details: [
      "Social Media Marketing",
      "Campagnes publicitaires",
      "Email Marketing",
      "Content Marketing"
    ]
  }
];

const valeurs = [
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Un partenariat étroit avec nos clients"
  },
  {
    icon: Target,
    title: "Innovation",
    description: "À la pointe des dernières technologies"
  }
];

const Accueil = () => {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Section Services */}
      <section className="pb-16 pt-32 bg-gray-50">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Des solutions digitales complètes pour propulser votre entreprise vers le succès
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-r from-[#00adef] to-[#5659a8] p-4 relative">
                  <service.icon className="w-full h-full text-white" />
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-2xl bg-[#00adef] opacity-20 -z-10 transform rotate-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00adef] mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center text-[#00adef] hover:text-[#5659a8] transition-colors group"
                >
                  <span className="font-medium">En savoir plus</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            variants={fadeInUp}
          >
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-white border-2 border-[#00adef] text-[#00adef] hover:bg-gradient-to-r from-[#00adef] to-[#5659a8] hover:text-white hover:border-transparent transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Découvrir tous nos services</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Section Valeurs */}
      <section className="py-24 bg-gray-50">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00adef] to-[#5659a8] p-4 mb-6">
                  <valeur.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{valeur.title}</h3>
                <p className="text-gray-600">{valeur.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section Expertise */}
      <section className="py-32 bg-white">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Notre Expertise à Votre Service
              </h2>
              <ul className="space-y-6">
                {[
                  "Plus de 50 projets réalisés avec succès",
                  "Une équipe d'experts passionnés",
                  "Support technique réactif 24/7"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-4"
                    variants={fadeInUp}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00adef] bg-opacity-10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-[#00adef]" />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00adef] to-[#5659a8] transform rotate-3 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Notre équipe"
                className="relative z-10 rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section Statistiques */}
      <section className="py-32 bg-gray-50">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { chiffre: "150+", texte: "Projets Réalisés" },
              { chiffre: "50+", texte: "Clients Satisfaits" },
              { chiffre: "5+", texte: "Experts Passionnés" },
              { chiffre: "24/7", texte: "Support Client" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00adef] to-[#5659a8] bg-clip-text text-transparent">
                  {stat.chiffre}
                </h3>
                <p className="mt-2 text-gray-600">{stat.texte}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section Technologies */}
      <section className="py-32 bg-white">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies & Outils
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Nous utilisons les dernières technologies pour créer des solutions performantes
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={fadeInUp}
          >
            {[
              { nom: "React", icon: SiReact, couleur: "#61DAFB" },
              { nom: "Node.js", icon: SiNodedotjs, couleur: "#339933" },
              { nom: "Laravel", icon: SiLaravel, couleur: "#FF2D20" },
              { nom: "WordPress", icon: SiWordpress, couleur: "#21759B" },
              { nom: "Flutter", icon: SiFlutter, couleur: "#02569B" },
              { nom: "AWS", icon: SiAmazon, couleur: "#FF9900" },
              { nom: "Firebase", icon: SiFirebase, couleur: "#FFCA28" },
              { nom: "MongoDB", icon: SiMongodb, couleur: "#47A248" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <tech.icon className="w-12 h-12 mb-3" style={{ color: tech.couleur }} />
                  <p className="font-semibold text-gray-800">{tech.nom}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Section Témoignages */}
      <section className="py-32 bg-gray-50">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus grande réussite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                nom: "Marie Diop",
                poste: "Directrice Marketing, TechSen",
                texte: "L'équipe de L'influent a transformé notre présence en ligne. Leur expertise et leur professionnalisme sont remarquables.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              },
              {
                nom: "Abdou Sall",
                poste: "Fondateur, EcoShop",
                texte: "Un partenaire digital de confiance qui a su comprendre nos besoins et livrer des résultats exceptionnels.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              },
              {
                nom: "Fatou Ndiaye",
                poste: "CEO, InnovTech",
                texte: "Grâce à L'influent, notre transformation digitale a été un succès. Une équipe à l'écoute et très compétente.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              }
            ].map((temoignage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={temoignage.image}
                    alt={temoignage.nom}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{temoignage.nom}</h4>
                    <p className="text-sm text-gray-500">{temoignage.poste}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{temoignage.texte}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section Blog/Actualités */}
      <section className="py-32 bg-white">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dernières Actualités
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Restez informé des dernières tendances du digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(blogPosts)
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 3)
              .map((article) => (
                <Link 
                  key={`post-${article.id}`}
                  to={`/blog/${article.id}`} 
                  className="group"
                >
                  <motion.article
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden
                             hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-4 py-1.5 text-xs font-medium text-[#00adef] bg-blue-50 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00adef] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                          <img
                            src={article.author.avatar}
                            alt=""
                            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {article.author.name}
                          </span>
                        </div>

                        <div className="text-[#00adef] group/btn inline-flex items-center text-sm font-medium">
                          Lire plus
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            variants={fadeInUp}
          >
            <Link
              to="/blog"
              className="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-white border-2 border-[#00adef] text-[#00adef] hover:bg-gradient-to-r from-[#00adef] to-[#5659a8] hover:text-white hover:border-transparent transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Explorez notre blog pour plus d'insights</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Section CTA */}
      <motion.section 
        className="py-32 bg-gradient-to-r from-[#00adef] to-[#5659a8] relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Cercles décoratifs en arrière-plan */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2" />

        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            Prêt à Transformer Votre Vision en Réalité ?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Discutons de votre projet et trouvons ensemble la meilleure solution pour votre entreprise
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 text-lg font-medium rounded-full bg-white text-[#00adef] hover:shadow-xl hover:shadow-white/20 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>Commencer votre projet</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Accueil; 