import React, { useState, useEffect } from 'react';
import { personalProfile } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  Terminal,
  Eye
} from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(personalProfile.typedTitles[0]);
      return;
    }

    const currentTitle = personalProfile.typedTitles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting characters
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % personalProfile.typedTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, prefersReducedMotion]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Mesh & Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Radial subtle gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-700/10 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-navy-850/80 border border-slate-300 dark:border-cyan-500/30 text-xs font-semibold text-slate-700 dark:text-cyan-300 shadow-sm shadow-cyan-500/10 mb-6 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Open to Software Engineering & AI/ML Internships</span>
        </div>

        {/* Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300">
            {personalProfile.name}
          </span>
        </h1>

        {/* Dynamic Typing Title */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <div className="inline-flex items-center text-lg sm:text-2xl md:text-3xl font-mono font-medium text-cyan-600 dark:text-cyan-400">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-cyan-500 dark:text-cyan-400 shrink-0" />
            <span>{displayedText}</span>
            <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
          </div>
        </div>

        {/* Short Professional Introduction */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          Engineering student specializing in <strong className="font-semibold text-slate-900 dark:text-white">Artificial Intelligence and Machine Learning</strong> at AJIET Mangaluru. Focused on practical software development, algorithm design, queue management systems, and turning technical knowledge into dependable, real-world solutions.
        </p>

        {/* Key Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-850 border border-slate-200 dark:border-slate-800">
            <GraduationCap className="w-4 h-4 text-cyan-500" />
            <span>AJIET Mangaluru</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-850 border border-slate-200 dark:border-slate-800">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>AI & Machine Learning Focus</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-850 border border-slate-200 dark:border-slate-800">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span>Mangaluru, Karnataka, India</span>
          </div>
        </div>

        {/* 4 Required Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Button 1: View My Projects */}
          <button
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-navy-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Button 2: Download Resume */}
          <div className="inline-flex rounded-xl shadow-md">
            <a
              href={personalProfile.resumeUrl}
              download="Mohammad_Shaheen_Resume.pdf"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-slate-900 dark:bg-navy-800 hover:bg-slate-800 dark:hover:bg-navy-700 border border-slate-700 dark:border-slate-700 hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
            {onOpenResumeModal && (
              <button
                onClick={onOpenResumeModal}
                title="Preview resume in browser"
                aria-label="Preview resume in browser"
                className="hidden sm:flex items-center px-3 py-3.5 rounded-r-xl border-l border-slate-700 bg-slate-900 dark:bg-navy-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Button 3: Contact Me */}
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-850 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Mail className="w-4 h-4 text-cyan-500" />
            <span>Contact Me</span>
          </button>

          {/* Button 4: LinkedIn Profile (Real URL) */}
          <a
            href={personalProfile.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-850 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <LinkedInIcon className="w-4 h-4 text-[#0a66c2]" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};
