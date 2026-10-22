import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Users, Target, Eye, ShieldCheck, Award, 
  CheckCircle2, ArrowRight, Sparkles, Heart, Rocket, Clock, MapPin
} from 'lucide-react';
import { LinkedinIcon } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/companyData';
import { teamMembers } from '../data/teamData';

const subTabs = [
  { id: 'about-company', label: 'About Company' },
  { id: 'mission-vision', label: 'Mission & Vision' },
  { id: 'leadership', label: 'Leadership / CEO' },
  { id: 'why-choose-us', label: 'Why Choose Ru-kEm' },
  { id: 'milestones', label: 'Our Milestones' }
];

export default function About({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('about-company');

  const scrollToSection = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const leaders = teamMembers.filter(m => m.domain === 'Leadership');

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. HERO BANNER */}
      <section className="relative py-24 sm:py-32 bg-[#071A38] text-white overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pioneering Enterprise Software in Ahmedabad</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Engineering Digital Excellence with <span className="text-[#19B5C4]">Integrity & Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Since 2017, Ru-kEm Tech Lab has empowered startups and global enterprises by crafting robust, scalable web architectures, mobile apps, and enterprise software.
          </motion.p>
        </div>
      </section>

      {/* 2. STICKY SUB-TAB BAR */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0B2A5B] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0B2A5B] hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SECTION: ABOUT COMPANY */}
      <section id="about-company" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Our Story"
                title="Building Reliable Tech Stacks from the Heart of"
                highlight="Ahmedabad"
                subtitle="Founded in 2017 with a singular mission: to deliver clean, maintainable software and transparent engineering relationships."
                center={false}
              />

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Ru-kEm Tech Lab (Ru-kEm Technologies) began as a specialized fullstack development agency and has evolved into an end-to-end digital engineering partner for global enterprises.
              </p>

              <div className="space-y-3">
                {[
                  "Specialized in high-concurrency MERN & Python architectures.",
                  "Cross-platform mobile apps using Flutter and React Native.",
                  "Enterprise ERP, CRM, and automated billing software.",
                  "Zero technical debt approach with automated CI/CD and QA."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#19B5C4] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-[#0B2A5B] hover:bg-[#154285] text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                  alt="Ru-kEm Tech Lab Office"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A5B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-[#19B5C4] uppercase tracking-wider">
                    Infrastructure & Culture
                  </span>
                  <h4 className="text-lg font-bold font-heading mt-1">
                    Corporate Park, Prahlad Nagar, Ahmedabad
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: MISSION & VISION */}
      <section id="mission-vision" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Guided by Strong Principles &"
            highlight="Enduring Vision"
            subtitle="We don't just write code; we solve business problems with sustainable technology architectures."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            <div className="card-hover-unique bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F9FB] text-[#0A8895] flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B2A5B] mb-3">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To deliver dependable, high-velocity digital software solutions that empower our clients to scale their operations, outperform competition, and delight end-users.
              </p>
            </div>

            <div className="card-hover-unique bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F9FB] text-[#0A8895] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B2A5B] mb-3">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be Gujarat's most trusted software engineering hub, recognized globally for top-tier fullstack craftsmanship, AI integration, and unwavering delivery standards.
              </p>
            </div>

            <div className="card-hover-unique bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F9FB] text-[#0A8895] flex items-center justify-center mb-6">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#0B2A5B] mb-3">Our Core Values</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Total transparency, zero technical compromise, continuous learning, and treating our client's product with the same dedication as our own venture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: LEADERSHIP / CEO */}
      <section id="leadership" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Executive Team"
            title="Meet the Visionaries Leading"
            highlight="Ru-kEm Tech Lab"
            subtitle="Decades of combined technical leadership, product architecture, and enterprise software engineering experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="card-hover-unique bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-5 mb-6">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-[#19B5C4]"
                    />
                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#0B2A5B]">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-bold text-[#19B5C4] uppercase tracking-wider">
                        {leader.role}
                      </p>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {leader.experience} In Industry
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {leader.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="tag-pill-hover px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B2A5B]">Ahmedabad Leadership</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={leader.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-[#19B5C4] hover:text-[#0B2A5B] text-slate-500 transition-colors shadow-xs"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. SECTION: WHY CHOOSE RU-KEM */}
      <section id="why-choose-us" className="py-20 sm:py-24 bg-[#071A38] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Ru-kEm Advantage"
            title="Why Leading Brands Partner with"
            highlight="Ru-kEm Technologies"
            subtitle="We blend senior technical engineering with transparent client relationships to guarantee project success."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              { title: "Senior In-House Engineers", desc: "No random freelancers. You get dedicated, vetted full-time engineers in Ahmedabad." },
              { title: "Strict NDA & 100% IP Security", desc: "We sign bilateral NDAs before scoping. You retain 100% source code and IP rights." },
              { title: "Direct Architect Communication", desc: "Speak directly with your tech leads via Slack, WhatsApp, and weekly Zoom sprints." },
              { title: "Zero Lock-In & Clean Code", desc: "Modular, well-documented codebases with automated CI/CD and Docker setups." },
              { title: "Cost-Effective Global Delivery", desc: "World-class engineering at competitive Indian rates with zero quality sacrifice." },
              { title: "Comprehensive Post-Launch Warranty", desc: "Complimentary bug-fix warranty followed by dedicated SLA maintenance." }
            ].map((adv, idx) => (
              <div
                key={idx}
                className="card-hover-dark bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold font-heading text-white mb-2">
                  {adv.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: MILESTONES */}
      <section id="milestones" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Key Milestones & Growth"
            highlight="Timeline"
            subtitle="From a tight-knit software collective in 2017 to an established enterprise solutions leader in Gujarat."
          />

          <div className="max-w-3xl mx-auto mt-14 space-y-6">
            {[
              { year: "2017", title: "Inception in Ahmedabad", desc: "Ru-kEm Technologies founded with a focus on MERN stack and custom PHP web applications." },
              { year: "2019", title: "Mobile & Enterprise Expansion", desc: "Launched dedicated Flutter mobile app division and delivered our first major ERP software." },
              { year: "2021", title: "Global Client Base", desc: "Crossed 200+ finished projects across India, UAE, UK, and USA markets." },
              { year: "2023", title: "DevOps & Cloud Acceleration", desc: "Standardized Docker, Kubernetes, and automated CI/CD for all enterprise clients." },
              { year: "2026", title: "AI & Next-Gen Innovations", desc: "Over 490+ projects delivered, 32+ in-house experts, integrating generative AI workflows." }
            ].map((m, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6 items-start">
                <div className="w-16 sm:w-20 text-right shrink-0">
                  <span className="text-base sm:text-lg font-black font-heading text-[#19B5C4]">{m.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-[#0B2A5B] border-2 border-[#19B5C4] mt-1.5 shrink-0" />
                <div className="card-hover-unique bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/80 flex-1">
                  <h4 className="text-sm font-bold font-heading text-[#0B2A5B] mb-1">{m.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
