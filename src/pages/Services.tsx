import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  BarChart, 
  Code, 
  Rocket, 
  CreditCard, 
  Building, 
  ShoppingBag, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  ArrowRight, 
  Database, 
  LineChart, 
  PieChart, 
  Table 
} from 'lucide-react';
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

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section avec design moderne */}
      <div className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-[#00adef] to-[#5659a8] overflow-hidden">
        {/* Motif de fond */}
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        
        {/* Cercles décoratifs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        
        {/* Points lumineux */}
        <div className="absolute top-20 right-40 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-white rounded-full animate-pulse delay-300" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6"
          >
            Solutions Digitales Innovantes
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Nos Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Des solutions digitales complètes pour propulser votre entreprise vers le succès
          </motion.p>
        </div>
      </div>

      {/* Services avec nouveau design */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {[
              {
                icon: Globe,
                title: "Conception de Sites Web",
                description: "Sites web professionnels et applications sur mesure avec les dernières technologies",
                features: [
                  "Sites vitrines professionnels",
                  "E-commerce performants",
                  "Applications web sur mesure",
                  "Interfaces intuitives"
                ]
              },
              {
                icon: Smartphone,
                title: "Développement d'Applications",
                description: "Applications iOS et Android performantes et intuitives pour votre entreprise",
                features: [
                  "Applications iOS et Android",
                  "Solutions métier",
                  "Intégration API",
                  "Maintenance évolutive"
                ]
              },
              {
                icon: BarChart,
                title: "Marketing Digital",
                description: "Stratégies marketing complètes pour augmenter votre visibilité en ligne",
                features: [
                  "SEO & SEA",
                  "Réseaux sociaux", 
                  "Email marketing",
                  "Content marketing"
                ]
              },
              {
                icon: Code,
                title: "Gestion de Contenu",
                description: "Solutions de gestion de contenu adaptées à vos besoins spécifiques",
                features: [
                  "CMS sur mesure",
                  "Gestion documentaire",
                  "Workflow d'approbation",
                  "Multi-utilisateurs"
                ]
              },
              {
                icon: Database,
                title: "Gestion de Bases de Données",
                description: "Solutions complètes de gestion et d'optimisation de bases de données",
                features: [
                  "Conception d'architecture",
                  "Migration de données",
                  "Optimisation des performances",
                  "Sécurisation des données"
                ]
              },
              {
                icon: LineChart,
                title: "Analyse de Données",
                description: "Exploitation et analyse approfondie de vos données pour des décisions éclairées",
                features: [
                  "Business Intelligence",
                  "Tableaux de bord",
                  "Modélisation prédictive",
                  "Reporting automatisé"
                ]
              }
            ].map((service, index) => (
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
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00adef] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#00adef] hover:text-[#5659a8] transition-colors group"
                >
                  <span className="font-medium">En savoir plus</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Secteurs d'Intervention */}
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
              Secteurs d'Intervention
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Notre expertise s'étend à de nombreux secteurs d'activité
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Building, name: "Immobilier" },
              { icon: ShoppingBag, name: "E-commerce" },
              { icon: Briefcase, name: "Entreprises" },
              { icon: GraduationCap, name: "Éducation" },
              { icon: Heart, name: "Santé" },
              { icon: Code, name: "Tech" },
              { icon: Rocket, name: "Startups" },
              { icon: BarChart, name: "Finance" }
            ].map((secteur, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-4 rounded-lg text-center group hover:bg-gradient-to-r hover:from-[#00adef] hover:to-[#5659a8] transition-colors"
              >
                <secteur.icon className="w-8 h-8 mx-auto mb-2 text-[#00adef] group-hover:text-white transition-colors" />
                <p className="text-gray-900 font-medium group-hover:text-white transition-colors">
                  {secteur.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Réductions Spéciales */}
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
              Offres Spéciales
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Profitez de nos réductions pour démarrer votre projet
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Pack Startup",
                discount: "-20%",
                description: "Pour les nouvelles entreprises",
                conditions: "Valable pour tout nouveau client"
              },
              {
                title: "Pack Fidélité",
                discount: "-15%",
                description: "Pour nos clients existants",
                conditions: "Sur les services additionnels"
              }
            ].map((offre, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{offre.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{offre.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-[#00adef]">{offre.discount}</span>
                </div>
                <p className="text-sm text-gray-500">{offre.conditions}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modalités de Paiement */}
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
              Modalités de Paiement
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Des solutions de paiement flexibles adaptées à vos besoins
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: CreditCard,
                title: "Paiement en 3 fois",
                description: "30% à la commande, 40% au développement, 30% à la livraison"
              },
              {
                icon: CreditCard,
                title: "Paiement Mensuel",
                description: "Étalez vos paiements sur plusieurs mois"
              },
              {
                icon: CreditCard,
                title: "Paiement Comptant",
                description: "Bénéficiez d'une remise de 5% sur le montant total"
              }
            ].map((modalite, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <modalite.icon className="w-8 h-8 text-[#00adef] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{modalite.title}</h3>
                <p className="text-sm text-gray-600">{modalite.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#00adef] to-[#5659a8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6"
          >
            Prêt à Démarrer Votre Projet ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/90 mb-8"
          >
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
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
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Nouvelle section spécialisée */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expertise en Données
            </h2>
            <p className="text-lg text-gray-600">
              Solutions avancées pour l'analyse et la gestion de vos données
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="bg-white p-8 rounded-2xl shadow-sm">
              <PieChart className="w-12 h-12 text-[#00adef] mb-6" />
              <h3 className="text-xl font-bold mb-4">Analyse de Données</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00adef]" />
                  <span>Analyse prédictive et Machine Learning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00adef]" />
                  <span>Visualisation de données interactive</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00adef]" />
                  <span>KPIs et métriques personnalisées</span>
                </li>
              </ul>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-2xl shadow-sm">
              <Table className="w-12 h-12 text-[#00adef] mb-6" />
              <h3 className="text-xl font-bold mb-4">Gestion de Bases de Données</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00adef]" />
                  <span>Conception et modélisation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00adef]" />
                  <span>Administration et maintenance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00adef]" />
                  <span>Sécurité et sauvegarde</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 