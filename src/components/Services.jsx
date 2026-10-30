import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Puzzle, 
  Blocks, 
  Sparkles, 
  ArrowRightLeft,
  Bot,
  CheckCircle2, 
  ArrowUpRight,
  Cpu,
  Clock,
  Flame,
  MessageCircle
} from 'lucide-react';
import { servicesData } from '../data/services';
import { profileData } from '../data/profile';

export const Services = ({ onSelectService }) => {
  const iconMap = {
    Globe: Globe,
    Smartphone: Smartphone,
    Puzzle: Puzzle,
    Blocks: Blocks,
    Sparkles: Sparkles,
    ArrowRightLeft: ArrowRightLeft,
    Bot: Bot,
  };

  return (
    <section id="services" className="py-24 relative bg-brand-dark/60 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan-light text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Specialized Engineering Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            What I Can <span className="text-gradient-cyan">Build For You</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From zero to production-ready deployments. Every solution is engineered for performance, clean architecture, and rapid business ROI.
          </p>
        </div>

        {/* Multi-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const isEmerald = service.color === 'emerald';

            return (
              <div
                key={service.id}
                className={`glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${
                  service.isLatestTech ? 'border-brand-cyan/40 shadow-glow-cyan' : isEmerald ? 'glow-card-emerald' : ''
                }`}
              >
                {/* Top card gradient accent line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                  service.isLatestTech
                    ? 'from-transparent via-amber-400 to-transparent'
                    : isEmerald 
                      ? 'from-transparent via-brand-emerald to-transparent' 
                      : 'from-transparent via-brand-cyan to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                <div>
                  {/* Top Bar: Icon + High Demand / Turnaround Badges */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      service.isLatestTech
                        ? 'bg-amber-400/10 border border-amber-400/30 text-amber-300'
                        : isEmerald 
                          ? 'bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald' 
                          : 'bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {service.isLatestTech && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-300 border border-amber-400/40 shadow-sm animate-pulse">
                          <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span>2026 Tech</span>
                        </span>
                      )}
                      {service.isPopular && !service.isLatestTech && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          <Flame className="w-3 h-3 text-amber-400" />
                          <span>High Demand</span>
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-300">
                        <Clock className="w-3 h-3 text-brand-cyan" />
                        <span>{service.turnaround}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Overview */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan-light transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono text-brand-cyan-light mb-3">
                    {service.badge}
                  </div>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.overview}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Core Deliverables
                    </div>
                    {service.deliverables.slice(0, 4).map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Tech Tags & Direct Inquiry */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-slate-400">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-brand-cyan/15 hover:border-brand-cyan/40 border border-white/10 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Quote for {service.shortTitle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-brand-cyan" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};