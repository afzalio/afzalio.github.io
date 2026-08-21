import React from "react";
import { FileText, Download, ArrowRight } from "lucide-react";
import { profileData } from "../data/profile";

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-16 relative bg-gradient-to-r from-neutral-950 via-[#01484A]/30 to-neutral-950 border-y border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-neutral-900/80 border border-[#01484A]/50 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#01484A] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#01484A]/40">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Want the full story?
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm mt-1">
                Explore detailed technical background, complete educational history, and comprehensive project experience.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-[#01484A] hover:bg-[#026164] transition-all shadow-md group"
            >
              <span>View Full Resume</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="sk_afjal_ali_resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-neutral-300 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-all hover:text-white"
            >
              <Download size={16} className="text-teal-400" />
              <span>Download PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
