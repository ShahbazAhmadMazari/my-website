import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  X, 
  Boxes, 
  Award, 
  Eye, 
  MessageCircle,
  Maximize2
} from 'lucide-react';
import { projectsData } from '../data/projects';

export const Portfolio = ({ onOpenProject, onOpenInquiry }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Work', count: projectsData.length },
    { id: 'extensions', label: 'Chrome Extensions', count: projectsData.filter(p => p.filterCategory === 'extensions').length },
    { id: 'web-ai', label: 'Web & AI Apps', count: projectsData.filter(p => p.filterCategory === 'web-ai').length },
    { id: 'mobile', label: 'Mobile Apps', count: projectsData.filter(p => p.filterCategory === 'mobile').length },
    { id: 'automation', label: 'Enterprise Automation', count: projectsData.filter(p => p.filterCategory === 'automation').length },
  ];

  // Domain path mapping for browser frame header
  const projectDomainMap = {
    'auto-fill-excel': 'chrome-extension://autofill.softzen',
    'fiverr-inbox-notifier': 'chrome-extension://fiverr.notifier',
    'softzen-apex': 'apex.softzen.dev/analytics',
    'jf-17-thunder-game': 'android.native://jf17.combat',
    'whatsapp-medical-ai': 'healthai.softzen.dev/gemini-rag',
    'nextgen-tutoring-blockchain': 'nextgen.kfueit.edu.pk/polygon',
    'jopay-lpay-auto': 'fintech.softzen.dev/reconcile',
  };

  // Combined Category Filter and Real-Time Search
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeFilter === 'all' || project.filterCategory === activeFilter;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.tagline.toLowerCase().includes(q) ||
      project.overview.toLowerCase().includes(q) ||
      project.technologies.some(t => t.toLowerCase().includes(q)) ||
      (project.metrics && project.metrics.stat.toLowerCase().includes(q))
    );
  });

  return (
    <section id="work" className="py-24 relative bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald-light text-xs font-semibold mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Production Portfolio & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered Systems & <span className="text-gradient-emerald">Live Products</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Explore live Chrome Web Store extensions, native mobile engines, enterprise automation suites, and applied AI architectures.
          </p>
        </div>

        {/* Real-time Search Input */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by keyword (e.g. Excel, Fiverr, Kotlin, Polygon, Gemini, MV3)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-dark font-bold shadow-glow-cyan'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                activeFilter === tab.id ? 'bg-black/20 text-brand-dark font-mono font-bold' : 'bg-white/10 text-slate-400 font-mono'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Results Counter */}
        {searchQuery && (
          <div className="text-center text-xs text-slate-400 mb-8 font-mono">
            Showing <span className="text-brand-cyan font-bold">{filteredProjects.length}</span> matching projects for "{searchQuery}"
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl max-w-md mx-auto p-8">
            <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <div className="text-white font-bold text-base mb-1">No matching projects found</div>
            <p className="text-xs text-slate-400 mb-4">Try adjusting your keyword or reset filters.</p>
            <button
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-brand-cyan/20 text-brand-cyan-light text-xs font-bold hover:bg-brand-cyan/30 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => {
              const isCws = project.isPublishedCWS;
              const isOpenHouse = project.id === 'nextgen-tutoring-blockchain';
              const domainPath = projectDomainMap[project.id] || 'softzen.dev';

              return (
                <div
                  key={project.id}
                  className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-brand-cyan/40"
                >
                  {/* Top: Browser Mockup Frame Container */}
                  <div>
                    {project.image && (
                      <div className="mb-5 product-frame group/frame">
                        {/* Browser Window Header Chrome */}
                        <div className="px-3 py-2 bg-slate-950/90 border-b border-white/10 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80"></span>
                          </div>
                          
                          {/* Mini URL pill */}
                          <div className="px-2.5 py-0.5 rounded-md bg-black/60 border border-white/5 text-[10px] font-mono text-slate-400 truncate max-w-[170px] sm:max-w-[200px]">
                            {domainPath}
                          </div>

                          <button 
                            onClick={() => onOpenProject(project)}
                            className="text-slate-500 hover:text-brand-cyan transition-colors"
                            title="Expand product view"
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                        </div>

                        {/* High-Resolution Product Mockup Image */}
                        <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => onOpenProject(project)}>
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/frame:scale-105" 
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/frame:opacity-30 transition-opacity"></div>
                          
                          {/* Verified Badges Overlay */}
                          {isOpenHouse && (
                            <span className="absolute bottom-2 left-2 text-[10px] font-mono px-2.5 py-1 rounded bg-black/85 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                              <Award className="w-3.5 h-3.5 text-amber-400" />
                              <span>KFUEIT Open House 2026</span>
                            </span>
                          )}

                          {isCws && (
                            <span className="absolute bottom-2 left-2 text-[10px] font-mono px-2.5 py-1 rounded bg-black/85 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                              <Boxes className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Chrome Web Store Published</span>
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Category Tag & Metric */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/15 text-brand-cyan-light border border-brand-cyan/30">
                        {project.category}
                      </span>

                      {project.metrics && (
                        <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/30 shrink-0">
                          {project.metrics.stat}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-brand-cyan-light transition-colors">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-slate-400 font-medium mb-3 italic">
                      "{project.tagline}"
                    </p>

                    {/* Project Overview */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                      {project.overview}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="mb-5 space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Technical Highlights
                      </div>
                      {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section: Technologies & Action Buttons */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-slate-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onOpenProject(project)}
                        className="py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>Deep Dive</span>
                      </button>

                      {project.demoUrl.startsWith('http') ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-dark hover:opacity-95 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-glow-cyan"
                        >
                          <span>{project.isPublishedCWS ? 'Live Store' : 'Live Demo'}</span>
                          <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                        </a>
                      ) : (
                        <a
                          href={`https://wa.me/923306320436?text=${encodeURIComponent(`Hi Shahbaz, I saw your case study for "${project.title}" on your portfolio and would like to build a similar solution.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                          <span>Inquire</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
