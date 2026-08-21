import React from "react";
import { ArrowRight, Download, ExternalLink, Mail, Terminal } from "lucide-react";
import { profileData } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid">
      {/* Ambient background glow accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#01484A]/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#01484A]/20 border border-[#01484A]/50 text-xs font-mono text-teal-300 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.currentStatus}</span>
            </div>

            {/* Subtitle / Role tag */}
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#01484A] dark:text-teal-400 uppercase mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-[2px] bg-[#01484A]"></span>
              {profileData.title}
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-teal-300">scalable software</span> that solves real-world problems.
            </h1>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-8">
              {profileData.heroSubheading}
            </p>

            {/* Quick Tech Badge Pill Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono text-neutral-400">
              <span className="text-neutral-500 font-medium">Core Stack:</span>
              {profileData.heroTechList.map((tech, idx) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-neutral-900/80 border border-neutral-800 text-neutral-200 font-mono text-[11px]"
                >
                  {tech}
                  {idx < profileData.heroTechList.length - 1 && <span className="ml-2 text-neutral-600">·</span>}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-[#01484A] hover:bg-[#026164] transition-all shadow-lg shadow-[#01484A]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="sk_afjal_ali_resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all hover:text-white"
              >
                <Download size={16} className="text-teal-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-xs font-mono text-teal-400 hover:text-white hover:bg-[#01484A]/20 transition-all border border-teal-500/20"
              >
                <span>View PDF</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Secondary Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/80 w-full">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Connect:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Hero Visual — Minimal Developer Terminal Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-neutral-950/90 border border-neutral-800/90 shadow-2xl shadow-black/80 overflow-hidden group hover:border-[#01484A]/70 transition-all duration-300">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-neutral-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                  <Terminal size={13} className="text-teal-400" />
                  <span>developer.ts</span>
                </div>
                <div className="text-[10px] font-mono text-neutral-500">UTF-8</div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                <div className="text-neutral-500 mb-2">// Sk Afjal Ali Profile Definition</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-teal-300">developer</span> = &#123;
                </div>
                
                <div className="pl-4">
                  <span className="text-neutral-400">name:</span>{" "}
                  <span className="text-emerald-300">"{profileData.name}"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-neutral-400">role:</span>{" "}
                  <span className="text-emerald-300">"{profileData.title}"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-neutral-400">location:</span>{" "}
                  <span className="text-emerald-300">"{profileData.location}"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-neutral-400">backend:</span> [
                  <span className="text-amber-300">"Laravel"</span>,{" "}
                  <span className="text-amber-300">"Node.js"</span>,{" "}
                  <span className="text-amber-300">"NestJS"</span>,{" "}
                  <span className="text-amber-300">"PHP"</span>],
                </div>

                <div className="pl-4">
                  <span className="text-neutral-400">frontend:</span> [
                  <span className="text-cyan-300">"React"</span>,{" "}
                  <span className="text-cyan-300">"Next.js"</span>],
                </div>

                <div className="pl-4">
                  <span className="text-neutral-400">database:</span> [
                  <span className="text-teal-300">"MySQL"</span>,{" "}
                  <span className="text-teal-300">"MariaDB"</span>],
                </div>

                <div className="pl-4">
                  <span className="text-neutral-400">status:</span>{" "}
                  <span className="text-emerald-300">"Backend Developer @ Softhought"</span>
                </div>

                <div>&#125;;</div>

                <div className="mt-4 pt-3 border-t border-neutral-900 text-neutral-500 text-[11px] flex items-center justify-between">
                  <span className="text-teal-400">✓ Ready to solve real-world problems</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>

              {/* Bottom Subtle Glow Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#01484A] to-transparent opacity-60"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
