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
      phone: "0033775684370",
      linkedin: "https://www.linkedin.com/in/mohamed-yassin-ezzedine",
      summary: "Marketing Director at 5e Saison Store (until May 2026) and currently Marketing Lead at SAS SOFTWIN. Digital Marketer specialized in B2B strategy, performance, and growth based in Paris.",
      location: "Paris, France",
      years_experience: "4 Years",
      specialty: "B2B Performance & CRM",
      education_short: "Education Master in CRM & Digital Transformations",
      contact_btn: "Contact Me",
      linkedin_btn: "View LinkedIn",
      download_cv: "Download CV",
      cv_en: CVS.en,
      cv_fr: CVS.fr,
      cv_ar: CVS.ar,
      open_to_work: "Open for Opportunities",
      hero_title_1: "Welcome to",
      hero_title_2: "Mohamed Yassin",
      hero_title_3: "Portfolio",
      hero_intro: "I am Mohamed Yassin Ezzedine, a results-oriented digital marketing professional based in Paris. I help brands develop their online visibility and optimize their performance.\n\nCurrently, I am working on a project with SAS SOFTWIN while remaining open to new opportunities.\n\nI intervene across the entire digital strategy: social media management, advertising campaigns (Meta & Google), SEO, CRM, and e-commerce optimization. My goal: design effective marketing actions that generate measurable growth.\n\nWith a data-driven approach and mastery of tools like WordPress, PrestaShop, and the Adobe suite, I optimize user journeys, improve conversion rates, and strengthen brand identity. Creative and analytical, I also integrate market analysis, communication strategy, UX/UI, and influencer collaborations to maximize the impact of each project.",
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
        id: '0',
        role: "Marketing Lead",
        company: "SAS SOFTWIN",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200",
        period: "Since May 2026",
        type: 'job',
        description: "Scaling an IT activity (B2B). Structuring and deploying a full-funnel marketing strategy for an IT systems and software consulting company, focusing on qualified lead generation and sales cycle optimization.",
        achievements: [
          { label: "Qualified Leads", value: "+45% (B2B)" },
          { label: "Conversion Rate", value: "+30% MQL → SQL" },
          { label: "Acquisition Cost", value: "-20% CAC" },
          { label: "Organic Traffic", value: "+25% (Technical SEO & Content)" },
          { label: "LinkedIn Engagement", value: "+35% (Personal Branding)" }
        ]
      },
      {
        id: '1',
        role: "Marketing Director",
        company: "5e Saison Store",
        logo: LOGOS.saison,
        period: "Sept. 2024 - May 2026",
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
      { degree: "Licence in Marketing", school: "ISAA Sfax", year: "2018 – 2022" }
    ],
    certifications: [
      "Pedagogical Enterprise Training (Arena Pro)",
      "SEO (Maha.Digital)",
      "E2Business Training"
    ],
    projects: [
      {
        id: 'p0',
        title: "Marketing Lead – SAS SOFTWIN",
        category: "IT & B2B Marketing",
        description: "Structuring B2B marketing strategy, implementing acquisition funnels (SEO, Ads, LinkedIn), and deploying CRM automation for an IT consulting firm.",
        results: ["+45% Qualified Leads (B2B)", "+30% MQL → SQL Conversion", "-20% Acquisition Cost (CAC)", "Technical SEO & Content Strategy"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["B2B Strategy", "SEO", "LinkedIn Ads", "CRM Automation", "Lead Gen"]
      },
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
      phone: "0033775684370",
      linkedin: "https://www.linkedin.com/in/mohamed-yassin-ezzedine",
      summary: "Directeur Marketing chez 5e Saison Store (jusqu'en mai 2026) et actuellement Responsable Marketing chez SAS SOFTWIN. Expert en marketing digital spécialisé en stratégie B2B, performance et croissance, basé à Paris.",
      location: "Paris, France",
      years_experience: "4 Ans",
      specialty: "Performance B2B & CRM",
      education_short: "Master en CRM & Transformations Digitales",
      contact_btn: "Contactez-moi",
      linkedin_btn: "Voir LinkedIn",
      download_cv: "Télécharger CV",
      cv_en: CVS.en,
      cv_fr: CVS.fr,
      cv_ar: CVS.ar,
      open_to_work: "À l'écoute d'opportunités",
      hero_title_1: "Bienvenue sur le",
      hero_title_2: "portfolio de",
      hero_title_3: "Mohamed Yassin",
      hero_intro: "Je suis Mohamed Yassin Ezzedine, spécialiste du marketing digital orienté résultats, basé à Paris.\nJ’accompagne les marques dans le développement de leur visibilité en ligne et l’optimisation de leurs performances.\n\nActuellement en collaboration avec SAS SOFTWIN, je reste ouvert à de nouvelles opportunités.\n\nJ’interviens sur des stratégies digitales complètes : acquisition (Meta & Google Ads), SEO, CRM et optimisation e-commerce, avec un objectif clair : générer une croissance mesurable.\n\nGrâce à une approche data-driven et à la maîtrise d’outils comme WordPress, PrestaShop et Adobe, j’optimise les parcours utilisateurs, améliore la conversion et renforce l’image de marque.",
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
      performance_title: "Impact Mesurable",
      performance_subtitle: "Mes stratégies ne sont pas seulement esthétiques, elles sont performantes. Voici un aperçu de l'impact généré dans mes rôles récents.",
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
      { id: '3', title: "Mise en Œuvre", description: "Lancement de campagnes et de systèmes à fort impact.", icon: 'rocket' },
      { id: '4', title: "Optimisation", description: "Mise à l'échelle des résultats par itération continue.", icon: 'chart' }
    ],
    experiences: [
      {
        id: '0',
        role: "Responsable Marketing",
        company: "SAS SOFTWIN",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200",
        period: "Depuis mai 2026",
        type: 'job',
        description: "Accélération d’une activité IT (B2B). Structuration et déploiement d’une stratégie marketing full-funnel pour une société de conseil en systèmes et logiciels informatiques, avec un focus sur la génération de leads qualifiés et l’optimisation du cycle de vente.",
        achievements: [
          { label: "Leads qualifiés (B2B)", value: "+45%" },
          { label: "Taux de conversion", value: "+30% MQL → SQL" },
          { label: "Coût d’acquisition", value: "-20% CAC" },
          { label: "Trafic organique", value: "+25% (SEO technique & contenu)" },
          { label: "Engagement LinkedIn", value: "+35% (personal branding & contenu expert)" }
        ]
      },
      {
        id: '1',
        role: "Directeur Marketing",
        company: "5e Saison Store",
        logo: LOGOS.saison,
        period: "Sept. 2024 - Mai 2026",
        type: 'job',
        description: "Pilotage de stratégies de croissance e-commerce pour une marque de Loungewear : acquisition full-funnel, production de contenu et systèmes de rétention.",
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
        description: "Étude de marché, positionnement produit et optimisation du tunnel de conversion pour un SaaS de bien-être mental.",
        achievements: [
          { label: "Optimisation Funnel", value: "+18% Taux de Conversion" },
          { label: "Lancement", value: "Product Market Fit" },
          { label: "Contenu", value: "Production Publicités Vidéo" },
          { label: "Landing Page", value: "Design à fort CTR" }
        ]
      },
      {
        id: '5',
        role: "Responsable du service Achats",
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
      { degree: "Licence en Marketing", school: "ISAA Sfax", year: "2018 – 2022" }
    ],
    certifications: [
      "Formation en Entreprise Pédagogique (Arena Pro)",
      "Référencement naturel SEO (Maha.Digital)",
      "Référencement naturel (E2Business Training)"
    ],
    projects: [
      {
        id: 'p0',
        title: "Responsable Marketing – SAS SOFTWIN",
        category: "Marketing IT & B2B",
        description: "Structuration de la stratégie marketing B2B, mise en place d'un tunnel d'acquisition (SEO, Ads, LinkedIn) et déploiement d'un CRM pour une société de conseil IT.",
        results: ["+45% Leads qualifiés (B2B)", "+30% Taux de conversion MQL → SQL", "-20% Coût d’acquisition (CAC)", "Optimisation landing pages & SEO"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["Stratégie B2B", "SEO", "LinkedIn Ads", "Automation CRM", "Lead Gen"]
      },
      {
        id: 'p1',
        title: "5e Saison Store",
        category: "Mode & E-commerce",
        description: "Croissance d'une marque de vêtements pour femmes via l'acquisition full-funnel et des stratégies de rétention automatisées.",
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
      phone: "0033775684370",
      linkedin: "https://www.linkedin.com/in/mohamed-yassin-ezzedine",
      summary: "مدير تسويق في 5e Saison Store (حتى مايو 2026) وحالياً مسؤول تسويق في SAS SOFTWIN. مسوق رقمي متخصص في استراتيجية B2B والأداء والنمو، مقره باريس.",
      location: "باريس، فرنسا",
      years_experience: "4 سنوات",
      specialty: "أداء B2B و CRM",
      education_short: "التعليم ماجستير في CRM والتحولات الرقمية",
      contact_btn: "تواصل معي",
      linkedin_btn: "زيارة LinkedIn",
      download_cv: "تحميل السيرة الذاتية",
      cv_en: CVS.en,
      cv_fr: CVS.fr,
      cv_ar: CVS.ar,
      open_to_work: "متاح لفرص العمل",
      hero_title_1: "مرحباً بكم في",
      hero_title_2: "محفظة",
      hero_title_3: "محمد ياسين",
      hero_intro: "أنا محمد ياسين عز الدين، محترف تسويق رقمي موجه نحو النتائج ومقره باريس. أساعد العلامات التجارية على تطوير رؤيتها عبر الإنترنت وتحسين أدائها.\n\nحالياً، أعمل على مشروع مع شركة SAS SOFTWIN مع بقائي منفتحاً على فرص جديدة.\n\nأتدخل في كامل الاستراتيجية الرقمية: إدارة وسائل التواصل الاجتماعي، الحملات الإعلانية (Meta & Google)، تحسين محركات البحث (SEO)، إدارة علاقات العملاء (CRM)، وتحسين التجارة الإلكترونية. هدفي: تصميم إجراءات تسويقية فعالة تولد نمواً ملموساً.\n\nمن خلال نهج قائم على البيانات وإتقان أدوات مثل WordPress و PrestaShop ومجموعة Adobe، أقوم بتحسين رحلات المستخدم وتحسين معدلات التحويل وتعزيز هوية العلامة التجارية. مبدع وتحليلي، أقوم أيضاً بدمج تحليل السوق واستراتيجية الاتصال و UX/UI والتعاون مع المؤثرين لزيادة تأثير كل مشروع.",
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
        id: '0',
        role: "مسؤول تسويق",
        company: "SAS SOFTWIN",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200",
        period: "منذ مايو 2026",
        type: 'job',
        description: "توسيع نشاط تكنولوجيا المعلومات (B2B). هيكلة ونشر استراتيجية تسويق كاملة لشركة استشارات في أنظمة وبرمجيات الكمبيوتر، مع التركيز على توليد عملاء محتملين مؤهلين وتحسين دورة المبيعات.",
        achievements: [
          { label: "عملاء مؤهلون (B2B)", value: "+45%" },
          { label: "معدل التحويل", value: "+30% MQL → SQL" },
          { label: "تكلفة الاستحواذ", value: "-20% CAC" },
          { label: "زيارات طبيعية", value: "+25% (SEO تقني ومحتوى)" },
          { label: "تفاعل LinkedIn", value: "+35% (علامة تجارية شخصية ومحتوى خبير)" }
        ]
      },
      {
        id: '1',
        role: "مدير تسويق",
        company: "5e Saison Store",
        logo: LOGOS.saison,
        period: "سبتمبر 2024 - مايو 2026",
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
      { degree: "إجازة في التسويق", school: "ISAA Sfax", year: "2018 – 2022" }
    ],
    certifications: [
      "تدريب المؤسسة البيداغوجية (Arena Pro)",
      "تحسين محركات البحث (Maha.Digital)",
      "تدريب الأعمال (E2Business Training)"
    ],
    projects: [
      {
        id: 'p0',
        title: "مسؤول تسويق – SAS SOFTWIN",
        category: "تسويق IT و B2B",
        description: "هيكلة استراتيجية التسويق B2B، وإنشاء قمع استحواذ (SEO، إعلانات، LinkedIn) ونشر نظام CRM لشركة تكنولوجيا معلومات.",
        results: ["+45% عملاء مؤهلون (B2B)", "+30% معدل تحويل MQL → SQL", "-20% تكلفة الاستحواذ (CAC)", "تحسين صفحات الهبوط و SEO"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["استراتيجية B2B", "SEO", "إعلانات LinkedIn", "أتمتة CRM", "جلب العملاء"]
      },
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
