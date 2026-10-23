import React from 'react';
import { personalProfile } from '../data/portfolioData';
import { 
  FileDown, 
  Eye, 
  ExternalLink, 
  GraduationCap, 
  Mail, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-cyan-500/5 dark:from-navy-900 dark:via-navy-850 dark:to-cyan-950/20 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Column: Info & Description */}
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>// 05. AUTHENTIC DOCUMENTATION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Curriculum Vitae & Verified Resume
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Access the official resume PDF containing academic details from AJ Institute of Engineering and Technology, contact details, and technical focus areas.
              </p>

              {/* Verified Snapshot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-navy-950/60 border border-slate-200/80 dark:border-slate-800">
                  <GraduationCap className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span className="truncate">AJIET Mangaluru (2024)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-navy-950/60 border border-slate-200/80 dark:border-slate-800">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="truncate">{personalProfile.location}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-navy-950/60 border border-slate-200/80 dark:border-slate-800">
                  <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="truncate">{personalProfile.email}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-navy-950/60 border border-slate-200/80 dark:border-slate-800">
                  <LinkedInIcon className="w-4 h-4 text-[#0a66c2] shrink-0" />
                  <span className="truncate">LinkedIn Verified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
              {/* Direct Download Button */}
              <a
                href={personalProfile.resumeUrl}
                download="Mohammad_Shaheen_Resume.pdf"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm sm:text-base text-navy-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95 text-center"
              >
                <FileDown className="w-5 h-5" />
                <span>Download Resume PDF</span>
              </a>

              {/* In-Browser Preview Button */}
              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 bg-white dark:bg-navy-800 hover:bg-slate-100 dark:hover:bg-navy-700 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 transition-all text-center"
              >
                <Eye className="w-4 h-4 text-cyan-500" />
                <span>Preview in Browser</span>
              </button>

              {/* Open in New Window */}
              <a
                href={personalProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors py-1"
              >
                <span>Open direct file in new tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
