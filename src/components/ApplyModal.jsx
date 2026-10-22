import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Upload, Briefcase, MapPin, DollarSign, Send, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ApplyModal({ isOpen, onClose, job }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    github: "",
    experience: "",
    noticePeriod: "Immediate / 15 Days",
    coverNote: "",
    cvFileName: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cvFileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 850);
  };

  const handleClose = () => {
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
            onClick={handleClose}
            className="fixed inset-0 bg-[#0B2A5B]/80 backdrop-blur-md"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-6 border border-slate-100 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#0B2A5B] text-white p-6 sm:p-7 relative overflow-hidden shrink-0">
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-300">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                    Apply for {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#19B5C4]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#19B5C4]" />
                      {job.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-[#19B5C4]" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-slate-300 hover:text-white p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-5">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B2A5B] font-heading">
                    Application Submitted!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#0B2A5B]">{formData.fullName}</span>. Our Talent Acquisition team in Ahmedabad will review your profile for <span className="text-[#19B5C4] font-semibold">{job.title}</span> and contact you for the technical screening round.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleClose}
                      className="px-6 py-3 rounded-xl bg-[#0B2A5B] text-white font-semibold hover:bg-[#154285] transition-colors inline-flex items-center gap-2"
                    >
                      <span>Return to Careers</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
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
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Total Experience
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 4 Years"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        GitHub / Portfolio URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/yourhandle"
                        value={formData.github}
                        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Notice Period
                      </label>
                      <select
                        value={formData.noticePeriod}
                        onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                      >
                        <option value="Immediate">Immediate</option>
                        <option value="15 Days">15 Days</option>
                        <option value="30 Days">30 Days</option>
                        <option value="60 Days">60 Days</option>
                      </select>
                    </div>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Upload Resume / CV (PDF / DOCX) *
                    </label>
                    <label className="border-2 border-dashed border-slate-300 hover:border-[#19B5C4] rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer bg-slate-50/60 hover:bg-[#E8F9FB]/40 transition-colors">
                      <Upload className="w-7 h-7 text-[#19B5C4] mb-1.5" />
                      <span className="text-xs font-medium text-slate-700">
                        {formData.cvFileName ? (
                          <span className="text-emerald-600 font-bold">{formData.cvFileName} (Attached)</span>
                        ) : (
                          "Click to browse or drag & drop your resume"
                        )}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-0.5">Max file size 10MB</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Why are you excited to join Ru-kEm Tech Lab?
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share a brief introduction or highlight of your key engineering achievements..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#19B5C4] text-sm text-slate-800"
                    ></textarea>
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
                          <span>Submit Application</span>
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
