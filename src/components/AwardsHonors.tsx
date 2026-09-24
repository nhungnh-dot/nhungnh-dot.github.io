import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { AWARDS_HONORS_LIST } from '../data/academicData';

export const AwardsHonors: React.FC = () => {
  return (
    <section id="awards" className="py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
              <Award className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic">
                Awards & Honors
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Recognition for teaching, research, mentoring, and academic achievement
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {AWARDS_HONORS_LIST.map((award) => (
            <article
              key={award.id}
              className="rounded-2xl bg-white/85 px-5 py-5 sm:px-6 sm:py-6 dark:bg-slate-900/55 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6 shadow-xs hover:shadow-sm transition-shadow"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 font-serif-academic leading-snug">
                  {award.title}
                </h3>
                <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1.5 font-medium">
                  {award.institution}
                </p>
                {award.description && (
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-2.5 max-w-3xl">
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
