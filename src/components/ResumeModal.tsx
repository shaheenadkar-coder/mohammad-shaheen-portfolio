import React from 'react';
import { personalProfile } from '../data/portfolioData';
import { X, FileDown, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-navy-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-slate-800 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-navy-950/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Mohammad Shaheen — Official Resume
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Verified Document · PDF Format
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalProfile.resumeUrl}
              download="Mohammad_Shaheen_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <a
              href={personalProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
              title="Open in new window"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-slate-900 relative">
          <iframe
            src={`${personalProfile.resumeUrl}#toolbar=1`}
            title="Mohammad Shaheen Resume"
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer Note */}
        <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-950 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Verified primary resume source asset
          </span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:underline"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
