import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Database, 
  Search, 
  Layers
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 3:
        return <Cpu className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  // Filter skills based on search
  const filteredCategories = skillCategories.map(category => {
    if (!searchTerm.trim()) return category;
    const matchingSkills = category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    return {
      ...category,
      skills: matchingSkills
    };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative bg-slate-50/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 mb-3 border border-cyan-500/20">
            <span>// 02. TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Knowledge Areas
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Categorized technical capabilities grounded in verified academic coursework, lab exercises, and active project implementation.
          </p>

          {/* Interactive Search / Filter Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search a technology (e.g. Python, SQL, C, Linux)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all shadow-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-slate-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-slate-700/60">
                  {getCategoryIcon(catIdx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List in Category */}
              <div className="space-y-3 mt-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-navy-850/60 hover:dark:bg-navy-800/70 border border-slate-200/70 dark:border-slate-800/60 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="font-semibold text-sm text-slate-800 dark:text-slate-100">
                          {skill.name}
                        </span>
                      </div>
                      {skill.badge && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-3.5">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100/70 dark:bg-navy-900/40 border border-slate-200 dark:border-slate-800/80 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Note: </span>
            Skill representations reflect verified coursework and active project practice. Proficiency is demonstrated through functioning code and academic exercises, without arbitrary percentages.
          </p>
        </div>
      </div>
    </section>
  );
};
