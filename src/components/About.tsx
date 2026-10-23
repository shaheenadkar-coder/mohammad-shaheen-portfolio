import React from 'react';
import { personalProfile } from '../data/portfolioData';
import { 
  Cpu, 
  Binary, 
  Code2, 
  Database, 
  CheckCircle2, 
  Terminal, 
  Sparkles,
  GraduationCap
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-500" />;
      case 'Binary':
        return <Binary className="w-6 h-6 text-blue-500" />;
      case 'Code':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-teal-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const focusPoints = [
    "Artificial Intelligence & Machine Learning Fundamentals",
    "Data Structures, Trees, Graphs & Algorithm Optimization",
    "Practical Web Systems & Backend Routing (Python / Flask)",
    "Database Systems, ACID Transactions & Concurrency Control",
    "Operating Systems, Unix Workflows & Linux CLI Fluency",
    "Network Protocols & NS-2 Packet Simulation"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 mb-3 border border-cyan-500/20">
            <span>// 01. PROFILE & MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Mohammad Shaheen
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span>Bridging Theory with Practical Engineering</span>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-4">
                {personalProfile.aboutDetails.paragraph1}
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-4">
                {personalProfile.aboutDetails.paragraph2}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {personalProfile.aboutDetails.paragraph3}
              </p>

              {/* Verified academic context callout */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-start gap-3 bg-slate-50 dark:bg-navy-850/60 p-4 rounded-xl">
                <GraduationCap className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Academic Anchor: </span>
                  Pursuing engineering studies at <span className="text-cyan-600 dark:text-cyan-400 font-medium">AJ Institute of Engineering and Technology (AJIET), Mangaluru</span>. All projects reflect verified lab coursework and active software development.
                </div>
              </div>
            </div>

            {/* Quick Core Strengths Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-900/50 border border-slate-200/80 dark:border-slate-800/70 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Core Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {personalProfile.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-white dark:bg-navy-900/60 hover:dark:bg-navy-850/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-sm hover:shadow-cyan-500/5 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-slate-700/60 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                    {getIcon(pillar.icon)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Terminal Quote Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 font-mono text-xs shadow-lg">
              <div className="flex items-center gap-2 mb-2 text-slate-400 pb-2 border-b border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>shaheen@dev-terminal:~$</span>
              </div>
              <p className="text-cyan-300">
                &gt; "Turning algorithms and AI principles into reliable, real-world software."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
