import React from "react";
import { experienceData } from "../data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2, FolderGit2 } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-neutral-900 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs font-semibold text-[#01484A] dark:text-teal-400 tracking-widest uppercase mb-2">
            03 / EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            My engineering work architecting enterprise backend applications, multi-tenant SaaS platforms, and IoT integrations.
          </p>
          <div className="w-12 h-1 bg-[#01484A] rounded-full mt-3"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-neutral-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#080b0c] border-2 border-[#01484A] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#01484A] transition-all shadow-md shadow-[#01484A]/30">
                <Briefcase size={12} className="text-teal-300 group-hover:text-white" />
              </div>

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#01484A]/60 transition-all duration-300 shadow-xl">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-6 border-b border-neutral-800/80">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          Present Role
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-semibold text-[#01484A] dark:text-teal-400 font-mono mt-1">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-neutral-400 gap-1">
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <Calendar size={13} className="text-teal-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-teal-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
                  {exp.description}
                </p>

                {/* Sub-Projects Delivered at Softhought */}
                <div className="space-y-6 mb-8">
                  <h5 className="text-xs font-mono uppercase text-neutral-400 font-semibold tracking-wider flex items-center gap-2">
                    <FolderGit2 size={15} className="text-teal-400" />
                    Major Applications & Key Systems Delivered:
                  </h5>

                  <div className="grid grid-cols-1 gap-6">
                    {exp.projects.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-5 rounded-xl bg-neutral-950/70 border border-neutral-800/90 hover:border-[#01484A]/60 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h6 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                            <span className="text-[#01484A]">#</span> {proj.name}
                          </h6>
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#01484A]/30 text-teal-300 border border-[#01484A]/40 self-start sm:self-auto">
                            {proj.category}
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {proj.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                              <CheckCircle2 size={14} className="text-teal-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h5 className="text-xs font-mono uppercase text-neutral-400 font-semibold tracking-wider mb-3">
                    Technologies Applied:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-neutral-800/80 border border-neutral-700/60 text-xs font-mono text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
