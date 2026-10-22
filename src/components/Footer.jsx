import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, 
  ShieldCheck, Heart, Sparkles, Send, Check
} from 'lucide-react';
import { 
  LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon, FacebookIcon 
} from './SocialIcons';

import { companyInfo } from '../data/companyData';
import { domainCategories } from '../data/servicesData';

export default function Footer({ onOpenQuote, onOpenMail }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  const handleEmailClick = (e, targetEmail = companyInfo.email) => {
    e.preventDefault();
    if (onOpenMail) {
      onOpenMail(targetEmail);
    } else {
      window.location.href = `mailto:${targetEmail}`;
    }
  };

  return (
    <footer className="bg-[#071A38] text-slate-200 relative overflow-hidden pt-16 pb-10 border-t border-slate-800">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#19B5C4]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#0B2A5B]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Direct Email & Project Inquiry Quick Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B2A5B] via-[#0D3874] to-[#071A38] border border-[#19B5C4]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#19B5C4]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Have a Project in Mind? <span className="text-[#19B5C4]">Email Us Directly</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Click below to write and send an email straight to our technical directors at <strong className="text-white">{companyInfo.email}</strong>.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={(e) => handleEmailClick(e, companyInfo.email)}
              className="btn-shimmer px-5 py-3 rounded-xl bg-[#19B5C4] hover:bg-[#149BA8] text-[#071A38] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(25,181,196,0.5)] transition-all hover:scale-[1.02] cursor-pointer group"
              id="footer-write-mail-btn"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Write & Send Mail</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => onOpenQuote && onOpenQuote()}
              className="btn-shimmer px-5 py-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0B2A5B] font-bold text-xs uppercase tracking-wider border border-white/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              Request A Quote
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B2A5B] to-[#154285] flex items-center justify-center text-white shadow-md border border-[#19B5C4]/40">
                <span className="font-extrabold text-xl text-[#19B5C4] font-heading">
                  R<span className="text-white">K</span>
                </span>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight font-heading text-white">
                  Ru-kEm <span className="text-[#19B5C4]">Tech Lab</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-[#19B5C4]">
                  Technologies • Ahmedabad
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              Ru-kEm Tech Lab is an Ahmedabad-based enterprise IT software development company. We engineer resilient fullstack web platforms, mobile apps, ERP/CRM systems, and cloud solutions.
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#19B5C4] mb-2">
                Connect With Us
              </div>
              <div className="flex items-center gap-2">
                {[
                  { icon: LinkedinIcon, href: companyInfo.socials.linkedin, label: "LinkedIn" },
                  { icon: GithubIcon, href: companyInfo.socials.github, label: "GitHub" },
                  { icon: TwitterIcon, href: companyInfo.socials.twitter, label: "Twitter" },
                  { icon: InstagramIcon, href: companyInfo.socials.instagram, label: "Instagram" },
                  { icon: FacebookIcon, href: companyInfo.socials.facebook, label: "Facebook" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#19B5C4] hover:text-[#0B2A5B] text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:scale-115 hover:shadow-[0_0_15px_rgba(25,181,196,0.5)]"
                  >
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: IT Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              IT Services & Domains
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {domainCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/services/${cat.id}`}
                    className="text-slate-200 hover:text-[#19B5C4] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#19B5C4] opacity-70 group-hover:opacity-100 group-hover:w-2 transition-all"></span>
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-[#19B5C4] hover:underline font-semibold flex items-center gap-1 text-xs pt-1"
                >
                  <span>See All 10 Domains</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="text-slate-200 hover:text-[#19B5C4] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-we-work" className="text-slate-200 hover:text-[#19B5C4] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-slate-200 hover:text-[#19B5C4] transition-colors">
                  Our Team
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link to="/careers" className="text-slate-200 hover:text-[#19B5C4] transition-colors">
                  Careers
                </Link>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#19B5C4] text-[#0B2A5B] uppercase tracking-wider animate-pulse">
                  Hiring
                </span>
              </li>
              <li>
                <Link to="/blog" className="text-slate-200 hover:text-[#19B5C4] transition-colors">
                  Tech Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-200 hover:text-[#19B5C4] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-200 hover:text-[#19B5C4] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ahmedabad Office & Tech Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Ahmedabad Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#19B5C4] shrink-0 mt-0.5" />
                <span className="text-slate-200 leading-snug">{companyInfo.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#19B5C4] shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-slate-200 hover:text-[#19B5C4] transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              {/* Interactive Clickable Mail Card */}
              <button
                type="button"
                onClick={(e) => handleEmailClick(e, companyInfo.email)}
                className="card-hover-unique w-full text-left group p-3 rounded-xl bg-white/5 hover:bg-[#19B5C4]/15 border border-[#19B5C4]/30 hover:border-[#19B5C4] transition-all duration-200 shadow-xs cursor-pointer block"
                title="Click to write and send mail directly"
                id="footer-email-btn"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-[#19B5C4] text-[#0B2A5B] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-[#19B5C4]">
                        Click to Send Mail
                      </span>
                      <span className="block text-xs font-semibold text-white group-hover:text-[#19B5C4] transition-colors truncate">
                        {companyInfo.email}
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 p-1.5 rounded-lg bg-white/10 group-hover:bg-[#19B5C4] group-hover:text-[#0B2A5B] text-slate-200 transition-colors">
                    <Send className="w-3 h-3" />
                  </span>
                </div>
              </button>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#19B5C4] shrink-0" />
                <span className="text-slate-200">{companyInfo.workingHours}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-white mb-1.5">
                Subscribe for Tech Insights
              </span>
              <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                <input
                  type="email"
                  placeholder="Your work email..."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#19B5C4] flex-1"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-[#19B5C4] hover:bg-[#149BA8] text-[#0B2A5B] font-bold text-xs transition-colors flex items-center justify-center shadow-sm"
                >
                  {subscribed ? <Check className="w-4 h-4 text-white" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 mt-1 block">
                  Thank you for subscribing!
                </span>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">{companyInfo.legalName}</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#19B5C4]" />
              ISO 9001:2015 Certified IT Firm
            </span>
            <span className="text-slate-300">
              Made with <Heart className="w-3 h-3 text-red-400 inline fill-red-400" /> in Ahmedabad
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
