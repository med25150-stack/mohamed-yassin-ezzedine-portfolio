

import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-900 dark:bg-black text-white py-20 border-t border-slate-800 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">{content.sectionTitles.contact_title}</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              {content.sectionTitles.contact_subtitle}
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${content.personalInfo.email}`} className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center me-4 group-hover:bg-indigo-600 transition-colors">
                  <Mail size={18} />
                </div>
                <span>{content.personalInfo.email}</span>
              </a>
              
              <a href={`tel:${content.personalInfo.phone}`} className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center me-4 group-hover:bg-indigo-600 transition-colors">
                  <Phone size={18} />
                </div>
                <span>{content.personalInfo.phone}</span>
              </a>

              <a href={content.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center me-4 group-hover:bg-[#0077b5] transition-colors">
                  <Linkedin size={18} />
                </div>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-slate-700 dark:border-slate-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 rtl:-mr-0 rtl:-ml-16"></div>
            
            <h3 className="text-xl font-bold mb-6">{content.sectionTitles.quick_summary}</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-slate-400">{content.navigation.experience}</span>
                    <span className="font-semibold">{content.personalInfo.years_experience}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-slate-400">Location</span>
                    <span className="font-semibold flex items-center"><MapPin size={14} className="me-1"/> {content.personalInfo.location}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-slate-400">{content.sectionTitles.status_label}</span>
                    <span className="font-semibold text-emerald-400 text-end">{content.personalInfo.work_authorization}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-slate-400">{content.sectionTitles.driving_license_label}</span>
                    <span className="font-semibold text-slate-200 text-end">{content.personalInfo.driving_license}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                    <span className="text-slate-400">{content.sectionTitles.skills_edu_title}</span>
                    <span className="font-semibold text-end">{content.personalInfo.education_short}</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                    <span className="text-slate-400">{content.personalInfo.specialty.split(' & ')[0]}</span>
                    <span className="font-semibold text-end">{content.personalInfo.specialty}</span>
                </div>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 dark:border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} {content.personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
