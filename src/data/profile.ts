export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  avatarUrl: string;
  title: string;
  location: string;
  tagline: string;
  heroSubheading: string;
  aboutIntro: string[];
  currentStatus: string;
  heroTechList: string[];
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  keyFocusAreas: string[];
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
  };
  spokenLanguages: string[];
  hobbies: string[];
}

export const profileData: ProfileData = {
  name: "Sk Afjal Ali",
  shortName: "Afjal Ali",
  monogram: "SA",
  avatarUrl: "/profile.jpg",
  title: "Full Stack Developer",
  location: "Kolkata, India",
  tagline: "Architecting scalable enterprise applications & high-performance APIs.",
  heroSubheading:
    "Full Stack & Backend Developer with 2+ years of experience architecting scalable enterprise applications using Laravel, CodeIgniter 3, React, Next.js, Node.js, and MySQL. Specialized in REST APIs, database optimization, WebSockets, multi-tenant architecture, and IoT integrations.",
  aboutIntro: [
    "I am a passionate Full Stack & Backend Developer with 2+ years of hands-on experience designing, architecting, and modernizing enterprise software, multi-tenant platforms, and responsive client web applications.",
    "Specialized in building high-performance RESTful APIs, optimizing complex database queries (reducing latency by up to 40%), and implementing real-time WebSocket communication and role-based access control (RBAC).",
    "My technical expertise ranges from modernizing legacy CodeIgniter system architectures and building multi-tenant SaaS platforms (75+ APIs, Laravel Reverb) to integrating Hikvision IoT biometric hardware for automated workforce tracking.",
    "I focus on writing clean, maintainable code following established architectural patterns, ensuring 99.9% application uptime and seamless user experiences."
  ],
  currentStatus: "Backend Developer @ Softhought",
  heroTechList: ["Laravel", "CodeIgniter 3", "React", "Next.js", "MySQL", "Node.js"],
  email: "skafjalali2001@gmail.com",
  phone: "+91 8420078430",
  github: "https://github.com/afzalio",
  linkedin: "https://www.linkedin.com/in/sk-afjal-ali-763336285/",
  resumeUrl:
    "https://raw.githubusercontent.com/afzalio/resume/refs/heads/master/sk_afjal_ali_resume.pdf",
  keyFocusAreas: [
    "RESTful API & Microservices Engineering",
    "Database Optimization & Stored Procedures",
    "Multi-Tenant SaaS Architecture",
    "Real-Time WebSockets & Broadcasting",
    "Legacy CodeIgniter 3 Modernization",
    "IoT Hardware Integration (Hikvision)"
  ],
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "The Calcutta Anglo Gujarati College",
    location: "Kolkata, West Bengal",
    period: "08/2019 – 06/2022"
  },
  spokenLanguages: ["English", "Hindi", "Bengali", "Urdu"],
  hobbies: ["Cricket", "Music Listening", "Playing Guitar"]
};
