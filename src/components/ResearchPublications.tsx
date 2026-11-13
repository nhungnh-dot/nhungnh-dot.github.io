import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { PUBLICATIONS_LIST } from '../data/academicData';
import { Publication } from '../types';

interface ResearchProps {
  onOpenBibtex?: (pub: Publication) => void;
}

export const ResearchPublications: React.FC<ResearchProps> = () => (
  <section id="research" className="pt-8 pb-5 sm:pt-10 sm:pb-6">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="mb-5 sm:mb-6 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
          <BookOpen className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50 font-serif-academic">
          Publications
        </h2>
      </div>

      <ol className="space-y-3 sm:space-y-3.5 list-none">
        {PUBLICATIONS_LIST.map((pub, index) => (
          <li
            key={pub.id}
            id={`publication-${pub.id}`}
            className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
          >
            <span className="shrink-0 font-semibold tabular-nums text-indigo-700 dark:text-indigo-300">
              [{index + 1}]
            </span>
            <div className="min-w-0 text-slate-800 dark:text-slate-200">
              {pub.authors.map((author, authorIndex) => {
                const isNhung = author.includes('Nhung H. Nguyen') || author.includes('Hong-Nhung Nguyen');
                return (
                  <React.Fragment key={author}>
                    {authorIndex > 0 && ', '}
                    {isNhung ? (
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        {author}
                      </span>
                    ) : (
                      author
                    )}
                  </React.Fragment>
                );
              })}
              {'. '}
              <span className="font-medium text-slate-900 dark:text-slate-100 font-serif-academic">
                {pub.title}
              </span>
              {'. '}
              <span className={pub.status === 'published' ? 'italic text-slate-600 dark:text-slate-400' : 'text-slate-600 dark:text-slate-400'}>
                {pub.venue}.
              </span>
              {pub.doi && (
                <>
                  {' '}
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-700 hover:underline dark:text-indigo-300"
                    aria-label={`DOI for ${pub.title}`}
                  >
                    DOI <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
