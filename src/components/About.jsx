import React from 'react';
import { 
  User, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Compass,
  MapPin,
  Calendar
} from 'lucide-react';
import { profileData } from '../data/profile';
import { aboutData } from '../data/about';

export const About = () => {
  const principleIcons = {
    Cpu: Cpu,
    Zap: Zap,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="about" className="py-24 relative bg-brand-dark bg-radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan-light text-xs font-semibold mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Engineer & Founder Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Shahbaz & <span className="text-gradient-cyan">Softzen</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Engineering digital solutions that blend architectural discipline with pragmatic speed.
          </p>
        </div>

        {/* Narrative & Profile Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left: Bio Story */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-7 sm:p-9 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>Pragmatic Builder & Systems Thinker</span>
            </h3>

            {aboutData.narrative.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-cyan" />
                <span>{profileData.location} (Serving Global Clients)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-emerald" />
                <span>KFUEIT (Class of 2026)</span>
              </div>
            </div>
          </div>

          {/* Right: Softzen Studio & Values Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Softzen Identity Card */}
            <div className="glass-card rounded-2xl p-7 border-l-4 border-l-brand-cyan">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-brand-cyan/40 shrink-0">
                  <img 
                    src={profileData.avatar} 
                    alt={profileData.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{profileData.brand}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan-light border border-brand-cyan/30">Founder Led</span>
                  </h4>
                  <p className="text-xs text-brand-emerald-light font-mono">
                    {profileData.role}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {profileData.valueProposition}
              </p>
            </div>

            {/* Core Engineering Principles */}
            <div className="space-y-3">
              {aboutData.principles.map((principle, prIdx) => {
                const IconComponent = principleIcons[principle.icon] || Sparkles;
                return (
                  <div 
                    key={prIdx}
                    className="p-4 rounded-xl glass-panel border border-white/[0.06] flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1">
                        {principle.title}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Milestones & Leadership Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-brand-emerald" />
              <span>Milestones, Leadership & Education</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Key moments shaping technical discipline, community leadership, and product vision.
            </p>
          </div>

          <div className="relative border-l border-white/15 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-8">
            {aboutData.milestones.map((m, mIdx) => (
              <div key={mIdx} className="relative group">
                {/* Year Pill on Left for desktop */}
                <div className="hidden sm:block absolute -left-36 top-1 w-28 text-right font-mono text-xs font-semibold text-brand-cyan-light">
                  {m.year}
                </div>

                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-cyan group-hover:bg-brand-cyan group-hover:scale-125 transition-all"></div>

                {/* Mobile Year Badge */}
                <div className="sm:hidden inline-block mb-1 px-2.5 py-0.5 rounded-full bg-white/[0.05] text-[11px] font-mono text-brand-cyan">
                  {m.year}
                </div>

                {/* Content Card */}
                <div className="glass-panel p-5 rounded-xl border border-white/[0.08] group-hover:border-brand-cyan/30 transition-colors">
                  <h4 className="text-base font-bold text-white mb-0.5 group-hover:text-brand-cyan-light transition-colors">
                    {m.title}
                  </h4>
                  <div className="text-xs font-medium text-brand-emerald-light mb-2">
                    {m.organization}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
