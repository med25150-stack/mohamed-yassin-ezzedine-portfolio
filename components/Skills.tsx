

import React from 'react';
import { 
  Layers, Palette, Terminal, GraduationCap, 
  Target, Award, CheckCircle2, Briefcase, BookOpen,
  BrainCircuit, Monitor, Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BrandIcon = ({ name, className = "w-4 h-4" }: { name: string, className?: string }) => {
  const n = name.toLowerCase();
  
  if (n.includes('meta')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#0668E1' }}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
  }
  
  if (n.includes('google')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#EA4335' }}>
        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
      </svg>
    );
  }

  if (n.includes('adobe') || n.includes('photoshop') || n.includes('illustrator') || n.includes('premiere') || n.includes('after effects')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#FF0000' }}>
        <path d="M15.1 2H24v20L15.1 2zM8.9 2H0v20L8.9 2zM12 9.4L17.6 22h-3.8l-1.6-4H8.1L12 9.4z"/>
      </svg>
    );
  }

  if (n.includes('brevo')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#0092FF' }}>
         <path d="M18.6 3.5c-2.4-1.6-6.6-1.6-8.7.6-3.8 3.9.7 10.5-2.7 15.6-1.5 2.2-4.3 2.6-4.3 2.6s8.6 3.6 13.5-3.3c3.7-5.3-2.6-10.8 1.4-14.7.3-.4.6-.7.8-.8z"/>
      </svg>
    );
  }

  if (n.includes('hubspot')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#FF7A59' }}>
         <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
         <circle cx="12" cy="12" r="3"/>
      </svg>
    );
  }

  if (n.includes('wordpress')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#21759B' }}>
         <path d="M12.158 12.786l-5.844-8.409C8.031 2.895 10.024 2 12.238 2c2.115 0 4.025.807 5.488 2.14l-5.568 8.646zm-2.072 6.545l-3.348-9.673c-.156-.475-.246-.967-.246-1.442 0-2.583 1.83-4.733 4.238-5.267l-.644 16.382zm10.748-4.103c.534-1.724.846-3.527.846-5.346 0-1.74-.298-3.468-.846-5.111l-3.966 6.386 3.966 4.071z"/>
         <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fillOpacity="0.1"/>
      </svg>
    );
  }

  if (n.includes('prestashop')) {
    return (
       <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#DF0067' }}>
         <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 11l-2.5-1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
       </svg>
    );
  }

  if (n.includes('canva')) {
    return (
       <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#00C4CC' }}>
         <circle cx="12" cy="12" r="10" fill="currentColor" />
         <path d="M6.5 12c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5zm8.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" fill="#fff"/>
         <path d="M12 8.5v3.5l2.5 1.5" stroke="#00C4CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
       </svg>
    );
  }

  if (n.includes('capcut')) {
    return (
       <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#000000' }}>
         <path d="M22 6L12 16L2 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
         <path d="M12 4v8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
       </svg>
    );
  }

  if (n.includes('shopify')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#96bf48' }}>
        <path d="M17.1 2.2c-.4 0-.8.3-.9.7l-1 4.5-5.2-4.8c-.3-.3-.8-.3-1.1 0L3.1 8l-1.4-5.2C1.5 2.2 1 2 1 2.6L.1 20.3c0 .8.5 1.5 1.2 1.7l10.2 3.5c.3.1.7.1 1 0l10.2-3.5c.7-.2 1.2-.9 1.2-1.7L23 2.6c0-.6-.5-1-1.1-.9h-.1l-4.7.5z"/>
      </svg>
    )
  }

  if (n.includes('figma')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#F24E1E' }}>
        <path d="M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z"/>
        <path d="M8 6c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z" fill="#A259FF"/>
        <path d="M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" fill="#1ABCFE"/>
        <path d="M4 12c0 2.21 1.79 4 4 4V8c-2.21 0-4 1.79-4 4z" fill="#F24E1E"/>
        <path d="M4 18c0 2.21 1.79 4 4 4v-4c-2.21 0-4 1.79-4 4z" fill="#0ACF83"/>
      </svg>
    )
  }

  if (n.includes('zapier')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#FF4F00' }}>
        <path d="M3.6 12h5.6V3.6L20.4 12h-5.6v8.4L3.6 12z"/>
      </svg>
    )
  }
  
  if (n.includes('chatgpt') || n.includes('claude') || n.includes('jasper')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#74aa9c' }}>
        <path d="M22.28 12.33a7.35 7.35 0 0 0-.58-3.48 7.37 7.37 0 0 0-3.32-3.35 7.33 7.33 0 0 0-4.59-.4 7.37 7.37 0 0 0-4.06-2.5 7.43 7.43 0 0 0-5.73.91 7.39 7.39 0 0 0-3.1 4.7 7.35 7.35 0 0 0-1.87 3.65A7.37 7.37 0 0 0 1 15.65a7.33 7.33 0 0 0 3.79 4.3 7.37 7.37 0 0 0 3.92 2.65 7.43 7.43 0 0 0 5.7-.76 7.39 7.39 0 0 0 3.24-4.57 7.35 7.35 0 0 0 1.99-3.56 7.37 7.37 0 0 0 2.64-1.38zM12.92 2.87a5.57 5.57 0 0 1 3.55 1 5.57 5.57 0 0 1 1.83 3.42l-.24.13-5.06 2.91a.92.92 0 0 0-.46.79v5.82l-.27.16L7.2 14.18v-3.8l6.11-3.52c-.13-.74-.24-2.54-.39-3.99zm-8.8 3.82a5.57 5.57 0 0 1 2.89-2.28 5.57 5.57 0 0 1 3.86.32v.28l.06 5.82a.91.91 0 0 0 .91.81h5.83l.16.27-5.08 8.8-3.31-1.92 3.33-5.74H6.5c-.75-.02-2.55.05-4-.14l1.62-2.22zm-.72 9.1a5.57 5.57 0 0 1-.36-3.68 5.57 5.57 0 0 1 2.93-2.85l.23-.14 5.06-2.92a.92.92 0 0 0 .46-.8V5.7l.27-.15 5.08 2.92V12.3l-6.11 3.52c.13.75.25 2.54.4 3.99l-2.61-1.5-.02-.02-5.33-3.07zM11.08 21.13a5.57 5.57 0 0 1-3.55-1 5.57 5.57 0 0 1-1.83-3.41l.24-.13 5.06-2.91a.92.92 0 0 0 .46-.79V7.07l.27-.16 5.08 2.92v3.81l-6.11 3.52c.13.74.24 2.54.39 3.99l-.01-.02zm8.8-3.82a5.57 5.57 0 0 1-2.89 2.28 5.57 5.57 0 0 1-3.86-.32v-.28l-.06-5.83a.91.91 0 0 0-.91-.8h-5.83l-.16-.27 5.08-8.8 3.31 1.92-3.33 5.75h6.29c.74.02 2.54-.05 3.99.14l-1.63 2.21zm.72-9.1a5.57 5.57 0 0 1 .36 3.68 5.57 5.57 0 0 1-2.93 2.85l-.23.14-5.06 2.92a.92.92 0 0 0 .46.8v5.82l-.27.15-5.08-2.92V11.7l6.11-3.52c-.13-.75-.25-2.54-.4-3.99z"/>
      </svg>
    );
  }

  if (n.includes('gemini')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#4285f4' }}>
         <path d="M11.9,3.3c0.1-1.2,1.8-1.2,2,0c0.3,2.4,1.8,4.7,4.1,5.8c1.3,0.6,1.3,2.5,0,3.1c-2.3,1.1-3.8,3.4-4.1,5.8c-0.1,1.2-1.8,1.2-2,0c-0.3-2.4-1.8-4.7-4.1-5.8c-1.3-0.6-1.3-2.5,0-3.1C10.1,8,11.6,5.7,11.9,3.3z M18.7,3.5c0.1-0.9,1.4-0.9,1.5,0c0.2,1.8,1.3,3.5,3.1,4.3c1,0.5,1,1.9,0,2.3c-1.7,0.8-2.9,2.5-3.1,4.3c-0.1,0.9-1.4,0.9-1.5,0c-0.2-1.8-1.3-3.5-3.1-4.3c-1-0.5-1-1.9,0-2.3C17.4,7,18.5,5.3,18.7,3.5z"/>
      </svg>
    );
  }

  if (n.includes('veo') || n.includes('midjourney')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#5f6368' }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
      </svg>
    );
  }

  // Default fallback for others
  return <Terminal className={`${className} text-slate-500`} />;
};

const Skills: React.FC = () => {
  const { content } = useLanguage();

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'strategy': return <BrainCircuit className="text-indigo-600 dark:text-indigo-400" aria-label="Strategy Icon" />;
      case 'tech': return <Monitor className="text-emerald-600 dark:text-emerald-400" aria-label="Tech Icon" />;
      case 'creative': return <Palette className="text-pink-600 dark:text-pink-400" aria-label="Creative Icon" />;
      case 'ai': return <Sparkles className="text-violet-600 dark:text-violet-400" aria-label="AI Icon" />;
      default: return <Layers aria-label="Default Icon" />;
    }
  };

  const getEducationIcon = (index: number) => {
    if (index === 0) return { big: <GraduationCap size={64} />, small: <GraduationCap size={20} className="text-indigo-300"/> };
    if (index === 1) return { big: <BookOpen size={64} />, small: <BookOpen size={20} className="text-indigo-300"/> };
    return { big: <Briefcase size={64} />, small: <Briefcase size={20} className="text-indigo-300"/> };
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Skills Column */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">{content.sectionTitles.skills_tech_title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.skills.map((category, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-indigo-200 dark:hover:border-slate-600 transition-colors group">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700 flex items-center justify-center me-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md border border-slate-100 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all cursor-default group/icon"
                        title={skill}
                      >
                        <span className="transform transition-all duration-200 ease-out group-hover/icon:scale-110 group-hover/icon:rotate-6">
                          <BrandIcon name={skill} className="w-4 h-4" />
                        </span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">{content.sectionTitles.skills_edu_title}</h2>
            <div className="space-y-6">
              {content.education.map((edu, idx) => {
                const icons = getEducationIcon(idx);
                return (
                  <div key={idx} className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group border border-transparent dark:border-slate-700 hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12 duration-500">
                      {icons.big}
                    </div>
                    <div className="relative z-10 flex items-start">
                      {/* Icon wrapper */}
                      <div className="me-4 mt-1 p-2 bg-indigo-500/20 rounded-lg backdrop-blur-sm">
                          {icons.small}
                      </div>
                      <div>
                          <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest block mb-1">{edu.year}</span>
                          <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
                          <p className="text-slate-400 text-sm mt-1">{edu.school}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-900/50">
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg me-3">
                        <Award size={18} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-bold text-indigo-900 dark:text-indigo-200">{content.sectionTitles.certifications}</h3>
                </div>
                <ul className="space-y-3">
                  {content.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center text-sm text-indigo-800 dark:text-indigo-300">
                      <CheckCircle2 size={16} className="text-indigo-500 dark:text-indigo-400 me-2 shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;