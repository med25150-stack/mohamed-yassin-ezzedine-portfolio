import React from 'react';
import { Search, Rocket, BarChart2, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Process: React.FC = () => {
  const { content } = useLanguage();

  const getIcon = (type: string) => {
    switch (type) {
      case 'search': return <Search className="w-8 h-8 text-indigo-500" />;
      case 'strategy': return <Lightbulb className="w-8 h-8 text-pink-500" />;
      case 'rocket': return <Rocket className="w-8 h-8 text-emerald-500" />;
      case 'chart': return <BarChart2 className="w-8 h-8 text-amber-500" />;
      default: return <Search className="w-8 h-8 text-indigo-500" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {content.sectionTitles.process_title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {content.sectionTitles.process_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {content.process.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connector Line (Desktop only) */}
              {index !== content.process.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-10 rtl:left-auto rtl:right-1/2"></div>
              )}
              
              <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center lg:items-start lg:text-start">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {getIcon(step.icon)}
                </div>
                <div className="flex items-center gap-3 mb-3 w-full justify-center lg:justify-start relative">
                    <span className="text-5xl font-black text-slate-100 dark:text-slate-800 group-hover:text-indigo-50 dark:group-hover:text-indigo-900/20 transition-colors absolute -top-4 right-0 lg:right-4 rtl:lg:left-4 rtl:lg:right-auto pointer-events-none select-none">
                        0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white relative z-10">
                        {step.title}
                    </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;