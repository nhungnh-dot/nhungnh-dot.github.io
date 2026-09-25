import React from 'react';
import { Calendar } from 'lucide-react';
import { AWARDS_HONORS_LIST } from '../data/academicData';

export const AwardsHonors: React.FC = () => {
  const institutions = [...new Set(AWARDS_HONORS_LIST.map(award => award.institution))];

  return (
    <section id="awards" className="py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-7">
          {institutions.map(institution => (
            <section key={institution} aria-label={institution}>
              <h2 className="mb-3 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-serif-academic">
                {institution}
              </h2>
              <ul className="space-y-3">
                {AWARDS_HONORS_LIST.filter(award => award.institution === institution).map(award => (
                  <li
                    key={award.id}
                    className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4"
                  >
                    <div className="min-w-0">
                      <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 font-serif-academic leading-snug">
                        {award.title}
                      </p>
                      {award.description && (
                        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {award.description}
                        </p>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-2 flex-shrink-0 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {award.year}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
