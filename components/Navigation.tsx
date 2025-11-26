import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.navigation.about, href: '#about' },
    { name: content.navigation.performance, href: '#performance' },
    { name: content.navigation.projects, href: '#projects' },
    { name: content.navigation.experience, href: '#experience' },
    { name: content.navigation.skills, href: '#skills' },
    { name: content.navigation.contact, href: '#contact' },
  ];

  const LanguageSwitcher = () => (
    <div className="flex items-center space-x-1 rtl:space-x-reverse bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
      {['en', 'fr', 'ar'].map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang as any)}
          className={`px-2 py-1 min-w-[34px] rounded-md transition-all text-xs font-bold ${
            language === lang
              ? 'bg-white dark:bg-slate-700 shadow-sm ring-1 ring-black/5 dark:ring-white/10 text-indigo-600 dark:text-indigo-400'
              : 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400'
          }`}
          title={lang.toUpperCase()}
          aria-label={`Switch to ${lang.toUpperCase()}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600 dark:from-white dark:to-indigo-400">
          MYE<span className="text-indigo-600 dark:text-indigo-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

          <LanguageSwitcher />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href={content.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-[#0077b5] dark:text-slate-400 dark:hover:text-[#0077b5] transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button & Tools */}
        <div className="md:hidden flex items-center space-x-3 rtl:space-x-reverse">
          <LanguageSwitcher />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-slate-200">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg border-t border-slate-100 dark:border-slate-800 p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium block"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;