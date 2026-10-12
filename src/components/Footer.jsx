import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart, Sparkles, ArrowUp, PhoneCall } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darker border-t border-white/[0.08] pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-emerald p-[1.5px] shadow-glow-cyan">
                <div className="w-full h-full bg-brand-dark rounded-[9px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan-light to-brand-emerald-light text-sm">
                  SZ
                </div>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                {profileData.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Engineer & Specialist in Web Platforms, Native Mobile Applications, Chrome Extensions (MV3), and Applied AI Workflows.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Founder & Lead Developer @ {profileData.brand}</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-brand-cyan transition-colors">Specialized Services</a>
              </li>
              <li>
                <a href="#work" className="hover:text-brand-cyan transition-colors">Portfolio & Case Studies</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-cyan transition-colors">Skills Matrix</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-cyan transition-colors">About & KFUEIT Journey</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-cyan transition-colors">Hire Me / Get a Quote</a>
              </li>
            </ul>
          </div>

          {/* Connect & Profiles (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Channels
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-all flex items-center gap-2 text-xs"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-all flex items-center gap-2 text-xs"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.socials.chromeStore}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-all flex items-center gap-2 text-xs"
              >
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>Chrome Store</span>
              </a>

              <a
                href={profileData.socials.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-all flex items-center gap-2 text-xs"
              >
                <span className="w-4 h-4 rounded-full bg-[#1dbf73] text-white flex items-center justify-center font-bold text-[10px]">
                  fi
                </span>
                <span>Fiverr</span>
              </a>

              <a
                href={profileData.socials.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#25D366]/20 border border-white/[0.08] hover:border-[#25D366]/40 hover:text-white transition-all flex items-center gap-2 text-xs"
              >
                <PhoneCall className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${profileData.socials.email}`}
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-all flex items-center gap-2 text-xs"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-1 text-xs font-mono text-slate-400">
              <div>Location: {profileData.location} • {profileData.serviceScope}</div>
              <div>
                <a
                  href={profileData.socials.googleReviewsPolicy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>Google Chrome Web Store Review Policy</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {profileData.name} ({profileData.brand}). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-brand-cyan transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
