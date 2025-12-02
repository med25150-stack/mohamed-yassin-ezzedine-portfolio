

export interface Achievement {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  logo: string;
  period: string;
  description: string;
  achievements: Achievement[];
  type: 'job' | 'freelance' | 'internship';
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: 'strategy' | 'tech' | 'creative' | 'ai';
}

export interface Metric {
  name: string;
  value: number;
  label: string;
  suffix: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  results: string[];
  image: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: 'search' | 'strategy' | 'rocket' | 'chart';
}

export interface PersonalInfo {
  name: string;
  title: string;
  focus: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  location: string;
  years_experience: string;
  specialty: string;
  education_short: string;
  contact_btn: string;
  linkedin_btn: string;
  download_cv: string;
  cv_en: string;
  cv_fr: string;
  cv_ar: string;
  open_to_work: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_title_3: string;
  hero_intro: string;
  profile_image: string;
}

export interface NavigationLinks {
  about: string;
  performance: string;
  projects: string;
  experience: string;
  skills: string;
  contact: string;
}

export interface SectionTitles {
  performance_title: string;
  performance_subtitle: string;
  performance_chart_title: string;
  performance_chart_desc: string;
  experience_title: string;
  experience_subtitle: string;
  skills_tech_title: string;
  skills_edu_title: string;
  projects_title: string;
  projects_subtitle: string;
  contact_title: string;
  contact_subtitle: string;
  quick_summary: string;
  certifications: string;
  key_results: string;
  process_title: string;
  process_subtitle: string;
}

export interface TranslationData {
  personalInfo: PersonalInfo;
  navigation: NavigationLinks;
  sectionTitles: SectionTitles;
  experiences: ExperienceItem[];
  skills: SkillCategory[];
  performance: Metric[];
  education: EducationItem[];
  certifications: string[];
  projects: Project[];
  process: ProcessStep[];
  ticker: string[];
}

export type Language = 'en' | 'fr' | 'ar';