import React from "react";
import { Mail, FileText, MapPin, Send, ExternalLink } from "lucide-react";
import { profileData } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-neutral-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#01484A]/25 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-semibold text-[#01484A] dark:text-teal-400 tracking-widest uppercase mb-2 block">
                07 / CONTACT
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's build something <span className="text-teal-300">useful.</span>
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Have an idea, project, backend requirement, enterprise solution, or engineering opportunity? I'm always open to discussing new challenges.
              </p>

              {/* Email Callout Box */}
              <div className="p-4 sm:p-6 rounded-2xl bg-neutral-950/80 border border-[#01484A]/40 max-w-lg">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">Direct Mail:</div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-lg sm:text-2xl font-bold font-mono text-teal-300 hover:text-white transition-colors flex items-center gap-2 break-all"
                >
                  <Mail size={22} className="text-[#01484A] shrink-0" />
                  <span>{profileData.email}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-2">
                <MapPin size={14} className="text-teal-400" />
                <span>Based in {profileData.location} · Open to remote & local collaborations</span>
              </div>
            </div>

            {/* Right Quick Contact Links */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="w-full inline-flex items-center justify-between p-4 rounded-xl font-medium text-sm text-white bg-[#01484A] hover:bg-[#026164] transition-all shadow-lg shadow-[#01484A]/30 group"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>Email Me Directly</span>
                </div>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-4 rounded-xl font-medium text-sm text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all hover:text-white group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon size={18} className="text-teal-400" />
                  <span>Connect on LinkedIn</span>
                </div>
                <ExternalLink size={16} className="text-neutral-500 group-hover:text-white" />
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-4 rounded-xl font-medium text-sm text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all hover:text-white group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon size={18} className="text-teal-400" />
                  <span>Explore GitHub Profile</span>
                </div>
                <ExternalLink size={16} className="text-neutral-500 group-hover:text-white" />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-4 rounded-xl font-medium text-sm text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all hover:text-white group"
              >
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-teal-400" />
                  <span>View Official Resume</span>
                </div>
                <ExternalLink size={16} className="text-neutral-500 group-hover:text-white" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
