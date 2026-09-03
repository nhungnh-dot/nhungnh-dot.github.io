import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, MapPin, GraduationCap, BookOpen, Users, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_LIST, EMPLOYMENT_DATA, PUBLICATIONS_LIST, TALKS_LIST, TEACHING_LIST, MENTORED_STUDENTS_LIST } from '../data/academicData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CV Modal Toolbar */}
        <div className="no-print px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 font-serif-academic">
              Academic Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="cv-modal-print-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="p-6 sm:p-10 overflow-y-auto text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-5 mb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold font-serif-academic text-slate-950 dark:text-slate-50">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Ph.D. Student in Mathematics · Kansas State University
            </p>

            <div className="mt-2.5 flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-4 text-xs text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>Cardwell Hall, Manhattan, KS 66506</span>
              </span>
              <span>LinkedIn: {PERSONAL_INFO.linkedin}</span>
              <span>GitHub: @nhungnh-dot</span>
            </div>
          </div>

          {/* Research Interests */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Research Interests
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Computational inverse problems, wave propagation and inverse scattering, source reconstruction in periodic media, spectral model-informed neural networks (PINNs), boundary regularity for steady Stokes fluid systems.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline gap-4">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-100">{edu.degree}</span>
                    <span className="text-slate-600 dark:text-slate-400">, {edu.institution}</span>
                    {edu.details && (
                      <p className="text-2xs text-slate-500 dark:text-slate-400 mt-0.5">{edu.details}</p>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 flex-shrink-0 font-medium">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Appointments */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Academic Appointments (Kansas State University)
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              {EMPLOYMENT_DATA.map((job, idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{job.title}</span>
                  </div>
                  <span className="text-xs text-slate-500 text-right">{job.semesters.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Publications & Preprints
            </h2>
            <ol className="list-decimal list-outside pl-4 space-y-2.5 text-xs sm:text-sm">
              {PUBLICATIONS_LIST.map((pub) => (
                <li key={pub.id} className="pl-1">
                  <span className="text-slate-700 dark:text-slate-300">
                    {pub.authors.join(', ')}. "{pub.title}."{' '}
                    <span className="italic">{pub.venue}</span>, {pub.year}.
                    {pub.doi && ` DOI: ${pub.doi}`}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Selected Talks */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Conference & Seminar Presentations
            </h2>
            <div className="space-y-2 text-xs">
              {TALKS_LIST.slice(0, 7).map((talk) => (
                <div key={talk.id} className="flex justify-between items-baseline gap-4">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{talk.event}</span>
                    <span className="text-slate-500"> ({talk.type.toUpperCase()}) — {talk.location}</span>
                  </div>
                  <span className="text-slate-500 flex-shrink-0">{talk.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* University Teaching */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              University Teaching (Kansas State University)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              {TEACHING_LIST.filter(t => t.institution.includes('Kansas State')).map((course) => (
                <div key={course.id} className="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-medium text-slate-800 dark:text-slate-200">{course.code}: {course.title}</span>
                  <span className="text-slate-500 text-2xs">{course.term}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mentoring */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Student Mentoring (REU & Directed Reading Program)
            </h2>
            <div className="space-y-1.5 text-xs">
              {MENTORED_STUDENTS_LIST.map((student) => (
                <div key={student.id}>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{student.studentName}</span>
                  <span className="text-slate-500"> ({student.affiliation}) — {student.projects.join('; ')} ({student.term})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
