import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, MapPin, DollarSign, Clock, CheckCircle2, 
  ArrowRight, Rocket, TrendingUp, Coffee, Award, Sparkles, Send
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ApplyModal from '../components/ApplyModal';
import { jobOpenings, perks } from '../data/careersData';

const iconMap = {
  Rocket, TrendingUp, DollarSign, Coffee, Award, MapPin
};

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [departmentFilter, setDepartmentFilter] = useState("All");

  const departments = ["All", "Engineering", "Mobile Engineering", "Design", "Quality Assurance"];

  const filteredJobs = departmentFilter === "All" 
    ? jobOpenings 
    : jobOpenings.filter(j => j.department === departmentFilter);

  const handleOpenApply = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#071A38] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>We're Hiring High-Caliber Engineers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Build Your Career with <span className="text-[#19B5C4]">Ru-kEm Tech Lab</span>
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Join a culture that values clean architecture, continuous learning, competitive salaries, and real ownership of impactful enterprise products.
          </p>
        </div>
      </section>

      {/* Perks Section ("Why You'll Love Working Here") */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Company Culture"
            title="Why You'll Love Building"
            highlight="Software With Us"
            subtitle="We invest deeply in our engineers' growth, wellbeing, and professional mastery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {perks.map((perk, idx) => {
              const IconComp = iconMap[perk.icon] || Rocket;
              return (
                <div
                  key={idx}
                  className="card-hover-unique p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E8F9FB] text-[#0A8895] flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#0B2A5B] mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Current Openings"
            title="Explore Open Tech"
            highlight="Positions"
            subtitle="Find your next role at our Ahmedabad headquarters and make a tangible engineering impact."
          />

          {/* Department Filters */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-8 no-scrollbar">
            {departments.map((dep) => (
              <button
                key={dep}
                onClick={() => setDepartmentFilter(dep)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  departmentFilter === dep
                    ? 'bg-[#0B2A5B] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {dep}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-hover-unique bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#E8F9FB] text-[#0A8895] text-xs font-bold uppercase">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#19B5C4]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#19B5C4]" />
                      {job.experience}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">
                      <DollarSign className="w-3.5 h-3.5" />
                      {job.salary}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="tag-pill-hover px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium cursor-pointer">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <button
                    onClick={() => handleOpenApply(job)}
                    className="btn-shimmer w-full md:w-auto px-6 py-3 rounded-xl bg-[#0B2A5B] hover:bg-[#19B5C4] hover:text-[#0B2A5B] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-[0_0_20px_rgba(25,181,196,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>View & Apply</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <ApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        job={selectedJob}
      />
    </div>
  );
}
