import React from 'react';
import { Mail, Linkedin, ExternalLink, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/academicData';

interface HeroProps {
  onOpenCvModal?: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal, onNavigate }) => {
  return (
    <section id="about" className="pt-24 pb-14 sm:pt-28 sm:pb-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10">
          
          {/* Portrait */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-sm border-2 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 ring-4 ring-slate-100 dark:ring-slate-900">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('assets/')) {
                    target.src = `${import.meta.env.BASE_URL}assets/profile-image.png`;
                  }
                }}
              />
            </div>
          </div>

          {/* Academic Bio */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 font-serif-academic">
              {PERSONAL_INFO.name}
            </h1>

            <p className="mt-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I am a PhD Candidate in Mathematics at <span className="font-semibold text-slate-900 dark:text-slate-100">Kansas State University</span>, advised by{' '}
              <a
                href={PERSONAL_INFO.advisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline inline-flex items-center gap-0.5"
              >
                <span>{PERSONAL_INFO.advisor}</span>
                <ExternalLink className="w-3 h-3" />
              </a>.
            </p>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.researchSummary}
            </p>

            {/* Research Keywords */}
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-1.5">
              {PERSONAL_INFO.researchKeywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Direct Links */}
            <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://scholar.google.com/citations?hl=en&user=mjpMbqoAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Google Scholar</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
