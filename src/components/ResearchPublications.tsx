import React, { useState } from 'react';
import { FileText, Copy, Check, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { PUBLICATIONS_LIST } from '../data/academicData';
import { Publication } from '../types';

interface ResearchProps {
  onOpenBibtex: (pub: Publication) => void;
}

export const ResearchPublications: React.FC<ResearchProps> = ({ onOpenBibtex }) => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${pub.authors.join(', ')}. "${pub.title}." ${pub.venue}, ${pub.year}.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const preprints = PUBLICATIONS_LIST.filter(p => p.status === 'submitted');
  const published = PUBLICATIONS_LIST.filter(p => p.status === 'published');

  const renderPubItem = (pub: Publication, index: number) => {
    const isExpanded = !!expandedAbstracts[pub.id];
    const isCopied = copiedId === pub.id;

    return (
      <li key={pub.id} id={`publication-${pub.id}`} className="py-4 first:pt-0 last:pb-0">
        <div className="flex flex-col gap-1.5">
          {/* Title */}
          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 font-serif-academic leading-snug">
            {pub.title}
          </h4>

          {/* Authors */}
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

          {/* Venue & Links */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            <span className="italic">{pub.venue} ({pub.year})</span>
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-0.5"
              >
                <span>DOI</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={() => onOpenBibtex(pub)}
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium cursor-pointer"
            >
              [BibTeX]
            </button>
            <button
              onClick={() => handleCopyCitation(pub)}
              className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              {isCopied ? '[Copied!]' : '[Cite]'}
            </button>
            {pub.abstract && (
              <button
                onClick={() => toggleAbstract(pub.id)}
                className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer inline-flex items-center gap-0.5"
              >
                <span>{isExpanded ? '[Hide Abstract]' : '[Abstract]'}</span>
                {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            )}
          </div>

          {/* Collapsible Abstract */}
          {pub.abstract && isExpanded && (
            <div className="mt-2 p-3 rounded-lg bg-slate-100/80 dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border border-slate-200/80 dark:border-slate-800">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Abstract: </span>
              {pub.abstract}
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <section id="research" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic mb-6">
          Publications & Preprints
        </h2>

        {/* Preprints */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3">
            Preprints & Working Papers
          </h3>
          <ol className="divide-y divide-slate-200 dark:divide-slate-800 list-none">
            {preprints.map((pub, idx) => renderPubItem(pub, idx))}
          </ol>
        </div>

        {/* Journal Publications */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3">
            Journal Articles
          </h3>
          <ol className="divide-y divide-slate-200 dark:divide-slate-800 list-none">
            {published.map((pub, idx) => renderPubItem(pub, idx))}
          </ol>
        </div>
      </div>
    </section>
  );
};
