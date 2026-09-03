import React from 'react';
import { ExternalLink } from 'lucide-react';
import { EDUCATION_LIST, EMPLOYMENT_DATA } from '../data/academicData';

export const EducationEmployment: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic mb-6">
          Education & Appointments
        </h2>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3">
            Education
          </h3>
          <ul className="divide-y divide-slate-200 dark:divide-slate-800 list-none">
            {EDUCATION_LIST.map((edu) => (
              <li key={edu.id} className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                      {edu.degree}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      — {edu.institution} ({edu.location})
                    </span>
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap flex-shrink-0 font-medium sm:text-right">
                  {edu.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Appointments at KSU */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
              Appointments (Kansas State University)
            </h3>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium hidden sm:inline">
              Department of Mathematics
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {EMPLOYMENT_DATA.map((job, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 font-serif-academic">
                      {job.title}
                    </h4>
                    <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 whitespace-nowrap border border-slate-200/60 dark:border-slate-700/60">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    {job.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block mb-1.5">
                    Active Terms
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {job.semesters.map((sem, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50"
                      >
                        {sem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
