import React, { useState } from "react";
import { techCategories } from "../data/technologies";
import { TechIcon } from "./TechIcon";

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? techCategories
      : techCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="stack" className="py-24 relative border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs font-semibold text-[#01484A] dark:text-teal-400 tracking-widest uppercase mb-2 block">
              02 / STACK
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Technologies & Toolkit
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Languages, frameworks, databases, and core software engineering tools I utilize to craft scalable applications.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-[#01484A] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              }`}
            >
              All Tech
            </button>
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#01484A] text-white shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Tech Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <span className="text-[#01484A]">//</span> {category.title}
                </h3>
                <span className="h-[1px] flex-1 bg-neutral-800/80"></span>
                <span className="text-xs font-mono text-neutral-500">
                  {category.items.length} skills
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-[#01484A] hover:bg-neutral-900 transition-all duration-200 flex flex-col justify-between hover:shadow-lg hover:shadow-[#01484A]/20"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-neutral-800/90 text-teal-400 group-hover:bg-[#01484A] group-hover:text-white transition-colors">
                        <TechIcon name={tech.iconName} size={18} />
                      </div>
                      {tech.featured && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#01484A] group-hover:bg-teal-400"></span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
                        {tech.name}
                      </h4>
                      {tech.description && (
                        <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                          {tech.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
