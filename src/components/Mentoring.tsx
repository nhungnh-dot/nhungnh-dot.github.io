import React from 'react';
import { Calendar } from 'lucide-react';
import { MENTORED_STUDENTS_LIST, MENTORING_ACTIVITIES_LIST } from '../data/academicData';

export const Mentoring: React.FC = () => {
  const serviceGroups = [
    'Organizer',
    'Mentor',
    'Graduate Student Leadership',
    'Proctor',
    'Graduate Student Representative',
    'Assistant',
    'Panelist',
  ];

  return (
    <section id="mentoring" className="py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <section aria-labelledby="mentoring-experience-heading" className="mb-6 sm:mb-7">
          <h3
            id="mentoring-experience-heading"
            className="mb-3 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-serif-academic"
          >
            Mentoring Experience
          </h3>
          <ol className="space-y-3 sm:space-y-3.5 list-none">
            {MENTORED_STUDENTS_LIST.map((student, index) => (
              <li key={student.id} className="flex items-start gap-3">
                <span className="shrink-0 text-sm sm:text-base font-semibold tabular-nums text-rose-700 dark:text-rose-300">
                  {index + 1}.
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 font-serif-academic">
                        {student.studentName}
                      </h4>
                      <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                        {student.affiliation}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 flex-shrink-0 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {student.term}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    {student.program}
                  </p>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {student.projects.length === 1 ? (
                      <p><span className="font-medium">Project:</span> {student.projects[0]}</p>
                    ) : (
                      <>
                        <p className="font-medium">Projects:</p>
                        <ul className="ml-4 list-disc space-y-0.5">
                          {student.projects.map(project => <li key={project}>{project}</li>)}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="outreach-service-heading">
          <h3
            id="outreach-service-heading"
            className="mb-3 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100 font-serif-academic"
          >
            Outreach and Service
          </h3>
          <div className="space-y-4 sm:space-y-5">
            {serviceGroups.map(role => {
              const activities = MENTORING_ACTIVITIES_LIST.filter(activity => activity.role === role);
              return activities.length > 0 && (
                <div key={role}>
                  <h4 className="mb-2 font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 font-serif-academic">
                    {role}
                  </h4>
                  <ul className="space-y-2.5">
                    {activities.map(activity => (
                      <li key={activity.id} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                        <div className="min-w-0">
                          <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 font-serif-academic leading-snug">
                            {activity.title}
                          </p>
                          {activity.description && (
                            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                              {activity.description}
                            </p>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-2 flex-shrink-0 text-sm text-slate-500 dark:text-slate-400">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          {activity.term}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};
