import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ArrowRight 
} from 'lucide-react';
import { faqData } from '../data/faq';
import { profileData } from '../data/profile';

export const FAQ = ({ onOpenInquiry }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-brand-dark bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan-light text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Got Questions? <span className="text-gradient-cyan">I've Got Answers</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working together, project sprint timelines, Google Web Store approvals, and intellectual property protection.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-14">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-cyan/40 bg-white/[0.04] shadow-glow-cyan' 
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-brand-cyan-light">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyan-light transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/10 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-cyan/20 border-brand-cyan/40 text-brand-cyan' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.05] animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast-Action Card */}
        <div className="glass-card rounded-2xl p-8 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-cyan/20 to-brand-emerald/20 border border-brand-cyan/30 text-brand-cyan mb-4">
            <Sparkles className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Have a project or unique requirement not listed here?
          </h3>
          <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6">
            Let's discuss your system architecture, API specifications, or custom automation goals directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={profileData.socials.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm transition-all shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-[#25D366]" />
              <span>Ask Directly on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenInquiry('Custom Engineering Inquiry', 'Custom Project Scope')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-panel border border-white/15 text-white font-semibold text-sm hover:bg-white/[0.08] transition-all"
            >
              <span>Submit Inquiry Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
