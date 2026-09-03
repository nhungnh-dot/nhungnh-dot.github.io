import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchPublications } from './components/ResearchPublications';
import { TalksPresentations } from './components/TalksPresentations';
import { Teaching } from './components/Teaching';
import { Mentoring } from './components/Mentoring';
import { EducationEmployment } from './components/EducationEmployment';
import { ContactFooter } from './components/ContactFooter';
import { BibtexModal } from './components/BibtexModal';
import { CvModal } from './components/CvModal';
import { Publication } from './types';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nhungnh_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedBibtexPub, setSelectedBibtexPub] = useState<Publication | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('nhungnh_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('nhungnh_theme', 'light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onNavigate={handleNavigate}
        />

        <EducationEmployment />

        <ResearchPublications
          onOpenBibtex={(pub) => setSelectedBibtexPub(pub)}
        />

        <TalksPresentations />

        <Teaching />

        <Mentoring />
      </main>

      {/* Contact & Academic Footer */}
      <ContactFooter />

      {/* BibTeX Citation Modal */}
      <BibtexModal
        publication={selectedBibtexPub}
        onClose={() => setSelectedBibtexPub(null)}
      />

      {/* Curriculum Vitae Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
