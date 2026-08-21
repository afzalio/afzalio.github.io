import React from "react";
import { Star, GitFork, ArrowUpRight, Code } from "lucide-react";
import { profileData } from "../data/profile";
import { GithubIcon } from "./SocialIcons";

export const GithubSection: React.FC = () => {
  const staticRepos = [
    {
      name: "guitar-tuner",
      description: "Real-time browser guitar tuner built with Web Audio API and React pitch detection.",
      language: "JavaScript / React",
      stars: 12,
      forks: 4,
      url: `${profileData.github}/guitar-tuner`
    },
    {
      name: "sound-seeder-app",
      description: "React Native Android app concept for sync audio streaming over local P2P networks.",
      language: "TypeScript",
      stars: 18,
      forks: 6,
      url: `${profileData.github}/sound-seeder-app`
    },
    {
      name: "enterprise-mgmt-core",
      description: "Laravel core backend modules for vouchers, accounting, tax reporting & collection.",
      language: "PHP / Laravel",
      stars: 15,
      forks: 5,
      url: `${profileData.github}`
    }
  ];

  const generateContributionMatrix = () => {
    const matrix = [];
    const seed = [0, 1, 2, 3, 4, 1, 2, 3, 0, 4, 2, 3, 1, 0, 3, 4, 2, 1];
    for (let i = 0; i < 32; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        const level = seed[(i * 7 + j) % seed.length];
        week.push(level);
      }
      matrix.push(week);
    }
    return matrix;
  };

  const contributionMatrix = generateContributionMatrix();

  const getCellColor = (level: number) => {
    switch (level) {
      case 0: return "bg-neutral-900 border border-neutral-800";
      case 1: return "bg-[#01484A]/30 border border-[#01484A]/40";
      case 2: return "bg-[#01484A]/60 border border-[#01484A]/70";
      case 3: return "bg-[#01484A]";
      case 4: return "bg-[#026b6e] shadow-sm shadow-[#026b6e]/50";
      default: return "bg-neutral-900";
    }
  };

  return (
    <section className="py-24 relative border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs font-semibold text-[#01484A] dark:text-teal-400 tracking-widest uppercase mb-2 block">
              06 / OPEN SOURCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Code is where I build.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Explore my GitHub repositories, experiments, open-source code, and developer activity.
            </p>
          </div>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-mono text-xs font-medium text-white bg-neutral-900 hover:bg-[#01484A] border border-neutral-800 hover:border-[#01484A] transition-all shadow-md group"
          >
            <GithubIcon size={16} />
            <span>Visit @afzalio GitHub</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* GitHub Profile & Contribution Graph Visual Mockup */}
        <div className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 mb-10 shadow-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-800/80">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#01484A] shrink-0">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                  <span>{profileData.name}</span>
                  <span className="text-xs text-teal-400 font-normal">@afzalio</span>
                </h3>
                <p className="text-xs text-neutral-400">
                  Full Stack Developer · Backend Architecture · Kolkata, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
              <span>Less</span>
              <div className="flex items-center gap-1 mx-1">
                <div className="w-3 h-3 rounded-sm bg-neutral-900 border border-neutral-800" />
                <div className="w-3 h-3 rounded-sm bg-[#01484A]/30" />
                <div className="w-3 h-3 rounded-sm bg-[#01484A]/60" />
                <div className="w-3 h-3 rounded-sm bg-[#01484A]" />
                <div className="w-3 h-3 rounded-sm bg-[#026b6e]" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[650px]">
              {contributionMatrix.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm transition-transform hover:scale-125 ${getCellColor(
                        level
                      )}`}
                      title={`Activity level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Repos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staticRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-[#01484A] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#01484A]/20"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-teal-400 font-mono text-sm font-bold">
                    <Code size={16} />
                    <span>{repo.name}</span>
                  </div>
                  <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-transform" />
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="text-neutral-300 font-medium">{repo.language}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={13} className="text-neutral-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
