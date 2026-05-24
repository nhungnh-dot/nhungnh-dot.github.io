import React, { useState } from "react";
import { COURSES } from "../data";
import { GraduationCap, Calendar, Users, CheckCircle, ChevronDown, ChevronUp, BookOpen, Clock, MapPin, School } from "lucide-react";

export default function TeachingSection() {
  const [activeLocation, setActiveLocation] = useState<"kstate" | "vietnam">("kstate");
  const [activeKStateRole, setActiveKStateRole] = useState<"all" | "lecturer" | "coordinator" | "recitation" | "labs" | "substitute" | "leader">("all");
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const filteredCourses = COURSES.filter((course) => {
    const isVN =
      course.institution.toLowerCase().includes("viet nam") ||
      course.institution.toLowerCase().includes("vietnam") ||
      course.roles.includes("Teaching Intern");

    if (activeLocation === "vietnam") {
      return isVN;
    } else {
      // K-State location selected
      if (isVN) return false;

      // Filter by K-State sub-roles
      if (activeKStateRole === "all") return true;
      if (activeKStateRole === "lecturer") {
        return course.roles.includes("Lecturer");
      }
      if (activeKStateRole === "coordinator") {
        return course.roles.includes("Coordinator");
      }
      if (activeKStateRole === "recitation") {
        return course.roles.includes("Recitation Instructor");
      }
      if (activeKStateRole === "labs") {
        return course.roles.includes("Lab Instructor");
      }
      if (activeKStateRole === "substitute") {
        return course.roles.includes("Substitute Instructor");
      }
      if (activeKStateRole === "leader") {
        return course.roles.includes("Session Leader");
      }
    }
    return true;
  });

  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case "Lecturer":
        return "bg-[#e2e1d8] text-[#4a4c41] border-[#cbd5e1]/40";
      case "Coordinator":
        return "bg-[#d6d8c8] text-[#4a4c41] border-[#cbd5e1]/85";
      case "Recitation Instructor":
        return "bg-[#f2f1ea] text-[#4a4c41] border-[#cbd5e1]/30";
      case "Lab Instructor":
        return "bg-[#f2f1ea] text-[#6b6d5c] border-[#cbd5e1]/20";
      case "Substitute Instructor":
        return "bg-white text-[#6b6d5c] border-[#e2e1d8]";
      case "Session Leader":
        return "bg-[#e2e1d8] text-[#6b6d5c] border-[#cbd5e1]/50";
      default:
        return "bg-white text-[#8a8c7a] border-[#e2e1d8]";
    }
  };

  return (
    <div id="teaching-section-root" className="space-y-8 animate-fade-in">
      <div className="space-y-6">
        
        {/* FIRST LEVEL SELECTOR: K-State vs Vietnam */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e2e1d8] pb-5 font-sans">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-[#4a4c41]">
              Teaching Portfolio
            </h3>
          </div>

          {/* Location Tabs */}
          <div className="flex rounded-2xl bg-[#f2f1ea] p-1.5 border border-[#e2e1d8] text-xs font-semibold font-sans shadow-inner">
            <button
              onClick={() => {
                setActiveLocation("kstate");
                setActiveKStateRole("all");
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeLocation === "kstate"
                  ? "bg-white text-[#4a4c41] shadow-xs"
                  : "text-[#6b6d5c] hover:text-[#4a4c41]"
              }`}
            >
              <School className="h-4 w-4" />
              Kansas State University
            </button>
            <button
              onClick={() => {
                setActiveLocation("vietnam");
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeLocation === "vietnam"
                  ? "bg-white text-[#4a4c41] shadow-xs"
                  : "text-[#6b6d5c] hover:text-[#4a4c41]"
              }`}
            >
              <MapPin className="h-4 w-4" />
              Viet Nam Internships
            </button>
          </div>
        </div>

        {/* SECOND LEVEL SELECTOR: Displayed ONLY for K-State */}
        {activeLocation === "kstate" && (
          <div className="space-y-2.5">
            <div className="flex flex-wrap gap-2 text-xs font-medium font-sans">
              <button
                onClick={() => setActiveKStateRole("all")}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeKStateRole === "all"
                    ? "bg-[#4a4c41] text-white border-[#4a4c41]"
                    : "bg-[#f2f1ea]/70 text-[#6b6d5c] border-[#e2e1d8] hover:bg-[#f2f1ea] hover:text-[#4a4c41]"
                }`}
              >
                All Roles
              </button>
              <button
                onClick={() => setActiveKStateRole("lecturer")}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeKStateRole === "lecturer"
                    ? "bg-[#4a4c41] text-white border-[#4a4c41]"
                    : "bg-[#f2f1ea]/70 text-[#6b6d5c] border-[#e2e1d8] hover:bg-[#f2f1ea] hover:text-[#4a4c41]"
                }`}
              >
                Lecturer
              </button>
              <button
                onClick={() => setActiveKStateRole("coordinator")}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeKStateRole === "coordinator"
                    ? "bg-[#4a4c41] text-white border-[#4a4c41]"
                    : "bg-[#f2f1ea]/70 text-[#6b6d5c] border-[#e2e1d8] hover:bg-[#f2f1ea] hover:text-[#4a4c41]"
                }`}
              >
                Coordinator
              </button>
              <button
                onClick={() => setActiveKStateRole("recitation")}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeKStateRole === "recitation"
                    ? "bg-[#4a4c41] text-white border-[#4a4c41]"
                    : "bg-[#f2f1ea]/70 text-[#6b6d5c] border-[#e2e1d8] hover:bg-[#f2f1ea] hover:text-[#4a4c41]"
                }`}
              >
                Recitation
              </button>
              <button
                onClick={() => setActiveKStateRole("labs")}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeKStateRole === "labs"
                    ? "bg-[#4a4c41] text-white border-[#4a4c41]"
                    : "bg-[#f2f1ea]/70 text-[#6b6d5c] border-[#e2e1d8] hover:bg-[#f2f1ea] hover:text-[#4a4c41]"
                }`}
              >
                Labs
              </button>
              <button
                onClick={() => setActiveKStateRole("substitute")}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeKStateRole === "substitute"
                    ? "bg-[#4a4c41] text-white border-[#4a4c41]"
                    : "bg-[#f2f1ea]/70 text-[#6b6d5c] border-[#e2e1d8] hover:bg-[#f2f1ea] hover:text-[#4a4c41]"
                }`}
              >
                Substitute Instructor
              </button>
              <button
                onClick={() => setActiveKStateRole("leader")}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeKStateRole === "leader"
                    ? "bg-[#4a4c41] text-white border-[#4a4c41]"
                    : "bg-[#f2f1ea]/70 text-[#6b6d5c] border-[#e2e1d8] hover:bg-[#f2f1ea] hover:text-[#4a4c41]"
                }`}
              >
                Session Leader
              </button>
            </div>
          </div>
        )}

        {/* Courses Rendering */}
        <div className="space-y-4 font-sans">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => {
              const isExpanded = expandedCourse === course.id;
              return (
                <div
                  key={course.id}
                  className="bg-white border border-[#e2e1d8] hover:border-[#8a8c7a] rounded-[2rem] p-5 sm:p-6 shadow-[0_15px_40px_-15px_rgba(74,76,65,0.05)] transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 w-full">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#4a4c41] bg-[#e2e1d8] py-1 px-2.5 rounded-lg">
                          {course.code}
                        </span>
                        <span className="text-[#8a8c7a] font-sans text-xs">•</span>
                        <span className="text-[#6b6d5c] font-sans text-[11px] font-semibold tracking-wide uppercase">
                          {course.level} Level
                        </span>
                      </div>

                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#4a4c41] leading-snug">
                        {course.name}
                      </h4>

                      {/* Roles array */}
                      <div className="flex flex-wrap gap-1.5">
                        {course.roles.map((role, idx) => (
                          <span
                            key={idx}
                            className={`text-[9px] font-mono font-bold tracking-wider uppercase py-0.5 px-2 rounded border ${getRoleBadgeStyle(
                              role
                            )}`}
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                      className="p-1.5 hover:bg-[#f2f1ea] border border-[#e2e1d8] text-[#8a8c7a] hover:text-[#4a4c41] rounded-lg cursor-pointer transition-colors shrink-0"
                    >
                      {isExpanded ? <ChevronUp className="h-4.5 w-4.5" /> : <ChevronDown className="h-4.5 w-4.5" />}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] text-[#8a8c7a] font-mono mt-3 border-t border-[#e2e1d8]/65 pt-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#8a8c7a]" />
                      SEMESTERS: <strong className="text-[#4a4c41] uppercase font-sans text-[10px]">{course.semesters.join(", ")}</strong>
                    </span>
                    <span className="flex items-center gap-1.5 shrink-0">
                      <GraduationCap className="h-3.5 w-3.5 text-[#8a8c7a]" />
                      {course.institution}
                    </span>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#e2e1d8]/80 text-xs sm:text-sm text-[#6b6d5c] leading-relaxed font-sans bg-[#fdfcf9] p-4 border border-[#e2e1d8] rounded-xl">
                      <strong className="block text-[10px] font-mono text-[#4a4c41] uppercase tracking-wider mb-1">
                        COURSE DESCRIPTION & SYLLABI DETAILS:
                      </strong>
                      {course.description}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 border border-dashed border-[#e2e1d8] rounded-[2rem] text-sm text-[#8a8c7a] bg-[#fdfcf9]">
              No courses found for this role sub-level combination.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
