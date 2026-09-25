import React from 'react';
import { EDUCATION_LIST, EMPLOYMENT_DATA } from '../data/academicData';

export const EducationEmployment: React.FC = () => {
  return (
    <section id="experience" className="py-8 sm:py-10 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <section aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-serif-academic"
          >
            Education
          </h2>

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
          <h2
            id="appointments-heading"
            className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-serif-academic"
          >
            Appointments
          </h2>
          <p className="mt-1 mb-4 text-sm text-slate-500 dark:text-slate-400">
            Department of Mathematics, Kansas State University
          </p>

          <ul className="space-y-4">
            {EMPLOYMENT_DATA.map((job, idx) => (
              <li key={idx}>
                <p className="text-base font-normal text-slate-800 dark:text-slate-200">
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
