import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-50/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 mb-3 border border-cyan-500/20">
            <span>// 04. ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Academic Credentials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Academic background anchored at AJ Institute of Engineering and Technology, Mangaluru.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5 relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                      {edu.degree} · Artificial Intelligence & Machine Learning
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-cyan-500 dark:text-cyan-400 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.periodOrYear}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status Pill */}
                <span className="self-start md:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30">
                  Verified Resume Record
                </span>
              </div>

              {/* Verified Note Banner */}
              <div className="my-5 p-3.5 rounded-xl bg-slate-50 dark:bg-navy-850/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <Info className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-900 dark:text-white">Resume Source Note: </span>
                  {edu.statusNote}
                </p>
              </div>

              {/* Highlights & Focus */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Academic Focus & Experience</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Coursework */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Key Engineering Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 hover:border-cyan-500/40 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
