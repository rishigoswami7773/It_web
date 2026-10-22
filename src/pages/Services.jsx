import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Monitor, Building2, Palette, Cloud, 
  ShieldCheck, Cpu, ShoppingBag, Network, ArrowRight, CheckCircle2, 
  Sparkles, Layers, Send, HelpCircle, ChevronRight, Check
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { domainCategories } from '../data/servicesData';
import confetti from 'canvas-confetti';

const iconMap = {
  Globe, Smartphone, Monitor, Building2, Palette, Cloud, 
  ShieldCheck, Cpu, ShoppingBag, Network
};

export default function Services({ onOpenQuote }) {
  const { category } = useParams();
  
  // Find category if provided
  const activeCategory = category 
    ? domainCategories.find(c => c.id === category) || domainCategories[0]
    : null;

  // State for inline quote form
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInlineSubmit = (e) => {
    e.preventDefault();
    if (!quoteForm.name || !quoteForm.email || !quoteForm.phone) return;
    setFormSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
  };

  // If viewing a specific category:
  if (activeCategory) {
    const IconComp = iconMap[activeCategory.icon] || Globe;
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Category Hero Banner */}
        <section className="relative py-20 sm:py-28 bg-[#071A38] text-white overflow-hidden">
          <div className="absolute top-0 right-10 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#19B5C4] font-semibold">{activeCategory.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19B5C4]/20 text-[#19B5C4] text-xs font-bold uppercase tracking-wider">
                  <IconComp className="w-4 h-4" />
                  <span>{activeCategory.subtitle}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                  {activeCategory.title}
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="pt-2">
                  <span className="block text-xs uppercase font-bold text-slate-400 mb-2">
                    Core Technologies & Frameworks:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs font-bold text-[#19B5C4]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenQuote(activeCategory.title)}
                    className="btn-shimmer px-6 py-3 rounded-xl bg-[#19B5C4] hover:bg-[#149BA8] text-[#071A38] font-bold text-sm shadow-lg hover:shadow-[0_0_25px_rgba(25,181,196,0.45)] transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
                  >
                    <span>Get Instant Quote For This Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700/50">
                  <img
                    src={activeCategory.heroImage}
                    alt={activeCategory.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A38] via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Specialized Modules"
              title="What We Deliver in"
              highlight={activeCategory.title}
              subtitle="Modular, end-to-end engineering tailored for performance, high availability, and business scale."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {activeCategory.subServices.map((sub, idx) => (
                <div
                  key={idx}
                  className="card-hover-unique bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E8F9FB] text-[#0A8895] flex items-center justify-center font-bold text-sm font-heading mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#0B2A5B] mb-2">
                      {sub.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables & Instant Form Split */}
        <section className="py-20 bg-[#F1F5F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Deliverables */}
              <div className="lg:col-span-6 space-y-6">
                <SectionHeading
                  eyebrow="Guaranteed Standards"
                  title="Key Deliverables & Quality"
                  highlight="Assurance"
                  subtitle="Every project comes with comprehensive documentation, clean repos, and post-launch warranty."
                  center={false}
                />

                <div className="space-y-3">
                  {activeCategory.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-[#19B5C4] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Inline Quote Box */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
                  <h3 className="text-xl font-bold font-heading text-[#0B2A5B] mb-1">
                    Request Scope & Pricing for {activeCategory.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Our lead architect in Ahmedabad will review and provide a free breakdown within 24 hours.
                  </p>

                  {formSubmitted ? (
                    <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h4 className="font-bold text-emerald-800 text-base">Request Submitted!</h4>
                      <p className="text-xs text-emerald-700">
                        Thank you. We will contact you at {quoteForm.email} shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleInlineSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anand Shah"
                          value={quoteForm.name}
                          onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#19B5C4]"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="anand@company.com"
                            value={quoteForm.email}
                            onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#19B5C4]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={quoteForm.phone}
                            onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#19B5C4]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Details</label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe what you're looking to build..."
                          value={quoteForm.requirements}
                          onChange={(e) => setQuoteForm({ ...quoteForm, requirements: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#19B5C4]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-[#0B2A5B] hover:bg-[#154285] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <span>Send Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Categories Selector */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl font-bold font-heading text-[#0B2A5B] mb-6">
              Explore Our Other Specialized IT Domains
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {domainCategories.map((c) => (
                <Link
                  key={c.id}
                  to={`/services/${c.id}`}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    c.id === activeCategory.id
                      ? 'bg-[#0B2A5B] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-[#E8F9FB] hover:text-[#0A8895]'
                  }`}
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ALL SERVICES INDEX VIEW
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#071A38] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive IT Software Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto">
            10 Specialized Domains & <span className="text-[#19B5C4]">Technology Stacks</span>
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From high-throughput MERN web portals to native mobile apps, desktop POS utilities, enterprise ERPs, and generative AI pipelines.
          </p>
        </div>
      </section>

      {/* 10 Domains Grid */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Explore Our Domain"
            highlight="Specializations"
            subtitle="Click on any domain to view sub-services, technology architectures, and project deliverables."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {domainCategories.map((domain, idx) => {
              const IconComp = iconMap[domain.icon] || Globe;
              return (
                <div
                  key={domain.id}
                  className="card-hover-unique bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col justify-between group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={domain.heroImage}
                      alt={domain.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A5B]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#19B5C4] text-[#0B2A5B] flex items-center justify-center font-bold shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                        Domain 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors mb-2">
                      {domain.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {domain.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {domain.techStack.slice(0, 5).map((t, i) => (
                        <span key={i} className="tag-pill-hover px-2 py-0.5 rounded bg-slate-100 text-[11px] font-medium text-slate-700 border border-transparent">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 pt-4">
                    <Link
                      to={`/services/${domain.id}`}
                      className="text-xs font-bold text-[#0B2A5B] group-hover:text-[#19B5C4] flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Sub-Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenQuote(domain.title)}
                      className="px-3 py-1.5 rounded-lg bg-[#E8F9FB] text-[#0A8895] hover:bg-[#19B5C4] hover:text-[#0B2A5B] text-xs font-bold transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
