import React from 'react';
import { ArrowUpRight, Tag, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { content, dir } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <div className="flex items-center md:justify-center mb-4">
             <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full me-3">
               <Star size={20} className="text-indigo-600 dark:text-indigo-400 fill-current" />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{content.sectionTitles.projects_title}</h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {content.sectionTitles.projects_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {content.projects.map((project) => (
            <div key={project.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 h-full hover:-translate-y-1">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden shrink-0 bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full ${['p4', 'p6'].includes(project.id) ? 'object-contain p-8 bg-white' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-700 ease-out`}
                />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-20">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase text-white bg-indigo-600/90 backdrop-blur-sm rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className={`text-slate-300 dark:text-slate-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors ${dir === 'rtl' ? 'rotate-90' : ''}`} />
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Key Results - Enhanced Visuals */}
                  <div className="mb-6 p-5 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/50 transition-colors">
                    <h4 className="text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-3 uppercase tracking-wider flex items-center">
                      <TrendingUp size={14} className="me-2" />
                      {content.sectionTitles.key_results}
                    </h4>
                    <ul className="space-y-2.5">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300 font-medium">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-500 me-2.5 shadow-[0_0_6px_rgba(99,102,241,0.6)]"></span>
                          <span className="leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-slate-600 transition-colors cursor-default">
                        <Tag size={10} className="me-1.5 opacity-70" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;