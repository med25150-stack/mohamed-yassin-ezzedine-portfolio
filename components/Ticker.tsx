import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Ticker: React.FC = () => {
  const { content, dir } = useLanguage();
  const items = content.ticker;

  return (
    <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 overflow-hidden relative z-20 border-y border-slate-800 dark:border-slate-200">
      <div 
        className={`flex w-max hover:[animation-play-state:paused] ${
          dir === 'rtl' ? 'animate-scroll-reverse' : 'animate-scroll'
        }`}
        style={{ direction: 'ltr' }} // Force LTR for the flex container so translate works predictably, visual direction handled by animation
      >
        {/* Quadruple the items to ensure smooth infinite loop coverage without gaps */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-4 md:mx-8">
            <span className="text-sm md:text-base font-bold tracking-widest uppercase whitespace-nowrap">
              {item}
            </span>
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full ms-8 md:ms-16"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;