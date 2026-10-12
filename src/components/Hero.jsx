import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquareCode, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Boxes, 
  Zap, 
  Terminal, 
  Copy,
  Check,
  Star,
  ShieldCheck,
  Clock,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero = ({ onOpenInquiry }) => {
  const [activeCodeTab, setActiveCodeTab] = useState('extension');
  const [copied, setCopied] = useState(false);

  const rawCodeSnippets = {
    extension: `// Manifest V3 Background Service Worker
chrome.runtime.onInstalled.addListener(() => {
  console.log('Softzen Automation Engine Initialized');
});

chrome.action.onClicked.addListener(async (tab) => {
  const [injection] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: automateBidSubmission,
    args: [{ maxBids: 15, aiProposal: true }]
  });
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon128.png',
    title: 'Automation Dispatched',
    message: 'Processed dynamic proposals in 240ms'
  });
});`,
    web: `// Next.js App Router Server Endpoint
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  const { prompt, contextVectors } = await req.json();
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

  const stream = await model.generateContentStream([
    { text: \`Grounding Context: \${contextVectors}\` },
    { text: prompt }
  ]);

  return new Response(stream.toReadableStream(), {
    headers: { 'Content-Type': 'text/event-stream' }
  });
}`,
    mobile: `// Native Android Canvas Physics Loop
class FlightCombatLoop(private val view: SurfaceView) : Runnable {
    @Volatile private var isRunning = true
    
    override fun run() {
        while (isRunning) {
            val canvas = view.holder.lockCanvas() ?: continue
            try {
                synchronized(view.holder) {
                    jetPhysics.update(deltaTime = 0.016f)
                    weaponSystem.detectCollisions()
                    renderer.drawFrame(canvas)
                }
            } finally {
                view.holder.unlockCanvasAndPost(canvas)
            }
        }
    }
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(rawCodeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techBadges = [
    { name: 'React 18', category: 'Frontend' },
    { name: 'Next.js 14', category: 'Full-Stack' },
    { name: 'Android Kotlin', category: 'Mobile' },
    { name: 'Chrome Manifest V3', category: 'Extension' },
    { name: 'Google Gemini 1.5', category: 'Applied AI' },
    { name: 'Polygon Blockchain', category: 'Web3' },
    { name: 'Tailwind CSS', category: 'Design System' },
    { name: 'TypeScript', category: 'Type Safety' },
    { name: 'Node.js & Express', category: 'Backend' },
    { name: 'n8n & Automations', category: 'Workflows' },
    { name: 'Python & FastApi', category: 'Automation' }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Ambient background lighting glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-brand-emerald/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Developer Portrait & Quick Status Beacon */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative group">
              {/* Pulsing glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan via-brand-emerald to-brand-cyan rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Avatar Frame */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-brand-dark ring-2 ring-white/10">
                <img 
                  src={profileData.avatar} 
                  alt={profileData.name} 
                  className="w-full h-full object-cover rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Live Activity Beacon */}
                <span className="absolute bottom-1 right-1 flex h-5 w-5" title="Available for new client projects">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-brand-dark items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>
                </span>
              </div>
            </div>

            {/* Quick credentials subtitle */}
            <div className="mt-3 flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="text-white font-bold">{profileData.name}</span>
              <span>•</span>
              <span className="text-brand-cyan-light font-medium">{profileData.role}</span>
            </div>
          </div>

          {/* Specialization Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-cyan/30 text-xs sm:text-sm font-semibold text-brand-cyan-light mb-6 shadow-glow-cyan animate-float">
            <Sparkles className="w-4 h-4 text-brand-cyan animate-spin" style={{ animationDuration: '6s' }} />
            <span>Full-Stack Development • Web • Mobile • Extensions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Building High-Impact{' '}
            <span className="text-gradient-cyan">Web Platforms</span>,{' '}
            <span className="text-gradient-emerald">Native Mobile Apps</span> &{' '}
            <span className="text-gradient-brand">Custom Extensions</span>.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-3xl mx-auto">
            {profileData.heroSummary}
          </p>

          {/* Trust Highlights Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300 mb-10">
            <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>5.0 Client Rating</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full">
              <Clock className="w-4 h-4 text-brand-cyan" />
              <span>Rapid 3–7 Day Sprints</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-brand-emerald" />
              <span>100% NDA Protected</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full">
              <Boxes className="w-4 h-4 text-brand-cyan-light" />
              <span>Chrome Store Verified</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-dark font-bold text-base hover:opacity-95 transition-all shadow-glow-cyan hover:shadow-glow-mixed hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Services & Work</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-panel border border-white/15 text-white font-semibold text-base hover:bg-white/[0.08] hover:border-brand-cyan/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquareCode className="w-5 h-5 text-brand-cyan-light" />
              <span>Get Free Consultation</span>
            </button>

            <a
              href={profileData.socials.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              title="Chat directly with Shahbaz on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Tech Stack Ribbon / Pill Carousel */}
          <div className="mb-14 overflow-x-auto py-2">
            <div className="flex items-center justify-center flex-wrap gap-2 max-w-4xl mx-auto">
              {techBadges.map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                  <span>{badge.name}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Interactive Architecture & Live Code Preview Deck */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden">
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-black/50 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                  shahbaz-engine ~ {activeCodeTab === 'extension' ? 'service_worker.js' : activeCodeTab === 'web' ? 'route.ts' : 'GameEngine.kt'}
                </span>
              </div>

              {/* Interactive Tabs + Copy Code Button */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5 text-xs font-mono">
                  <button
                    onClick={() => setActiveCodeTab('extension')}
                    className={`px-3 py-1 rounded transition-all ${
                      activeCodeTab === 'extension'
                        ? 'bg-brand-cyan/20 text-brand-cyan-light font-semibold border border-brand-cyan/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Chrome MV3
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('web')}
                    className={`px-3 py-1 rounded transition-all ${
                      activeCodeTab === 'web'
                        ? 'bg-brand-emerald/20 text-brand-emerald-light font-semibold border border-brand-emerald/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Next.js + AI RAG
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('mobile')}
                    className={`px-3 py-1 rounded transition-all ${
                      activeCodeTab === 'mobile'
                        ? 'bg-blue-500/20 text-blue-400 font-semibold border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Kotlin Native
                  </button>
                </div>

                {/* 1-Click Copy Code Button */}
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-all"
                  title="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Terminal Code View with Rich Syntax Highlighting */}
            <div className="p-4 sm:p-6 bg-brand-darker/95 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed">
              <div className="text-xs text-brand-cyan mb-3 font-sans font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                {activeCodeTab === 'extension' && 'Chrome Extension Automation Core (Manifest V3 Background Service Worker)'}
                {activeCodeTab === 'web' && 'Next.js 14 Streaming RAG Route with Google Gemini 1.5 Pro'}
                {activeCodeTab === 'mobile' && 'JF-17 Thunder 60FPS Native Surface Canvas Physics Engine in Kotlin'}
              </div>

              {activeCodeTab === 'extension' && (
                <pre className="text-slate-200 whitespace-pre font-mono">
                  <code>
                    <span className="token-comment">// Manifest V3 Background Service Worker</span>{'\n'}
                    <span className="token-keyword">chrome</span>.<span className="token-variable">runtime</span>.<span className="token-variable">onInstalled</span>.<span className="token-function">addListener</span>(() =&gt; &#123;{'\n'}
                    {'  '}<span className="token-variable">console</span>.<span className="token-function">log</span>(<span className="token-string">'Softzen Automation Engine Initialized'</span>);{'\n'}
                    &#125;);{'\n\n'}
                    <span className="token-keyword">chrome</span>.<span className="token-variable">action</span>.<span className="token-variable">onClicked</span>.<span className="token-function">addListener</span>(<span className="token-keyword">async</span> (tab) =&gt; &#123;{'\n'}
                    {'  '}<span className="token-keyword">const</span> [injection] = <span className="token-keyword">await</span> <span className="token-keyword">chrome</span>.<span className="token-variable">scripting</span>.<span className="token-function">executeScript</span>(&#123;{'\n'}
                    {'    '}<span className="token-variable">target</span>: &#123; <span className="token-variable">tabId</span>: tab.id &#125;,{'\n'}
                    {'    '}<span className="token-variable">func</span>: automateBidSubmission,{'\n'}
                    {'    '}<span className="token-variable">args</span>: [&#123; <span className="token-variable">maxBids</span>: <span className="token-number">15</span>, <span className="token-variable">aiProposal</span>: <span className="token-keyword">true</span> &#125;]{'\n'}
                    {'  '}&#125;);{'\n'}
                    {'  '}<span className="token-keyword">chrome</span>.<span className="token-variable">notifications</span>.<span className="token-function">create</span>(&#123;{'\n'}
                    {'    '}<span className="token-variable">type</span>: <span className="token-string">'basic'</span>,{'\n'}
                    {'    '}<span className="token-variable">iconUrl</span>: <span className="token-string">'icon128.png'</span>,{'\n'}
                    {'    '}<span className="token-variable">title</span>: <span className="token-string">'Automation Dispatched'</span>,{'\n'}
                    {'    '}<span className="token-variable">message</span>: <span className="token-string">'Processed dynamic proposals in 240ms'</span>{'\n'}
                    {'  '}&#125;);{'\n'}
                    &#125;);
                  </code>
                </pre>
              )}

              {activeCodeTab === 'web' && (
                <pre className="text-slate-200 whitespace-pre font-mono">
                  <code>
                    <span className="token-comment">// Next.js App Router Server Endpoint</span>{'\n'}
                    <span className="token-keyword">import</span> &#123; GoogleGenerativeAI &#125; <span className="token-keyword">from</span> <span className="token-string">'@google/generative-ai'</span>;{'\n\n'}
                    <span className="token-keyword">export async function</span> <span className="token-function">POST</span>(req: <span className="token-variable">Request</span>) &#123;{'\n'}
                    {'  '}<span className="token-keyword">const</span> &#123; prompt, contextVectors &#125; = <span className="token-keyword">await</span> req.<span className="token-function">json</span>();{'\n'}
                    {'  '}<span className="token-keyword">const</span> genAI = <span className="token-keyword">new</span> <span className="token-function">GoogleGenerativeAI</span>(process.env.<span className="token-variable">GEMINI_API_KEY</span>!);{'\n'}
                    {'  '}<span className="token-keyword">const</span> model = genAI.<span className="token-function">getGenerativeModel</span>(&#123; <span className="token-variable">model</span>: <span className="token-string">'gemini-1.5-pro'</span> &#125;);{'\n\n'}
                    {'  '}<span className="token-keyword">const</span> stream = <span className="token-keyword">await</span> model.<span className="token-function">generateContentStream</span>([{'\n'}
                    {'    '}&#123; <span className="token-variable">text</span>: <span className="token-string">`Grounding Context: $&#123;contextVectors&#125;`</span> &#125;,{'\n'}
                    {'    '}&#123; <span className="token-variable">text</span>: prompt &#125;{'\n'}
                    {'  '}]);{'\n\n'}
                    {'  '}<span className="token-keyword">return new</span> <span className="token-function">Response</span>(stream.<span className="token-function">toReadableStream</span>(), &#123;{'\n'}
                    {'    '}<span className="token-variable">headers</span>: &#123; <span className="token-string">'Content-Type'</span>: <span className="token-string">'text/event-stream'</span> &#125;{'\n'}
                    {'  '}&#125;);{'\n'}
                    &#125;
                  </code>
                </pre>
              )}

              {activeCodeTab === 'mobile' && (
                <pre className="text-slate-200 whitespace-pre font-mono">
                  <code>
                    <span className="token-comment">// Native Android Canvas Physics Loop in Kotlin</span>{'\n'}
                    <span className="token-keyword">class</span> <span className="token-function">FlightCombatLoop</span>(<span className="token-keyword">private val</span> view: SurfaceView) : Runnable &#123;{'\n'}
                    {'    '}<span className="token-keyword">@Volatile private var</span> isRunning = <span className="token-keyword">true</span>{'\n\n'}
                    {'    '}<span className="token-keyword">override fun</span> <span className="token-function">run</span>() &#123;{'\n'}
                    {'        '}<span className="token-keyword">while</span> (isRunning) &#123;{'\n'}
                    {'            '}<span className="token-keyword">val</span> canvas = view.holder.<span className="token-function">lockCanvas</span>() ?: <span className="token-keyword">continue</span>{'\n'}
                    {'            '}<span className="token-keyword">try</span> &#123;{'\n'}
                    {'                '}<span className="token-keyword">synchronized</span>(view.holder) &#123;{'\n'}
                    {'                    '}jetPhysics.<span className="token-function">update</span>(deltaTime = <span className="token-number">0.016f</span>){'\n'}
                    {'                    '}weaponSystem.<span className="token-function">detectCollisions</span>(){'\n'}
                    {'                    '}renderer.<span className="token-function">drawFrame</span>(canvas){'\n'}
                    {'                '}&#125;{'\n'}
                    {'            '}&#125; <span className="token-keyword">finally</span> &#123;{'\n'}
                    {'                '}view.holder.<span className="token-function">unlockCanvasAndPost</span>(canvas){'\n'}
                    {'            '}&#125;{'\n'}
                    {'        '}&#125;{'\n'}
                    {'    '}&#125;{'\n'}
                    &#125;
                  </code>
                </pre>
              )}
            </div>
            
            {/* Terminal Footer Strip */}
            <div className="px-4 py-2 bg-black/50 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
                <span>Production Architecture Ready</span>
              </div>
              <span className="text-slate-500">Softzen Engineering Core</span>
            </div>
          </div>
        </div>

        {/* Social Proof / Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {profileData.trustStats.map((stat, sIdx) => (
            <div key={sIdx} className="glass-card p-4 rounded-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-slate-400">{stat.label}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan-light font-bold">
                  Verified
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
