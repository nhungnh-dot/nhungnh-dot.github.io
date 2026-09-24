import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { AWARDS_HONORS_LIST } from '../data/academicData';

export const AwardsHonors: React.FC = () => {
  return (
    <section id="awards" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8 pb-3 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-100 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/50">
              <Award className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic">
                Awards & Honors
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Recognition for teaching, research, mentoring, and academic achievement
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200/80 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/70 shadow-2xs overflow-hidden">
          {AWARDS_HONORS_LIST.map((award) => (
            <article
              key={award.id}
              className="p-4 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-5 hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 font-serif-academic leading-snug">
                  {award.title}
                </h3>
                <p className="text-xs text-indigo-700 dark:text-indigo-300 mt-1 font-medium">
                  {award.institution}
                </p>
                {award.description && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5">
                    {award.description}
                  </p>
                )}
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap flex-shrink-0 font-medium sm:text-right pt-0.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                {award.year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
