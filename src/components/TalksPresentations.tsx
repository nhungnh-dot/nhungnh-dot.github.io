import React from 'react';
import { Calendar, Presentation } from 'lucide-react';
import { TALKS_LIST } from '../data/academicData';
import { Talk } from '../types';

export const TalksPresentations: React.FC = () => {
  const groups = [
    {
      id: 'invited',
      title: 'Invited Talks',
      talks: TALKS_LIST.filter(t => t.type === 'invited'),
    },
    {
      id: 'contributed',
      title: 'Contributed Talks',
      talks: TALKS_LIST.filter(t => t.type === 'contributed'),
    },
    {
      id: 'poster',
      title: 'Poster Presentations',
      talks: TALKS_LIST.filter(t => t.type === 'poster'),
    },
  ];

  const renderTalkList = (talks: Talk[]) => (
    <ul className="space-y-2.5 list-none">
      {talks.map(talk => (
        <li
          key={talk.id}
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4"
        >
          <div className="min-w-0">
            <p className="font-medium text-sm sm:text-base text-slate-900 dark:text-slate-100 font-serif-academic leading-snug">
              {talk.event}
            </p>
            <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {talk.session && <>{talk.session}{', '}</>}
              {talk.location}
              {talk.format === 'virtual' && ' (Virtual)'}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 flex-shrink-0 text-sm text-slate-500 dark:text-slate-400 sm:pl-4">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>{talk.date}</span>
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="talks" className="pt-5 pb-8 sm:pt-6 sm:pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-5 sm:mb-6 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
            <Presentation className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic">
            Conferences and Seminar Talks
          </h2>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {groups.filter(group => group.talks.length > 0).map(group => (
            <article key={group.id} id={`talks-${group.id}`}>
              <h3 className="mb-2.5 text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 font-serif-academic">
                {group.title}
              </h3>
              {renderTalkList(group.talks)}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
