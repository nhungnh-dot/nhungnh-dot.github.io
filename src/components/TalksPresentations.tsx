import React from 'react';
import { TALKS_LIST } from '../data/academicData';
import { Talk } from '../types';

export const TalksPresentations: React.FC = () => {
  const invitedTalks = TALKS_LIST.filter(t => t.type === 'invited');
  const contributedTalks = TALKS_LIST.filter(t => t.type === 'contributed');
  const posterTalks = TALKS_LIST.filter(t => t.type === 'poster');

  const renderTalkList = (talks: Talk[]) => (
    <ul className="divide-y divide-slate-200 dark:divide-slate-800 list-none">
      {talks.map((talk) => (
        <li key={talk.id} className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
          <div className="flex-1">
            <span className="font-medium text-sm text-slate-900 dark:text-slate-100">
              {talk.event}
            </span>
            {talk.session && (
              <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">
                {talk.session}
              </p>
            )}
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {talk.location} {talk.format === 'virtual' && '(Virtual)'}
            </p>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap flex-shrink-0 font-medium sm:text-right">
            {talk.date}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="talks" className="py-12 sm:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic mb-6">
          Talks & Presentations
        </h2>

        {/* Invited Talks */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3">
            Invited Talks & Minisymposia
          </h3>
          {renderTalkList(invitedTalks)}
        </div>

        {/* Contributed Talks */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3">
            Contributed Presentations
          </h3>
          {renderTalkList(contributedTalks)}
        </div>

        {/* Poster Presentations */}
        {posterTalks.length > 0 && (
          <div>
            <h3 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold mb-3">
              Poster Presentations
            </h3>
            {renderTalkList(posterTalks)}
          </div>
        )}
      </div>
    </section>
  );
};
