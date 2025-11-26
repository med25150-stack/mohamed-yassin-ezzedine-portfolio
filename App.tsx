import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import StatsSection from './components/StatsSection';
import Process from './components/Process';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <Navigation />
          <main>
            <Hero />
            <Ticker />
            <StatsSection />
            <Process />
            <Projects />
            <Experience />
            <Skills />
          </main>
          <Contact />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;