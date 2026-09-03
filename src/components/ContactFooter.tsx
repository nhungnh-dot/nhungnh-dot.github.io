import React, { useState } from 'react';
import { Copy, Check, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/academicData';

export const ContactFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-12 pb-10 bg-slate-100/70 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 font-serif-academic mb-6">
          Contact
        </h2>

        <div className="mb-10 text-sm">
          {/* Email and Office */}
          <div className="space-y-3">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                Email
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono-code text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Alt: {PERSONAL_INFO.altEmail}
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">
                Office & Mailing Address
              </span>
              <p className="text-slate-800 dark:text-slate-200">
                {PERSONAL_INFO.department}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-xs">
                {PERSONAL_INFO.office}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-xs">
                Kansas State University, Manhattan, KS 66506, USA
              </p>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Kansas State University.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
