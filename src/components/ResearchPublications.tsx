import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { PUBLICATIONS_LIST } from '../data/academicData';
import { Publication } from '../types';

interface ResearchProps {
  onOpenBibtex?: (pub: Publication) => void;
}

export const ResearchPublications: React.FC<ResearchProps> = () => {
  const preprints = PUBLICATIONS_LIST.filter(p => p.status === 'submitted');
  const published = PUBLICATIONS_LIST.filter(p => p.status === 'published');

  const renderPubItem = (pub: Publication) => (
      <li
        key={pub.id}
        id={`publication-${pub.id}`}
        className="py-1"
      >
        <div className="flex flex-col gap-2">
          <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 font-serif-academic leading-snug">
            {pub.title}
          </h4>

          <p className="text-sm text-slate-700 dark:text-slate-300">
            {pub.authors.map((author, i) => {
              const isNhung = author.includes('Nhung H. Nguyen') || author.includes('Hong-Nhung Nguyen');
              return (
                <React.Fragment key={i}>
                  {i > 0 && ', '}
                  {isNhung ? (
                    <span className="font-semibold text-slate-900 dark:text-slate-100 underline decoration-indigo-500/50">
                      {author}
                    </span>
                  ) : (
                    <span>{author}</span>
                  )}
                </React.Fragment>
              );
            })}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="italic leading-relaxed">{pub.venue} ({pub.year})</span>
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950/50 dark:text-indigo-300 dark:hover:bg-indigo-950"
              >
                <span>DOI</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </li>
  );

  return (
    <section id="research" className="pt-14 pb-8 sm:pt-20 sm:pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
              <BookOpen className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic">
                Publications & Preprints
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Research in inverse problems, wave scattering, source reconstruction, and imaging
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-4">
            Preprints & Working Papers
          </h3>
          <ol className="space-y-8 sm:space-y-10 list-none">
            {preprints.map(renderPubItem)}
          </ol>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-4">
            Journal Articles
          </h3>
          <ol className="space-y-8 sm:space-y-10 list-none">
            {published.map(renderPubItem)}
          </ol>
        </div>
      </div>
    </section>
  );
};
