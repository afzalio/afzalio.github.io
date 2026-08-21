export interface ExperienceProject {
  name: string;
  category: string;
  highlights: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  description: string;
  projects: ExperienceProject[];
  technologies: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    id: "softhought-backend",
    company: "Softhought",
    role: "Backend Developer",
    period: "08/2024 — Present",
    location: "Kolkata, West Bengal, India",
    isCurrent: true,
    description:
      "Engineered, optimized, and modernized core enterprise systems, multi-tenant web platforms, real-time IoT integrations, and corporate client websites across full software development lifecycles.",
    projects: [
      {
        name: "Tea Samrat (Tea Buyer Application)",
        category: "Legacy Modernization & Database Optimization",
        highlights: [
          "Modernized legacy CodeIgniter 3 architecture across 6 core business modules (accounting, purchasing, inventory, blending, sales, reporting).",
          "Refactored 15+ complex MySQL stored procedures and indexes, replacing cursor execution with set-based queries to reduce latency by 40%.",
          "Engineered server-side DataTables pagination with AJAX/JSON for 100K+ records, accelerating PDF/Excel compliance report generation.",
          "Configured production server builds on Apache Linux environments, achieving 99.9% application uptime with zero-downtime releases."
        ]
      },
      {
        name: "Mukti (Yoga Package Management Application)",
        category: "Multi-Tenant SaaS Platform",
        highlights: [
          "Designed a multi-tenant full-stack platform using Laravel, OOP, and React for 10+ tenant organizations with isolated client schemas.",
          "Orchestrated real-time event broadcasting using WebSockets and Laravel Reverb with Material UI, eliminating manual page reloads.",
          "Created 75+ secure RESTful APIs, JWT authentication protocols, payment gateway integrations, and automated email/SMS notifications."
        ]
      },
      {
        name: "CWMS (Client Workman Management System)",
        category: "IoT Hardware Integration & Attendance Automation",
        highlights: [
          "Automated workforce attendance tracking for 500+ active personnel by integrating Laravel REST APIs with Hikvision IoT biometric hardware.",
          "Accelerated SQL data extraction pipelines for dynamic Excel/PDF compliance reports, reducing weekly admin processing time by 50%."
        ]
      },
      {
        name: "Tech Philosophy Studio Website",
        category: "Frontend Engineering & Next.js Optimization",
        highlights: [
          "Converted Figma designs into pixel-perfect, fully responsive Next.js components across desktop, tablet, and mobile devices.",
          "Engineered scalable SVG vector animations and reusable UI components to enhance visual engagement.",
          "Configured automated contact form workflows and email notification pipelines (Live: techphistudio.com)."
        ]
      }
    ],
    technologies: [
      "Laravel",
      "CodeIgniter 3",
      "React",
      "Next.js",
      "MySQL",
      "Laravel Reverb",
      "WebSockets",
      "JWT",
      "Hikvision IoT",
      "Apache Linux"
    ]
  }
];
