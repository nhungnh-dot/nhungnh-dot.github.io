import React from 'react';
import { Calendar } from 'lucide-react';
import { AWARDS_HONORS_LIST } from '../data/academicData';

export const AwardsHonors: React.FC = () => {
  return (
    <section id="awards" className="py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="space-y-4 sm:space-y-5">
          {AWARDS_HONORS_LIST.map((award) => (
            <article
              key={award.id}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 font-serif-academic leading-snug">
                  {award.title}
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1.5 font-medium">
                  {award.institution}
                </p>
                {award.description && (
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5 max-w-3xl">
                    {award.description}
                  </p>
                )}
              </div>

              <span className="inline-flex items-center gap-2 self-start rounded-full bg-amber-50 px-3 py-1.5 text-sm text-amber-800 dark:bg-amber-950/45 dark:text-amber-300 whitespace-nowrap flex-shrink-0 font-semibold sm:text-right">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {award.year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
