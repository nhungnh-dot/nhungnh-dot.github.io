import React from "react";
import { MENTORED_STUDENTS, ACADEMIC_SERVICE } from "../data";
import { Award, CheckCircle, ChevronRight, GraduationCap, Heart, HelpCircle, User, Users } from "lucide-react";

export default function MentoringSection() {
  return (
    <div id="mentoring-section-root" className="space-y-8 animate-fade-in">

      {/* Main Grid: Mentees and Academic Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Mentored Undergraduate Researchers (8 Columns) */}
        <div className="lg:col-span-8 space-y-6 lg:border-r lg:border-[#e2e1d8] lg:pr-8">
          <h3 className="font-serif text-xl font-bold text-[#4a4c41] border-b border-[#e2e1d8] pb-3 font-sans">
            Mentored Students
          </h3>

          <div className="space-y-6">
            {MENTORED_STUDENTS.map((mentee) => (
              <div
                key={mentee.id}
                className="bg-white border border-[#e2e1d8] rounded-[2rem] p-5 sm:p-6 shadow-[0_15px_40px_-15px_rgba(74,76,65,0.05)] hover:border-[#8a8c7a] transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e2e1d8]/60 pb-3">
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#4a4c41] flex items-center gap-2">
                      <User className="h-4.5 w-4.5 text-[#4a4c41] shrink-0" />
                      {mentee.name}
                    </h4>
                    <span className="text-xs text-[#6b6d5c] font-mono font-bold uppercase tracking-wider">
                      {mentee.roleType}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-[#6b6d5c] bg-[#f2f1ea] py-1 px-2.5 rounded-lg border border-[#e2e1d8]/55 block w-fit">
                    {mentee.institution}
                  </span>
                </div>

                {/* Sub projects */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#8a8c7a] uppercase tracking-widest block font-bold">
                    SUPERVISED PROJECTS:
                  </span>
                  {mentee.projects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="bg-[#f2f1ea]/50 border border-[#e2e1d8]/70 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#4a4c41] leading-snug">
                        "{proj.title}"
                      </span>
                      <span className="text-[10px] font-mono text-[#4a4c41] bg-[#e2e1d8] font-bold py-0.5 px-2.5 rounded-full shrink-0 h-fit">
                        {proj.semester}
                      </span>
                    </div>
                  ))}
                </div>


              </div>
            ))}
          </div>
        </div>

        {/* Mobile Divider */}
        <hr className="block lg:hidden border-t border-[#e2e1d8] my-4" />

        {/* Right Column: Other Mentoring Activities & Panels (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="font-serif text-xl font-bold text-[#4a4c41] border-b border-[#e2e1d8] pb-3 font-sans">
            Academic Panels & Forums
          </h3>

          <div className="space-y-4 font-sans">
            {ACADEMIC_SERVICE.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-b from-[#f2f1ea]/50 to-white border border-[#e2e1d8] rounded-2xl p-5 space-y-3 shadow-2xs hover:border-[#8a8c7a] transition-all"
              >
                <div className="space-y-1">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[9px] font-mono font-bold text-[#4a4c41] bg-[#e2e1d8] uppercase py-0.5 px-2 rounded-full">
                      {service.role}
                    </span>
                    <span className="text-[9px] font-mono text-[#8a8c7a] font-semibold shrink-0">
                      {service.semesters.join(", ")}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#4a4c41] leading-snug">
                    {service.title}
                  </h4>
                </div>

                <p className="text-[11px] text-[#6b6d5c] leading-relaxed font-sans mt-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>


        </div>

      </div>
    </div>
  );
}
