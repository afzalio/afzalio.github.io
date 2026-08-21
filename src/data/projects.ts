export interface Project {
  id: string;
  title: string;
  category: "Enterprise" | "Web Application" | "Mobile Application" | "Developer Tools";
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "tea-samrat",
    title: "Tea Samrat — Enterprise Tea Buyer Application",
    category: "Enterprise",
    shortDescription:
      "Enterprise management application modernizing 6 core business modules (purchasing, inventory, blending, accounting, sales, reporting) handling 100K+ records.",
    fullDescription:
      "Modernized legacy CodeIgniter 3 architecture for enterprise tea buying operations. Refactored 15+ complex MySQL stored procedures reducing latency by 40%, built server-side DataTables AJAX pagination for 100K+ records, and configured Apache Linux production deployments with 99.9% uptime.",
    technologies: ["CodeIgniter 3", "PHP", "MySQL", "DataTables", "AJAX", "Apache Linux", "PDF/Excel Reports"],
    highlights: [
      "Modernized 6 core modules: accounting, purchasing, inventory, blending, sales & reporting",
      "Refactored 15+ complex MySQL stored procedures, reducing query latency by 40%",
      "Server-side DataTables pagination with AJAX/JSON for 100K+ records",
      "Architected Role-Based Access Control (RBAC) and 99.9% uptime production deployment"
    ],
    githubUrl: "https://github.com/afzalio",
    isFeatured: true
  },
  {
    id: "mukti-yoga",
    title: "Mukti — Multi-Tenant Yoga Package System",
    category: "Enterprise",
    shortDescription:
      "Multi-tenant full-stack platform for 10+ tenant organizations with real-time WebSocket broadcasting and 75+ RESTful APIs.",
    fullDescription:
      "Designed and built a multi-tenant SaaS platform using Laravel, OOP, and React for 10+ tenant organizations. Engineered real-time event broadcasting with WebSockets & Laravel Reverb, integrated 75+ secure RESTful APIs, JWT authentication, and payment gateways.",
    technologies: ["Laravel", "React", "Laravel Reverb", "WebSockets", "Material UI", "JWT", "MySQL"],
    highlights: [
      "Multi-tenant schema isolation for 10+ tenant organizations",
      "Real-time event broadcasting with Laravel Reverb & WebSockets",
      "Created 75+ secure RESTful APIs with JWT authentication & payment gateway",
      "Automated email & SMS notification pipelines"
    ],
    githubUrl: "https://github.com/afzalio",
    isFeatured: true
  },
  {
    id: "sound-seeder",
    title: "Sound Seeder — Synchronized Audio Streaming",
    category: "Mobile Application",
    shortDescription:
      "React Native Android app enabling low-latency synchronized audio playback across 5+ local devices via TCP/UDP socket protocols.",
    fullDescription:
      "Engineered a React Native Android application for sub-second synchronized audio streaming across multiple nearby devices. Implemented low-latency TCP/UDP socket communication protocols and automatic local network peer discovery algorithms without external cloud latency.",
    technologies: ["TypeScript", "React Native", "TCP", "UDP", "WebSockets", "Git"],
    highlights: [
      "Synchronized audio playback across 5+ local devices with sub-second latency",
      "Low-latency TCP/UDP socket protocols & peer discovery algorithms",
      "Modular TypeScript state management with Object-Oriented (OOP) patterns",
      "Local P2P mesh network communication"
    ],
    githubUrl: "https://github.com/afzalio/sound-seeder",
    isFeatured: true
  },
  {
    id: "cwms-biometric",
    title: "CWMS — Client Workman Management System",
    category: "Enterprise",
    shortDescription:
      "Automated workforce attendance system integrating Laravel REST APIs with Hikvision IoT biometric hardware for 500+ active personnel.",
    fullDescription:
      "Integrated Laravel REST APIs with Hikvision IoT biometric hardware to automate attendance tracking for 500+ active workforce personnel. Accelerated SQL data extraction pipelines for dynamic compliance reporting, cutting admin processing time by 50%.",
    technologies: ["Laravel", "Hikvision IoT", "REST APIs", "MySQL", "SQL Optimization", "Excel/PDF Export"],
    highlights: [
      "Automated biometric attendance tracking for 500+ active personnel via Hikvision IoT",
      "Accelerated SQL data extraction pipelines, reducing weekly processing by 50%",
      "Dynamic PDF/Excel compliance reporting & dashboard analytics",
      "Secure REST API endpoints for hardware communication"
    ],
    githubUrl: "https://github.com/afzalio",
    isFeatured: true
  },
  {
    id: "decimen-optical",
    title: "Decimen Optical Transfer Utility",
    category: "Developer Tools",
    shortDescription:
      "Open-source TypeScript utility for high-speed optical signal processing, stream parsing, and binary data decoding.",
    fullDescription:
      "Formulated a high-performance open-source TypeScript library designed for real-time optical signal processing, binary data stream parsing, and error-handling pipelines, achieving 100% data parsing accuracy during high-frequency transfers.",
    technologies: ["TypeScript", "Git", "HTML5", "CSS3", "Binary Decoding"],
    highlights: [
      "High-speed optical signal stream parsing & binary decoding",
      "Real-time stream decoding mechanisms maintaining 100% accuracy",
      "Structured error-handling pipelines for high-frequency transfers",
      "Open-source TypeScript architecture & versioning"
    ],
    githubUrl: "https://github.com/afzalio/decimen-optical-transfer",
    isFeatured: true
  },
  {
    id: "tech-philosophy-studio",
    title: "Tech Philosophy Studio Website",
    category: "Web Application",
    shortDescription:
      "Pixel-perfect, performance-optimized Next.js web platform with interactive SVG vector animations and CI/CD pipelines.",
    fullDescription:
      "Converted Figma designs into a high-performance Next.js company web platform. Engineered SVG vector animations, reusable UI components, asset loading optimization, and automated contact form email workflows with active CI/CD deployment.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SVG Animation", "CI/CD"],
    highlights: [
      "Pixel-perfect conversion of Figma designs to Next.js components",
      "Scalable SVG vector animations & reusable UI component library",
      "Automated email notification workflows & CI/CD deployment",
      "Optimized asset loading & rendering for max Lighthouse score"
    ],
    githubUrl: "https://github.com/afzalio",
    liveUrl: "https://www.techphistudio.com/",
    isFeatured: true
  },
  {
    id: "guitar-tuner",
    title: "Web-Based Pitch Guitar Tuner",
    category: "Web Application",
    shortDescription:
      "Browser-based guitar tuning application utilizing Web Audio API and real-time autocorrelation pitch detection algorithms.",
    fullDescription:
      "Built a real-time guitar tuner application capturing microphone audio input, analyzing frequency spectra via Web Audio API, and providing visual tuning feedback for standard and alternate guitar tunings.",
    technologies: ["React", "JavaScript", "Web Audio API", "HTML5", "CSS3"],
    highlights: [
      "Real-time pitch detection via Web Audio API autocorrelation",
      "Visual needle gauge & frequency feedback",
      "Zero-dependency lightweight frontend implementation"
    ],
    githubUrl: "https://github.com/afzalio/guitar-tuner",
    liveUrl: "https://afzalio.github.io/guitar-tuner",
    isFeatured: false
  }
];
