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
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Coordinator'),
    },
    {
      id: 'lecturer',
      title: 'Lecturer',
      icon: GraduationCap,
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Lecturer'),
    },
    {
      id: 'recitation',
      title: 'Recitation Instructor',
      icon: Users,
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Recitation Instructor'),
    },
    {
      id: 'lab',
      title: 'Lab Instructor',
      icon: Laptop,
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Lab Instructor'),
    },
    {
      id: 'substitute',
      title: 'Substitute Instructor',
      icon: UserCheck,
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Substitute Instructor'),
    },
    {
      id: 'session-leader',
      title: 'Qualifying Exam Session Leader',
      icon: Award,
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Session Leader'),
    },
    {
      id: 'teaching-demonstration',
      title: 'Teaching Demonstration Presenter',
      icon: Users,
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Teaching Demonstration Presenter'),
    },
    {
      id: 'internships',
      title: 'Pedagogical Internships',
      icon: School,
      courses: TEACHING_LIST.filter(c => c.institution.includes('Viet Nam')),
    },
  ];

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
                Teaching & Instruction
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Department of Mathematics, Kansas State University & Pedagogical Internships
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {teachingPositions.map((pos) => {
            const IconComponent = pos.icon;
            return (
              <article
                key={pos.id}
                id={`teaching-position-${pos.id}`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 flex-shrink-0">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 self-center">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 font-serif-academic">
                      {pos.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 space-y-2.5 sm:ml-[52px]">
                  {pos.courses.map((course) => {
                    const isGrad = course.level === 'Graduate';
                    return (
                      <div key={course.id}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="flex items-start gap-3 min-w-0">
                            {course.code && (
                              <span className="font-mono-code font-bold text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap pt-0.5">
                                {course.code}
                              </span>
                            )}
                            <span className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium text-sm text-slate-900 dark:text-slate-100 font-serif-academic">
                                {course.title}
                              </span>
                              {pos.id === 'internships' && (
                                <span className="text-sm text-slate-500 dark:text-slate-400 inline-flex items-center gap-1.5">
                                  <School className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                                  {course.institution}
                                </span>
                              )}
                              {isGrad && (
                                <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
                                  Graduate course
                                </span>
                              )}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0 text-sm text-slate-500 dark:text-slate-400 sm:pl-4">
                            <Calendar className="w-4 h-4" aria-hidden="true" />
                            <span>{course.term}</span>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
