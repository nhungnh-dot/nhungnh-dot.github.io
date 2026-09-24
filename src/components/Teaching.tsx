import React from 'react';
import {
  GraduationCap,
  ClipboardCheck,
  Users,
  Laptop,
  UserCheck,
  Award,
  School,
  Calendar,
} from 'lucide-react';
import { TEACHING_LIST } from '../data/academicData';

export const Teaching: React.FC = () => {
  const teachingPositions = [
    {
      id: 'coordinator',
      title: 'Coordinator',
      icon: ClipboardCheck,
      courses: TEACHING_LIST.filter(
        c => c.institution.includes('Kansas State') && c.role === 'Coordinator'
      ),
    },
    {
      id: 'lecturer',
      title: 'Lecturer',
      icon: GraduationCap,
      courses: TEACHING_LIST.filter(
        c => c.institution.includes('Kansas State') && c.role === 'Lecturer'
      ),
    },
    {
      id: 'recitation',
      title: 'Recitation Instructor',
      icon: Users,
      courses: TEACHING_LIST.filter(
        c => c.institution.includes('Kansas State') && c.role === 'Recitation Instructor'
      ),
    },
    {
      id: 'lab',
      title: 'Lab Instructor',
      icon: Laptop,
      courses: TEACHING_LIST.filter(
        c => c.institution.includes('Kansas State') && c.role === 'Lab Instructor'
      ),
    },
    {
      id: 'substitute',
      title: 'Substitute Instructor',
      icon: UserCheck,
      courses: TEACHING_LIST.filter(
        c => c.institution.includes('Kansas State') && c.role === 'Substitute Instructor'
      ),
    },
  ];

  const additionalActivities = TEACHING_LIST.filter(
    c =>
      c.institution.includes('Kansas State') &&
      (c.role === 'Session Leader' || c.role === 'Teaching Demonstration Presenter')
  );

  const internships = TEACHING_LIST.filter(c => c.institution.includes('Viet Nam'));

  const renderCourse = (
    course: (typeof TEACHING_LIST)[number],
    options?: { showInstitution?: boolean; showRole?: boolean }
  ) => {
    const isGrad = course.level === 'Graduate';

    return (
      <div
        key={course.id}
        className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            {course.code && (
              <span className="font-mono-code font-bold text-sm text-slate-600 dark:text-slate-300">
                {course.code}
              </span>
            )}
            <span className="font-medium text-sm text-slate-900 dark:text-slate-100 font-serif-academic">
              {course.title}
            </span>
          </div>

          {options?.showRole && (
            <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
              {course.role}
            </p>
          )}

          {options?.showInstitution && (
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400 inline-flex items-center gap-1.5">
              <School className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              {course.institution}
            </p>
          )}

          {isGrad && !options?.showRole && (
            <p className="mt-0.5 text-sm font-medium text-amber-700 dark:text-amber-300">
              Graduate course
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 text-sm text-slate-500 dark:text-slate-400">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <span>{course.term}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="teaching" className="py-8 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-5 sm:mb-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic">
                Teaching Experience
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Department of Mathematics, Kansas State University
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {teachingPositions.map((pos) => {
            const IconComponent = pos.icon;
            return (
              <article key={pos.id} id={`teaching-position-${pos.id}`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 flex-shrink-0">
                    <IconComponent className="w-4.5 h-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 font-serif-academic">
                    {pos.title}
                  </h3>
                </div>

                <div className="mt-2.5 space-y-2.5 sm:ml-12">
                  {pos.courses.map(course => renderCourse(course))}
                </div>
              </article>
            );
          })}

          <article id="teaching-position-additional">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 flex-shrink-0">
                <Award className="w-4.5 h-4.5" aria-hidden="true" />
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 font-serif-academic">
                Additional Teaching Activities
              </h3>
            </div>

            <div className="mt-2.5 space-y-2.5 sm:ml-12">
              {additionalActivities.map(course =>
                renderCourse(course, { showRole: true })
              )}
            </div>
          </article>

          <article id="teaching-position-internships">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 flex-shrink-0">
                <School className="w-4.5 h-4.5" aria-hidden="true" />
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 font-serif-academic">
                Pedagogical Internships
              </h3>
            </div>

            <div className="mt-2.5 space-y-2.5 sm:ml-12">
              {internships.map(course =>
                renderCourse(course, { showInstitution: true })
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
