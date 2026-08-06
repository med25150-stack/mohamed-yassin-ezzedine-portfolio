import { TranslationData } from './types';

const IMAGES = {
  store: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800", // Women's Fashion
  glow: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800", // Beauty Salon
  vamous: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800", // Padel Court
  arena: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", // Logistics/Warehouse
  profile: "/images/profile.jpg",
};

// Local FR CV served from /public; EN/AR are Google Drive direct downloads
const CVS = {
  en: "https://drive.google.com/uc?export=download&id=1OkmN6xoxNweMxOK_N0_90BL1jo2xn_0n",
  fr: "/CV_Mohamed_Yassin_Ezzedine.pdf",
  ar: "https://drive.google.com/uc?export=download&id=1FnHOIzHMdyaKt6UAm_w_WnFuvKNSg97j",
  original: "/CV_Mohamed_Yassin_Ezzedine.pdf",
  ats: "/CV_Mohamed_Yassin_Ezzedine_ATS.pdf"
};

// Company Logos for Timeline & Project Cards
export const LOGOS = {
  saison: "https://instagram.ftun10-1.fna.fbcdn.net/v/t51.2885-19/572203370_18058281935550364_8006158136652469657_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xNTAuYzIifQ&_nc_ht=instagram.ftun10-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QH1SXIr4mbLGXEL4I0SlaBJ8CnHx9SNjbuSYGJQvAbYnR2RWQMIb_QTVGsHti6M3Aw&_nc_ohc=oQV9bqJnNQcQ7kNvwE_AIvM&_nc_gid=qh3DJFuLxVtxsV5mgrLUUQ&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfiaWdmRoo_ao83DHu7eXjDMto6eguXYrGdCmSyRm8V-iw&oe=692B4B1F&_nc_sid=22de04",
  glow: "https://instagram.ftun10-1.fna.fbcdn.net/v/t51.2885-19/497461737_17845470528476935_5572991284823016028_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.ftun10-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QE2zt-AenNOj6JfR0NN9OdHrDiChOTvn0sXN3cebcGVqSphcZaTB-OVeAGU3KJGbRQ&_nc_ohc=xkKGN-VFQ2sQ7kNvwE7pUnm&_nc_gid=F-lSBp_RaOLU8DZmhEGD6Q&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afjvqg13B17bNDYr36dHE-8l0XUAr-RV7Y9cIQwq8Job_w&oe=692B3EBE&_nc_sid=7a9f4b",
  vamous: "https://instagram.ftun10-1.fna.fbcdn.net/v/t51.2885-19/504285857_17848812090496822_2265428684422539717_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.ftun10-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGUMrOgkIOwtnI8U9v6FONcBnKHKYYUbARSaKzbkjoK65xvkwjVOblZ1GKaBtWsK6k&_nc_ohc=iIQvzXkrMLoQ7kNvwHb41Z2&_nc_gid=WU-UYjeMiEQ1t8RHG3Aryw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfjpHvD8Ud7gZGTLoA0yZM3PZYXivLbyPtSoBr1IwGn8HQ&oe=692B274C&_nc_sid=22de04",
  piximind: "https://www.piximind.com/themes/pkurg-spacebootstrap5/assets/img/svg/logo.svg",
  ouiwin: "/images/ouiwin.png",
  arena: "https://arenapro.ae/wp-content/uploads/2023/10/Arena-Pro-Logo.png"
};

export const TRANSLATIONS: Record<'en' | 'fr' | 'ar', TranslationData> = {
  en: {
    personalInfo: {
      name: "Mohamed Yassin Ezzedine",
      title: "Digital Marketing & Growth Manager",
      focus: "Performance, Acquisition, Branding & Automation",
      email: "mohamedyassinezzedine@gmail.com",
      phone: "07 75 68 43 70",
      linkedin: "https://www.linkedin.com/in/mohamed-yassin-ezzedine",
      summary: "Digital Marketing & Growth Manager with over 3 years of experience in digital marketing, CRM, and e-commerce. Expert in SEO, Google Ads, Meta Ads, Google Analytics, PrestaShop, and WordPress.",
      location: "Paris, France",
      years_experience: "3+ Years",
      specialty: "Digital Marketing, Growth & CRM",
      education_short: "Master's Degree in CRM & Digital Transformations (Bac+5)",
      contact_btn: "Contact Me",
      linkedin_btn: "View LinkedIn",
      download_cv: "Download CV",
      cv_en: CVS.en,
      cv_fr: CVS.fr,
      cv_ar: CVS.ar,
      cv_original: CVS.original,
      cv_ats: CVS.ats,
      cv: CVS.original,
      work_authorization: "Authorized to work in France",
      driving_license: "Permit B",
      open_to_work: "Open for Opportunities",
      hero_title_1: "Welcome to",
      hero_title_2: "Mohamed Yassin",
      hero_title_3: "Portfolio",
      hero_intro: "I am Mohamed Yassin Ezzedine, a Digital Marketing & Growth Manager based in Paris with over 3 years of experience in digital marketing, CRM, and e-commerce.\n\nI support brands in building high-performing marketing strategies, optimizing conversion rates (CRO), managing teams, and leading multi-channel campaigns (Meta Ads, Google Ads, SEO, CRM).\n\nResults-driven and data-oriented, I work across the full funnel to drive sustainable revenue growth.",
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
      performance_subtitle: "Data-driven marketing strategies focused on revenue growth. Here is a snapshot of the impact delivered across roles.",
      performance_chart_title: "Performance Overview",
      performance_chart_desc: "Driving measurable growth across key marketing KPIs through data optimization, acquisition, and conversion enhancement.",
      experience_title: "Professional Journey",
      experience_subtitle: "Proven track record in digital marketing, project management, multi-channel campaigns, and team leadership.",
      skills_tech_title: "Technical Skills",
      skills_edu_title: "Degrees & Education",
      projects_title: "Featured Projects",
      projects_subtitle: "A selection of recent work highlighting expertise in growth, e-commerce, branding, and conversion optimization.",
      contact_title: "Let's Work Together",
      contact_subtitle: "Looking for a Digital Marketing & Growth Manager in Paris? Available for full-time opportunities or consulting.",
      quick_summary: "Quick Summary",
      status_label: "Work Authorization",
      driving_license_label: "Driving License",
      certifications: "Additional Certifications",
      key_results: "Key Results",
      process_title: "My Process",
      process_subtitle: "A data-driven methodology to scale digital growth."
    },
    ticker: ["DIGITAL MARKETING", "GROWTH", "META ADS", "GOOGLE ADS", "SEO", "CRM", "PRESTASHOP", "WORDPRESS"],
    process: [
      { id: '1', title: "Discovery", description: "Data analysis, market research, and growth opportunity audits.", icon: 'search' },
      { id: '2', title: "Strategy", description: "Crafting multi-channel roadmaps and setting clear KPI targets.", icon: 'strategy' },
      { id: '3', title: "Execution", description: "Launching campaigns, content creation, and conversion funnels.", icon: 'rocket' },
      { id: '4', title: "Optimization", description: "Analyzing conversions and maximizing return on ad spend.", icon: 'chart' }
    ],
    experiences: [
      {
        id: '1',
        role: "Marketing and Communication Manager",
        company: "5e Saison Store",
        logo: LOGOS.saison,
        period: "Sept. 2024 - June 2026",
        type: 'job',
        description: "Defined and deployed digital marketing strategy, managed multi-channel Meta Ads campaigns, influencer partnerships, and led marketing team.",
        achievements: [
          { label: "Web Traffic", value: "+38% Increase" },
          { label: "Conversion Rate", value: "+36% (8 new collections)" },
          { label: "Meta Ads", value: "Optimized & increased revenue" },
          { label: "Influencers", value: "15,000+ reach (10+ creators)" },
          { label: "Team Lead", value: "Managed 5 team members" }
        ]
      },
      {
        id: '4',
        role: "Marketing & Product Development",
        company: "PIXIMIND",
        logo: LOGOS.piximind,
        period: "Feb. 2024 - May 2024",
        type: 'job',
        description: "Conducted market research and competitive benchmarks, created and optimized lead acquisition landing pages, and tracked KPIs via Google Analytics.",
        achievements: [
          { label: "Conversion Rate", value: "+18% Increase on landing pages" },
          { label: "Acquisition", value: "High-converting landing pages" },
          { label: "Market Research", value: "Benchmarks & growth avenues" },
          { label: "Analytics", value: "GA4 setup & KPI tracking" }
        ]
      },
      {
        id: '5',
        role: "Purchasing Department Manager",
        company: "Arena Pro",
        logo: LOGOS.arena,
        period: "Nov. 2023 - Jan. 2024",
        type: 'job',
        description: "Managed stock and inventory purchasing, negotiated prices and terms with suppliers, and coordinated across departments.",
        achievements: [
          { label: "Suppliers", value: "Negotiated with 12 key suppliers" },
          { label: "Supply Chain", value: "Sales, Marketing & Finance coordination" },
          { label: "Sourcing", value: "Prospecting & stock securing" }
        ]
      },
      {
        id: '6',
        role: "Assistant Marketing Manager",
        company: "OUIWIN",
        logo: LOGOS.ouiwin,
        period: "July 2023 - Aug. 2023",
        type: 'job',
        description: "Analyzed campaign performance via Google Analytics across 2 websites, optimized user behavior, and developed SEO showcase websites.",
        achievements: [
          { label: "Google Analytics", value: "Campaign analysis on 2 sites" },
          { label: "Web Dev", value: "WordPress & PrestaShop" },
          { label: "SEO", value: "On-page SEO best practices" }
        ]
      }
    ],
    skills: [
      {
        title: "Digital Marketing & Growth",
        icon: 'strategy',
        skills: ["SEO", "Google Ads", "Meta Ads", "Google Analytics 4", "Marketing Strategy", "CRO", "Brand Strategy"]
      },
      {
        title: "CMS & CRM",
        icon: 'tech',
        skills: ["WordPress", "PrestaShop", "Brevo CRM", "HubSpot CRM", "Shopify", "UX/UI Design"]
      },
      {
        title: "Creative & Office Suite",
        icon: 'creative',
        skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Canva", "Figma"]
      },
      {
        title: "AI & Productivity",
        icon: 'ai',
        skills: ["ChatGPT", "Gemini", "Claude", "Google AI", "Notion", "Midjourney"]
      }
    ],
    performance: [
      { name: 'Traffic', value: 38, label: 'Web Traffic Growth', suffix: '%', color: '#4f46e5' },
      { name: 'Conversion', value: 36, label: 'Conversion Growth', suffix: '%', color: '#ec4899' },
      { name: 'Landing Pages', value: 18, label: 'Lead Conversion', suffix: '%', color: '#10b981' },
      { name: 'CAC', value: 20, label: 'CAC Reduction', suffix: '%', color: '#f59e0b' },
    ],
    education: [
      { degree: "Master's Degree in CRM & Digital Transformations (Bac+5)", school: "Faculty of Economics and Management of Sfax (FSEG) | Honors: Very Good", year: "2022 – 2024" },
      { degree: "Bachelor's Degree in Business Management: Marketing (Bac+3)", school: "Higher Institute of Business Administration of Sfax (ISAA) | Honors: Good", year: "2018 – 2022" }
    ],
    certifications: [
      "SEO Certification - Maha.Digital",
      "Professional SEO Certification - E2Business Training",
      "Pedagogical Enterprise Training - Arena Pro"
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
      title: "Digital Marketing & Growth Manager",
      focus: "Performance, Acquisition, Branding & Automation",
      email: "mohamedyassinezzedine@gmail.com",
      phone: "07 75 68 43 70",
      linkedin: "https://www.linkedin.com/in/mohamed-yassin-ezzedine",
      summary: "Marketing Digital & Growth Manager avec plus de 3 ans d'expérience dans le marketing digital, le CRM et le e-commerce. Expert en SEO, Google Ads, Meta Ads, Google Analytics, PrestaShop et WordPress.",
      location: "Paris, France",
      years_experience: "3+ Ans",
      specialty: "Digital Marketing, Growth & CRM",
      education_short: "Master en CRM & Transformations Digitales (Bac+5)",
      contact_btn: "Contactez-moi",
      linkedin_btn: "Voir LinkedIn",
      download_cv: "Télécharger mon CV",
      cv_en: CVS.en,
      cv_fr: CVS.fr,
      cv_ar: CVS.ar,
      cv_original: CVS.original,
      cv_ats: CVS.ats,
      cv: CVS.fr,
      work_authorization: "Autorisé à travailler en France",
      driving_license: "Permis B",
      open_to_work: "À l'écoute d'opportunités",
      hero_title_1: "Bienvenue sur le",
      hero_title_2: "portfolio de",
      hero_title_3: "Mohamed Yassin",
      hero_intro: "Je suis Mohamed Yassin Ezzedine, Digital Marketing & Growth Manager basé à Paris, avec plus de 3 ans d'expérience en marketing digital, CRM et e-commerce.\n\nJ'accompagne les marques dans la création de stratégies marketing performantes, l'optimisation du taux de conversion (CRO), la gestion d'équipes et le pilotage de campagnes multicanales (Meta Ads, Google Ads, SEO, CRM).\n\nOrienté résultats et analyse de données, j'interviens sur l'ensemble du funnel pour stimuler la croissance du chiffre d'affaires.",
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
      performance_subtitle: "Des stratégies marketing orientées résultats et croissance du chiffre d'affaires. Aperçu de l'impact généré dans mes fonctions.",
      performance_chart_title: "Aperçu des Performances",
      performance_chart_desc: "Une croissance mesurable sur les KPI marketing clés grâce à l'optimisation des données, l'acquisition et la conversion.",
      experience_title: "Parcours Professionnel",
      experience_subtitle: "Expérience confirmée en marketing digital, gestion de projets, campagnes multicanales et management d'équipe.",
      skills_tech_title: "Compétences Techniques",
      skills_edu_title: "Diplômes & Formations",
      projects_title: "Projets à la Une",
      projects_subtitle: "Une sélection de réalisations mettant en valeur mon expertise en croissance, e-commerce, branding et optimisation.",
      contact_title: "Travaillons Ensemble",
      contact_subtitle: "À la recherche d'un Digital Marketing & Growth Manager à Paris ? Je suis disponible pour échanger sur vos projets.",
      quick_summary: "Résumé Rapide",
      status_label: "Statut",
      driving_license_label: "Permis de conduire",
      certifications: "Formations Complémentaires",
      key_results: "Résultats Clés",
      process_title: "Ma Méthodologie",
      process_subtitle: "Une approche axée sur les données pour stimuler la croissance."
    },
    ticker: ["MARKETING DIGITAL", "GROWTH", "META ADS", "GOOGLE ADS", "SEO", "CRM", "PRESTASHOP", "WORDPRESS"],
    process: [
      { id: '1', title: "Découverte", description: "Analyse des données, études de marché et audit des opportunités.", icon: 'search' },
      { id: '2', title: "Stratégie", description: "Élaboration de feuilles de route multicanales et objectifs KPI.", icon: 'strategy' },
      { id: '3', title: "Mise en Œuvre", description: "Déploiement de campagnes, création de contenu et funnels.", icon: 'rocket' },
      { id: '4', title: "Optimisation", description: "Analyse des conversions et maximisation du ROI.", icon: 'chart' }
    ],
    experiences: [
      {
        id: '1',
        role: "Responsable Marketing et Communication",
        company: "5e Saison Store",
        logo: LOGOS.saison,
        period: "Sept. 2024 - Juin 2026",
        type: 'job',
        description: "Définition et déploiement de la stratégie marketing digitale, gestion des campagnes multicanales Meta Ads, partenariats influenceurs et encadrement d'équipe.",
        achievements: [
          { label: "Trafic web", value: "+38% d'augmentation" },
          { label: "Conversion", value: "+36% (8 nouvelles collections)" },
          { label: "Campagnes Ads", value: "Meta Ads & hausse du CA e-commerce" },
          { label: "Influenceurs", value: "15 000+ portée (10+ créateurs)" },
          { label: "Management", value: "Encadrement de 5 collaborateurs" }
        ]
      },
      {
        id: '4',
        role: "Marketing et développement de produits",
        company: "PIXIMIND",
        logo: LOGOS.piximind,
        period: "Fév. 2024 - Mai 2024",
        type: 'job',
        description: "Études de marché, benchmarks concurrentiels, création et optimisation de landing pages d'acquisition et suivi des KPI via Google Analytics.",
        achievements: [
          { label: "Conversion", value: "+18% de hausse du taux de conversion" },
          { label: "Acquisition", value: "Landing pages optimisées" },
          { label: "Market Research", value: "Benchmarks & opportunités de croissance" },
          { label: "Analytics", value: "Suivi Google Analytics 4 & KPI" }
        ]
      },
      {
        id: '5',
        role: "Responsable de département d'achat",
        company: "Arena Pro",
        logo: LOGOS.arena,
        period: "Nov. 2023 - Jan. 2024",
        type: 'job',
        description: "Gestion des achats de stock et de consommation courante, négociation des prix et conditions, et coordination inter-services.",
        achievements: [
          { label: "Fournisseurs", value: "Négociation auprès de 12 fournisseurs" },
          { label: "Approvisionnement", value: "Coordination Ventes, Marketing & Finance" },
          { label: "Sourcing", value: "Prospection & sécurisation des stocks" }
        ]
      },
      {
        id: '6',
        role: "Assistant responsable marketing",
        company: "OUIWIN",
        logo: LOGOS.ouiwin,
        period: "Juil. 2023 - Août 2023",
        type: 'job',
        description: "Analyse des performances de campagnes via Google Analytics sur 2 sites, optimisation du comportement utilisateur et création de sites vitrines SEO.",
        achievements: [
          { label: "Analytics", value: "Analyse Google Analytics sur 2 sites" },
          { label: "Dév Web", value: "WordPress & PrestaShop" },
          { label: "SEO", value: "Bonnes pratiques SEO on-page" }
        ]
      }
    ],
    skills: [
      {
        title: "Marketing Digital & Growth",
        icon: 'strategy',
        skills: ["SEO (Référencement)", "Google Ads", "Meta Ads", "Google Analytics 4", "Stratégies Marketing", "Optimisation Conversion (CRO)", "Stratégie de Marque"]
      },
      {
        title: "CMS & CRM",
        icon: 'tech',
        skills: ["WordPress", "PrestaShop", "Brevo CRM", "HubSpot CRM", "Shopify", "UX/UI Design"]
      },
      {
        title: "Créatif & Bureautique",
        icon: 'creative',
        skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Canva", "Figma"]
      },
      {
        title: "IA & Productivité",
        icon: 'ai',
        skills: ["ChatGPT", "Gemini", "Claude", "Google AI", "Notion", "Midjourney"]
      }
    ],
    performance: [
      { name: 'Trafic', value: 38, label: 'Hausse Trafic Web', suffix: '%', color: '#4f46e5' },
      { name: 'Conversion', value: 36, label: 'Hausse Conversion', suffix: '%', color: '#ec4899' },
      { name: 'Landing Pages', value: 18, label: 'Conversion Leads', suffix: '%', color: '#10b981' },
      { name: 'CAC', value: 20, label: 'Réduction CAC', suffix: '%', color: '#f59e0b' },
    ],
    education: [
      { degree: "Master professionnel en CRM et transformations digitales (Bac+5)", school: "Faculté des Sciences Économiques et de Gestion de Sfax (FSEG) | Mention très bien", year: "2022 – 2024" },
      { degree: "Licence en Sciences de Gestion : Marketing (Bac+3)", school: "Institut Supérieur d'Administration des Affaires de Sfax (ISAA) | Mention bien", year: "2018 – 2022" }
    ],
    certifications: [
      "Certificat de formation en référencement naturel (SEO) - Maha.Digital",
      "Certificat de formation professionnelle en référencement naturel - E2Business Training",
      "Certificat de formation en EEP (Entreprise d'Entraînement Pédagogique) - Arena Pro"
    ],
    projects: [
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
      title: "مدير التسويق الرقمي والنمو (Digital Marketing & Growth Manager)",
      focus: "الأداء، الاستحواذ، العلامة التجارية والأتمتة",
      email: "mohamedyassinezzedine@gmail.com",
      phone: "07 75 68 43 70",
      linkedin: "https://www.linkedin.com/in/mohamed-yassin-ezzedine",
      summary: "مدير التسويق الرقمي والنمو بخبرة تزيد عن 3 سنوات في التسويق الرقمي، إدارة علاقات العملاء (CRM)، والتجارة الإلكترونية. خبير في SEO، Google Ads، Meta Ads، Google Analytics، PrestaShop و WordPress.",
      location: "باريس، فرنسا",
      years_experience: "+3 سنوات",
      specialty: "التسويق الرقمي والنمو و CRM",
      education_short: "ماجستير في CRM والتحولات الرقمية (Bac+5)",
      contact_btn: "تواصل معي",
      linkedin_btn: "زيارة LinkedIn",
      download_cv: "تحميل السيرة الذاتية",
      cv_en: CVS.en,
      cv_fr: CVS.fr,
      cv_ar: CVS.ar,
      cv_original: CVS.original,
      cv_ats: CVS.ats,
      cv: CVS.ar,
      work_authorization: "مصرح له بالعمل في فرنسا",
      driving_license: "رخصة قيادة B",
      open_to_work: "متاح لفرص العمل",
      hero_title_1: "مرحباً بكم في",
      hero_title_2: "محفظة",
      hero_title_3: "محمد ياسين",
      hero_intro: "أنا محمد ياسين عز الدين، مدير التسويق الرقمي والنمو مقيم في باريس، مع أكثر من 3 سنوات من الخبرة في التسويق الرقمي، CRM والتجارة الإلكترونية.\n\nأساعد العلامات التجارية على بناء استراتيجيات تسويقية عالية الأداء، تحسين معدل التحويل (CRO)، إدارة الفرق وقيادة الحملات متعددة القنوات (Meta Ads, Google Ads, SEO, CRM).\n\nموجه نحو النتائج وتحليل البيانات لتحقيق نمو مستدام في الإيرادات.",
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
      performance_subtitle: "استراتيجيات تسويقية قائمة على البيانات وموجهة نحو نمو الإيرادات. إليك لمحة عن التأثير المحقق.",
      performance_chart_title: "نظرة عامة على الأداء",
      performance_chart_desc: "تحقيق نمو ملموس عبر مؤشرات الأداء الرئيسية للتسويق من خلال تحسين البيانات والاستحواذ وزيادة التحويلات.",
      experience_title: "المسيرة المهنية",
      experience_subtitle: "سجل حافل في التسويق الرقمي، إدارة المشاريع، الحملات متعددة القنوات وإدارة الفرق.",
      skills_tech_title: "المهارات التقنية",
      skills_edu_title: "الشهادات والمؤهلات العلمية",
      projects_title: "مشاريع مميزة",
      projects_subtitle: "مجموعة مختارة من الأعمال التي تبرز الخبرة في النمو والتجارة الإلكترونية وبناء العلامة التجارية.",
      contact_title: "لنعمل معاً",
      contact_subtitle: "تبحث عن مدير تسويق رقمي ونمو في باريس؟ أنا متاح لمناقشة مشاريعك.",
      quick_summary: "ملخص سريع",
      status_label: "تصريح العمل",
      driving_license_label: "رخصة القيادة",
      certifications: "دورات وشهادات إضافية",
      key_results: "النتائج الرئيسية",
      process_title: "منهجيتي",
      process_subtitle: "نهج قائم على البيانات لتوسيع نطاق النمو الرقمي."
    },
    ticker: ["التسويق الرقمي", "النمو", "META ADS", "GOOGLE ADS", "SEO", "CRM", "PRESTASHOP", "WORDPRESS"],
    process: [
      { id: '1', title: "اكتشاف", description: "تحليل البيانات، أبحاث السوق وتدقيق فرص النمو.", icon: 'search' },
      { id: '2', title: "استراتيجية", description: "إعداد خرائط طريق متعددة القنوات وتحديد أهداف KPI.", icon: 'strategy' },
      { id: '3', title: "تنفيذ", description: "إطلاق الحملات، إنشاء المحتوى وأقماع التحويل.", icon: 'rocket' },
      { id: '4', title: "تحسين", description: "تحليل معدلات التحويل وتعظيم العائد على الاستثمار.", icon: 'chart' }
    ],
    experiences: [
      {
        id: '1',
        role: "مسؤول التسويق والاتصال",
        company: "5e Saison Store",
        logo: LOGOS.saison,
        period: "سبتمبر 2024 - يونيو 2026",
        type: 'job',
        description: "تحديد ونشر استراتيجية التسويق الرقمي، إدارة حملات Meta Ads متعددة القنوات، الشراكات مع المؤثرين وإدارة فريق العمل.",
        achievements: [
          { label: "زيارات الموقع", value: "+38% زيادة" },
          { label: "معدل التحويل", value: "+36% (8 مجموعات جديدة)" },
          { label: "حملات Meta Ads", value: "تحسين وزيادة المبيعات الإلكترونية" },
          { label: "المؤثرين", value: "+15,000 وصول (10+ صناع محتوى)" },
          { label: "إدارة الفريق", value: "إدارة فريق من 5 موظفين" }
        ]
      },
      {
        id: '4',
        role: "التسويق وتطوير المنتجات",
        company: "PIXIMIND",
        logo: LOGOS.piximind,
        period: "فبراير 2024 - مايو 2024",
        type: 'job',
        description: "إجراء أبحاث السوق والدراسات المقارنة، إنشاء وتحسين صفحات الهبوط لاستحواذ العملاء وتتبع مؤشرات الأداء عبر Google Analytics.",
        achievements: [
          { label: "معدل التحويل", value: "+18% زيادة على صفحات الهبوط" },
          { label: "الاستحواذ", value: "صفحات هبوط عالية التحويل" },
          { label: "أبحاث السوق", value: "دراسات مقارنة وفرص النمو" },
          { label: "التحليلات", value: "إعداد GA4 وتتبع KPI" }
        ]
      },
      {
        id: '5',
        role: "مدير قسم المشتريات",
        company: "Arena Pro",
        logo: LOGOS.arena,
        period: "نوفمبر 2023 - يناير 2024",
        type: 'job',
        description: "إدارة مشتريات المخزون والتفاوض على الأسعار والشروط مع الموردين والتنسيق بين الأقسام.",
        achievements: [
          { label: "الموردين", value: "التفاوض مع 12 مورداً رئيسياً" },
          { label: "سلسلة التوريد", value: "تنسيق المبيعات والتسويق والمالية" },
          { label: "التأمين", value: "البحث عن الموردين وتأمين المخزون" }
        ]
      },
      {
        id: '6',
        role: "مساعد مدير تسويق",
        company: "OUIWIN",
        logo: LOGOS.ouiwin,
        period: "يوليو 2023 - أغسطس 2023",
        type: 'job',
        description: "تحليل أداء الحملات عبر Google Analytics لموقعين، تحسين سلوك المستخدمين وتطوير مواقع تعريفية محسنة لـ SEO.",
        achievements: [
          { label: "Google Analytics", value: "تحليل الحملات لموقعين" },
          { label: "تطوير الويب", value: "WordPress و PrestaShop" },
          { label: "SEO", value: "أفضل الممارسات لـ SEO" }
        ]
      }
    ],
    skills: [
      {
        title: "التسويق الرقمي والنمو",
        icon: 'strategy',
        skills: ["SEO (تحسين محركات البحث)", "Google Ads", "Meta Ads", "Google Analytics 4", "استراتيجيات التسويق", "CRO (تحسين التحويل)", "استراتيجية العلامة التجارية"]
      },
      {
        title: "أنظمة CRM و CMS",
        icon: 'tech',
        skills: ["WordPress", "PrestaShop", "Brevo CRM", "HubSpot CRM", "Shopify", "تصميم UX/UI"]
      },
      {
        title: "التصميم والتطبيقات المكتبية",
        icon: 'creative',
        skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Canva", "Figma"]
      },
      {
        title: "الذكاء الاصطناعي والإنتاجية",
        icon: 'ai',
        skills: ["ChatGPT", "Gemini", "Claude", "Google AI", "Notion", "Midjourney"]
      }
    ],
    performance: [
      { name: 'الزيارات', value: 38, label: 'نمو زيارات الموقع', suffix: '%', color: '#4f46e5' },
      { name: 'التحويل', value: 36, label: 'نمو معدل التحويل', suffix: '%', color: '#ec4899' },
      { name: 'صفحات الهبوط', value: 18, label: 'تحويل العملاء', suffix: '%', color: '#10b981' },
      { name: 'CAC', value: 20, label: 'تخفيض تكلفة الاستحواذ', suffix: '%', color: '#f59e0b' },
    ],
    education: [
      { degree: "ماجستير مهني في CRM والتحولات الرقمية (Bac+5)", school: "كلية العلوم الاقتصادية والتصرف بصفاقس (FSEG) | تقدير: ممتاز جداً", year: "2022 – 2024" },
      { degree: "إجازة في علوم التصرف: تسويق (Bac+3)", school: "المعهد العالي لإدارة الأعمال بصفاقس (ISAA) | تقدير: حسن", year: "2018 – 2022" }
    ],
    certifications: [
      "شهادة تدريب في تحسين محركات البحث (SEO) - Maha.Digital",
      "شهادة تدريب مهني في تحسين محركات البحث - E2Business Training",
      "شهادة تدريب في المؤسسة البيداغوجية - Arena Pro"
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
