import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Puzzle, 
  Blocks, 
  Sparkles, 
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
                  isEmerald ? 'glow-card-emerald' : ''
                } ${idx === 3 || idx === 4 ? 'lg:col-span-1 md:col-span-1' : ''}`}
              >
                {/* Top card gradient accent line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                  isEmerald ? 'from-transparent via-brand-emerald to-transparent' : 'from-transparent via-brand-cyan to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                <div>
                  {/* Top Bar: Icon + High Demand / Turnaround Badges */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isEmerald 
                        ? 'bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald' 
                        : 'bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {service.isPopular && (
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

                  {/* Bulleted Deliverables */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isEmerald ? 'text-brand-emerald' : 'text-brand-cyan'
                          }`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom: Core Technologies & Action Buttons */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-dark font-bold text-xs sm:text-sm transition-all hover:opacity-95 flex items-center justify-center gap-1.5 shadow-glow-cyan"
                    >
                      <span>Request Quote</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    <a
                      href={`https://wa.me/923306320436?text=${encodeURIComponent(`Hi Shahbaz, I am interested in your ${service.title} service. Can we discuss scope and pricing?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
