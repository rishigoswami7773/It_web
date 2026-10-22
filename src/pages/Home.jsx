import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, 
  Code2, Globe, Smartphone, Building2, Palette, Cloud, Monitor, 
  ShieldCheck, Cpu, ShoppingBag, Network, Layers, BarChart3, 
  CloudLightning, MessageCircle, Star, Quote, ArrowUpRight, Play
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import StatCounter from '../components/StatCounter';
import ThreeBackdrop from '../components/three/ThreeBackdrop';
import { 
  companyInfo, heroSlides, techLogos, coreCapabilities, testimonials 
} from '../data/companyData';
import { primaryServices, domainCategories } from '../data/servicesData';
import { workPhases } from '../data/howWeWorkData';
import { blogPosts } from '../data/blogsData';


// Icon map helper
const iconMap = {
  Code2, Globe, Smartphone, Building2, Palette, Cloud, 
  Monitor, ShieldCheck, Cpu, ShoppingBag, Network, 
  Layers, BarChart3, CloudLightning
};

export default function Home({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Rotating tech words for hero
  const rotatingWords = ["Fullstack Web", "Flutter Mobile", "Custom ERP & CRM", "Python & AI", "DevOps & Cloud"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(wordTimer);
  }, []);

  // Slider auto-play
  useEffect(() => {
    if (isPaused) return;
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* 1. HERO SLIDER SECTION */}
      <section 
        className="relative h-[92vh] min-h-[640px] max-h-[900px] w-full overflow-hidden bg-[#071A38] text-white flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-10000 ease-out"
            />
            {/* Dynamic Mesh & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071A38] via-[#071A38]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A38] via-transparent to-[#071A38]/40" />
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#19B5C4]/15 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Interactive ThreeUI Constellation Field Backdrop */}
        <ThreeBackdrop
          nodeCount={50}
          maxDistance={140}
          speed={0.45}
          className="opacity-75"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">

          <div className="max-w-3xl">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#19B5C4]" />
              <span>{heroSlides[currentSlide].badge}</span>
            </motion.div>

            {/* Rotating Dynamic Subtitle */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-300 mb-2">
              <span>Architecting Next-Gen:</span>
              <span className="text-[#19B5C4] underline decoration-[#19B5C4]/50 underline-offset-4">
                {rotatingWords[wordIndex]}
              </span>
            </div>

            {/* Hero Main Headline */}
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-6"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenQuote}
                className="btn-shimmer px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#19B5C4] to-[#0A8895] hover:from-[#149BA8] hover:to-[#08737F] text-[#071A38] hover:text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-[#19B5C4]/25 flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(25,181,196,0.45)] group cursor-pointer"
              >
                <span>{heroSlides[currentSlide].ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 hover:border-[#19B5C4] backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(25,181,196,0.25)]"
              >
                Our IT Domains
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#19B5C4] text-white hover:text-[#0B2A5B] border border-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1.5 px-3">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-[#19B5C4]' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#19B5C4] text-white hover:text-[#0B2A5B] border border-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 2. "WHAT WE DO & WE DO IT PERFECTLY" SECTION */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Core Services"
            title="This Is What We Do And We Do It"
            highlight="Perfectly"
            subtitle="Engineered with architectural precision, battle-tested software engineering standards, and an unwavering commitment to scalability."
          />

          {/* Service Cards Grid - Cards turn Navy with white text on hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {primaryServices.map((service, index) => {
              const IconComp = iconMap[service.icon] || Code2;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card-hover-unique group relative bg-[#F8FAFC] hover:bg-[#0B2A5B] rounded-2xl p-8 border border-slate-200/80 hover:border-[#19B5C4] transition-all duration-400 shadow-sm flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Subtle hover background glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#19B5C4]/10 rounded-full blur-2xl group-hover:bg-[#19B5C4]/25 transition-all pointer-events-none"></div>

                  <div>
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-xl bg-[#E8F9FB] group-hover:bg-[#19B5C4] text-[#0A8895] group-hover:text-[#0B2A5B] flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-2">
                      <IconComp className="w-7 h-7 transition-transform group-hover:scale-110" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-heading text-[#0B2A5B] group-hover:text-white mb-3 transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-600 group-hover:text-slate-200 text-sm leading-relaxed mb-6 transition-colors">
                      {service.shortDesc}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#19B5C4] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-slate-200 group-hover:border-white/15 flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-bold text-[#0B2A5B] group-hover:text-[#19B5C4] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="w-9 h-9 rounded-full bg-slate-200 group-hover:bg-[#19B5C4] text-slate-700 group-hover:text-[#0B2A5B] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B2A5B] hover:bg-[#154285] text-white font-bold text-sm shadow-lg hover:shadow-[0_0_25px_rgba(11,42,91,0.35)] transition-all hover:scale-[1.02] group"
            >
              <span>See All 10 IT Services & Categories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. "SPECIALIZED IT DOMAINS & TECHNOLOGY STACKS" (10 Domains) */}
      <section className="py-20 sm:py-28 bg-[#F1F5F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Specialized Capabilities"
            title="Our Specialized IT Domains &"
            highlight="Technology Stacks"
            subtitle="From native mobile apps and cross-platform desktop utilities to complex enterprise ERPs and AI workflows in Ahmedabad."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
            {domainCategories.map((domain, idx) => {
              const IconComp = iconMap[domain.icon] || Globe;
              return (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="card-hover-unique bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E8F9FB] text-[#0A8895] group-hover:bg-[#0B2A5B] group-hover:text-[#19B5C4] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-2">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-heading text-[#0B2A5B] mb-2 group-hover:text-[#19B5C4] transition-colors">
                      {domain.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {domain.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {domain.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="tag-pill-hover px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-transparent"
                        >
                          {tech}
                        </span>
                      ))}
                      {domain.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-medium">
                          +{domain.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/services/${domain.id}`}
                      className="text-xs font-bold text-[#0B2A5B] group-hover:text-[#19B5C4] flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Domain</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenQuote(domain.title)}
                      className="px-2.5 py-1 rounded-lg bg-[#E8F9FB] text-[#0A8895] hover:bg-[#19B5C4] hover:text-[#0B2A5B] text-[11px] font-bold transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL MASTERY & ENTERPRISE CAPABILITIES */}
      <section className="py-20 sm:py-28 bg-[#071A38] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Technical Mastery"
            title="Enterprise IT Engineering &"
            highlight="Distributed Architecture"
            subtitle="Built for zero downtime, sub-50ms API responses, and effortless horizontal scalability."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {coreCapabilities.map((cap, idx) => {
              const IconComp = iconMap[cap.icon] || CloudLightning;
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card-hover-dark bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-2 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-[#19B5C4] transition-colors">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#19B5C4]">
                    <span>{cap.metrics}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ECOSYSTEM & PLATFORMS - LOGO MARQUEE */}
      <section className="py-14 bg-white border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
            Ecosystem, Frameworks & Cloud Platforms We Build With
          </span>
        </div>

        <div className="relative w-full overflow-hidden flex items-center">
          {/* Edge blur shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-8 py-2">
            {[...techLogos, ...techLogos].map((tech, idx) => (
              <div
                key={idx}
                className="tag-pill-hover flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs shrink-0 cursor-pointer"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
                <span className="text-xs font-bold text-slate-800 font-heading">
                  {tech.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                  • {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS BAND (NAVY WITH ANIMATED COUNTERS) */}
      <section className="py-16 sm:py-20 bg-[#0B2A5B] text-white relative overflow-hidden">
        <ThreeBackdrop
          nodeCount={28}
          maxDistance={110}
          speed={0.35}
          className="opacity-40"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter
              targetNumber={companyInfo.stats.happyClients}
              suffix="+"
              title="Happy Clients Worldwide"
              icon={Globe}
              delay={1}
            />
            <StatCounter
              targetNumber={companyInfo.stats.skilledExperts}
              suffix="+"
              title="Skilled In-House Engineers"
              icon={Cpu}
              delay={2}
            />
            <StatCounter
              targetNumber={companyInfo.stats.finishedProjects}
              suffix="+"
              title="Delivered Projects"
              icon={Code2}
              delay={3}
            />
            <StatCounter
              targetNumber={companyInfo.stats.mediaPosts}
              suffix="+"
              title="Tech Insights & Commits"
              icon={BarChart3}
              delay={4}
            />
          </div>
        </div>
      </section>

      {/* 7. "WELCOME TO RU-KEM TECHNOLOGIES" INTRO SECTION */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Ru-kEm Technologies Engineering Team"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A5B]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#19B5C4]">
                    Ahmedabad Tech Innovation Hub
                  </span>
                  <h4 className="text-xl font-bold font-heading mt-1">
                    Building High-Caliber Software Since 2017
                  </h4>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-5 shadow-2xl border border-slate-100 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F9FB] text-[#0A8895] flex items-center justify-center font-bold text-lg font-heading">
                    99%
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-[#0B2A5B]">Client Retention</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">Reliable long-term engineering partnership</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Copy & Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F9FB] text-[#0A8895] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Welcome to Ru-kEm Tech Lab</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0B2A5B] leading-tight">
                Empowering Enterprises with <span className="text-[#19B5C4]">Predictable Engineering</span> & Digital Speed
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Headquartered in Ahmedabad, Gujarat, <strong>Ru-kEm Tech Lab</strong> is a full-cycle software engineering powerhouse. We bridge the gap between ambitious business ideas and flawless technical execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "Direct Tech Leadership", desc: "Collaborate directly with senior architects and developers, avoiding middleman delays." },
                  { title: "Clean, Scalable Code", desc: "Strict linting, automated testing, and comprehensive API documentation." },
                  { title: "Transparent Agile Sprints", desc: "Bi-weekly sprint demos, daily status updates, and Jira backlog visibility." },
                  { title: "100% IP & Source Code", desc: "Strict non-disclosure agreements, transparent GitHub commits, and zero lock-in." }
                ].map((val, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0B2A5B] mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#19B5C4] shrink-0" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-xl bg-[#0B2A5B] hover:bg-[#154285] text-white font-bold text-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Learn More About Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/how-we-work"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2A5B] font-bold text-sm transition-colors"
                >
                  Our 6-Phase Process
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. HOW WE WORK PREVIEW */}
      <section className="py-20 sm:py-28 bg-[#F1F5F9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Methodology"
            title="How We Turn Ideas Into"
            highlight="High-Performance Software"
            subtitle="A transparent, 6-phase agile delivery framework ensuring zero surprises and on-time launches."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {workPhases.slice(0, 6).map((phase, idx) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-heading text-[#19B5C4]">
                    {phase.step}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                    {phase.duration}
                  </span>
                </div>
                <h4 className="text-base font-bold font-heading text-[#0B2A5B] mb-2">
                  {phase.phase}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {phase.desc}
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#0B2A5B] block mb-1.5 uppercase tracking-wider">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1">
                    {phase.deliverables.slice(0, 2).map((del, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#19B5C4] shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/how-we-work"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2A5B] hover:text-[#19B5C4] transition-colors"
            >
              <span>Explore Complete 6-Phase Engineering Pipeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SLIDER */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Success"
            title="Trusted By Founders & Tech Leaders"
            highlight="Globally"
            subtitle="Discover what our enterprise clients say about collaborating with our engineering team in Ahmedabad."
          />

          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-[#0B2A5B] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
              <Quote className="w-16 h-16 text-[#19B5C4]/20 absolute top-6 right-6 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-base sm:text-xl font-medium leading-relaxed italic mb-8 text-slate-100">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/15">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#19B5C4]"
                    />
                    <div>
                      <h4 className="text-lg font-bold font-heading text-white">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-xs text-[#19B5C4] font-semibold">
                        {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonial(idx)}
                        aria-label={`Show testimonial ${idx + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          activeTestimonial === idx ? 'w-8 bg-[#19B5C4]' : 'w-2.5 bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LATEST BLOG PREVIEWS */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tech Insights & Thought Leadership"
            title="Latest From Our"
            highlight="Engineering Blog"
            subtitle="Articles, architectural case studies, and modern development patterns written by our senior developers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {blogPosts.slice(0, 3).map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#19B5C4] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B2A5B]/80 backdrop-blur-sm text-white text-xs font-bold">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-xs font-bold text-[#0B2A5B] group-hover:text-[#19B5C4] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2A5B] font-bold text-sm transition-colors"
            >
              <span>View All Blog Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. CLOSING CTA BANNER */}
      <section className="py-20 bg-[#071A38] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#19B5C4]/20 rounded-full blur-3xl pointer-events-none" />
        <ThreeBackdrop
          nodeCount={35}
          maxDistance={125}
          speed={0.4}
          className="opacity-60"
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Ready To Build Something Exceptional?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-6">
            Tell Us About Your Idea, And We'll <span className="text-[#19B5C4]">Make It Happen</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need a fullstack MERN web portal, a scalable Flutter mobile app, an enterprise ERP, or dedicated developer augmentation in Ahmedabad, we're ready.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="btn-shimmer px-8 py-4 rounded-xl bg-[#19B5C4] hover:bg-[#149BA8] text-[#071A38] font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-[#19B5C4]/30 flex items-center gap-3 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(25,181,196,0.5)] group cursor-pointer"
            >
              <span>Get Your Free Technical Estimate</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href={`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-xl flex items-center gap-2.5 transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Quick WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
