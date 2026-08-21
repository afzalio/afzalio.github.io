import React from "react";
import { learningData } from "../data/learning";
import { TechIcon } from "./TechIcon";
import { Compass } from "lucide-react";

export const Learning: React.FC = () => {
  return (
    <section id="learning" className="py-24 relative border-t border-neutral-900 bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="font-mono text-xs font-semibold text-[#01484A] dark:text-teal-400 tracking-widest uppercase mb-2 flex items-center gap-1.5">
            <Compass size={14} className="text-teal-400" />
            05 / LEARNING
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Currently Exploring & Learning
          </h2>
          <p className="text-[#01484A] dark:text-teal-400 font-mono text-xs sm:text-sm font-semibold mt-2">
            {learningData.tagline}
          </p>
          <p className="text-neutral-400 text-sm sm:text-base mt-1 max-w-2xl">
            {learningData.subheading}
          </p>
          <div className="w-12 h-1 bg-[#01484A] rounded-full mt-3"></div>
        </div>

        {/* Learning Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningData.topics.map((topic) => (
            <div
              key={topic.id}
              className="group p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-[#01484A] transition-all duration-300 hover:shadow-xl hover:shadow-[#01484A]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-800 text-teal-400 group-hover:bg-[#01484A] group-hover:text-white transition-colors">
                    <TechIcon name={topic.iconName} size={20} />
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold bg-[#01484A]/20 text-teal-300 border border-[#01484A]/40">
                    {topic.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
                  {topic.name}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {topic.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Category: {topic.category}</span>
                <span className="text-teal-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
