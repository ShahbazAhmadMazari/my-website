import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Clock, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  ShieldCheck,
  PhoneCall,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';

export const ContactSection = ({ prefilledService, prefilledSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Application Development',
    budget: '$1,500 - $3,000 (Standard Product)',
    timeline: 'Within 2-4 Weeks',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedInquiry, setCopiedInquiry] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledSubject) {
      setFormData(prev => ({ 
        ...prev, 
        message: `Hi Shahbaz,\n\nI am interested in discussing a project regarding: ${prefilledSubject}.\n\nLet's connect!` 
      }));
    }
  }, [prefilledSubject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // Ignore if confetti blocked
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.socials.whatsapp);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyInquiry = () => {
    const summary = `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(summary);
    setCopiedInquiry(true);
    setTimeout(() => setCopiedInquiry(false), 2500);
  };

  const whatsappSubmitLink = `https://wa.me/923306320436?text=${encodeURIComponent(
    `Hello Shahbaz,\n\n*Name:* ${formData.name || 'Client'}\n*Email:* ${formData.email || 'N/A'}\n*Service Needed:* ${formData.service}\n*Budget:* ${formData.budget}\n*Timeline:* ${formData.timeline}\n\n*Project Message:*\n${formData.message}`
  )}`;

  const mailtoLink = `mailto:${profileData.socials.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.service} - ${formData.name || 'New Client'}`
  )}&body=${encodeURIComponent(
    `Hello Shahbaz,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget Scope: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="py-24 relative bg-brand-surface/80 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald-light text-xs font-semibold mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>Direct Client Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build <span className="text-gradient-emerald">Something Great</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Have a project in mind, need a Chrome extension built, or looking for a full-stack engineer? Send over your scope or request a quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Connect & Socials Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Response Assurance */}
            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-brand-emerald">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">24-Hour Response Guarantee</h4>
                  <p className="text-xs text-emerald-300 font-mono">
                    Direct developer communication
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                "Responses typically within 24 hours. Clear milestones, transparent code, and post-launch support."
              </p>
            </div>

            {/* Email Card with Copy Button */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <Mail className="w-4 h-4 text-brand-cyan" />
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-cyan hover:text-brand-cyan-light bg-brand-cyan/10 px-2.5 py-1 rounded-md transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <a 
                href={`mailto:${profileData.socials.email}`} 
                className="text-white font-bold text-base sm:text-lg hover:text-brand-cyan transition-colors break-all"
              >
                {profileData.socials.email}
              </a>
            </div>

            {/* WhatsApp Direct Chat Card */}
            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-[#25D366]">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <PhoneCall className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Direct Chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#25D366] hover:text-[#34d399] bg-[#25D366]/10 px-2.5 py-1 rounded-md transition-colors"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <a
                    href={profileData.socials.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-dark bg-[#25D366] hover:bg-[#20bd5a] px-3 py-1 rounded-md transition-all shadow-sm"
                  >
                    <span>Chat Now</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <a 
                href={profileData.socials.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold text-base sm:text-lg hover:text-[#25D366] transition-colors flex items-center gap-2"
              >
                <span>{profileData.socials.whatsapp}</span>
                <span className="text-xs font-normal text-slate-400 font-mono">(Instant Response)</span>
              </a>
            </div>

            {/* Profiles & Channels */}
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Verified Channels & Developer Profiles
              </div>

              {/* GitHub */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <div>
                    <div className="text-sm font-semibold text-white">GitHub</div>
                    <div className="text-xs text-slate-400 font-mono">@shahbazahmadmazari • Open Source</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[#0a66c2] group-hover:text-[#38bdf8]" />
                  <div>
                    <div className="text-sm font-semibold text-white">LinkedIn</div>
                    <div className="text-xs text-slate-400 font-mono">Shahbaz Ahmad Mazari</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Chrome Web Store 1: Auto Fill From Excel */}
              <a
                href={profileData.socials.chromeStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-brand-cyan shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">Auto Fill From Excel</div>
                    <div className="text-xs text-slate-400 font-mono">Chrome Web Store • 10x Form Filler</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Chrome Web Store 2: Fiverr Inbox Notifier */}
              <a
                href={profileData.socials.chromeStore2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-brand-emerald shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">Fiverr Inbox Notifier</div>
                    <div className="text-xs text-slate-400 font-mono">Chrome Web Store • Loud Audio & Alerts</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Fiverr Profile */}
              <a
                href={profileData.socials.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#1dbf73] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                    fi
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">Fiverr Seller Profile</div>
                    <div className="text-xs text-slate-400 font-mono">@shahbazmazari1 • Custom Contracts</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Google Chrome Web Store Review Policy Reference */}
              <div className="pt-1">
                <a
                  href={profileData.socials.googleReviewsPolicy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-500/20 transition-all text-xs group"
                >
                  <div className="flex items-center gap-2 text-emerald-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Google CWS Verified Reviews & Ratings Standards</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400/70 group-hover:text-emerald-300 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-9 relative">
              
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-emerald">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Prepared Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your project details for <span className="text-brand-cyan-light font-semibold">{formData.service}</span> have been compiled.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={whatsappSubmitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-brand-dark font-bold text-sm shadow-md transition-all"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </a>

                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-dark font-bold text-sm shadow-glow-cyan hover:opacity-95 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>

                    <button
                      onClick={handleCopyInquiry}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-sm transition-colors"
                    >
                      {copiedInquiry ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                      <span>{copiedInquiry ? 'Copied Details!' : 'Copy Summary'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline pt-4"
                  >
                    Edit form or submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <h3 className="text-xl font-bold text-white">
                      Request a Project Quote
                    </h3>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Accepting New Work
                    </span>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-white text-sm placeholder-slate-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="contact-email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-white text-sm placeholder-slate-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Needed Dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                        id="contact-service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-white/[0.1] focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-white text-sm outline-none transition-all"
                    >
                      <option value="Full-Stack Web Application Development">Full-Stack Web Application Development</option>
                      <option value="Mobile Application Development">Mobile Application Development (Android/Kotlin)</option>
                      <option value="Mobile App Extensions & Plugins">Mobile App Extensions & Plugins</option>
                      <option value="Browser Extensions & Web Automation (Manifest V3)">Browser Extensions & Web Automation (Manifest V3)</option>
                      <option value="AI Integration & Workflow Automation">AI Integration & Workflow Automation (Gemini / RAG)</option>
                      <option value="Custom Software Consultation">Custom Architecture / Consultation</option>
                      <option value="Other">Other Project Scope</option>
                    </select>
                  </div>

                  {/* Budget & Timeline Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Project Budget Range
                      </label>
                      <select
                        name="budget"
                        id="contact-budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-white/[0.1] focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-white text-sm outline-none transition-all"
                      >
                        <option value="$500 - $1,500 (MVP / Script / Extension)">$500 - $1,500 (MVP / Extension / Automation)</option>
                        <option value="$1,500 - $3,000 (Standard Product)">$1,500 - $3,000 (Standard Product)</option>
                        <option value="$3,000 - $7,000+ (Full-Scale Web/Mobile Platform)">$3,000 - $7,000+ (Full-Scale Platform)</option>
                        <option value="Flexible / Hourly Engagement">Flexible / Monthly Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-timeline" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        name="timeline"
                        id="contact-timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-white/[0.1] focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-white text-sm outline-none transition-all"
                      >
                        <option value="Urgent (1 - 2 Weeks)">Urgent (1 - 2 Weeks)</option>
                        <option value="Within 2-4 Weeks">Within 2 - 4 Weeks</option>
                        <option value="1 - 2 Months">1 - 2 Months</option>
                        <option value="Flexible / Long Term">Flexible / Long Term</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Scope */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Details & Scope *
                    </label>
                    <textarea
                      name="message"
                        id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirements, key features, target audience, or current technical challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-white text-sm placeholder-slate-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-dark font-bold text-sm sm:text-base hover:opacity-95 transition-all shadow-glow-cyan hover:shadow-glow-mixed hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Submit Project Inquiry</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your privacy is protected. Direct confidential communication.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
