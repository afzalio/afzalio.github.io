import React from "react";
import { profileData } from "../data/profile";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-900 bg-neutral-950 text-neutral-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand Metadata */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-sm text-white tracking-tight">
              {profileData.name}
            </span>
            <span className="text-neutral-400">
              {profileData.title} · {profileData.location}
            </span>
          </div>

          {/* Center Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-teal-400 transition-colors"
            >
              Email
            </a>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Right Copyright & Tech Stack Badge */}
          <div className="flex flex-col items-center md:items-end gap-1 text-neutral-400">
            <span>© {currentYear} {profileData.name}. All rights reserved.</span>
            <span className="text-[11px] text-neutral-400 flex items-center gap-1">
              Built with React + TypeScript
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};
