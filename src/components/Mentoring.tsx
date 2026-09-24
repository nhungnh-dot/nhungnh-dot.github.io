import React from 'react';
import { Calendar, HeartHandshake } from 'lucide-react';
import { MENTORED_STUDENTS_LIST, MENTORING_ACTIVITIES_LIST } from '../data/academicData';

export const Mentoring: React.FC = () => {
  return (
    <section id="mentoring" className="py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-7 sm:mb-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
              <HeartHandshake className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic">
                Mentoring & Service
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Undergraduate research advising, Directed Reading Programs, and academic outreach
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2.5 ml-0 sm:ml-16">
            {MENTORED_STUDENTS_LIST.length} Research Cohorts
          </p>
        </div>

        <div className="mb-7 sm:mb-8">
          <h3 className="text-sm uppercase tracking-widest text-rose-700 dark:text-rose-300 font-bold mb-4">
            Undergraduate Research Mentorship
          </h3>

          <div className="space-y-5 sm:space-y-6">
            {MENTORED_STUDENTS_LIST.map((student) => (
              <article
                key={student.id}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6"
              >
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 font-serif-academic">
                      {student.studentName}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      — {student.affiliation}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap text-sm">
                    <span className="font-medium text-rose-700 dark:text-rose-300">
                      {student.program}
                    </span>
                    {student.coMentors && (
                      <span className="text-sm text-slate-500 dark:text-slate-400 italic">
                        ({student.coMentors})
                      </span>
                    )}
                  </div>

                  <div className="pt-1">
                    <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                      {student.projects.map((proj, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-rose-500 dark:text-rose-400 font-bold leading-none mt-1">›</span>
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-full bg-rose-50 px-3 py-1.5 text-sm text-rose-800 dark:bg-rose-950/45 dark:text-rose-300 whitespace-nowrap flex-shrink-0 font-semibold sm:text-right">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>{student.term}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {MENTORING_ACTIVITIES_LIST.length > 0 && (
          <div>
            <h3 className="text-sm uppercase tracking-widest text-rose-700 dark:text-rose-300 font-bold mb-4">
              Departmental Service & Panels
            </h3>

            <div className="space-y-5 sm:space-y-6">
              {MENTORING_ACTIVITIES_LIST.map((act) => (
                <article
                  key={act.id}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 font-serif-academic">
                        {act.title}
                      </span>
                      <span className="text-sm font-medium text-rose-700 dark:text-rose-300">
                        {act.role}
                      </span>
                    </div>
                    {act.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                        {act.description}
                      </p>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-2 self-start rounded-full bg-rose-50 px-3 py-1.5 text-sm text-rose-800 dark:bg-rose-950/45 dark:text-rose-300 whitespace-nowrap flex-shrink-0 font-semibold sm:text-right">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    {act.term}
                  </span>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
