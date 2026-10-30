export const servicesData = [
  {
    id: "autonomous-mobile-agent",
    title: "Autonomous Mobile App & Device AI Assistants",
    shortTitle: "Autonomous Mobile AI",
    icon: "Bot",
    color: "emerald",
    badge: "🔥 2026 Tech Breakthrough • Autonomous Agent",
    isLatestTech: true,
    turnaround: "1–2 Weeks",
    isPopular: true,
    overview: "Engineering next-generation on-device autonomous AI assistants for Android that control mobile apps, navigate screens, and execute repetitive multi-step tasks hands-free.",
    deliverables: [
      "OS-level Accessibility Service & UI Automator integration for zero-touch app control",
      "Multimodal Vision-Language Model (Gemini) screen element parsing & semantic action dispatch",
      "Cross-app automation pipelines (e.g. messaging, ride booking, order placement, form filling)",
      "Floating action bubble widget with live task execution telemetry and stop controls",
      "Voice command activation with offline speech-to-intent local processing",
      "Biometric guardrails & human confirmation checkpoints for sensitive financial/data actions"
    ],
    technologies: ["Android Kotlin", "Accessibility API", "UI Automator", "Google Gemini Multimodal", "On-Device OCR", "Coroutines"],
    stats: "Hands-Free OS Control • 2026 Next-Gen AI"
  },
  {
    id: "extension-to-mobile",
    title: "Convert Chrome Extension to Mobile App",
    shortTitle: "Extension → Mobile App",
    icon: "ArrowRightLeft",
    color: "cyan",
    badge: "⚡ 2026 Tech Innovation • Turnkey Porting",
    isLatestTech: true,
    turnaround: "5–10 Days Sprint",
    isPopular: true,
    overview: "Seamlessly port, rebuild, and transform your existing Google Chrome extension (Manifest V2/V3) into a standalone native Android or cross-platform mobile app.",
    deliverables: [
      "Full background service worker & script porting to native background workers",
      "chrome.storage migration to native SQLite / Room database persistence",
      "Popup and side panel UI redesign into fluid, touch-optimized mobile screens",
      "Native push notifications, sound alerts, lock-screen notifications & vibrations",
      "Native device hardware integration (battery optimization whitelist, alarms, widgets)",
      "Secure API token handling and biometric login integration (Fingerprint / Face ID)",
      "Google Play Store ready release build (.AAB & APK) with signing instructions"
    ],
    technologies: ["Android Kotlin", "Chrome MV3 Migration", "Room DB", "WorkManager", "WebViews & Bridges", "Push Notifications"],
    stats: "100% Feature Parity • Play Store Ready"
  },
  {
    id: "browser-extensions",
    title: "Browser Extensions & Web Automation (Manifest V3)",
    shortTitle: "Chrome Extensions",
    icon: "Blocks",
    color: "emerald",
    badge: "Chrome Web Store Published",
    turnaround: "3–7 Days Sprint",
    isPopular: true,
    overview: "Production-ready Google Chrome extensions and custom automation tools to streamline workflows, scrape data, and automate browser tasks.",
    deliverables: [
      "Manifest V3 compliant background service workers",
      "High-speed DOM manipulation & shadow DOM scripting",
      "Custom popup dashboards, side panels & injected overlays",
      "End-to-end Chrome Web Store deployment & compliance",
      "Automated web scrapers & dynamic form autofillers",
      "License key authentication & client subscription management"
    ],
    technologies: ["Chrome Extensions API (V3)", "JavaScript/TypeScript", "DOM Manipulation", "Service Workers", "Storage API"],
    stats: "100% Manifest V3 • Zero Latency Overhead"
  },
  {
    id: "web-dev",
    title: "Full-Stack Web Application Development",
    shortTitle: "Web Applications",
    icon: "Globe",
    color: "cyan",
    badge: "Scalable SaaS & Platforms",
    turnaround: "2–3 Weeks",
    isPopular: true,
    overview: "Custom, responsive, and SEO-optimized web applications engineered for scalability, speed, and high conversion.",
    deliverables: [
      "SaaS dashboards & administrative command centers",
      "High-conversion business & marketing websites",
      "Modern e-commerce storefronts & checkout systems",
      "RESTful APIs & microservices architectures",
      "Robust database design, indexing & ORM setup",
      "Secure user authentication (JWT, OAuth, RBAC)",
      "Seamless third-party API & webhook integrations"
    ],
    technologies: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs"],
    stats: "Lighthouse 95+ • Sub-second TTFB"
  },
  {
    id: "ai-automation",
    title: "AI Integration & Workflow Automation",
    shortTitle: "AI & Workflow Automations",
    icon: "Sparkles",
    color: "cyan",
    badge: "Applied GenAI & n8n",
    turnaround: "5–10 Days",
    isPopular: true,
    overview: "Supercharging business operations with custom AI agents, Retrieval-Augmented Generation (RAG), and zero-friction automation workflows.",
    deliverables: [
      "Conversational LLM chat interfaces (Google Gemini API, Groq)",
      "Context-aware Retrieval-Augmented Generation (RAG) pipelines",
      "n8n automated workflow bridges & webhooks",
      "Google Sheets & Google Apps Script lightweight backends",
      "Automated email, lead parsing & data entry pipelines",
      "Intelligent document summarization & categorization"
    ],
    technologies: ["Google Gemini API", "Groq", "RAG Pipelines", "n8n", "Google Apps Script", "Vector Embeddings"],
    stats: "Zero-friction Automation • 10x Speedup"
  },
  {
    id: "mobile-dev",
    title: "Mobile Application Development",
    shortTitle: "Native Mobile Apps",
    icon: "Smartphone",
    color: "emerald",
    badge: "Android & Cross-Platform",
    turnaround: "3–4 Weeks",
    isPopular: false,
    overview: "High-performance native and responsive mobile applications designed with smooth UI and robust architecture.",
    deliverables: [
      "Clean architecture (MVVM / MVI) for maintainable codebases",
      "Offline data storage & SQLite / Room synchronization",
      "Responsive, fluid touch layouts & custom animations",
      "Background worker tasks & battery-friendly processing",
      "Push notifications & real-time messaging pipelines",
      "Secure API syncing, token management & biometric auth"
    ],
    technologies: ["Android Studio", "Kotlin", "Mobile UI/UX Design", "REST APIs", "Room DB", "Coroutines"],
    stats: "60 FPS Fluidity • Native Device APIS"
  },
  {
    id: "mobile-plugins",
    title: "Mobile App Extensions & Plugins",
    shortTitle: "Mobile Plugins & SDKs",
    icon: "Puzzle",
    color: "cyan",
    badge: "Modular App Architecture",
    turnaround: "1–2 Weeks",
    isPopular: false,
    overview: "Custom modular extensions, integrations, and utility plugins to extend the capabilities of mobile apps and platforms.",
    deliverables: [
      "Modular feature add-ons & plug-and-play modules",
      "Third-party service bridges & platform adapters",
      "Custom hardware & sensor workflow triggers",
      "In-app utility extensions & custom telemetry SDKs",
      "SDK integration wrappers with clean developer ergonomics"
    ],
    technologies: ["Plugin Architecture", "Platform APIs", "Mobile SDK Integrations", "Native Bridges", "Modular Gradle"],
    stats: "Zero-bloat • Decoupled Codebases"
  }
];