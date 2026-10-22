import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Search, Sparkles, CheckCircle2, ArrowRight, MapPin, Award
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import { teamMembers, teamDomains } from '../data/teamData';

export default function Team({ onOpenQuote }) {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      const matchesDomain = selectedDomain === "All" || member.domain === selectedDomain;
      const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            member.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#071A38] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>32+ Skilled Experts in Ahmedabad</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Meet the Minds Behind <span className="text-[#19B5C4]">Ru-kEm Tech Lab</span>
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A tight-knit collective of senior fullstack architects, mobile engineers, UI/UX designers, QA specialists, and DevOps veterans.
          </p>
        </div>
      </section>

      {/* Controls & Search */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Domain Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {teamDomains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    selectedDomain === domain
                      ? 'bg-[#0B2A5B] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, role or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#19B5C4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#0B2A5B] font-heading">No team members match your filter</h3>
              <p className="text-xs text-slate-500 mt-1">Try selecting "All" or clearing your search term.</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredMembers.map((member) => (
                  <motion.div
                    layout
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="card-hover-unique bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Banner & Photo */}
                      <div className="relative h-64 overflow-hidden bg-slate-100">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A5B]/85 via-transparent to-transparent" />
                        
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0B2A5B] text-xs font-bold uppercase tracking-wider shadow-sm">
                            {member.domain}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-5 right-5 text-white">
                          <span className="text-[11px] font-semibold text-[#19B5C4] block uppercase tracking-wider">
                            {member.experience} Experience
                          </span>
                          <h3 className="text-xl font-bold font-heading text-white mt-0.5">
                            {member.name}
                          </h3>
                          <p className="text-xs text-slate-300 font-medium">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Bio & Skills */}
                      <div className="p-6">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {member.bio}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {member.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="tag-pill-hover px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-slate-200 text-slate-700 text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="p-6 pt-0 border-t border-slate-100 pt-4 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Ahmedabad Hub
                      </span>
                      <div className="flex items-center gap-2">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-slate-100 hover:bg-[#19B5C4] hover:text-[#0B2A5B] text-slate-600 transition-all hover:scale-110 hover:shadow-sm"
                          >
                            <LinkedinIcon className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.github && (
                          <a
                            href={member.socials.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-slate-100 hover:bg-[#19B5C4] hover:text-[#0B2A5B] text-slate-600 transition-all hover:scale-110 hover:shadow-sm"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-slate-100 hover:bg-[#19B5C4] hover:text-[#0B2A5B] text-slate-600 transition-all hover:scale-110 hover:shadow-sm"
                          >
                            <TwitterIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>


      {/* Join Team CTA */}
      <section className="py-20 bg-[#071A38] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            Want to Join Our Ahmedabad Engineering Team?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            We are actively hiring Senior MERN Developers, Python Engineers, and UI/UX Designers.
          </p>
          <Link
            to="/careers"
            className="btn-shimmer px-8 py-4 rounded-xl bg-[#19B5C4] hover:bg-[#149BA8] text-[#071A38] font-extrabold text-sm sm:text-base shadow-xl hover:shadow-[0_0_25px_rgba(25,181,196,0.45)] transition-all hover:scale-[1.02] inline-flex items-center gap-2 group"
          >
            <span>Explore Open Job Positions</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
