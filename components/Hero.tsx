import React from 'react';
import { ArrowRight, MousePointerClick, ArrowLeft, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { content, dir } = useLanguage();
  
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-indigo-50 to-transparent dark:from-indigo-900/20 opacity-60 blur-3xl rounded-full translate-x-1/4 rtl:-translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-t from-pink-50 to-transparent dark:from-pink-900/20 opacity-60 blur-3xl rounded-full -translate-x-1/4 rtl:translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 lg:order-1 order-2">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-full px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-sm font-medium text-indigo-800 dark:text-indigo-300 tracking-wide uppercase">
                  {content.personalInfo.open_to_work}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                {content.personalInfo.hero_title_1} <span className="text-indigo-600 dark:text-indigo-400">{content.personalInfo.hero_title_2}</span> <span className="text-indigo-600 dark:text-indigo-400">{content.personalInfo.hero_title_3}</span>
              </h1>
              
              <div className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 whitespace-pre-line">
                {content.personalInfo.hero_intro}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-white bg-slate-900 dark:bg-indigo-600 rounded-full hover:bg-slate-800 dark:hover:bg-indigo-500 transition-all shadow-lg shadow-slate-900/20 dark:shadow-indigo-900/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  {content.personalInfo.contact_btn} 
                  {dir === 'rtl' ? <ArrowLeft className="mr-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                </a>
                <a 
                  href={content.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-750 transition-all hover:border-slate-300 dark:hover:border-slate-600"
                >
                  {content.personalInfo.linkedin_btn} <MousePointerClick className="ms-2 h-4 w-4 text-slate-400" />
                </a>
              </div>

              {/* CV Download Section */}
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-2">
                  <Download size={16} className="text-indigo-600 dark:text-indigo-400"/> 
                  {content.personalInfo.download_cv}:
                </span>
                <div className="flex gap-2">
                  <a 
                    href={content.personalInfo.cv_en} 
                    download
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-slate-700 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-300 rounded transition-colors"
                  >
                    EN
                  </a>
                  <a 
                    href={content.personalInfo.cv_fr} 
                    download
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-slate-700 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-300 rounded transition-colors"
                  >
                    FR
                  </a>
                  <a 
                    href={content.personalInfo.cv_ar} 
                    download
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-slate-700 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-300 rounded transition-colors"
                  >
                    AR
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 lg:order-2 order-1 flex justify-center lg:justify-end">
             <div className="relative w-64 h-64 sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]">
                <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] rotate-6 opacity-20 dark:opacity-40 blur-2xl"></div>
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-white/10">
                  <img 
                    src={content.personalInfo.profile_image} 
                    alt={content.personalInfo.name} 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;