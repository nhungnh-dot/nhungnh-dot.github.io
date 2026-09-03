import React from 'react';
import { Calendar, Compass, HeartHandshake } from 'lucide-react';
import { MENTORED_STUDENTS_LIST, MENTORING_ACTIVITIES_LIST } from '../data/academicData';

export const Mentoring: React.FC = () => {
  return (
    <section id="mentoring" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-8 pb-3 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic">
              Mentoring & Service
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Undergraduate research advising, Directed Reading Programs, and academic outreach
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1 sm:mt-0">
            {MENTORED_STUDENTS_LIST.length} Research Cohorts
          </span>
        </div>

        {/* Undergraduate Research Mentorship */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            <h3 className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
              Undergraduate Research Mentorship
            </h3>
          </div>

          <div className="bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200/80 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/70 shadow-2xs overflow-hidden">
            {MENTORED_STUDENTS_LIST.map((student) => (
              <div
                key={student.id}
                className="p-4 sm:p-4.5 flex flex-col sm:flex-row sm:items-start justify-between gap-3 hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 font-serif-academic">
                      {student.studentName}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      — {student.affiliation}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50">
                      {student.program}
                    </span>
                    {student.coMentors && (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                        ({student.coMentors})
                      </span>
                    )}
                  </div>

                  <div className="pt-1">
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {student.projects.map((proj, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-indigo-500 dark:text-indigo-400 font-bold leading-none mt-0.5">›</span>
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap flex-shrink-0 font-medium sm:text-right pt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{student.term}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departmental Service & Outreach Panels */}
        {MENTORING_ACTIVITIES_LIST.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
              <h3 className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold">
                Departmental Service & Panels
              </h3>
            </div>

            <div className="bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200/80 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/70 shadow-2xs overflow-hidden">
              {MENTORING_ACTIVITIES_LIST.map((act) => (
                <div
                  key={act.id}
                  className="p-3.5 sm:px-4 sm:py-3.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4 hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <div className="space-y-0.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 font-serif-academic">
                        {act.title}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                        {act.role}
                      </span>
                    </div>
                    {act.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-0.5">
                        {act.description}
                      </p>
                    )}
                  </div>

                  <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap flex-shrink-0 font-medium sm:text-right inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {act.term}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
