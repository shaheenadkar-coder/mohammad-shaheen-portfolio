import React, { useState } from 'react';
import { personalProfile } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2,
  Sparkles,
  Info
} from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

interface ContactProps {
  onShowToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalProfile.email);
    setCopiedEmail(true);
    onShowToast("Email address copied to clipboard!", "success");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a message subject.';
    if (!formData.message.trim()) {
      errors.message = 'Please write your message or inquiry.';
    } else if (formData.message.trim().length < 15) {
      errors.message = 'Message must be at least 15 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      onShowToast("Please correct the form fields highlighted in red.", "error");
      return;
    }

    // Construct the transparent mailto link with encoded parameters
    const subjectParam = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyParam = encodeURIComponent(
      `Hello Mohammad,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio website.`
    );
    const mailtoUrl = `mailto:${personalProfile.email}?subject=${subjectParam}&body=${bodyParam}`;

    // Open user's default email client
    window.location.href = mailtoUrl;

    setSubmittedMessage("Opening your default mail client with prefilled details. You can also copy the message below if needed!");
    onShowToast("Composed message in your email client!", "success");
  };

  const handleCopyMessage = () => {
    const formatted = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(formatted);
    onShowToast("Message content copied to clipboard!", "success");
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 mb-3 border border-cyan-500/20">
            <span>// 06. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Interested in discussing internship opportunities, engineering projects, or technical collaboration? Reach out directly.
          </p>
        </div>

        {/* Content Layout: Contact Cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Direct Contact Channels
            </h3>

            {/* Email Card with 1-Click Copy */}
            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalProfile.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors break-all"
                    >
                      {personalProfile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-750 text-slate-600 dark:text-slate-300 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#0a66c2]/10 text-[#0a66c2] border border-[#0a66c2]/20">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                      Professional Network
                    </span>
                    <a
                      href={personalProfile.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-[#0a66c2] transition-colors"
                    >
                      Mohammad Shaheen on LinkedIn
                    </a>
                  </div>
                </div>

                <a
                  href={personalProfile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2] text-slate-600 dark:text-slate-300 transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                    Location & College
                  </span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {personalProfile.location}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {personalProfile.college}
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Internship Status: </span>
                Actively seeking summer and semester software engineering internships, AI/ML junior roles, and practical project collaborations.
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Direct communication with client-side verification.
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              {submittedMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm space-y-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Message Ready to Send</span>
                  </div>
                  <p>{submittedMessage}</p>
                  <div className="pt-2 flex gap-2">
                    <button
                      onClick={handleCopyMessage}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-500 transition-colors"
                    >
                      Copy Formatted Message
                    </button>
                    <button
                      onClick={() => setSubmittedMessage(null)}
                      className="px-3 py-1.5 rounded-lg border border-emerald-500/40 text-xs hover:bg-emerald-500/10 transition-colors"
                    >
                      Compose Another
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-850 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        formErrors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-850 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        formErrors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Internship Inquiry / Queue System Discussion"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (formErrors.subject) setFormErrors({ ...formErrors, subject: '' });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-850 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                      formErrors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-850 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-y ${
                      formErrors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Integration Transparency Disclaimer */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-850/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                  <Info className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <p>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Dispatch Mechanism: </span>
                    Submitting this verified form directly formats and loads your email client addressed to <strong className="text-cyan-600 dark:text-cyan-400">{personalProfile.email}</strong>.
                  </p>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm sm:text-base text-navy-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email Client</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
