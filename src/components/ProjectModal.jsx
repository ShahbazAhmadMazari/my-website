import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

export const ProjectModal = ({ project, onClose, onOpenInquiry }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-brand-surface border border-white/15 shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Showcase Image if Available */}
        {project.image && (
          <div className="mb-6 rounded-xl overflow-hidden border border-white/10 relative aspect-video">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute bottom-3 left-3 text-xs font-mono text-emerald-300 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/40 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>
                {project.id === 'nextgen-tutoring-blockchain' 
                  ? 'KFUEIT 2nd Industrial Open House & Career Fair 2026 Showcase' 
                  : project.isPublishedCWS 
                    ? 'Official Google Chrome Web Store Published Extension' 
                    : `${project.title} • Production System Architecture`}
              </span>
            </div>
          </div>
        )}

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4 pr-12">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/15 text-brand-cyan-light border border-brand-cyan/30">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.05] text-slate-300 border border-white/10">
            {project.badge}
          </span>
          {project.metrics && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
              {project.metrics.stat}: {project.metrics.label}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-base text-brand-cyan-light font-medium mb-6">
          {project.tagline}
        </p>

        {/* Overview */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Project Overview
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Architectural Breakdown */}
        {project.architecture && (
          <div className="mb-6 p-4 rounded-xl bg-black/40 border border-brand-cyan/20">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-cyan mb-2">
              <Cpu className="w-4 h-4" />
              Technical Architecture & Strategy
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Key Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Key Technical Deliverables & Achievements
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Google CWS Verification Trust Note for Extensions */}
        {project.category === "Browser Extension" && (
          <div className="mb-6 p-3.5 rounded-xl bg-white/[0.03] border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Google Chrome Web Store Verified & Policy Compliant</span>
            </div>
            <a
              href="https://support.google.com/chrome_webstore/answer/12225786?p=cws_reviews_results&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cyan hover:text-brand-cyan-light underline font-mono flex items-center gap-1"
            >
              <span>Official Google CWS Review Policy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* Modal Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          {project.demoUrl.startsWith('http') ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-dark font-bold text-sm hover:opacity-95 shadow-glow-cyan"
            >
              <span>{project.actionLabel}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(project.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-dark font-bold text-sm hover:opacity-95 shadow-glow-cyan"
            >
              <span>Inquire About Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-sm text-slate-300 font-medium transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
