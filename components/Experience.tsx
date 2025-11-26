import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{content.sectionTitles.experience_title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            {content.sectionTitles.experience_subtitle}
          </p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ms-5 before:-translate-x-px rtl:before:translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {content.experiences.map((job, index) => (
            <div key={job.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              
              {/* Icon/Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-indigo-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 rtl:md:group-odd:translate-x-1/2 md:group-even:translate-x-1/2 rtl:md:group-even:-translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-indigo-100 dark:hover:border-slate-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">{job.role}</h3>
                  <div className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
                    <Calendar size={12} className="me-1" />
                    {job.period}
                  </div>
                </div>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-3 text-sm">{job.company}</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                {job.achievements.length > 0 && (
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 space-y-2">
                    {job.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 me-2 shrink-0" />
                        <span className="text-xs text-slate-700 dark:text-slate-200">
                          <strong>{ach.label}:</strong> {ach.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;