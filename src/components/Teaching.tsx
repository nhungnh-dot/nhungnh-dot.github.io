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
import { CourseTeaching } from '../types';

export const Teaching: React.FC = () => {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const toggleCourseDetails = (id: string) => {
    setExpandedCourseId(prev => (prev === id ? null : id));
  };

  const teachingPositions = [
    {
      id: 'lecturer',
      title: 'Lecturer',
      badge: 'Instructor of Record',
      badgeStyle: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-800/60',
      iconBg: 'bg-indigo-600 dark:bg-indigo-500',
      icon: GraduationCap,
      description: 'Primary responsibility for course syllabus formulation, lectures, examinations, and final grade assignment.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Lecturer'),
    },
    {
      id: 'coordinator',
      title: 'Course Coordinator',
      badge: 'Curriculum & Administration',
      badgeStyle: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/60',
      iconBg: 'bg-purple-600 dark:bg-purple-500',
      icon: ClipboardCheck,
      description: 'Coordinating syllabus structure, examination preparation, grading rubrics, and student support across sections.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Coordinator'),
    },
    {
      id: 'recitation',
      title: 'Recitation Instructor',
      badge: 'Discussion & Problem Solving',
      badgeStyle: 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/60',
      iconBg: 'bg-sky-600 dark:bg-sky-500',
      icon: Users,
      description: 'Weekly recitation problem-solving sessions, interactive discussions, quiz grading, and student office hours.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Recitation Instructor'),
    },
    {
      id: 'lab',
      title: 'Laboratory Instructor',
      badge: 'Computational Labs',
      badgeStyle: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200/60 dark:border-teal-800/60',
      iconBg: 'bg-teal-600 dark:bg-teal-500',
      icon: Laptop,
      description: 'Facilitating active-learning computer algebra sessions, matrix computational algorithms, and software implementation.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Lab Instructor'),
    },
    {
      id: 'substitute',
      title: 'Substitute Instructor',
      badge: 'Guest & Substitute Lectures',
      badgeStyle: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/60',
      iconBg: 'bg-amber-600 dark:bg-amber-500',
      icon: UserCheck,
      description: 'Delivering coverage lectures for graduate and undergraduate courses during faculty absences.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Substitute Instructor'),
    },
    {
      id: 'session-leader',
      title: 'Qualifying Exam Session Leader',
      badge: 'Graduate Preparation',
      badgeStyle: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60',
      iconBg: 'bg-emerald-600 dark:bg-emerald-500',
      icon: Award,
      description: 'Conducting Ph.D. qualifying exam review workshops for graduate students.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Kansas State') && c.role === 'Session Leader'),
    },
    {
      id: 'internships',
      title: 'Pedagogical Internships',
      badge: 'Secondary Mathematics Education',
      badgeStyle: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
      iconBg: 'bg-slate-700 dark:bg-slate-600',
      icon: School,
      description: 'Teaching internships as part of a Bachelor’s degree in Mathematics Education.',
      courses: TEACHING_LIST.filter(c => c.institution.includes('Viet Nam')),
    },
  ];

  return (
    <section id="teaching" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-8 pb-3 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic">
              Teaching & Instruction
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Department of Mathematics, Kansas State University & Pedagogical Internships
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1 sm:mt-0">
            {teachingPositions.length} Instructional Roles · {TEACHING_LIST.length} Courses
          </span>
        </div>

        {/* Position Subsections */}
        <div className="space-y-8">
          {teachingPositions.map((pos) => {
            const IconComponent = pos.icon;
            return (
              <div key={pos.id} id={`teaching-position-${pos.id}`}>
                {/* Position Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${pos.iconBg} text-white flex items-center justify-center flex-shrink-0 shadow-xs`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-serif-academic">
                        {pos.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {pos.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Courses List */}
                <div className="bg-white dark:bg-slate-900/40 rounded-xl border border-slate-200/80 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/70 shadow-2xs overflow-hidden">
                  {pos.courses.map((course) => {
                    const isExpanded = expandedCourseId === course.id;
                    const isGrad = course.level === 'Graduate';
                    return (
                      <div
                        key={course.id}
                        className="transition-colors hover:bg-slate-50/60 dark:hover:bg-slate-800/30"
                      >
                        <div
                          onClick={() => course.description && toggleCourseDetails(course.id)}
                          className={`p-3.5 sm:px-4 sm:py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 ${course.description ? 'cursor-pointer select-none' : ''}`}
                        >
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="font-mono-code font-bold text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70">
                              {course.code}
                            </span>
                            <span className="font-medium text-sm text-slate-900 dark:text-slate-100 font-serif-academic">
                              {course.title}
                            </span>
                            {isGrad && (
                              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60">
                                Graduate
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2.5 flex-shrink-0 text-xs">
                            <span className="text-slate-500 dark:text-slate-400 inline-flex items-center gap-1 min-w-[6.5rem] justify-start sm:justify-end">
                              <Calendar className="w-3 h-3 text-slate-400" />
                              {course.term}
                            </span>
                            {course.description && (
                              <button
                                type="button"
                                aria-label="Toggle details"
                                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                              >
                                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Expandable Details */}
                        {isExpanded && course.description && (
                          <div className="px-4 pb-3.5 pt-1 text-xs text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/20 border-t border-slate-100/80 dark:border-slate-800/60 leading-relaxed">
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Course Scope & Details: </span>
                            {course.description}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
