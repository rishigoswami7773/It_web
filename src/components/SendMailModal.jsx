import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Mail, Send, CheckCircle2, Copy, Check, 
  ExternalLink, Sparkles, ArrowRight, AtSign, User, MessageSquare 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/companyData';

const subjectOptions = [
  "New Project Inquiry",
  "MERN / Web App Development",
  "Mobile App Development",
  "Enterprise ERP / Software",
  "Hire Dedicated Developers",
  "Career / Job Opportunity",
  "General Question"
];

export default function SendMailModal({ isOpen, onClose, defaultRecipient = "" }) {
  const [recipient, setRecipient] = useState(defaultRecipient || companyInfo.email);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    senderEmail: "",
    subject: subjectOptions[0],
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultRecipient) {
      setRecipient(defaultRecipient);
    } else {
      setRecipient(companyInfo.email);
    }
  }, [defaultRecipient, isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(recipient);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.senderEmail || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  // Helper to open in Gmail web
  const handleOpenGmail = () => {
    const subjectParam = encodeURIComponent(formData.subject || "Inquiry for Ru-kEm Tech Lab");
    const bodyParam = encodeURIComponent(
      `Hello Ru-kEm Tech Lab Team,\n\n${formData.message || ''}\n\nBest regards,\n${formData.name || ''}\n${formData.senderEmail || ''}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subjectParam}&body=${bodyParam}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  // Helper to open default mail client
  const handleOpenDefaultMail = () => {
    const subjectParam = encodeURIComponent(formData.subject || "Inquiry for Ru-kEm Tech Lab");
    const bodyParam = encodeURIComponent(
      `Hello Ru-kEm Tech Lab Team,\n\n${formData.message || ''}\n\nBest regards,\n${formData.name || ''}\n${formData.senderEmail || ''}`
    );
    window.location.href = `mailto:${recipient}?subject=${subjectParam}&body=${bodyParam}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#071A38]/70 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-white rounded-3xl shadow-2xl border border-slate-200/80 max-w-xl w-full p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close mail modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#19B5C4]/15 text-[#0A8895] rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#0B2A5B]">
                  Mail Sent Successfully!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#0B2A5B]">{formData.name}</span>. Your message has been routed to our direct inbox at <span className="text-[#0A8895] font-semibold">{recipient}</span>.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 text-left space-y-1">
                  <div><strong className="text-slate-700">Subject:</strong> {formData.subject}</div>
                  <div><strong className="text-slate-700">From:</strong> {formData.senderEmail}</div>
                  <div><strong className="text-slate-700">Estimated Response:</strong> Within 2 to 4 business hours</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        senderEmail: "",
                        subject: subjectOptions[0],
                        message: ""
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Write Another Mail
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0B2A5B] hover:bg-[#154285] text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
                  >
                    Done / Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#19B5C4]/15 text-[#0A8895] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B2A5B]">
                      Write & Send Direct Mail
                    </h2>
                    <p className="text-xs text-slate-500">
                      Reach our engineering & leadership team immediately
                    </p>
                  </div>
                </div>

                {/* Recipient Picker Bar */}
                <div className="my-4 p-3 rounded-2xl bg-gradient-to-r from-slate-50 to-[#E8F9FB]/40 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      To:
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setRecipient(companyInfo.email)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                          recipient === companyInfo.email
                            ? 'bg-[#0B2A5B] text-white shadow-xs font-bold'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {companyInfo.email}
                      </button>
                      <button
                        type="button"
                        onClick={() => setRecipient(companyInfo.careersEmail)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                          recipient === companyInfo.careersEmail
                            ? 'bg-[#0B2A5B] text-white shadow-xs font-bold'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {companyInfo.careersEmail} (HR)
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0A8895] hover:text-[#0B2A5B] px-2 py-1 rounded-md hover:bg-white/80 transition-colors self-start sm:self-auto cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Compose Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19B5C4] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Your Email *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={formData.senderEmail}
                          onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19B5C4] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Subject
                    </label>
                    <div className="space-y-2">
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-800 focus:outline-none focus:border-[#19B5C4] focus:bg-white transition-colors"
                      >
                        {subjectOptions.map((subj, idx) => (
                          <option key={idx} value={subj}>
                            {subj}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your project details, questions, or requirements here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#19B5C4] focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Primary Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#0B2A5B] to-[#154285] hover:from-[#0E3572] hover:to-[#19B5C4] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          <span>Sending Mail...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Mail Directly</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Quick external mail client actions */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span>Prefer sending from your own email client?</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={handleOpenGmail}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 hover:border-[#19B5C4] bg-white hover:bg-slate-50 text-[11px] font-semibold text-slate-700 transition-colors cursor-pointer"
                        title="Open in Gmail with prefilled message"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-red-500" />
                        <span>Open in Gmail</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleOpenDefaultMail}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 hover:border-[#19B5C4] bg-white hover:bg-slate-50 text-[11px] font-semibold text-slate-700 transition-colors cursor-pointer"
                        title="Open default email application (Outlook/Apple Mail)"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#0A8895]" />
                        <span>Default Mail App</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
