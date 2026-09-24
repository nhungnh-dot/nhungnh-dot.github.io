import React from 'react';
import { Calendar, Presentation } from 'lucide-react';
import { TALKS_LIST } from '../data/academicData';
import { Talk } from '../types';

export const TalksPresentations: React.FC = () => {
  const invitedTalks = TALKS_LIST.filter(t => t.type === 'invited');
  const contributedTalks = TALKS_LIST.filter(t => t.type === 'contributed');
  const posterTalks = TALKS_LIST.filter(t => t.type === 'poster');

  const renderTalkList = (talks: Talk[]) => (
    <ul className="space-y-5 sm:space-y-6 list-none">
      {talks.map((talk) => (
        <li key={talk.id} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6">
          <div className="flex-1">
            <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 font-serif-academic leading-snug">
              {talk.event}
            </span>
            {talk.session && (
              <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1.5 font-medium">
                {talk.session}
              </p>
            )}
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {talk.location} {talk.format === 'virtual' && '(Virtual)'}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-violet-50 px-3 py-1.5 text-sm text-violet-800 dark:bg-violet-950/45 dark:text-violet-300 whitespace-nowrap flex-shrink-0 font-semibold sm:text-right">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            {talk.date}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="talks" className="pt-6 pb-10 sm:pt-8 sm:pb-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-7 sm:mb-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
              <Presentation className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic">
                Talks & Presentations
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Invited talks, conference presentations, and research posters
              </p>
            </div>
          </div>
        </div>

        <div className="mb-7 sm:mb-8">
          <h3 className="text-sm uppercase tracking-widest text-violet-700 dark:text-violet-300 font-bold mb-4">
            Invited Talks & Minisymposia
          </h3>
          {renderTalkList(invitedTalks)}
        </div>

        <div className="mb-7 sm:mb-8">
          <h3 className="text-sm uppercase tracking-widest text-violet-700 dark:text-violet-300 font-bold mb-4">
            Contributed Presentations
          </h3>
          {renderTalkList(contributedTalks)}
        </div>

        {posterTalks.length > 0 && (
          <div>
            <h3 className="text-sm uppercase tracking-widest text-violet-700 dark:text-violet-300 font-bold mb-4">
              Poster Presentations
            </h3>
            {renderTalkList(posterTalks)}
          </div>
        )}
      </div>
    </section>
  );
};
