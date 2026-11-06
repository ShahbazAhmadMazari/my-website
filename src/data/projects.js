import autofillMockup from '../assets/images/autofill-excel-mockup.jpg';
import fiverrNotifierMockup from '../assets/images/fiverr-notifier-mockup.jpg';
import softzenApexMockup from '../assets/images/softzen-apex-mockup.jpg';
import jf17Mockup from '../assets/images/jf17-thunder-mockup.jpg';
import medicalAiMockup from '../assets/images/medical-ai-mockup.jpg';
import nextgenMockup from '../assets/images/nextgen-openhouse.jpg';
import fintechMockup from '../assets/images/fintech-automation-mockup.jpg';
import extensionToMobileMockup from '../assets/images/extension-to-mobile-mockup.jpg';
import autonomousMobileAiMockup from '../assets/images/autonomous-mobile-ai-mockup.jpg';

export const projectsData = [
  {
    id: "autonomous-mobile-ai-assistant",
    title: "OmniDroid AI: Autonomous Mobile Agent & Device Task Operator",
    category: "Autonomous Mobile AI",
    filterCategory: "mobile-ai-agent",
    badge: "🔥 2026 Tech Breakthrough • Autonomous Agent",
    isLatestTech: true,
    featured: true,
    image: autonomousMobileAiMockup,
    tagline: "Hands-free on-device AI agent that takes full control of your mobile apps to execute multi-step tasks automatically",
    overview: "Cutting-edge on-device autonomous AI agent for Android that executes complex user instructions by directly controlling mobile applications. Utilizing accessibility automation, real-time OCR screen perception, and on-device Multimodal LLMs, OmniDroid navigates app interfaces, taps buttons, types text, and orchestrates cross-app workflows with zero manual effort.",
    highlights: [
      "🤖 Deep OS & App Control: Android Accessibility Service & UI Automator integration allowing the AI to tap, type, swipe, and switch apps completely autonomously",
      "👁️ Multimodal Screen Perception: Real-time UI element hierarchy mapping & OCR detecting input fields, buttons, and dynamic modals without requiring root access",
      "⚡ Cross-App Workflow Execution: Execute chained multi-app commands (e.g., 'Copy order receipt from WhatsApp, open Banking app, verify transaction, and log into Google Sheets')",
      "🎙️ Voice Command & Floating Telemetry Dock: Hands-free voice triggers and a draggable HUD displaying live real-time action telemetry ('Tapping Search', 'Filling Field', 'Task Done in 1.2s')",
      "🔒 Biometric Guardrails & Privacy: Zero cloud leakage of sensitive data with mandatory biometric verification before financial transactions or critical app operations",
      "📱 100% Native Android Performance: Built in modern Kotlin with Coroutines, WorkManager background execution, and Google Gemini Multimodal routing"
    ],
    technologies: ["Android Kotlin", "Accessibility API", "UI Automator", "Google Gemini Multimodal API", "On-Device OCR", "WorkManager", "Room DB"],
    metrics: { stat: "0ms Manual", label: "Autonomous Hands-Free Execution" },
    architecture: "Closed-Loop Agent Architecture: Vision-Language Model converts UI hierarchies into semantic action trees; AccessibilityNodeInfo dispatchers execute touch and gesture inputs with instant post-action visual validation.",
    demoUrl: "#contact",
    actionLabel: "Request Agent Demo"
  },
  {
    id: "extension-to-mobile-converter",
    title: "Chrome Extension to Native Mobile App Transformation",
    category: "Extension → Mobile Porting",
    filterCategory: "extension-to-mobile",
    badge: "⚡ 2026 Tech Innovation • Turnkey Mobile Porting",
    isLatestTech: true,
    featured: true,
    image: extensionToMobileMockup,
    tagline: "Porting desktop browser extensions into high-performance native Android & iOS mobile applications",
    overview: "Specialized turnkey engineering workflow that converts existing Chrome extensions (Manifest V2/V3) into standalone, production-ready native mobile applications. Features complete logic porting, persistent local database sync, touch-first responsive mobile UI, background services, and native push notifications.",
    highlights: [
      "Headless logic & background worker migration into native Android WorkManager and Foreground Services",
      "Local storage bridge translating chrome.storage API calls seamlessly into Room / SQLite database tables",
      "Desktop popup and sidepanel redesign into a modern, fluid native mobile layout with gesture navigation",
      "Native push notification system with custom sound alerts, volume gain amplifier, and lock-screen triggers",
      "WebView and Native JavascriptInterface bridge for extensions that interact with live web sessions",
      "Ready-to-publish Google Play Store release build (.AAB) with full signing configurations and asset package"
    ],
    technologies: ["Kotlin", "Android Studio", "Chrome Extension MV3", "Native WebBridge", "WorkManager", "Room DB", "Push Notifications"],
    metrics: { stat: "100%", label: "Feature Parity Achieved" },
    architecture: "Hybrid Native-Bridge Architecture: Extension core business logic translated into Kotlin coroutines or decoupled headless JS engines with bi-directional Android Native JavascriptInterface, local Room database caching, and WorkManager background alarms.",
    demoUrl: "#contact",
    actionLabel: "Inquire for Conversion"
  },
  {
    id: "auto-fill-excel",
    title: "Auto Fill From Excel – Web Form Filler",
    category: "Browser Extension",
    filterCategory: "extensions",
    badge: "Chrome Web Store Published • Manifest V3",
    featured: true,
    image: autofillMockup,
    tagline: "Automate web forms from Excel with smart column mapping, photo upload & auto-submit",
    overview: "Production Google Chrome extension built by Shahbaz Ahmad Mazari that eliminates hours of manual data entry from Excel spreadsheets (.xlsx, .xls) directly into any web form, CRM, School DCIM, ERP, or web portal with pinpoint accuracy and zero server latency.",
    highlights: [
      "Direct local Excel parsing (.xlsx & .xls) reading columns, rows, headers, and cell values instantly with 100% private client-side security",
      "Visual click-to-select element mapping with interactive numbered badges placed directly on form inputs, dropdowns, and checkboxes",
      "Interactive floating toolbar with live data previews, row step controls (⏮ Prev / ⏭ Next), and pause/resume triggers",
      "Automated form submission with configurable countdown delay timers to prevent validation timeouts",
      "Smart date format auto-conversion (e.g. DD/MM/YYYY to DD-MM-YYYY) ensuring zero form rejection",
      "Image & photo upload automation matching local disk files to Excel columns (ideal for School DCIM & e-commerce catalogs)",
      "Automatic position memory and progress tracking across browser restarts",
      "Fully localized into 8 languages with complete RTL and LTR support (English, Arabic, Urdu, Hindi, Spanish, French, German, Chinese)"
    ],
    technologies: ["Chrome Extensions API (Manifest V3)", "JavaScript (ES6+)", "xlsx.js", "DOM Observers", "RTL Localization", "Chrome Storage"],
    metrics: { stat: "10x", label: "Data Entry Workflow Speedup" },
    architecture: "Manifest V3 architecture featuring local binary array buffer parsing for Excel, content script DOM injection for visual mapping badges, floating draggable control dock, and persistent session state in chrome.storage.",
    demoUrl: "https://chromewebstore.google.com/detail/hkgmbceffbfbgelmipallhbamdegbnik?utm_source=item-share-cb",
    actionLabel: "View on Chrome Web Store",
    isPublishedCWS: true
  },
  {
    id: "fiverr-inbox-notifier",
    title: "Fiverr Inbox Notifier – Loud Sound & Order Alert",
    category: "Browser Extension",
    filterCategory: "extensions",
    badge: "Chrome Web Store Published • Manifest V3",
    featured: true,
    image: fiverrNotifierMockup,
    tagline: "Plays a loud custom ringtone audio on new Fiverr messages, inbox updates & order notifications",
    overview: "Never miss a message, buyer inquiry, or order update on Fiverr again! Fiverr Inbox Notifier plays a loud, customizable audio ringtone in real-time whenever you receive a new Fiverr message, inbox update, order status notification, or custom offer response. Built for both buyers and sellers to boost response rates and maintain top seller metrics.",
    highlights: [
      "Instant Real-Time Alerts: Intercepts Fiverr WebSockets, API calls, and title badges for zero-delay notifications",
      "Volume Amplifier (Up to 300%): Boost volume using the Web Audio API gain node — perfect for noisy rooms or quiet laptops",
      "Smart Outgoing Suppression: Intelligent 5-second suppression window prevents the ringtone from triggering on your own sent messages",
      "Custom Ringtone Upload: Easily upload your own MP3, WAV, or MPEG sound files with instant audio test playback",
      "Adjustable Ring Duration: Choose audio playback length from 2 seconds up to 30 seconds or continuous looping",
      "Dark Fiverr-Themed Control Panel: Sleek glassmorphic popup UI with master toggle, test button, and stop controls",
      "100% Private & Secure: Runs locally in your browser with zero external data collection"
    ],
    technologies: ["Chrome Extensions API (Manifest V3)", "Web Audio API (Gain Node)", "WebSockets", "JavaScript (ES6+)", "Chrome Storage API"],
    metrics: { stat: "300%", label: "Audio Volume Amplifier" },
    architecture: "Manifest V3 background worker architecture that monitors WebSocket network frames and DOM title mutations, piping audio through Web Audio API GainNodes with local sound caching in Chrome Storage.",
    demoUrl: "https://chromewebstore.google.com/detail/ioohgofepmocbefekcfpphjononkobdj?utm_source=item-share-cb",
    actionLabel: "View on Chrome Web Store",
    isPublishedCWS: true
  },
  {
    id: "softzen-apex",
    title: "Softzen Apex",
    category: "Automation Suite",
    filterCategory: "automation",
    badge: "Enterprise SaaS Suite",
    featured: true,
    image: softzenApexMockup,
    tagline: "Enterprise workflow automation suite eliminating repetitive browser tasks",
    overview: "Flagship workflow automation suite built to eliminate manual, repetitive browser tasks and streamline operational efficiency for modern digital operators, agencies, and enterprise data teams.",
    highlights: [
      "Custom headless browser automation engine tailored for continuous batch operations",
      "Dynamic DOM listener that intercepts mutations and orchestrates state transitions without latency",
      "Unified operational telemetry dashboard displaying task queues, rate limits, and audit logs",
      "Encrypted credential storage with scoped local token delegation"
    ],
    technologies: ["TypeScript", "Chrome Extension API", "Node.js", "DOM Observers", "Tailwind CSS"],
    metrics: { stat: "95%", label: "Manual Workload Reduced" },
    architecture: "Event-driven background service worker architecture with decoupled injected content scripts, bidirectional message ports, and encrypted Chrome storage sync.",
    demoUrl: "#contact",
    actionLabel: "Request Demo / Access"
  },
  {
    id: "jf-17-thunder-game",
    title: "JF-17 Thunder Mobile Game",
    category: "Mobile App",
    filterCategory: "mobile",
    badge: "Native Android Action",
    featured: true,
    image: jf17Mockup,
    tagline: "High-octane aerial combat arcade game built with native Android & Kotlin",
    overview: "Native Android action arcade game built in Kotlin featuring custom physics handling, interactive controls, smooth 60 FPS rendering, and responsive air combat mechanics.",
    highlights: [
      "Custom 2D game loop with delta-time physics calculations for projectile and jet velocities",
      "Low-latency dual-touch flight control mapping for responsive maneuvering and weapon targeting",
      "High-performance sprite management with hardware-accelerated canvas rendering",
      "Local high-score persistence and sound effects engine with optimized memory footprint"
    ],
    technologies: ["Kotlin", "Android Studio", "Canvas 2D Engine", "Object-Oriented Physics", "Android Audio SDK"],
    metrics: { stat: "60 FPS", label: "Consistent Native Frame Rate" },
    architecture: "Modular Android Architecture with custom GameView thread, state machine for enemy AI flight paths, and resource pool management to prevent garbage collection stutters.",
    demoUrl: "#contact",
    actionLabel: "View Source & APK"
  },
  {
    id: "whatsapp-medical-ai",
    title: "WhatsApp-Style Medical AI Assistant",
    category: "AI Web App",
    filterCategory: "web-ai",
    badge: "GenAI & RAG Architecture",
    featured: true,
    image: medicalAiMockup,
    tagline: "Conversational healthcare assistant inside an intuitive WhatsApp-inspired UI",
    overview: "Conversational healthcare application built on Next.js utilizing Google Gemini API and Retrieval-Augmented Generation (RAG) architecture inside a familiar, accessible WhatsApp chat interface.",
    highlights: [
      "Real-time streaming chat interface mirroring WhatsApp's message bubble states, timestamps, and audio cues",
      "RAG integration with medical knowledge vectors to ensure grounded, citation-backed answers",
      "Emergency symptom triage classification prompting users toward real healthcare providers",
      "Secure client session memory and conversational history with zero server-side PII retention"
    ],
    technologies: ["Next.js", "React", "Google Gemini API", "Vector Embeddings", "RAG Pipeline", "Tailwind CSS"],
    metrics: { stat: "< 800ms", label: "Streaming Response Latency" },
    architecture: "Next.js App Router API endpoints acting as a proxy to Google Gemini API with similarity cosine vector lookup and prompt grounding filters.",
    demoUrl: "#contact",
    actionLabel: "Explore Case Study"
  },
  {
    id: "nextgen-tutoring-blockchain",
    title: "NextGen LMS: AI Powered Tutoring & Blockchain Credentials",
    category: "AI & Web3 / EdTech",
    filterCategory: "web-ai",
    badge: "KFUEIT Open House 2026 Showcase",
    featured: true,
    image: nextgenMockup,
    tagline: "Revolutionizing EdTech with RAG-driven 24/7 AI tutoring & Polygon blockchain credentialing",
    overview: "Final Year Project successfully showcased at the 2nd Industrial Open House & Career Fair at Khwaja Fareed University of Engineering & Information Technology (KFUEIT). Developed jointly by Shahbaz Ahmad Mazari & Fawad Ahmad under the supervision of Dr. Madiha Rehman. NextGen LMS bridges the gap between static digital content and active, personalized mentorship.",
    highlights: [
      "🤖 Context-Aware AI Tutoring: 24/7 AI Tutor integrating Retrieval-Augmented Generation (RAG) to deliver accurate, personalized mentorship grounded in specific course materials",
      "⛓️ Blockchain Certification on Polygon: Immutable certificate hashing on the Polygon (MATIC) network ensuring tamper-proof, globally verifiable academic credentials",
      "📊 Advanced Analytics Engine: Data-driven insights and learning progression metrics for both instructors and learners",
      "💳 Automated Financials: Seamless smart ecosystem for knowledge monetization and course enrollment",
      "🏛️ Showcased at 2nd Industrial Open House & Career Fair 2026 to industry leaders, CEOs, and alumni",
      "👥 Co-Developed with Fawad Ahmad under the supervision of Dr. Madiha Rehman at KFUEIT"
    ],
    technologies: ["MERN Stack", "Python", "RAG Pipeline", "Vector Search", "Polygon Blockchain", "Solidity", "Tailwind CSS", "MongoDB"],
    metrics: { stat: "Polygon", label: "On-Chain Verified Credentials" },
    architecture: "Hybrid Web2/Web3 microservices: React + Tailwind frontend connecting to Node/Express REST API and MongoDB for LMS state, integrated with Python vector embeddings for RAG AI tutoring, and Polygon smart contracts for on-chain credential hashing.",
    demoUrl: "https://nextgen-lms-navy.vercel.app/",
    actionLabel: "View Live Site"
  },
  {
    id: "jopay-lpay-auto",
    title: "Jopay Auto & Lpay Auto",
    category: "Custom Automation Utilities",
    filterCategory: "automation",
    badge: "FinTech Automation",
    featured: false,
    image: fintechMockup,
    tagline: "Specialized browser utilities eliminating repetitive financial transaction entries",
    overview: "Specialized automation scripts and browser utilities developed to eliminate repetitive data entry, reconcile invoices, and automate manual transaction tracking across financial portals.",
    highlights: [
      "Automated extraction of transaction references and cross-reconciliation against merchant ledger",
      "Intelligent field autofill with clipboard payload detection and sanity checksum checking",
      "One-click batch processing reducing manual reconciliation time from hours to seconds",
      "Defensive failure fallback allowing human review on anomalous transactions"
    ],
    technologies: ["JavaScript (ES6+)", "Browser Automation", "DOM Observers", "RegEx Parsing", "Chrome Storage"],
    metrics: { stat: "10x", label: "Reconciliation Speed Increase" },
    architecture: "Lightweight injected content scripts with heuristic DOM selectors, clipboard API integration, and audit logging to local indexedDB/Chrome storage.",
    demoUrl: "#contact",
    actionLabel: "Learn More"
  }
];
