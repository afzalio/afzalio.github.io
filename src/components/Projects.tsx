import React, { useState } from "react";
import { projectsData } from "../data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Enterprise", "Web Application", "Mobile Concept", "Developer Tools"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs font-semibold text-[#01484A] dark:text-teal-400 tracking-widest uppercase mb-2 block">
              04 / PROJECTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Works & Projects
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              A selection of enterprise software, interactive web applications, audio streaming concepts, and developer tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  filter === cat
                    ? "bg-[#01484A] text-white shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-[#01484A] p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#01484A]/20 hover:-translate-y-1"
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase bg-[#01484A]/30 text-teal-300 border border-[#01484A]/50">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors mb-3 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight
                    size={20}
                    className="text-neutral-500 group-hover:text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 ml-2"
                  />
                </h3>

                {/* Short Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                  <h4 className="text-[11px] font-mono uppercase text-neutral-400 font-semibold tracking-wider mb-2">
                    Key Features & Workflow:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#01484A] font-bold">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Tags */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-neutral-800/90 border border-neutral-700/60 text-[11px] font-mono text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
