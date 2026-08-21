import React from "react";
import { CheckCircle2, MapPin, Briefcase, Code2, GraduationCap, Globe, Heart } from "lucide-react";
import { profileData } from "../data/profile";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-neutral-900 bg-neutral-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="font-mono text-xs font-semibold text-[#01484A] dark:text-teal-400 tracking-widest uppercase mb-2">
            01 / ABOUT
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            A little about me
          </h2>
          <div className="w-12 h-1 bg-[#01484A] rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
            {profileData.aboutIntro.map((paragraph, idx) => (
              <p key={idx} className="relative">
                {paragraph}
              </p>
            ))}

            {/* Primary Specializations */}
            <div className="pt-4">
              <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Code2 size={16} className="text-teal-400" />
                <span>Primary Technical Focus</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profileData.keyFocusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80 hover:border-[#01484A]/60 transition-colors"
                  >
                    <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-neutral-200">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Block from PDF */}
            <div className="pt-6 border-t border-neutral-900">
              <h3 className="text-sm font-mono font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <GraduationCap size={18} className="text-teal-400" />
                <span>Education</span>
              </h3>
              <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-white">
                    {profileData.education.degree}
                  </h4>
                  <p className="text-xs font-mono text-teal-400 mt-0.5">
                    {profileData.education.institution}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {profileData.education.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-neutral-400 bg-neutral-800 px-3 py-1 rounded-md self-start sm:self-center">
                  {profileData.education.period}
                </span>
              </div>
            </div>
          </div>

          {/* Right Developer Information Card with Profile Photo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-[#01484A]/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#01484A]/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Developer Profile Header */}
              <div className="flex items-center gap-5 mb-6 pb-6 border-b border-neutral-800">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#01484A] shadow-xl shadow-[#01484A]/30 shrink-0">
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{profileData.name}</h3>
                  <p className="text-xs font-mono text-teal-400 font-medium mt-1">{profileData.title}</p>
                  <p className="text-[11px] font-mono text-neutral-400 mt-1 flex items-center gap-1">
                    <MapPin size={11} className="text-teal-400" />
                    {profileData.location}
                  </p>
                </div>
              </div>

              {/* Developer Metadata Table */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-neutral-800/60 gap-1">
                  <span className="text-neutral-500 uppercase">EXPERIENCE</span>
                  <span className="text-teal-300 font-semibold flex items-center gap-1">
                    2+ Years Full Stack & Backend
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-neutral-800/60 gap-1">
                  <span className="text-neutral-500 uppercase">CURRENT ROLE</span>
                  <span className="text-teal-300 font-semibold flex items-center gap-1">
                    <Briefcase size={12} className="text-teal-400" />
                    Backend Dev @ Softhought
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-neutral-800/60 gap-1">
                  <span className="text-neutral-500 uppercase">EDUCATION</span>
                  <span className="text-neutral-200 font-semibold text-right">
                    BCA (Anglo Gujarati College)
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between py-2 border-b border-neutral-800/60 gap-1">
                  <span className="text-neutral-500 uppercase">FOCUS</span>
                  <span className="text-neutral-200 font-semibold text-right">
                    Laravel · React · APIs · MySQL
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between py-2 gap-1">
                  <span className="text-neutral-500 uppercase">EMAIL</span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-teal-400 hover:underline truncate"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              {/* Languages Spoken & Hobbies from PDF */}
              <div className="mt-6 pt-4 border-t border-neutral-800 space-y-3">
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold tracking-wider flex items-center gap-1 mb-2">
                    <Globe size={11} className="text-teal-400" /> Spoken Languages
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {profileData.spokenLanguages.map((lang) => (
                      <span key={lang} className="px-2.5 py-0.5 rounded bg-neutral-800 text-[11px] font-mono text-neutral-300">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold tracking-wider flex items-center gap-1 mb-2">
                    <Heart size={11} className="text-teal-400" /> Personal Hobbies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {profileData.hobbies.map((hobby) => (
                      <span key={hobby} className="px-2.5 py-0.5 rounded bg-neutral-800 text-[11px] font-mono text-neutral-300">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
