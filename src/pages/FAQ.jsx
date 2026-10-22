import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, ChevronDown, Search, MessageCircle, 
  Phone, ArrowRight, Sparkles, ShieldCheck 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { faqsList, faqCategories } from '../data/faqsData';
import { companyInfo } from '../data/companyData';

export default function FAQ({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const filteredFaqs = useMemo(() => {
    return faqsList.filter((faq) => {
      const matchesCat = selectedCategory === "All" || faq.category === selectedCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#071A38] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers.</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Frequently Asked <span className="text-[#19B5C4]">Questions</span>
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our engagement models, tech stacks, NDAs, pricing, and project timelines.
          </p>
        </div>
      </section>

      {/* Filter Chips & Search Bar */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g., NDA, pricing, MERN, maintenance)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 focus:outline-none focus:border-[#19B5C4] shadow-xs"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0B2A5B] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#0B2A5B] font-heading">No matching questions found</h3>
              <p className="text-xs text-slate-500 mt-1">Try another keyword or reach out directly to our team.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="card-hover-unique bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#19B5C4] shrink-0"></span>
                        <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2A5B]">
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#E8F9FB] text-[#0A8895]' : ''
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                            <div className="pt-4">{faq.answer}</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom CTAs: Contact Us & Chat on WhatsApp */}
          <div className="mt-16 p-8 rounded-3xl bg-[#0B2A5B] text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#19B5C4]/15 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold font-heading mb-2">Still Have Questions?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
              Our technical architects are happy to provide detailed answers for your unique tech stack or enterprise requirements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-shimmer px-6 py-3 rounded-xl bg-white text-[#0B2A5B] font-bold text-xs sm:text-sm hover:bg-[#19B5C4] hover:text-[#0B2A5B] transition-all hover:scale-[1.02] inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Contact Us Form</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20ba59] transition-all hover:scale-[1.02] inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
