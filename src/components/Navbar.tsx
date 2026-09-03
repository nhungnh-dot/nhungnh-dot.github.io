import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/academicData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCvModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xs'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Name (Only visible when scrolled past hero title) */}
        <button
          onClick={scrollToTop}
          className={`flex items-center gap-2.5 group focus:outline-none cursor-pointer text-left transition-all duration-300 transform ${
            scrolled
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-1 pointer-events-none'
          }`}
          id="navbar-brand-link"
          tabIndex={scrolled ? 0 : -1}
          aria-hidden={!scrolled}
        >
          <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-serif-academic">
            {PERSONAL_INFO.name}
          </span>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            id="navbar-theme-toggle"
            aria-label="Toggle light or dark theme"
            className="p-2 rounded-full border text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
