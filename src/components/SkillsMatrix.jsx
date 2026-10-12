import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Server, 
  Workflow, 
  Bot, 
  Wrench,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/skills';

export const SkillsMatrix = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Smartphone: Smartphone,
    Server: Server,
    Workflow: Workflow,
    Bot: Bot,
  };

  const filterTabs = [
    { id: 'all', label: 'All Domains' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'extensions', label: 'Chrome Extensions' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'ai', label: 'AI & Tools' },
  ];

  const filteredCategories = selectedFilter === 'all'
    ? skillsData
    : skillsData.filter(c => c.id === selectedFilter || (selectedFilter === 'frontend' && c.id === 'languages'));

  return (
    <section id="skills" className="py-24 relative bg-brand-surface/60 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan-light text-xs font-semibold mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Comprehensive <span className="text-gradient-cyan">Skills Matrix</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Multi-disciplinary expertise covering modern frontend ecosystems, native mobile operating systems, browser extensions, distributed backends, and applied AI.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-dark font-bold shadow-glow-cyan'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const IconComp = iconMap[category.icon] || Code2;
            const isEmerald = category.color === 'emerald';

            return (
              <div 
                key={idx}
                className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group ${
                  isEmerald ? 'glow-card-emerald' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isEmerald 
                        ? 'bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald' 
                        : 'bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan-light transition-colors">
                        {category.category}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {category.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills with Animated Proficiency Meters */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/15 transition-all"
                      >
                        <div className="flex items-center justify-between gap-3 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              isEmerald ? 'bg-brand-emerald' : 'bg-brand-cyan'
                            }`}></span>
                            <span className="text-xs sm:text-sm font-semibold text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono font-bold text-slate-300">
                              {skill.pct}%
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/40 text-slate-400 border border-white/5">
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        {/* Visual Proficiency Meter Bar */}
                        <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              isEmerald 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
                                : 'bg-gradient-to-r from-cyan-500 to-blue-400'
                            }`}
                            style={{ width: `${skill.pct}%` }}
                          ></div>
                        </div>

                        <div className="text-[10px] text-slate-400 font-mono mt-1 text-right">
                          {skill.tag}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Sparkles className="w-3 h-3" /> Production Verified
                  </span>
                  <span>Softzen Core</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
