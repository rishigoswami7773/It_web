import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const servicesList = [
  "MERN Fullstack Web App",
  "Mobile App (Flutter / React Native)",
  "Enterprise ERP / CRM Solution",
  "Python / Django Microservices",
  "UI/UX Design System & Figma",
  "Cloud Infrastructure & DevOps",
  "Desktop / Windows Software",
  "QA & Automated Testing"
];

const budgetRanges = [
  "< ₹2 Lakhs ($2.5k)",
  "₹2 - 5 Lakhs ($2.5k - $6k)",
  "₹5 - 15 Lakhs ($6k - $18k)",
  "₹15 Lakhs+ ($18k+)"
];

export default function QuoteModal({ isOpen, onClose, preselectedService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: preselectedService || servicesList[0],
    budget: budgetRanges[1],
    timeline: "1 - 2 Months",
    description: "",
    consent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B2A5B]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-slate-100"
          >
            {/* Header */}
            <div className="bg-[#0B2A5B] text-white p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#19B5C4]/20 rounded-full blur-2xl"></div>
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Technical Proposal & Estimate</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    Request a Project Quote
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    Tell us about your requirements. Our tech leads in Ahmedabad will review and provide a detailed scope breakdown within 24 hours.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-slate-300 hover:text-white p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B2A5B] font-heading">
                    Quote Request Received!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#0B2A5B]">{formData.name}</span>. Our technical architecture team has received your inquiry for <span className="text-[#19B5C4] font-semibold">{formData.service}</span>. We will get back to you with an itemized technical estimate shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl bg-[#0B2A5B] text-white font-semibold hover:bg-[#154285] transition-colors inline-flex items-center gap-2"
                    >
                      <span>Close</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ramesh@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company / Brand"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>{srv}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      >
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Overview & Specific Features
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you're building, target audience, preferred technologies, or any reference apps..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="quote-consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="rounded text-[#19B5C4] focus:ring-[#19B5C4]"
                    />
                    <label htmlFor="quote-consent" className="text-xs text-slate-500 cursor-pointer">
                      I agree to the non-disclosure policy & confidential project discussion.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#19B5C4] to-[#0A8895] hover:from-[#149BA8] hover:to-[#08737F] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#19B5C4]/25 flex items-center justify-center gap-2 transition-all"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Submit Quote Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
