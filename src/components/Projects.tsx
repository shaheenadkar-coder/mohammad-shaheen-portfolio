import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectDetail, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Featured',
    'Systems & Web',
    'Algorithms & CS',
    'Academic Labs'
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Featured') return project.isFeatured;
    return project.category === selectedCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            <span>Completed</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 animate-pulse-subtle">
            <Clock className="w-3 h-3" />
            <span>In Progress</span>
          </span>
        );
      case 'Learning Project':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
            <Sparkles className="w-3 h-3" />
            <span>Academic Practice</span>
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 mb-3 border border-cyan-500/20">
            <span>// 03. ENGINEERING & ACADEMIC WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Technical Work
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Explore working software systems, algorithm implementations, database query design, and network simulations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between rounded-3xl bg-white dark:bg-navy-900/90 border transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 ${
                project.isFeatured
                  ? 'border-cyan-500/40 dark:border-cyan-500/40 ring-1 ring-cyan-500/20'
                  : 'border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Card Top */}
              <div className="p-6 sm:p-7">
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {getStatusBadge(project.status)}
                  {project.isFeatured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      ★ Main Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>

                {/* One-Sentence Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Problem Statement Box */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-850/60 border border-slate-200/60 dark:border-slate-800/60 mb-4">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400 block mb-1">
                    Problem Solved
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Key Features Preview */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400 block">
                    Core Capabilities
                  </span>
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                  {project.keyFeatures.length > 3 && (
                    <p className="text-[11px] font-medium text-cyan-600 dark:text-cyan-400 pl-3.5">
                      +{project.keyFeatures.length - 3} more features in architecture breakdown
                    </p>
                  )}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-navy-800">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-navy-800 hover:bg-slate-800 dark:hover:bg-navy-700 text-white border border-slate-700 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
                >
                  <span>Explore Architecture & Details</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
