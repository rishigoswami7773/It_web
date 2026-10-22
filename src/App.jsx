import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloating from './components/WhatsAppFloating';
import MouseGlowFollower from './components/MouseGlowFollower';
import QuoteModal from './components/QuoteModal';
import SendMailModal from './components/SendMailModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HowWeWork from './pages/HowWeWork';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

// Scroll to top or to specific hash on route change component
function ScrollToTopOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const location = useLocation();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("");

  const [isMailOpen, setIsMailOpen] = useState(false);
  const [mailRecipient, setMailRecipient] = useState("");

  const handleOpenQuote = (serviceName = "") => {
    setQuoteService(typeof serviceName === 'string' ? serviceName : "");
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteService("");
  };

  const handleOpenMail = (recipient = "") => {
    setMailRecipient(recipient);
    setIsMailOpen(true);
  };

  const handleCloseMail = () => {
    setIsMailOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#19B5C4]/30 selection:text-[#0B2A5B]">
      <ScrollToTopOnNavigate />

      {/* Global Header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Animated Route Transitions */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
              <Route path="/about" element={<About onOpenQuote={handleOpenQuote} />} />
              <Route path="/services" element={<Services onOpenQuote={handleOpenQuote} />} />
              <Route path="/services/:category" element={<Services onOpenQuote={handleOpenQuote} />} />
              <Route path="/how-we-work" element={<HowWeWork onOpenQuote={handleOpenQuote} />} />
              <Route path="/team" element={<Team onOpenQuote={handleOpenQuote} />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail onOpenQuote={handleOpenQuote} />} />
              <Route path="/faq" element={<FAQ onOpenQuote={handleOpenQuote} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>


      {/* Global Footer */}
      <Footer onOpenQuote={handleOpenQuote} onOpenMail={handleOpenMail} />

      {/* Floating Utilities & Interactive Cursor */}
      <MouseGlowFollower />
      <ScrollToTop />
      <WhatsAppFloating />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedService={quoteService}
      />

      {/* Global Interactive Direct Mail Composer Modal */}
      <SendMailModal
        isOpen={isMailOpen}
        onClose={handleCloseMail}
        defaultRecipient={mailRecipient}
      />
    </div>
  );
}
