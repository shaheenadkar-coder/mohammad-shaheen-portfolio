import React from 'react';
import { ProjectDetail } from '../types';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Code2, 
  Sparkles,
  Info
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Completed</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 animate-pulse-subtle">
            <Clock className="w-3.5 h-3.5" />
            <span>In Active Development</span>
          </span>
        );
      case 'Learning Project':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic / Practice Implementation</span>
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-auto bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 sticky top-0 bg-white/95 dark:bg-navy-900/95 backdrop-blur-md z-10">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              {getStatusBadge(project.status)}
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Summary & Problem Statement */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-850/70 border border-slate-200/80 dark:border-slate-800/80 space-y-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold block mb-1">
                Overview
              </span>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                {project.summary}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block mb-1">
                Problem Statement
              </span>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
          </div>

          {/* Key Implemented Features */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Implemented Features & Architecture</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50/70 dark:bg-navy-950/40 border border-slate-200/60 dark:border-slate-800/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Planned Enhancements (if any) - Distinctly Separated */}
          {project.plannedFeatures && project.plannedFeatures.length > 0 && (
            <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
              <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-cyan-600 dark:text-cyan-300 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-500" />
                <span>Planned Future Enhancements (Roadmap)</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                To maintain transparency, the following features are actively designed and scheduled for upcoming development iterations:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {project.plannedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="text-cyan-500 font-bold shrink-0">→</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet or Structural Example */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>{project.codeSnippet.description}</span>
                </h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                  {project.codeSnippet.language}
                </span>
              </div>
              <pre className="p-4 rounded-2xl bg-slate-950 text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repository & Deployment Status Note */}
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-navy-850 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
            <Info className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">Repository Status: </span>
              {project.repoNote || "Academic and local development project. Repository and documentation are maintained in Mohammad's local workspace."}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-navy-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Mohammad Shaheen · Technical Showcase
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-slate-900 dark:bg-navy-800 hover:bg-slate-800 dark:hover:bg-navy-700 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
