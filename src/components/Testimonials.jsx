import React from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle, 
  ShieldCheck, 
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import { profileData } from '../data/profile';

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 relative bg-brand-dark/80 bg-radial-glow overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Proven Client Results & Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted by Founders, Agencies & <span className="text-gradient-cyan">Academic Leaders</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Real feedback from high-stakes engineering projects, published Chrome extensions, and production-grade architectures.
          </p>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Row: Stars + Project Tag */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-cyan/15 text-brand-cyan-light border border-brand-cyan/30">
                    {item.projectTitle}
                  </span>
                </div>

                {/* Key Outcome Banner */}
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.highlight}</span>
                </div>

                {/* Feedback Body */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.feedback}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.clientName}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" title="Verified Collaboration" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role} • <span className="text-slate-500">{item.location}</span>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-white/10 group-hover:text-brand-cyan/20 transition-colors shrink-0" />
              </div>

            </div>
          ))}
        </div>

        {/* Verification Guarantee & Google Review Policy Card */}
        <div className="max-w-3xl mx-auto glass-panel rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Authentic Chrome Web Store & Client Transparency</div>
              <div className="text-xs text-slate-400">All extensions comply with Google Web Store rating and review guidelines.</div>
            </div>
          </div>

          <a
            href={profileData.socials.googleReviewsPolicy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all shrink-0"
          >
            <span>Google Policy</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
