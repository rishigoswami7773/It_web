import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, Layers, Code2, ShieldCheck, Rocket, Headphones, 
  CheckCircle2, ArrowRight, Sparkles, Clock, Calendar, Shield
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { workPhases } from '../data/howWeWorkData';

const iconMap = {
  Compass, Layers, Code2, ShieldCheck, Rocket, Headphones
};

export default function HowWeWork({ onOpenQuote }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#071A38] text-white overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agile Delivery Framework</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Our 6-Phase <span className="text-[#19B5C4]">Software Engineering</span> Process
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Predictable sprints, complete code transparency, and zero surprises from initial discovery to high-availability production cloud deployments.
          </p>
        </div>
      </section>

      {/* 6-Phase Timeline */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Step-by-Step Execution"
            title="How We Deliver World-Class"
            highlight="Digital Solutions"
            subtitle="Each phase is governed by clear milestone sign-offs, staging previews, and automated QA suites."
          />

          <div className="mt-20 space-y-12 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-[#19B5C4] before:via-[#0B2A5B] before:to-[#19B5C4] before:-translate-x-1/2">
            {workPhases.map((phase, idx) => {
              const IconComp = iconMap[phase.icon] || Code2;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0B2A5B] border-4 border-white shadow-xl text-white flex items-center justify-center font-bold text-sm font-heading z-10">
                    <span className="text-[#19B5C4]">{phase.step}</span>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="card-hover-unique bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="px-3 py-1 rounded-full bg-[#E8F9FB] text-[#0A8895] text-xs font-bold uppercase tracking-wider">
                          Phase {phase.step}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#19B5C4]" />
                          {phase.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-[#0B2A5B] mb-2">
                        {phase.phase}
                      </h3>

                      <h4 className="text-xs sm:text-sm font-semibold text-[#19B5C4] mb-3">
                        {phase.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {phase.desc}
                      </p>

                      <div className="pt-4 border-t border-slate-100 text-left">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0B2A5B] block mb-2">
                          Key Deliverables:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {phase.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#19B5C4] shrink-0" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-20 bg-[#071A38] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            Ready to Start Sprints on Your Product?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Book a discovery call with our tech leads in Ahmedabad. We will review your requirements and draft a free architecture roadmap.
          </p>
          <button
            onClick={onOpenQuote}
            className="btn-shimmer px-8 py-4 rounded-xl bg-[#19B5C4] hover:bg-[#149BA8] text-[#071A38] font-extrabold text-sm sm:text-base shadow-xl hover:shadow-[0_0_25px_rgba(25,181,196,0.45)] transition-all hover:scale-[1.02] inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>Initiate Discovery Phase</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
