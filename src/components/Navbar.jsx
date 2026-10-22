import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, PhoneCall, MessageCircle, Sparkles, ArrowRight,
  ChevronDown, ChevronRight, Globe, Smartphone, Building2,
  Cloud, Palette, Monitor, Users, Briefcase, Info, Workflow,
  FileText, HelpCircle, Mail
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

// Top domain categories for the Services dropdown
const serviceDropdownItems = [
  {
    title: "Web & Cloud Apps",
    desc: "MERN stack, Python, Next.js & enterprise web applications",
    path: "/services/category-web-development",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/20 text-cyan-600"
  },
  {
    title: "Mobile App Development",
    desc: "Native & cross-platform Flutter & React Native apps",
    path: "/services/category-mobile-development",
    icon: Smartphone,
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-600"
  },
  {
    title: "Enterprise ERP & CRM",
    desc: "Bespoke business workflows, accounting & automation",
    path: "/services/category-enterprise-solutions",
    icon: Building2,
    color: "from-purple-500/20 to-indigo-500/20 text-indigo-600"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    desc: "CI/CD automation, Docker, Kubernetes & AWS/GCP scaling",
    path: "/services/category-cloud-devops",
    icon: Cloud,
    color: "from-sky-500/20 to-blue-500/20 text-sky-600"
  },
  {
    title: "UI/UX & Product Design",
    desc: "Interactive prototypes, design systems & Figma wireframes",
    path: "/services/category-ui-ux-design",
    icon: Palette,
    color: "from-amber-500/20 to-orange-500/20 text-amber-600"
  },
  {
    title: "Windows & Desktop Software",
    desc: "Hardware interfacing, POS, barcode scanners & Electron apps",
    path: "/services/category-desktop-windows",
    icon: Monitor,
    color: "from-rose-500/20 to-pink-500/20 text-rose-600"
  }
];

// Company dropdown items (About Us is now separate in the main navbar)
const companyDropdownItems = [
  {
    title: "How We Work",
    desc: "5-phase agile delivery lifecycle from sprint to deploy",
    path: "/how-we-work",
    icon: Workflow
  },
  {
    title: "Our Team",
    desc: "Meet our fullstack architects & software engineers",
    path: "/team",
    icon: Users
  },
  {
    title: "Careers",
    desc: "Explore open developer positions & work culture",
    path: "/careers",
    icon: Briefcase,
    badge: "Hiring"
  }
];

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  
  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Check if current route matches categories
  const isHomeActive = location.pathname === '/';
  const isAboutActive = location.pathname.startsWith('/about');
  const isServicesActive = location.pathname.startsWith('/services');
  const isCompanyActive = ['/how-we-work', '/team', '/careers'].some(path => location.pathname.startsWith(path));
  const isBlogActive = location.pathname.startsWith('/blog');
  const isFaqActive = location.pathname === '/faq';
  const isContactActive = location.pathname === '/contact';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B2A5B] to-[#154285] flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(25,181,196,0.35)] transition-all duration-300 border border-[#19B5C4]/40">
                <span className="font-extrabold text-xl tracking-tighter text-[#19B5C4] font-heading group-hover:rotate-6 transition-transform">
                  R<span className="text-white">K</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight font-heading text-[#0B2A5B] leading-none flex items-center gap-1">
                  Ru-kEm <span className="text-[#19B5C4] group-hover:text-[#149BA8] transition-colors">Tech Lab</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 mt-1">
                  Technologies • Ahmedabad
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (Visible on lg 1024px and up) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              
              {/* 1. Home */}
              <Link
                to="/"
                className={`relative px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                  isHomeActive
                    ? 'text-[#0B2A5B] bg-[#E8F9FB] text-[#0A8895]'
                    : 'text-slate-600 hover:text-[#0B2A5B] hover:bg-slate-50'
                }`}
              >
                <span>Home</span>
                {isHomeActive && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#19B5C4] rounded-full shadow-[0_0_8px_#19B5C4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* 2. About Us (Separate Top-Level Link) */}
              <Link
                to="/about"
                className={`relative px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                  isAboutActive
                    ? 'text-[#0B2A5B] bg-[#E8F9FB] text-[#0A8895]'
                    : 'text-slate-600 hover:text-[#0B2A5B] hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                {isAboutActive && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#19B5C4] rounded-full shadow-[0_0_8px_#19B5C4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* 3. Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/services"
                  className={`relative px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1 cursor-pointer group ${
                    isServicesActive || activeDropdown === 'services'
                      ? 'text-[#0B2A5B] bg-[#E8F9FB] text-[#0A8895]'
                      : 'text-slate-600 hover:text-[#0B2A5B] hover:bg-slate-50'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#19B5C4]' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  {isServicesActive && (
                    <motion.div
                      layoutId="navbarActiveIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#19B5C4] rounded-full shadow-[0_0_8px_#19B5C4]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full -left-20 w-[640px] pt-3 z-50"
                    >
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-5 overflow-hidden">
                        
                        {/* Header preview */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#19B5C4]">Software Engineering</span>
                            <h4 className="text-sm font-bold text-[#0B2A5B]">Enterprise Development Capabilities</h4>
                          </div>
                          <Link
                            to="/services"
                            className="text-xs font-bold text-[#0B2A5B] hover:text-[#19B5C4] flex items-center gap-1 group transition-colors"
                          >
                            <span>All 10 Domains</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* 6 Core Services Grid */}
                        <div className="grid grid-cols-2 gap-2">
                          {serviceDropdownItems.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={idx}
                                to={item.path}
                                className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-[#19B5C4]/30 transition-all duration-200 flex items-start gap-3 group"
                              >
                                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors flex items-center gap-1">
                                    <span>{item.title}</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </div>
                                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Bottom Quick Callout */}
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/70 -mx-5 -mb-5 px-5 py-3">
                          <span className="text-slate-500 text-[11px]">Need custom enterprise architecture or consultation?</span>
                          <button
                            type="button"
                            onClick={onOpenQuote}
                            className="font-bold text-[#0A8895] hover:text-[#0B2A5B] hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3" />
                            <span>Request Free Project Scope</span>
                          </button>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. Company Dropdown (How We Work, Our Team, Careers) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`relative px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1 cursor-pointer group ${
                    isCompanyActive || activeDropdown === 'company'
                      ? 'text-[#0B2A5B] bg-[#E8F9FB] text-[#0A8895]'
                      : 'text-slate-600 hover:text-[#0B2A5B] hover:bg-slate-50'
                  }`}
                >
                  <span>Company</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180 text-[#19B5C4]' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  {isCompanyActive && (
                    <motion.div
                      layoutId="navbarActiveIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#19B5C4] rounded-full shadow-[0_0_8px_#19B5C4]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === 'company' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full -left-10 w-72 pt-3 z-50"
                    >
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-3 space-y-1">
                        {companyDropdownItems.map((item, idx) => {
                          const IconComponent = item.icon;
                          const isItemActive = location.pathname.startsWith(item.path);
                          return (
                            <Link
                              key={idx}
                              to={item.path}
                              className={`p-2.5 rounded-xl transition-all duration-200 flex items-center gap-3 group ${
                                isItemActive ? 'bg-[#E8F9FB] text-[#0A8895]' : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#19B5C4] text-slate-700 group-hover:text-[#0B2A5B] flex items-center justify-center shrink-0 transition-colors">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors flex items-center justify-between">
                                  <span>{item.title}</span>
                                  {item.badge && (
                                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#19B5C4] text-[#0B2A5B] animate-pulse">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] text-slate-400 truncate">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5. Blog */}
              <Link
                to="/blog"
                className={`relative px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                  isBlogActive
                    ? 'text-[#0B2A5B] bg-[#E8F9FB] text-[#0A8895]'
                    : 'text-slate-600 hover:text-[#0B2A5B] hover:bg-slate-50'
                }`}
              >
                <span>Blog</span>
                {isBlogActive && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#19B5C4] rounded-full shadow-[0_0_8px_#19B5C4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* 6. FAQ */}
              <Link
                to="/faq"
                className={`relative px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                  isFaqActive
                    ? 'text-[#0B2A5B] bg-[#E8F9FB] text-[#0A8895]'
                    : 'text-slate-600 hover:text-[#0B2A5B] hover:bg-slate-50'
                }`}
              >
                <span>FAQ</span>
                {isFaqActive && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#19B5C4] rounded-full shadow-[0_0_8px_#19B5C4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/* 7. Contact */}
              <Link
                to="/contact"
                className={`relative px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                  isContactActive
                    ? 'text-[#0B2A5B] bg-[#E8F9FB] text-[#0A8895]'
                    : 'text-slate-600 hover:text-[#0B2A5B] hover:bg-slate-50'
                }`}
              >
                <span>Contact</span>
                {isContactActive && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#19B5C4] rounded-full shadow-[0_0_8px_#19B5C4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

            </nav>

            {/* Right CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              
              {/* WhatsApp Quick Direct Link */}
              <a
                href={`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold border border-emerald-200 hover:border-emerald-300 transition-all hover:scale-105"
                title="Chat directly on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                <span>{companyInfo.whatsappDisplay}</span>
              </a>

              {/* Direct Call Quick Link on Lg screens */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="hidden md:flex xl:hidden items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B2A5B] text-xs font-bold transition-all"
                title="Call our headquarters"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#19B5C4]" />
                <span className="hidden sm:inline">Call Us</span>
              </a>

              {/* "Get A Quote" Button with unique shimmer hover effect */}
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-shimmer inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#0B2A5B] to-[#154285] hover:from-[#19B5C4] hover:to-[#0A8895] text-white hover:text-[#0B2A5B] text-xs sm:text-sm font-bold shadow-md hover:shadow-[0_0_20px_rgba(25,181,196,0.4)] transition-all duration-300 cursor-pointer group shrink-0"
                id="navbar-get-quote-btn"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#19B5C4] group-hover:text-[#0B2A5B] transition-colors" />
                <span>Get A Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Mobile Hamburger Toggle (Visible on screens < 1024px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#0B2A5B] focus:outline-none transition-colors cursor-pointer"
                id="navbar-mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (Responsive for tablet and mobile devices) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0B2A5B]/75 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-84 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Top Header */}
              <div className="p-5 bg-gradient-to-r from-[#0B2A5B] to-[#154285] text-white flex items-center justify-between border-b border-[#19B5C4]/30">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#19B5C4] flex items-center justify-center font-extrabold text-[#0B2A5B] text-sm font-heading shadow-md">
                    RK
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm leading-none font-heading">Ru-kEm Tech Lab</h3>
                    <span className="text-[10px] text-cyan-200 mt-0.5 block">Ahmedabad, Gujarat</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 text-slate-200 hover:text-white transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Menu List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                
                {/* 1. Home */}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isHomeActive
                      ? 'bg-[#E8F9FB] text-[#0A8895] border-l-4 border-[#19B5C4]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>

                {/* 2. About Us (Separate Item) */}
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isAboutActive
                      ? 'bg-[#E8F9FB] text-[#0A8895] border-l-4 border-[#19B5C4]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#19B5C4]" />
                    <span>About Us</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>

                {/* 3. Services Accordion */}
                <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-800 text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span>Services</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#19B5C4]/20 text-[#0A8895] font-semibold">10 Domains</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-3 pb-3 space-y-1 overflow-hidden"
                      >
                        {serviceDropdownItems.map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#0B2A5B] hover:bg-white transition-colors"
                            >
                              <IconComp className="w-3.5 h-3.5 text-[#19B5C4]" />
                              <span className="truncate">{item.title}</span>
                            </Link>
                          );
                        })}
                        <Link
                          to="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-[#0A8895] bg-[#E8F9FB] hover:bg-[#19B5C4]/20 transition-colors mt-1"
                        >
                          <span>Explore All 10 Domains</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 4. Company Accordion (How We Work, Team, Careers) */}
                <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50/50">
                  <button
                    type="button"
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-800 text-left cursor-pointer"
                  >
                    <span>Company</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileCompanyOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-3 pb-3 space-y-1 overflow-hidden"
                      >
                        {companyDropdownItems.map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#0B2A5B] hover:bg-white transition-colors"
                            >
                              <div className="flex items-center gap-2.5">
                                <IconComp className="w-3.5 h-3.5 text-[#19B5C4]" />
                                <span>{item.title}</span>
                              </div>
                              {item.badge && (
                                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#19B5C4] text-[#0B2A5B]">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 5. Tech Blog */}
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isBlogActive
                      ? 'bg-[#E8F9FB] text-[#0A8895] border-l-4 border-[#19B5C4]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#19B5C4]" />
                    <span>Tech Blog</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>

                {/* 6. FAQs */}
                <Link
                  to="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isFaqActive
                      ? 'bg-[#E8F9FB] text-[#0A8895] border-l-4 border-[#19B5C4]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#19B5C4]" />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>

                {/* 7. Contact Us */}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isContactActive
                      ? 'bg-[#E8F9FB] text-[#0A8895] border-l-4 border-[#19B5C4]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#19B5C4]" />
                    <span>Contact Us</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>

              </div>

              {/* Drawer Bottom CTAs */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/80 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="btn-shimmer w-full py-3 rounded-xl bg-gradient-to-r from-[#0B2A5B] to-[#154285] text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#19B5C4]" />
                  <span>Request Project Scope Quote</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0B2A5B] font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#19B5C4]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 hover:bg-emerald-700 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
