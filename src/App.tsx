import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: 'success' | 'info' | 'error';
  }>({
    visible: false,
    message: '',
    type: 'success'
  });

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({
      visible: true,
      message,
      type
    });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 4000);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-400 transition-colors duration-300">
        {/* Navigation Bar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Education />
          <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <Contact onShowToast={showToast} />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Utilities */}
        <BackToTop />

        {/* Interactive In-Browser Resume PDF Viewer Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />

        {/* Toast Notification Container */}
        {toast.visible && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(prev => ({ ...prev, visible: false }))}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
