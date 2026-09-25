import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/academicData';

interface HeroProps {
  onOpenCvModal?: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="about" className="py-8 sm:py-10 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <div className="flex-shrink-0">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
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

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 font-serif-academic">
              {PERSONAL_INFO.name}
            </h1>

            <p className="mt-1.5 text-base font-medium text-slate-700 dark:text-slate-300">
              {PERSONAL_INFO.title}
            </p>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {PERSONAL_INFO.department}, {PERSONAL_INFO.institution}
            </p>

            <p className="mt-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Advised by{' '}
              <a
                href={PERSONAL_INFO.advisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-700 dark:text-indigo-300 hover:underline"
              >
                {PERSONAL_INFO.advisor}
              </a>.
            </p>

            <p className="mt-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.researchSummary}
            </p>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Research interests:</span>{' '}
              {PERSONAL_INFO.researchKeywords.join(' · ')}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-medium text-indigo-700 dark:text-indigo-300 hover:underline"
              >
                {PERSONAL_INFO.email}
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-indigo-700 dark:text-indigo-300 hover:underline"
              >
                LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&user=mjpMbqoAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-indigo-700 dark:text-indigo-300 hover:underline"
              >
                Google Scholar
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
