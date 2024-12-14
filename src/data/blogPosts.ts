export interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
}

export const blogPosts: Record<string, BlogPost> = {
  "1": {
    id: 1,
    title: "Les tendances du développement web en 2024",
    excerpt: "Découvrez les technologies et pratiques qui façonnent le développement web moderne...",
    content: `
      <p>
        Le développement web continue d'évoluer à un rythme rapide en 2024. Les nouvelles technologies 
        et méthodologies transforment la façon dont nous construisons et déployons les applications web.
      </p>
      
      <h2>1. L'essor des architectures Jamstack</h2>
      <p>
        La Jamstack continue de gagner en popularité grâce à sa performance, sa sécurité et sa scalabilité.
        Les développeurs adoptent de plus en plus cette approche moderne du développement web.
      </p>

      <h2>2. L'importance croissante de la performance</h2>
      <p>
        Avec l'accent mis sur Core Web Vitals de Google, l'optimisation des performances devient 
        une priorité absolue pour les développeurs web.
      </p>

      <h2>3. L'adoption des micro-frontends</h2>
      <p>
        Les micro-frontends permettent aux équipes de travailler de manière plus indépendante 
        et d'adopter une approche modulaire du développement frontend.
      </p>

      <h2>4. L'évolution des frameworks JavaScript</h2>
      <p>
        React, Vue et Angular continuent d'évoluer, offrant de nouvelles fonctionnalités 
        et de meilleures performances. Les frameworks meta comme Next.js et Nuxt.js gagnent en popularité.
      </p>

      <h2>5. L'importance de l'accessibilité</h2>
      <p>
        L'accessibilité web devient une priorité majeure, avec une attention accrue portée 
        aux normes WCAG et aux bonnes pratiques d'inclusion numérique.
      </p>
    `,
    category: "Développement Web",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "15 Jan 2024",
    readTime: "5 min",
    author: {
      name: "Ndiaga Ndiaye",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Digital Manager"
    },
    tags: ["Web Development", "JavaScript", "React", "Performance"]
  },
  "2": {
    id: 2,
    title: "L'Intelligence Artificielle dans le Marketing Digital",
    excerpt: "Comment l'IA révolutionne les stratégies marketing et améliore l'engagement client...",
    content: `
      <p>
        L'intelligence artificielle transforme rapidement le paysage du marketing digital, 
        offrant de nouvelles opportunités pour personnaliser et optimiser les campagnes.
      </p>
      
      <h2>1. Personnalisation avancée</h2>
      <p>
        L'IA permet une personnalisation sans précédent des contenus et des offres, 
        en analysant le comportement des utilisateurs en temps réel.
      </p>

      <h2>2. Chatbots intelligents</h2>
      <p>
        Les chatbots nouvelle génération offrent une expérience client améliorée 
        avec des conversations plus naturelles et une meilleure compréhension du contexte.
      </p>

      <h2>3. Analyse prédictive</h2>
      <p>
        Les algorithmes d'IA peuvent prédire les tendances et comportements des consommateurs, 
        permettant des stratégies marketing plus efficaces.
      </p>
    `,
    category: "Marketing Digital",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "18 Jan 2024",
    readTime: "4 min",
    author: {
      name: "Ndiaga Ndiaye",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Digital Manager"
    },
    tags: ["Marketing Digital", "IA", "Innovation", "Stratégie"]
  },
  "3": {
    id: 3,
    title: "Design System : La clé d'une expérience utilisateur cohérente",
    excerpt: "Découvrez comment les design systems améliorent l'efficacité et la cohérence des interfaces...",
    content: `
      <p>
        Un design system bien construit est essentiel pour maintenir la cohérence 
        visuelle et fonctionnelle à travers toutes les interfaces d'un produit.
      </p>
      
      <h2>1. Composants réutilisables</h2>
      <p>
        La création de composants réutilisables permet d'accélérer le développement 
        et d'assurer une expérience utilisateur cohérente.
      </p>

      <h2>2. Documentation vivante</h2>
      <p>
        Une documentation complète et maintenue à jour est cruciale pour l'adoption 
        et l'évolution du design system.
      </p>

      <h2>3. Collaboration améliorée</h2>
      <p>
        Le design system facilite la collaboration entre designers et développeurs, 
        créant un langage commun pour l'équipe.
      </p>
    `,
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "20 Jan 2024",
    readTime: "6 min",
    author: {
      name: "Ndiaga Ndiaye",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Digital Manager"
    },
    tags: ["Design", "UX", "UI", "Design System"]
  },
  "4": {
    id: 4,
    title: "L'importance du SEO pour votre entreprise",
    excerpt: "Découvrez pourquoi le référencement naturel est crucial pour votre visibilité en ligne...",
    content: `
      <p>
        Le SEO (Search Engine Optimization) est devenu un élément incontournable 
        de toute stratégie de marketing digital efficace.
      </p>
      
      <h2>1. Visibilité accrue</h2>
      <p>
        Un bon référencement naturel permet d'augmenter significativement 
        votre visibilité dans les résultats de recherche.
      </p>

      <h2>2. Trafic qualifié</h2>
      <p>
        Le SEO attire un trafic ciblé et qualifié, composé d'utilisateurs 
        réellement intéressés par vos produits ou services.
      </p>

      <h2>3. ROI à long terme</h2>
      <p>
        Contrairement au référencement payant, le SEO offre des résultats 
        durables et un excellent retour sur investissement.
      </p>
    `,
    category: "Marketing Digital",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "22 Jan 2024",
    readTime: "4 min",
    author: {
      name: "Ndiaga Ndiaye",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Digital Manager"
    },
    tags: ["SEO", "Marketing Digital", "Stratégie", "Visibilité"]
  },
  "5": {
    id: 5,
    title: "Les meilleures pratiques UX/UI en 2024",
    excerpt: "Les tendances et bonnes pratiques pour créer des interfaces utilisateur exceptionnelles...",
    content: `
      <p>
        L'expérience utilisateur (UX) et l'interface utilisateur (UI) sont 
        au cœur de la conception de produits numériques modernes.
      </p>
      
      <h2>1. Design minimaliste</h2>
      <p>
        La simplicité et la clarté restent des principes fondamentaux 
        pour une expérience utilisateur optimale.
      </p>

      <h2>2. Accessibilité</h2>
      <p>
        La conception inclusive devient une priorité pour assurer une 
        expérience équitable pour tous les utilisateurs.
      </p>

      <h2>3. Mobile-first</h2>
      <p>
        L'approche mobile-first continue de guider la conception des 
        interfaces modernes.
      </p>
    `,
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "23 Jan 2024",
    readTime: "5 min",
    author: {
      name: "Ndiaga Ndiaye",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Digital Manager"
    },
    tags: ["UX", "UI", "Design", "Mobile"]
  },
  "6": {
    id: 6,
    title: "Comment réussir sa transformation digitale",
    excerpt: "Guide complet pour mener à bien la transformation numérique de votre entreprise...",
    content: `
      <p>
        La transformation digitale est devenue incontournable pour les entreprises 
        souhaitant rester compétitives dans l'économie moderne.
      </p>
      
      <h2>1. Stratégie claire</h2>
      <p>
        Une vision claire et une stratégie bien définie sont essentielles 
        pour réussir sa transformation digitale.
      </p>

      <h2>2. Culture d'entreprise</h2>
      <p>
        La transformation digitale nécessite un changement de culture 
        et l'adhésion de tous les collaborateurs.
      </p>

      <h2>3. Technologies adaptées</h2>
      <p>
        Le choix des bonnes technologies est crucial pour une 
        transformation réussie.
      </p>
    `,
    category: "Stratégie Digitale",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "24 Jan 2024",
    readTime: "6 min",
    author: {
      name: "Ndiaga Ndiaye",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      role: "Digital Manager"
    },
    tags: ["Transformation Digitale", "Innovation", "Stratégie", "Management"]
  }
};