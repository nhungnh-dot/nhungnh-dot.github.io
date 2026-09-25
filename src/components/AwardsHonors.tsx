import React from 'react';
import { AWARDS_HONORS_LIST } from '../data/academicData';

export const AwardsHonors: React.FC = () => {
  const institutions = [...new Set(AWARDS_HONORS_LIST.map(award => award.institution))];

  return (
    <section id="awards" className="py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-7">
          {institutions.map(institution => (
            <section key={institution} aria-label={institution}>
              <h2 className="mb-3 text-base sm:text-lg font-extrabold uppercase tracking-normal text-slate-950 dark:text-white">
                {institution}
              </h2>
              <ul className="space-y-3">
                {AWARDS_HONORS_LIST.filter(award => award.institution === institution).map(award => (
                  <li key={award.id} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <p className="text-base font-normal font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
                          {award.title}
                        </p>
                        <span className="shrink-0 text-sm font-normal tabular-nums text-slate-500 dark:text-slate-400">
                          {award.year}
                        </span>
                      </div>
                      {award.description && (
                        <p className="mt-1 text-xs font-normal text-slate-600 dark:text-slate-400 leading-relaxed">
                          {award.description}
                        </p>
                      )}
                    </div>
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
