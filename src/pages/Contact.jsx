import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, MessageCircle, Send, 
  CheckCircle2, Sparkles, Building2, ArrowRight, ShieldCheck
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/companyData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Web Application / MERN",
    description: "",
    consent: true
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }, 850);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#071A38] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#19B5C4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#19B5C4]/20 border border-[#19B5C4]/40 text-[#19B5C4] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Discuss Your Project</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Contact <span className="text-[#19B5C4]">Ru-kEm Tech Lab</span>
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have a question or a software requirement? Our technical directors and solutions architects in Ahmedabad are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Split Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Headquarters Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeading
                  eyebrow="Ahmedabad Headquarters"
                  title="Let's Start a"
                  highlight="Conversation"
                  subtitle="Visit our innovation lab or get in touch through phone, email or WhatsApp."
                  center={false}
                />
              </div>

              <div className="space-y-4">
                <div className="card-hover-unique flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F9FB] group-hover:bg-[#19B5C4] text-[#0A8895] group-hover:text-[#0B2A5B] flex items-center justify-center shrink-0 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors">Our Office Address</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">{companyInfo.fullAddress}</p>
                  </div>
                </div>

                <div className="card-hover-unique flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F9FB] group-hover:bg-[#19B5C4] text-[#0A8895] group-hover:text-[#0B2A5B] flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors">Call / WhatsApp</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      <a href={`tel:${companyInfo.phone}`} className="hover:text-[#19B5C4] font-medium">{companyInfo.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="card-hover-unique flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F9FB] group-hover:bg-[#19B5C4] text-[#0A8895] group-hover:text-[#0B2A5B] flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors">Direct Inquiries</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      <a href={`mailto:${companyInfo.email}`} className="hover:text-[#19B5C4] font-medium">{companyInfo.email}</a>
                    </p>
                  </div>
                </div>

                <div className="card-hover-unique flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs cursor-pointer group">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F9FB] group-hover:bg-[#19B5C4] text-[#0A8895] group-hover:text-[#0B2A5B] flex items-center justify-center shrink-0 transition-colors">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-[#0B2A5B] group-hover:text-[#19B5C4] transition-colors">Operating Hours</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">{companyInfo.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Card */}
              <div className="p-6 rounded-3xl bg-[#0B2A5B] text-white flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm font-heading">Need Fast Technical Scoping?</h4>
                  <p className="text-xs text-[#19B5C4] mt-0.5">Chat directly on WhatsApp with our CTO</p>
                </div>
                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow hover:bg-[#20bd5a] flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form / Mail Section */}
            <div className="lg:col-span-7" id="mail-section">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl scroll-mt-24">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-[#0B2A5B]">
                      Message Received!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-[#0B2A5B]">{formData.name}</span>. Our solutions team in Ahmedabad will review your inquiry regarding <span className="text-[#19B5C4] font-semibold">{formData.enquiryType}</span> and get in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#0B2A5B] text-white text-xs font-bold hover:bg-[#154285]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#0B2A5B] mb-1">
                        Send Us A Direct Message
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">
                        Fill in your project details and we will schedule an initial architecture discussion.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikram Shah"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#19B5C4]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="vikram@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#19B5C4]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#19B5C4]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                          Enquiry Type
                        </label>
                        <select
                          value={formData.enquiryType}
                          onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#19B5C4]"
                        >
                          <option value="Web Application / MERN">Web Application / MERN</option>
                          <option value="Mobile App (Flutter/React Native)">Mobile App (Flutter/React Native)</option>
                          <option value="Enterprise ERP / CRM">Enterprise ERP / CRM</option>
                          <option value="Python / Django & AI">Python / Django & AI</option>
                          <option value="UI/UX Design Systems">UI/UX Design Systems</option>
                          <option value="Cloud DevOps & Migration">Cloud DevOps & Migration</option>
                          <option value="Career Inquiry">Career Inquiry</option>
                          <option value="General Partnership">General Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Project Overview or Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about what you want to build, current timelines, or any tech requirements..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-[#19B5C4]"
                      ></textarea>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="contact-consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="rounded text-[#19B5C4] focus:ring-[#19B5C4]"
                      />
                      <label htmlFor="contact-consent" className="text-xs text-slate-500 cursor-pointer">
                        I agree to the privacy policy and consent to receiving a project proposal response.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0B2A5B] to-[#154285] hover:from-[#19B5C4] hover:to-[#0A8895] text-white hover:text-[#0B2A5B] font-bold text-sm shadow-lg hover:shadow-[0_0_25px_rgba(25,181,196,0.4)] transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
