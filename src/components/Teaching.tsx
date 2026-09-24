import React, { useState } from 'react';
import {
  GraduationCap,
  ClipboardCheck,
  Users,
  Laptop,
  UserCheck,
  Award,
  School,
  Calendar,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { TEACHING_LIST } from '../data/academicData';

export const Teaching: React.FC = () => {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const toggleCourseDetails = (id: string) => {
    setExpandedCourseId(prev => (prev === id ? null : id));
  };

  const teachingPositions = [
    {
      id: 'lecturer',
      title: 'Lecturer',
      icon: GraduationCap,
      description: 'Primary responsibility for course syllabus formulation, lectures, examinations, and final grade assignment.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Lecturer'),
    },
    {
      id: 'coordinator',
      title: 'Course Coordinator',
      icon: ClipboardCheck,
      description: 'Coordinating syllabus structure, examination preparation, grading rubrics, and student support across sections.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Coordinator'),
    },
    {
      id: 'recitation',
      title: 'Recitation Instructor',
      icon: Users,
      description: 'Weekly recitation problem-solving sessions, interactive discussions, quiz grading, and student office hours.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Recitation Instructor'),
    },
    {
      id: 'lab',
      title: 'Laboratory Instructor',
      icon: Laptop,
      description: 'Facilitating active-learning computer algebra sessions, matrix computational algorithms, and software implementation.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Lab Instructor'),
    },
    {
      id: 'substitute',
      title: 'Substitute Instructor',
      icon: UserCheck,
      description: 'Delivering coverage lectures for graduate and undergraduate courses during faculty absences.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Substitute Instructor'),
    },
    {
      id: 'session-leader',
      title: 'Qualifying Exam Session Leader',
      icon: Award,
      description: 'Conducting Ph.D. qualifying exam review workshops for graduate students.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Session Leader'),
    },
    {
      id: 'internships',
      title: 'Pedagogical Internships',
      icon: School,
      description: 'Teaching internships as part of a Bachelor’s degree in Mathematics Education.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Viet Nam')),
    },
  ];

  return (
    <section id="teaching" className="py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-7 sm:mb-8">
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
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2.5 ml-0 sm:ml-16">
            {teachingPositions.length} Instructional Roles · {TEACHING_LIST.length} Courses
          </p>
        </div>

        <div className="space-y-7 sm:space-y-8">
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
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 font-serif-academic">
                      {pos.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {pos.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3.5 space-y-3 sm:ml-[52px]">
                  {pos.courses.map((course) => {
                    const isExpanded = expandedCourseId === course.id;
                    const isGrad = course.level === 'Graduate';
                    return (
                      <div key={course.id}>
                        <div
                          onClick={() => course.description && toggleCourseDetails(course.id)}
                          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${course.description ? 'cursor-pointer select-none' : ''}`}
                        >
                          <div className="flex items-start gap-3 min-w-0">
                            <span className="font-mono-code font-bold text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap pt-0.5">
                              {course.code}
                            </span>
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
                            {course.description && (
                              <button
                                type="button"
                                aria-label={`Toggle details for ${course.title}`}
                                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                              >
                                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              </button>
                            )}
                          </div>
                        </div>

                        {isExpanded && course.description && (
                          <p className="mt-2 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Course Scope & Details: </span>
                            {course.description}
                          </p>
                        )}
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
