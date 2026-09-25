import React from 'react';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { EDUCATION_LIST, EMPLOYMENT_DATA } from '../data/academicData';

export const EducationEmployment: React.FC = () => {
  return (
    <section id="experience" className="py-8 sm:py-10 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <section aria-labelledby="education-heading">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
              <GraduationCap className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <h2
              id="education-heading"
              className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-serif-academic"
            >
              Education
            </h2>
          </div>

          <ul className="space-y-4">
            {EDUCATION_LIST.map((edu) => (
              <li
                key={edu.id}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6"
              >
                <div className="min-w-0">
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {edu.degree}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                    {edu.institution} · {edu.location}
                  </p>
                  {edu.details && (
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
                <span className="shrink-0 text-sm text-slate-500 dark:text-slate-400 sm:text-right">
                  {edu.period}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8" aria-labelledby="appointments-heading">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700 ring-1 ring-violet-200 dark:bg-violet-900/50 dark:text-violet-200 dark:ring-violet-800">
              <BriefcaseBusiness className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <h2
              id="appointments-heading"
              className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-serif-academic"
            >
              Appointments
            </h2>
          </div>
          <p className="mt-1 mb-4 text-sm text-slate-500 dark:text-slate-400">
            Department of Mathematics, Kansas State University
          </p>

          <ul className="space-y-4">
            {EMPLOYMENT_DATA.map((job, idx) => (
              <li key={idx}>
                <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {job.title}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {job.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};
