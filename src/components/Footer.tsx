import React from 'react';
import { personalProfile } from '../data/portfolioData';
import { 
  Mail, 
  FileDown, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-navy-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-100 dark:border-slate-850">
          {/* Col 1: Monogram & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-navy-950 font-extrabold text-base shadow-md">
                MS
              </div>
              <div>
                <span className="font-bold text-lg text-slate-900 dark:text-white block">
                  Mohammad Shaheen
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  AI & ML Engineering Student · AJIET Mangaluru
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Portfolio showcasing practical software systems, queue management engineering, algorithm implementations, and academic coursework.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Grounded in verified resume data</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => scrollTo(sec)}
                    className="capitalize hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Verified Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white">
              Verified Channels
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={personalProfile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#0a66c2] transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${personalProfile.email}`}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span className="truncate">{personalProfile.email}</span>
              </a>
              <a
                href={personalProfile.resumeUrl}
                download="Mohammad_Shaheen_Resume.pdf"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <FileDown className="w-4 h-4 text-blue-500" />
                <span>Download Resume (PDF)</span>
              </a>
              <div className="flex items-center gap-2 text-slate-500 pt-1">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{personalProfile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {currentYear} Mohammad Shaheen. Built with React, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <span>AJ Institute of Engineering and Technology</span>
            <span>·</span>
            <span>Mangaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
