import { TranslationData } from './types';

const IMAGES = {
  store: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800", // Women's Fashion
  glow: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800", // Beauty Salon
  vamous: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800", // Padel Court
  arena: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", // Logistics/Warehouse
  profile: "https://media.licdn.com/dms/image/v2/D4D03AQEXyRG4dCEMUw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706954783218?e=1766016000&v=beta&t=Jr53od_Z6GKoKkV_TQgEb-NLJ2ehlZ794qwhbVVHlBQ", 
};

// Google Drive Direct Download Links
const CVS = {
  en: "https://drive.google.com/uc?export=download&id=1OkmN6xoxNweMxOK_N0_90BL1jo2xn_0n",
  fr: "https://drive.google.com/uc?export=download&id=11m7_5QHuPBPT3P_Ochn8pS1dgh2PcYbH",
  ar: "https://drive.google.com/uc?export=download&id=1FnHOIzHMdyaKt6UAm_w_WnFuvKNSg97j"
};

// Company Logos for Timeline & Project Cards
export const LOGOS = {
  saison: "https://instagram.ftun10-1.fna.fbcdn.net/v/t51.2885-19/572203370_18058281935550364_8006158136652469657_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xNTAuYzIifQ&_nc_ht=instagram.ftun10-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QH1SXIr4mbLGXEL4I0SlaBJ8CnHx9SNjbuSYGJQvAbYnR2RWQMIb_QTVGsHti6M3Aw&_nc_ohc=oQV9bqJnNQcQ7kNvwE_AIvM&_nc_gid=qh3DJFuLxVtxsV5mgrLUUQ&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfiaWdmRoo_ao83DHu7eXjDMto6eguXYrGdCmSyRm8V-iw&oe=692B4B1F&_nc_sid=22de04",
  glow: "https://instagram.ftun10-1.fna.fbcdn.net/v/t51.2885-19/497461737_17845470528476935_5572991284823016028_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.ftun10-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QE2zt-AenNOj6JfR0NN9OdHrDiChOTvn0sXN3cebcGVqSphcZaTB-OVeAGU3KJGbRQ&_nc_ohc=xkKGN-VFQ2sQ7kNvwE7pUnm&_nc_gid=F-lSBp_RaOLU8DZmhEGD6Q&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afjvqg13B17bNDYr36dHE-8l0XUAr-RV7Y9cIQwq8Job_w&oe=692B3EBE&_nc_sid=7a9f4b",
  vamous: "https://instagram.ftun10-1.fna.fbcdn.net/v/t51.2885-19/504285857_17848812090496822_2265428684422539717_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.ftun10-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGUMrOgkIOwtnI8U9v6FONcBnKHKYYUbARSaKzbkjoK65xvkwjVOblZ1GKaBtWsK6k&_nc_ohc=iIQvzXkrMLoQ7kNvwHb41Z2&_nc_gid=WU-UYjeMiEQ1t8RHG3Aryw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfjpHvD8Ud7gZGTLoA0yZM3PZYXivLbyPtSoBr1IwGn8HQ&oe=692B274C&_nc_sid=22de04",
  piximind: "https://www.piximind.com/themes/pkurg-spacebootstrap5/assets/img/svg/logo.svg",
  ouiwin: "https://ouiwin.fr/wp-content/uploads/2020/09/logo-ouiwin-final-100.png",
  arena: "https://arenapro.ae/wp-content/uploads/2023/10/Arena-Pro-Logo.png"
};

export const TRANSLATIONS: Record<'en' | 'fr' | 'ar', TranslationData> = {
  en: {
    personalInfo: {
      name: "Mohamed Yassin Ezzedine",
      title: "Marketing Director & Digital Marketer",
      focus: "Performance, Acquisition, Branding & Automation",
      email: "mohamedyassinezzedine@gmail.com",
      phone: "44105594",
      linkedin: "https://www.linkedin.com/in/mohamed-yassin-ezzedine",
      summary: "Marketing Director at 5e Saison Store and Digital Marketer specialized in strategy, acquisition, and branding. Combining creativity and analytics to drive growth.",
      location: "Tunisia",
      specialty: "Performance & CRM",
      education_short: "Education Master in CRM & Digital Transformations",
      contact_btn: "Contact Me",
      linkedin_btn: "View LinkedIn",
      download_cv: "Download CV",
      cv_en: CVS.en,
      cv_fr: CVS.fr,
      cv_ar: CVS.ar,
      open_to_work: "Open for Opportunities",
      hero_title_1: "Driving Growth through",
      hero_title_2: "Data",
      hero_title_3: "Creativity",
      hero_intro: "I'm Mohamed Yassin Ezzedine. Currently Marketing Director at 5e Saison Store, I combine strategy and creativity to build impactful campaigns. Specializing in SEO, paid ads, and content creation, I leverage data to optimize online presence and drive growth. I am committed to delivering excellence through analytical rigor and innovative digital solutions.",
      profile_image: IMAGES.profile
    },
    navigation: {
      about: "About",
      performance: "Performance",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact"
    },
    sectionTitles: {
      performance_title: "Proven Impact",
      performance_subtitle: "My strategies don't just look good—they perform. Here is a snapshot of the impact I've delivered in recent roles.",
      performance_chart_title: "Performance Overview",
      performance_chart_desc: "Consistently driving double-digit growth across key marketing KPIs through data-driven optimization and creative storytelling.",
      experience_title: "Professional Journey",
      experience_subtitle: "A track record of taking initiative and delivering results, from freelance projects to directing marketing operations.",
      skills_tech_title: "Technical Proficiency",
      skills_edu_title: "Education",
      projects_title: "Featured Projects",
      projects_subtitle: "A selection of recent work highlighting my expertise in driving growth, building brands, and optimizing performance.",
      contact_title: "Let's Work Together.",
      contact_subtitle: "Ready to accelerate your brand's growth? I'm currently available for full-time opportunities or freelance consulting.",
      quick_summary: "Quick Summary",
      certifications: "Certifications",
      key_results: "Key Results",
      process_title: "My Process",
      process_subtitle: "A data-driven approach to scaling businesses."
    },
    ticker: ["STRATEGY", "GROWTH", "BRANDING", "AUTOMATION", "PERFORMANCE", "SEO", "ADS", "CRM", "CONTENT"],
    process: [
      { id: '1', title: "Discovery", description: "Analyzing market gaps and brand potential.", icon: 'search' },
      { id: '2', title: "Strategy", description: "Crafting data-driven roadmaps for growth.", icon: 'strategy' },
      { id: '3', title: "Execution", description: "Launching high-impact campaigns & systems.", icon: 'rocket' },
      { id: '4', title: "Optimization", description: "Scaling results through continuous iteration.", icon: 'chart' }
    ],
    experiences: [
      {
        id: '1',
        role: "Marketing Director",
        company: "5e Saison Store",
        logo: LOGOS.saison,
        period: "Since Sept. 2024",
        type: 'job',
        description: "Leading e-commerce growth strategies for a Loungewear brand, managing full-funnel acquisition, content production, and retention systems.",
        achievements: [
          { label: "Traffic Growth", value: "+38% Qualified Traffic" },
          { label: "Conversion", value: "+22% CVR Improvement" },
          { label: "Avg Order Value", value: "+18% AOV Growth" },
          { label: "Engagement", value: "+40% Instagram Growth" },
          { label: "Cart Recovery", value: "35% via Brevo Automation" }
        ]
      },
      {
        id: '2',
        role: "Freelance Brand Consultant",
        company: "Glow by Manel",
        logo: LOGOS.glow,
        period: "2024",
        type: 'freelance',
        description: "Complete branding, launch strategy, and customer retention systems for a new beauty salon.",
        achievements: [
          { label: "Acquisition", value: "1200+ Clients in 4 months" },
          { label: "Brand Identity", value: "Slogan & Visual Identity" },
          { label: "Social Media", value: "Full Setup & Content Strategy" }
        ]
      },
      {
        id: '3',
        role: "Sponsorship Coordinator",
        company: "Vamous Club",
        logo: LOGOS.vamous,
        period: "2024",
        type: 'freelance',
        description: "Strategic sponsorship acquisition and market positioning for a Padel, Tennis & Football club.",
        achievements: [
          { label: "Partnerships", value: "4 Major Sponsors Secured" },
          { label: "Revenue", value: "Projected +15% Growth" },
          { label: "Reservations", value: "Optimized Booking Flow" }
        ]
      },
      {
        id: '4',
        role: "Marketing & Product Developer",
        company: "Piximind (SaaS)",
        logo: LOGOS.piximind,
        period: "Feb - May 2024",
        type: 'job',
        description: "Market research, product positioning, and funnel optimization for a mental wellness SaaS.",
        achievements: [
          { label: "Funnel Optimization", value: "+18% Conversion Rate" },
          { label: "Launch", value: "SaaS Product Market Fit" },
          { label: "Content", value: "Produced Video Ads" },
          { label: "Landing Page", value: "High CTR Design" }
        ]
      },
      {
        id: '5',
        role: "Purchasing Department Manager",
        company: "Arena Pro",
        logo: LOGOS.arena,
        period: "Nov 2023 - Jan 2024",
        type: 'job',
        description: "Managed supplier negotiations, CRM order tracking, and inventory monitoring. Coordinated with marketing and sales teams.",
        achievements: [
          { label: "Cost Reduction", value: "12% via Negotiation" },
          { label: "Process", value: "Optimized Purchasing Flow" }
        ]
      },
      {
        id: '6',
        role: "Assistant Marketing Manager",
        company: "OuiWin",
        logo: LOGOS.ouiwin,
        period: "2021 & 2023",
        type: 'job',
        description: "Managed social media, created visual content, optimized SEO, and developed websites using WordPress & PrestaShop.",
        achievements: [
          { label: "Engagement", value: "+28% Social Media Growth" },
          { label: "SEO", value: "Multi-site Optimization" },
          { label: "Web Dev", value: "WordPress & PrestaShop" }
        ]
      }
    ],
    skills: [
      {
        title: "Digital Strategy",
        icon: 'strategy',
        skills: ["Meta Ads", "Google Ads", "SEO", "Market Research", "CRO", "Copywriting", "Brand Strategy"]
      },
      {
        title: "CRM & Technical",
        icon: 'tech',
        skills: ["Brevo", "HubSpot CRM", "WordPress", "PrestaShop", "Shopify", "Zapier", "UX/UI Design"]
      },
      {
        title: "Creative & Analytics",
        icon: 'creative',
        skills: ["Photoshop", "Illustrator", "Premiere", "Google Analytics", "CapCut", "Canva", "Figma", "After Effects"]
      },
      {
        title: "AI & Productivity",
        icon: 'ai',
        skills: ["ChatGPT", "Gemini", "Veo", "Google AI", "Midjourney", "Notion", "Claude", "Jasper"]
      }
    ],
    performance: [
      { name: 'Traffic', value: 40, label: 'Traffic Growth', suffix: '%', color: '#4f46e5' },
      { name: 'Engagement', value: 40, label: 'Social Engagement', suffix: '%', color: '#ec4899' },
      { name: 'Recovery', value: 35, label: 'Cart Recovery', suffix: '%', color: '#10b981' },
      { name: 'CVR', value: 25, label: 'Conversion Rate', suffix: '%', color: '#f59e0b' },
    ],
    education: [
      { degree: "Master in CRM & Digital Transformations", school: "FSEG Sfax", year: "2022 – 2024" },
      { degree: "Licence in Marketing", school: "ISAA Sfax", year: "2018 – 2022" },
      { degree: "Pedagogical Enterprise Training", school: "Arena Pro", year: "2023 – 2024" }
    ],
    projects: [
      {
        id: 'p1',
        title: "5e Saison Store",
        category: "E-commerce & Fashion",
        description: "Scaling a women's loungewear brand through full-funnel acquisition and automated retention strategies.",
        results: ["+38% Qualified Traffic", "+22% CVR Improvement", "+18% AOV"],
        image: IMAGES.store,
        tags: ["Meta Ads", "SEO", "Brevo CRM", "UX/UI"]
      },
      {
        id: 'p2',
        title: "Glow by Manel",
        category: "Brand Launch & Identity",
        description: "End-to-end branding and launch strategy for a premium beauty salon, establishing local market dominance.",
        results: ["1200+ Clients in 4 Months", "Brand Identity Creation", "Social Media Setup"],
        image: IMAGES.glow,
        tags: ["Branding", "Social Media", "Local SEO", "Content"]
      },
      {
        id: 'p3',
        title: "Vamous Club",
        category: "Sports Marketing",
        description: "Structuring sponsorship packages and refining brand positioning for a major Padel & sports complex.",
        results: ["4 Major Sponsors Secured", "Revenue Growth Model", "Booking Optimization"],
        image: IMAGES.vamous,
        tags: ["B2B Sales", "Sponsorships", "Event Marketing", "Negotiation"]
      },
      {
        id: 'p4',
        title: "OuiWin",
        category: "Digital Agency",
        description: "Managing digital presence for multiple clients, focusing on SEO, social media growth, and website development.",
        results: ["+28% Social Engagement", "SEO Optimization", "Web Development"],
        image: LOGOS.ouiwin,
        tags: ["WordPress", "PrestaShop", "Social Media", "SEO"]
      },
      {
        id: 'p5',
        title: "Arena Pro",
        category: "Operations & Management",
        description: "Optimizing supply chain operations and implementing CRM systems for efficient order tracking and inventory management.",
        results: ["12% Cost Reduction", "CRM Implementation", "Process Optimization"],
        image: IMAGES.arena,
        tags: ["CRM", "Supply Chain", "Negotiation", "Management"]
      },
      {
        id: 'p6',
        title: "Piximind",
        category: "SaaS & Mental Wellness",
        description: "Optimizing product positioning and sales funnels for a mental wellness SaaS application.",
        results: ["+18% Taux Conversion", "Production Pubs Vidéo", "Design à fort CTR"],
        image: LOGOS.piximind,
        tags: ["Market Research", "Funnel", "Product Growth", "Video Ads"]
      }
    ]
  },
  
  fr: {
    personalInfo: {
      name: "Mohamed Yassin Ezzedine",
      title: "Directeur Marketing & Digital Marketer",
      focus: "Performance, Acquisition, Branding & Automation",
      email: "mohamedyassinezzedine@gmail.com",
      phone: "44105594",
      linkedin: "https://www.linkedin.com/in/mohamed-yassin-ezzedine",
      summary: "Directeur Marketing chez 5e Saison Store et Marketeur Digital spécialisé en stratégie, acquisition et branding. Alliant créativité et analyse pour stimuler la croissance.",
      location: "Tunisie",
      specialty: "Performance & CRM",
      education_short: "Éducation Master en CRM & Transformations Digitales",
      contact_btn: "Contactez-moi",
      linkedin_btn: "Voir LinkedIn",
      download_cv: "Télécharger CV",
      cv_en: CVS.en,
      cv_fr: CVS.fr,
      cv_ar: CVS.ar,
      open_to_work: "À l'écoute d'opportunités",
      hero_title_1: "Stimuler la croissance par la",
      hero_title_2: "Data",
      hero_title_3: "Créativité",
      hero_intro: "Je suis Mohamed Yassin Ezzedine. Actuellement Directeur Marketing chez 5e Saison Store, je combine stratégie et créativité pour concevoir des campagnes percutantes. Spécialisé en SEO, publicités payantes et création de contenu, j'exploite les données pour optimiser la présence en ligne et générer de la croissance. Je m'engage à l'excellence par une rigueur analytique et des solutions digitales innovantes.",
      profile_image: IMAGES.profile
    },
    navigation: {
      about: "À propos",
      performance: "Performance",
      projects: "Projets",
      experience: "Expérience",
      skills: "Compétences",
      contact: "Contact"
    },
    sectionTitles: {
      performance_title: "Impact Prouvé",
      performance_subtitle: "Mes stratégies ne sont pas seulement esthétiques, elles sont performantes. Voici un aperçu de l'impact que j'ai eu dans mes rôles récents.",
      performance_chart_title: "Aperçu des Performances",
      performance_chart_desc: "Une croissance à deux chiffres constante sur les KPI marketing clés grâce à l'optimisation des données et au storytelling créatif.",
      experience_title: "Parcours Professionnel",
      experience_subtitle: "Un historique de prises d'initiative et de résultats, des projets freelance à la direction des opérations marketing.",
      skills_tech_title: "Compétences Techniques",
      skills_edu_title: "Éducation",
      projects_title: "Projets à la Une",
      projects_subtitle: "Une sélection de travaux récents mettant en valeur mon expertise en croissance, branding et optimisation.",
      contact_title: "Travaillons Ensemble.",
      contact_subtitle: "Prêt à accélérer la croissance de votre marque ? Je suis disponible pour des opportunités à temps plein ou du consulting freelance.",
      quick_summary: "Résumé Rapide",
      certifications: "Certifications",
      key_results: "Résultats Clés",
      process_title: "Ma Méthodologie",
      process_subtitle: "Une approche axée sur les données pour faire évoluer les entreprises."
    },
    ticker: ["STRATÉGIE", "CROISSANCE", "BRANDING", "AUTOMATION", "PERFORMANCE", "SEO", "ADS", "CRM", "CONTENU"],
    process: [
      { id: '1', title: "Découverte", description: "Analyse des lacunes du marché et du potentiel de la marque.", icon: 'search' },
      { id: '2', title: "Stratégie", description: "Création de feuilles de route axées sur les données.", icon: 'strategy' },
      { id: '3', title: "Exécution", description: "Lancement de campagnes et de systèmes à fort impact.", icon: 'rocket' },
      { id: '4', title: "Optimisation", description: "Mise à l'échelle des résultats par itération continue.", icon: 'chart' }
    ],
    experiences: [
      {
        id: '1',
        role: "Directeur Marketing",
        company: "5e Saison Store",
        logo: LOGOS.saison,
        period: "Depuis Sept. 2024",
        type: 'job',
        description: "Pilotage des stratégies de croissance e-commerce pour une marque de Loungewear : acquisition full-funnel, production de contenu et rétention.",
        achievements: [
          { label: "Trafic", value: "+38% Trafic Qualifié" },
          { label: "Conversion", value: "+22% Amélioration CVR" },
          { label: "Panier Moyen", value: "+18% Croissance AOV" },
          { label: "Engagement", value: "+40% Croissance Instagram" },
          { label: "Récupération", value: "35% via Automation Brevo" }
        ]
      },
      {
        id: '2',
        role: "Consultant Brand Freelance",
        company: "Glow by Manel",
        logo: LOGOS.glow,
        period: "2024",
        type: 'freelance',
        description: "Branding complet, stratégie de lancement et systèmes de fidélisation pour un nouveau salon de beauté.",
        achievements: [
          { label: "Acquisition", value: "1200+ Clients en 4 mois" },
          { label: "Identité", value: "Slogan & Identité Visuelle" },
          { label: "Réseaux Sociaux", value: "Setup Complet & Stratégie" }
        ]
      },
      {
        id: '3',
        role: "Coordinateur Sponsoring",
        company: "Vamous Club",
        logo: LOGOS.vamous,
        period: "2024",
        type: 'freelance',
        description: "Acquisition stratégique de sponsors et positionnement marché pour un complexe de Padel, Tennis & Football.",
        achievements: [
          { label: "Partenariats", value: "4 Sponsors Majeurs" },
          { label: "Revenus", value: "Projection +15% Croissance" },
          { label: "Réservations", value: "Flux optimisé" }
        ]
      },
      {
        id: '4',
        role: "Marketing & Product Developer",
        company: "Piximind (SaaS)",
        logo: LOGOS.piximind,
        period: "Fév - Mai 2024",
        type: 'job',
        description: "Étude de marché, positionnement produit et optimisation du funnel pour un SaaS de bien-être mental.",
        achievements: [
          { label: "Optimisation Funnel", value: "+18% Taux de Conversion" },
          { label: "Lancement", value: "Product Market Fit" },
          { label: "Contenu", value: "Production Publicités Vidéo" },
          { label: "Landing Page", value: "Design à fort CTR" }
        ]
      },
      {
        id: '5',
        role: "Responsable Service Achat",
        company: "Arena Pro",
        logo: LOGOS.arena,
        period: "Nov 2023 - Jan 2024",
        type: 'job',
        description: "Négociation fournisseurs, suivi des commandes CRM et gestion des stocks. Coordination avec les équipes marketing et commerciales.",
        achievements: [
          { label: "Réduction Coûts", value: "12% via Négociation" },
          { label: "Processus", value: "Flux d'achat optimisé" }
        ]
      },
      {
        id: '6',
        role: "Assistant Responsable Marketing",
        company: "OuiWin",
        logo: LOGOS.ouiwin,
        period: "2021 & 2023",
        type: 'job',
        description: "Gestion des réseaux sociaux, création de contenu visuel, optimisation SEO et développement de sites WordPress & PrestaShop.",
        achievements: [
          { label: "Engagement", value: "+28% Croissance Social Media" },
          { label: "SEO", value: "Optimisation Multi-sites" },
          { label: "Dév Web", value: "WordPress & PrestaShop" }
        ]
      }
    ],
    skills: [
      {
        title: "Stratégie Digitale",
        icon: 'strategy',
        skills: ["Meta Ads", "Google Ads", "SEO", "Étude de Marché", "CRO", "Copywriting", "Stratégie de Marque"]
      },
      {
        title: "CRM & Technique",
        icon: 'tech',
        skills: ["Brevo", "HubSpot CRM", "WordPress", "PrestaShop", "Shopify", "Zapier", "UX/UI Design"]
      },
      {
        title: "Créatif & Analytics",
        icon: 'creative',
        skills: ["Photoshop", "Illustrator", "Premiere", "Google Analytics", "CapCut", "Canva", "Figma", "After Effects"]
      },
      {
        title: "IA & Outils",
        icon: 'ai',
        skills: ["ChatGPT", "Gemini", "Veo", "Google AI", "Midjourney", "Notion", "Claude", "Jasper"]
      }
    ],
    performance: [
      { name: 'Trafic', value: 40, label: 'Croissance Trafic', suffix: '%', color: '#4f46e5' },
      { name: 'Engagement', value: 40, label: 'Engagement Social', suffix: '%', color: '#ec4899' },
      { name: 'Récup.', value: 35, label: 'Récup. Panier', suffix: '%', color: '#10b981' },
      { name: 'CVR', value: 25, label: 'Taux Conversion', suffix: '%', color: '#f59e0b' },
    ],
    education: [
      { degree: "Master en CRM & Transformations Digitales", school: "FSEG Sfax", year: "2022 – 2024" },
      { degree: "Licence en Marketing", school: "ISAA Sfax", year: "2018 – 2022" },
      { degree: "Formation en Entreprise Pédagogique", school: "Arena Pro", year: "2023 – 2024" }
    ],
    projects: [
      {
        id: 'p1',
        title: "5e Saison Store",
        category: "Mode & E-commerce",
        description: "Scaling d'une marque de vêtements pour femmes via l'acquisition full-funnel et des stratégies de rétention automatisées.",
        results: ["+38% Trafic Qualifié", "+22% Amélioration CVR", "+18% Panier Moyen"],
        image: IMAGES.store,
        tags: ["Meta Ads", "SEO", "Brevo CRM", "UX/UI"]
      },
      {
        id: 'p2',
        title: "Glow by Manel",
        category: "Lancement de Marque",
        description: "Branding complet et stratégie de lancement pour un salon de beauté premium, établissant une dominance locale.",
        results: ["1200+ Clients en 4 Mois", "Création Identité", "Setup Réseaux Sociaux"],
        image: IMAGES.glow,
        tags: ["Branding", "Social Media", "SEO Local", "Contenu"]
      },
      {
        id: 'p3',
        title: "Vamous Club",
        category: "Marketing Sportif",
        description: "Structuration des packages de sponsoring et affinement du positionnement pour un complexe de Padel majeur.",
        results: ["4 Sponsors Majeurs", "Modèle Croissance Revenus", "Optimisation Réservations"],
        image: IMAGES.vamous,
        tags: ["Vente B2B", "Sponsoring", "Marketing Événementiel", "Négociation"]
      },
      {
        id: 'p4',
        title: "OuiWin",
        category: "Agence Digitale",
        description: "Gestion de la présence digitale pour plusieurs clients, focus sur le SEO, la croissance sociale et le développement web.",
        results: ["+28% Engagement Social", "Optimisation SEO", "Développement Web"],
        image: LOGOS.ouiwin,
        tags: ["WordPress", "PrestaShop", "Social Media", "SEO"]
      },
      {
        id: 'p5',
        title: "Arena Pro",
        category: "Opérations & Management",
        description: "Optimisation de la chaîne logistique et implémentation de systèmes CRM pour le suivi des commandes.",
        results: ["12% Réduction Coûts", "Implémentation CRM", "Optimisation Processus"],
        image: IMAGES.arena,
        tags: ["CRM", "Supply Chain", "Négociation", "Management"]
      },
      {
        id: 'p6',
        title: "Piximind",
        category: "SaaS & Bien-être",
        description: "Optimisation du positionnement produit et des funnels de vente pour une application de bien-être mental.",
        results: ["+18% Taux Conversion", "Production Pubs Vidéo", "Design à fort CTR"],
        image: LOGOS.piximind,
        tags: ["Étude de Marché", "Funnel", "Croissance Produit", "Vidéo"]
      }
    ]
  },

  ar: {
    personalInfo: {
      name: "محمد ياسين عز الدين",
      title: "مدير تسويق ومسوق رقمي",
      focus: "الأداء، الاستحواذ، العلامة التجارية والأتمتة",
      email: "mohamedyassinezzedine@gmail.com",
      phone: "44105594",
      linkedin: "https://www.linkedin.com/in/mohamed-yassin-ezzedine",
      summary: "مدير تسويق في 5e Saison Store ومسوق رقمي متخصص في الاستراتيجية والاستحواذ والعلامة التجارية. أجمع بين الإبداع والتحليل لدفع عجلة النمو.",
      location: "تونس",
      specialty: "الأداء و CRM",
      education_short: "التعليم ماجستير في CRM والتحولات الرقمية",
      contact_btn: "تواصل معي",
      linkedin_btn: "زيارة LinkedIn",
      download_cv: "تحميل السيرة الذاتية",
      cv_en: CVS.en,
      cv_fr: CVS.fr,
      cv_ar: CVS.ar,
      open_to_work: "متاح لفرص العمل",
      hero_title_1: "قيادة النمو من خلال",
      hero_title_2: "البيانات",
      hero_title_3: "والإبداع",
      hero_intro: "أنا محمد ياسين عز الدين. بصفتي مدير التسويق الحالي في 5e Saison Store، أجمع بين الاستراتيجية والإبداع لبناء حملات مؤثرة. متخصص في تحسين محركات البحث، والإعلانات المدفوعة، وإنشاء المحتوى، وأوظف البيانات لتعزيز التواجد الرقمي ودفع عجلة النمو. أنا ملتزم بتقديم التميز من خلال الدقة التحليلية والحلول الرقمية المبتكرة.",
      profile_image: IMAGES.profile
    },
    navigation: {
      about: "حول",
      performance: "الأداء",
      projects: "المشاريع",
      experience: "الخبرة",
      skills: "المهارات",
      contact: "اتصل بي"
    },
    sectionTitles: {
      performance_title: "تأثير مثبت",
      performance_subtitle: "استراتيجياتي لا تبدو جيدة فحسب، بل تحقق نتائج. إليك لمحة سريعة عن التأثير الذي حققته في أدواري الأخيرة.",
      performance_chart_title: "نظرة عامة على الأداء",
      performance_chart_desc: "تحقيق نمو مستمر بأرقام مزدوجة عبر مؤشرات الأداء الرئيسية للتسويق من خلال تحسين البيانات والسرد القصصي الإبداعي.",
      experience_title: "المسيرة المهنية",
      experience_subtitle: "سجل حافل في المبادرة وتحقيق النتائج، من المشاريع المستقلة إلى إدارة عمليات التسويق.",
      skills_tech_title: "الكفاءة التقنية",
      skills_edu_title: "التعليم",
      projects_title: "مشاريع مميزة",
      projects_subtitle: "مجموعة مختارة من الأعمال الحديثة التي تبرز خبرتي في قيادة النمو، وبناء العلامات التجارية، وتحسين الأداء.",
      contact_title: "لنعمل معاً",
      contact_subtitle: "هل أنت مستعد لتسريع نمو علامتك التجارية؟ أنا متاح حالياً لفرص العمل بدوام كامل أو الاستشارات المستقلة.",
      quick_summary: "ملخص سريع",
      certifications: "الشهادات",
      key_results: "النتائج الرئيسية",
      process_title: "منهجيتي",
      process_subtitle: "نهج قائم على البيانات لتوسيع نطاق الأعمال."
    },
    ticker: ["استراتيجية", "نمو", "علامة تجارية", "أتمتة", "أداء", "SEO", "إعلانات", "CRM", "محتوى"],
    process: [
      { id: '1', title: "اكتشاف", description: "تحليل فجوات السوق وإمكانات العلامة التجارية.", icon: 'search' },
      { id: '2', title: "استراتيجية", description: "صياغة خرائط طريق قائمة على البيانات للنمو.", icon: 'strategy' },
      { id: '3', title: "تنفيذ", description: "إطلاق حملات وأنظمة ذات تأثير عالي.", icon: 'rocket' },
      { id: '4', title: "تحسين", description: "توسيع نطاق النتائج من خلال التكرار المستمر.", icon: 'chart' }
    ],
    experiences: [
      {
        id: '1',
        role: "مدير تسويق",
        company: "5e Saison Store",
        logo: LOGOS.saison,
        period: "منذ سبتمبر 2024",
        type: 'job',
        description: "قيادة استراتيجيات نمو التجارة الإلكترونية لعلامة تجارية للملابس، وإدارة الاستحواذ الكامل، وإنتاج المحتوى، وأنظمة الاحتفاظ بالعملاء.",
        achievements: [
          { label: "نمو الزيارات", value: "+38% زيارات مؤهلة" },
          { label: "التحويل", value: "+22% تحسين معدل التحويل" },
          { label: "متوسط الطلب", value: "+18% نمو قيمة الطلب" },
          { label: "التفاعل", value: "+40% نمو على انستغرام" },
          { label: "استعادة السلة", value: "35% عبر أتمتة Brevo" }
        ]
      },
      {
        id: '2',
        role: "استشاري علامة تجارية",
        company: "Glow by Manel",
        logo: LOGOS.glow,
        period: "2024",
        type: 'freelance',
        description: "بناء العلامة التجارية بالكامل، استراتيجية الإطلاق، وأنظمة الحفاظ على العملاء لصالون تجميل جديد.",
        achievements: [
          { label: "الاستحواذ", value: "1200+ عميل في 4 أشهر" },
          { label: "الهوية", value: "الشعار والهوية البصرية" },
          { label: "السوشيال ميديا", value: "إعداد كامل واستراتيجية المحتوى" }
        ]
      },
      {
        id: '3',
        role: "منسق رعاية",
        company: "Vamous Club",
        logo: LOGOS.vamous,
        period: "2024",
        type: 'freelance',
        description: "الاستحواذ الاستراتيجي على الرعاة وتحديد موقع السوق لنادي بادل، تنس وكرة قدم.",
        achievements: [
          { label: "الشراكات", value: "4 رعاة رئيسيين" },
          { label: "الإيرادات", value: "توقعات نمو +15%" },
          { label: "الحجوزات", value: "تحسين تدفق الحجز" }
        ]
      },
      {
        id: '4',
        role: "مطور تسويق ومنتجات",
        company: "Piximind (SaaS)",
        logo: LOGOS.piximind,
        period: "فبراير - مايو 2024",
        type: 'job',
        description: "أبحاث السوق، تحديد موقع المنتج، وتحسين قمع التحويل لمنصة الصحة العقلية.",
        achievements: [
          { label: "تحسين القمع", value: "+18% معدل التحويل" },
          { label: "الإطلاق", value: "ملاءمة المنتج للسوق" },
          { label: "المحتوى", value: "إنتاج إعلانات فيديو" },
          { label: "صفحة الهبوط", value: "تصميم بنسبة نقر عالية" }
        ]
      },
      {
        id: '5',
        role: "مدير قسم المشتريات",
        company: "Arena Pro",
        logo: LOGOS.arena,
        period: "نوفمبر 2023 - يناير 2024",
        type: 'job',
        description: "إدارة مفاوضات الموردين، تتبع طلبات CRM، ومراقبة المخزون. التنسيق مع فرق التسويق والمبيعات.",
        achievements: [
          { label: "خفص التكاليف", value: "12% عبر التفاوض" },
          { label: "العمليات", value: "تحسين تدفق الشراء" }
        ]
      },
      {
        id: '6',
        role: "مساعد مدير تسويق",
        company: "OuiWin",
        logo: LOGOS.ouiwin,
        period: "2021 & 2023",
        type: 'job',
        description: "إدارة وسائل التواصل الاجتماعي، إنشاء محتوى مرئي، تحسين محركات البحث، وتطوير مواقع باستخدام WordPress و PrestaShop.",
        achievements: [
          { label: "التفاعل", value: "+28% نمو السوشيال ميديا" },
          { label: "SEO", value: "تحسين مواقع متعددة" },
          { label: "تطوير ويب", value: "WordPress & PrestaShop" }
        ]
      }
    ],
    skills: [
      {
        title: "الاستراتيجية الرقمية",
        icon: 'strategy',
        skills: ["Meta Ads", "Google Ads", "SEO", "أبحاث السوق", "CRO", "كتابة المحتوى", "استراتيجية العلامة التجارية"]
      },
      {
        title: "CRM والتقنيات",
        icon: 'tech',
        skills: ["Brevo", "HubSpot CRM", "WordPress", "PrestaShop", "Shopify", "Zapier", "تصميم UX/UI"]
      },
      {
        title: "الإبداع والتحليلات",
        icon: 'creative',
        skills: ["Photoshop", "Illustrator", "Premiere", "Google Analytics", "CapCut", "Canva", "Figma", "After Effects"]
      },
      {
        title: "الذكاء الاصطناعي والأدوات",
        icon: 'ai',
        skills: ["ChatGPT", "Gemini", "Veo", "Google AI", "Midjourney", "Notion", "Claude", "Jasper"]
      }
    ],
    performance: [
      { name: 'الزيارات', value: 40, label: 'نمو الزيارات', suffix: '%', color: '#4f46e5' },
      { name: 'التفاعل', value: 40, label: 'التفاعل الاجتماعي', suffix: '%', color: '#ec4899' },
      { name: 'الاستعادة', value: 35, label: 'استعادة السلة', suffix: '%', color: '#10b981' },
      { name: 'التحويل', value: 25, label: 'معدل التحويل', suffix: '%', color: '#f59e0b' },
    ],
    education: [
      { degree: "ماجستير في CRM والتحولات الرقمية", school: "FSEG Sfax", year: "2022 – 2024" },
      { degree: "إجازة في التسويق", school: "ISAA Sfax", year: "2018 – 2022" },
      { degree: "تدريب المؤسسة البيداغوجية", school: "Arena Pro", year: "2023 – 2024" }
    ],
    projects: [
      {
        id: 'p1',
        title: "5e Saison Store",
        category: "أزياء وتجارة إلكترونية",
        description: "توسيع نطاق علامة تجارية للملابس النسائية من خلال الاستحواذ الكامل واستراتيجيات الاحتفاظ الآلية.",
        results: ["+38% زيارات مؤهلة", "+22% تحسين CVR", "+18% متوسط قيمة الطلب"],
        image: IMAGES.store,
        tags: ["Meta Ads", "SEO", "Brevo CRM", "UX/UI"]
      },
      {
        id: 'p2',
        title: "Glow by Manel",
        category: "إطلاق العلامة التجارية",
        description: "استراتيجية شاملة للعلامة التجارية والإطلاق لصالون تجميل متميز، وتأسيس هيمنة في السوق المحلي.",
        results: ["1200+ عميل في 4 أشهر", "إنشاء الهوية البصرية", "إعداد السوشيال ميديا"],
        image: IMAGES.glow,
        tags: ["Branding", "Social Media", "Local SEO", "Content"]
      },
      {
        id: 'p3',
        title: "Vamous Club",
        category: "التسويق الرياضي",
        description: "هيكلة باقات الرعاية وتحسين موقع العلامة التجارية لمجمع بادل رياضي كبير.",
        results: ["تأمين 4 رعاة كبار", "نموذج نمو الإيرادات", "تحسين الحجوزات"],
        image: IMAGES.vamous,
        tags: ["مبيعات B2B", "رعاية", "تسويق الفعاليات", "تفاوض"]
      },
      {
        id: 'p4',
        title: "OuiWin",
        category: "وكالة رقمية",
        description: "إدارة التواجد الرقمي لعدة عملاء، التركيز على SEO، نمو وسائل التواصل الاجتماعي، وتطوير المواقع.",
        results: ["+28% تفاعل اجتماعي", "تحسين SEO", "تطوير ويب"],
        image: LOGOS.ouiwin,
        tags: ["WordPress", "PrestaShop", "Social Media", "SEO"]
      },
      {
        id: 'p5',
        title: "Arena Pro",
        category: "العمليات والإدارة",
        description: "تحسين عمليات سلسلة التوريد وتنفيذ أنظمة CRM لتتبع الطلبات وإدارة المخزون بكفاءة.",
        results: ["12% خفض التكاليف", "تطبيق CRM", "تحسين العمليات"],
        image: IMAGES.arena,
        tags: ["CRM", "Supply Chain", "Negotiation", "Management"]
      },
      {
        id: 'p6',
        title: "Piximind",
        category: "SaaS والصحة النفسية",
        description: "تحسين تموضع المنتج ومسارات المبيعات لتطبيق الصحة النفسية.",
        results: ["+18% معدل تحويل", "إنتاج إعلانات فيديو", "تصميم بنسبة نقر عالية"],
        image: LOGOS.piximind,
        tags: ["Market Research", "Funnel", "Product Growth", "Video Ads"]
      }
    ]
  }
};