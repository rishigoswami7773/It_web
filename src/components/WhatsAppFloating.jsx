import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/companyData';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    const msg = userMsg.trim() || "Hello Ru-kEm Tech Lab team, I'd like to discuss a software project!";
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`;
    window.open(url, '_blank');
    setUserMsg("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* WhatsApp Header */}
            <div className="bg-[#0B2A5B] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#19B5C4] flex items-center justify-center font-bold text-[#0B2A5B] text-sm">
                    RK
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0B2A5B] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Ru-kEm Tech Lab</h4>
                  <p className="text-xs text-[#19B5C4] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Typically replies in 15 mins
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#F8FAFC] space-y-3">
              <div className="bg-white p-3 rounded-xl rounded-tl-none text-xs sm:text-sm text-slate-700 shadow-sm border border-slate-100 max-w-[85%]">
                <p className="font-medium text-[#0B2A5B] mb-1">Hi there! 👋</p>
                <p>Looking for custom web, mobile, ERP, or enterprise software development in Ahmedabad? How can we help you today?</p>
                <span className="block text-[10px] text-slate-400 mt-1 text-right">Just now</span>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                className="flex-1 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#19B5C4] text-slate-800"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-md flex items-center justify-center"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all font-medium text-sm border-2 border-white group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold">Chat with Us</span>
      </motion.button>
    </div>
  );
}
