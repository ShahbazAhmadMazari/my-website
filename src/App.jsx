import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { profileData } from './data/profile';
import { MessageCircle, Zap } from 'lucide-react';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledSubject, setPrefilledSubject] = useState('');

  const handleOpenInquiry = (serviceTitle = '', subject = '') => {
    if (serviceTitle) setPrefilledService(serviceTitle);
    if (subject) setPrefilledSubject(subject);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle) => {
    setPrefilledService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col selection:bg-brand-cyan selection:text-brand-dark">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Fixed Navbar with live availability indicator */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        <Hero onOpenInquiry={() => handleOpenInquiry()} />
        <Services onSelectService={handleSelectService} />
        <Portfolio 
          onOpenProject={(project) => setSelectedProject(project)}
          onOpenInquiry={(subject) => handleOpenInquiry('', subject)}
        />
        <SkillsMatrix />
        <Testimonials />
        <About />
        <FAQ onOpenInquiry={handleOpenInquiry} />
        <ContactSection 
          prefilledService={prefilledService} 
          prefilledSubject={prefilledSubject} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenInquiry={(subject) => handleOpenInquiry('', subject)}
        />
      )}

      {/* Floating WhatsApp Quick-Chat Action */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-1.5 pointer-events-none">
        <div className="pointer-events-auto hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shadow-2xl backdrop-blur-md animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="inline-flex items-center gap-1"><Zap className="w-3 h-3" /> Fast Reply: &lt; 15 mins</span>
        </div>
        <a
          href={profileData.socials.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-white/20"
          title="Chat directly with Shahbaz on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-slate-950 text-[#25D366]" />
          <span className="font-bold">Chat on WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}

export default App;
