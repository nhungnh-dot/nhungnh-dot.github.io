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

type SiteTab = 'about' | 'research' | 'teaching' | 'mentoring';

const SITE_TABS: Array<{ id: SiteTab; label: string }> = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'mentoring', label: 'Mentoring & Service' },
];

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
  const [activeTab, setActiveTab] = useState<SiteTab>('about');

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
      <main id="main-content" className="pt-16">
        <div className="sticky top-16 z-30 border-b border-slate-200 bg-slate-50/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 no-print">
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 overflow-x-auto"
            role="tablist"
            aria-label="Main sections"
          >
            <div className="flex min-w-max sm:min-w-0 sm:grid sm:grid-cols-4">
              {SITE_TABS.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    id={`site-tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`site-panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-5 py-4 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 sm:px-3 ${
                      isActive
                        ? 'text-indigo-700 dark:text-indigo-300'
                        : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100'
                    }`}
                  >
                    {tab.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-indigo-600 transition-opacity dark:bg-indigo-400 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {activeTab === 'about' && (
          <div
            id="site-panel-about"
            role="tabpanel"
            aria-labelledby="site-tab-about"
          >
            <Hero
              onOpenCvModal={() => setIsCvModalOpen(true)}
              onNavigate={handleNavigate}
            />
            <EducationEmployment />
          </div>
        )}

        {activeTab === 'research' && (
          <div
            id="site-panel-research"
            role="tabpanel"
            aria-labelledby="site-tab-research"
          >
            <ResearchPublications
              onOpenBibtex={(pub) => setSelectedBibtexPub(pub)}
            />
            <TalksPresentations />
          </div>
        )}

        {activeTab === 'teaching' && (
          <div
            id="site-panel-teaching"
            role="tabpanel"
            aria-labelledby="site-tab-teaching"
          >
            <Teaching />
          </div>
        )}

        {activeTab === 'mentoring' && (
          <div
            id="site-panel-mentoring"
            role="tabpanel"
            aria-labelledby="site-tab-mentoring"
          >
            <Mentoring />
          </div>
        )}
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
