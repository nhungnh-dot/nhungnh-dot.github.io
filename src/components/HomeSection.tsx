import React from "react";
import { Link2, Mail, Linkedin, GraduationCap, Briefcase, Award, ArrowRight, MapPin, Search, Milestone } from "lucide-react";
import { PERSONAL_INFO } from "../data";

const mathBanner = "/src/assets/images/wave_banner_no_math_1779579587038.png";
const avatarImage = "/user_avatar_1779579810472.png";

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

export default function HomeSection({ setActiveSection }: HomeSectionProps) {
  return (
    <div id="home-section-root" className="space-y-8 animate-fade-in">

      {/* Main Grid: Info Cards & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Short Introduction and Key Content */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Detailed Biography Card */}
          <div className="bg-white border border-[#e2e1d8] rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_40px_-15px_rgba(74,76,65,0.08)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d6d8c8]/30 rounded-full blur-3xl -z-10 opacity-60" />
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
  src={avatarImage}
  alt="avatar"
  style={{
    width: 120,
    height: 120,
    borderRadius: "50%",
    border: "5px solid red"
  }}
/>
              <div className="flex-grow text-center sm:text-left">
                <h2 className="font-serif text-2xl font-bold text-[#4a4c41] mb-4 border-b border-[#e2e1d8] pb-3">
                  About Me
                </h2>
                <p className="text-[#4a4c41]/95 text-sm leading-relaxed font-sans">
                  {PERSONAL_INFO.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Academic Resume Timeline Segment */}
          <div className="bg-white border border-[#e2e1d8] rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_40px_-15px_rgba(74,76,65,0.08)]">
            <h2 className="font-serif text-2xl font-bold text-[#4a4c41] mb-6 border-b border-[#e2e1d8] pb-3 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-[#4a4c41]" /> Education
            </h2>
            
            <div className="relative pl-6 border-l border-[#e2e1d8] space-y-8">
              {PERSONAL_INFO.education.map((edu, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#4a4c41] border-4 border-white shadow-xs" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#4a4c41]">
                      {edu.degree}
                    </h3>
                    <span className="inline-block py-1 px-3 bg-[#f2f1ea] text-[#4a4c41] font-mono text-xs font-semibold rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <span className="block text-xs font-sans text-[#6b6d5c] font-semibold mt-0.5">
                    {edu.institution}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Highlights & Key Stats section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <button
              onClick={() => setActiveSection("research")}
              className="bg-white border border-[#e2e1d8] hover:border-[#8a8c7a] hover:shadow-md hover:scale-102 cursor-pointer rounded-2xl p-4 text-center transition-all group shadow-2xs"
            >
              <span className="block text-2xl font-serif font-extrabold text-[#4a4c41] group-hover:scale-110 transition-transform">
                3
              </span>
              <span className="block text-[10px] font-mono text-[#8a8c7a] uppercase tracking-wider font-semibold mt-1">
                PUBLICATIONS
              </span>
            </button>

            <button
              onClick={() => setActiveSection("research")}
              className="bg-white border border-[#e2e1d8] hover:border-[#8a8c7a] hover:shadow-md hover:scale-102 cursor-pointer rounded-2xl p-4 text-center transition-all group shadow-2xs"
            >
              <span className="block text-2xl font-serif font-extrabold text-[#4a4c41] group-hover:scale-110 transition-transform">
                12
              </span>
              <span className="block text-[10px] font-mono text-[#8a8c7a] uppercase tracking-wider font-semibold mt-1">
                TALKS
              </span>
            </button>

            <button
              onClick={() => setActiveSection("teaching")}
              className="bg-white border border-[#e2e1d8] hover:border-[#8a8c7a] hover:shadow-md hover:scale-102 cursor-pointer rounded-2xl p-4 text-center transition-all group shadow-2xs"
            >
              <span className="block text-2xl font-serif font-extrabold text-[#4a4c41] group-hover:scale-110 transition-transform">
                13
              </span>
              <span className="block text-[10px] font-mono text-[#8a8c7a] uppercase tracking-wider font-semibold mt-1">
                COURSES TAUGHT
              </span>
            </button>

            <button
              onClick={() => setActiveSection("mentoring")}
              className="bg-white border border-[#e2e1d8] hover:border-[#8a8c7a] hover:shadow-md hover:scale-102 cursor-pointer rounded-2xl p-4 text-center transition-all group shadow-2xs"
            >
              <span className="block text-2xl font-serif font-extrabold text-[#4a4c41] group-hover:scale-110 transition-transform">
                7
              </span>
              <span className="block text-[10px] font-mono text-[#8a8c7a] uppercase tracking-wider font-semibold mt-1">
                STUDENTS MENTORED
              </span>
            </button>
          </div>

        </div>

        {/* Right Column: Contact Details, Interests, Profile Card */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Contact Scholar Card */}
          <div className="bg-white border border-[#e2e1d8] rounded-[2rem] p-6 shadow-[0_15px_40px_-15px_rgba(74,76,65,0.08)] flex flex-col space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#4a4c41] border-b border-[#e2e1d8] pb-2">
              Contact & Connections
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-[#4a4c41] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#4a4c41] font-sans font-semibold">Office Address:</strong>
                  <span className="text-[#6b6d5c] block">Cardwell Hall, 1228 N. 17th St.</span>
                  <span className="text-[#6b6d5c] block">Department of Mathematics</span>
                  <span className="text-[#6b6d5c] block">Kansas State University, Manhattan, KS</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-[#4a4c41] shrink-0" />
                <div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#4a4c41] hover:underline font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="h-4.5 w-4.5 text-[#4a4c41] shrink-0" />
                <div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#4a4c41] hover:underline flex items-center gap-0.5"
                  >
                    LinkedIn Profile <Link2 className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#e2e1d8]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full bg-[#4a4c41] hover:bg-[#5d6052] text-[#fdfcf9] font-sans font-bold py-2 px-4 rounded-xl text-xs text-center transition-all block cursor-pointer uppercase tracking-wider"
              >
                Send Academic Inquiry
              </a>
            </div>
          </div>

          {/* Research Interest Tag Cloud */}
          <div className="bg-white border border-[#e2e1d8] rounded-[2rem] p-6 shadow-[0_15px_40px_-15px_rgba(74,76,65,0.08)]">
            <h3 className="font-serif text-lg font-bold text-[#4a4c41] border-b border-[#e2e1d8] pb-2 flex items-center gap-1.5">
              <Search className="h-5 w-5 text-[#4a4c41]" /> Core Subfields
            </h3>
            <div className="flex flex-wrap gap-2 mt-4 font-sans text-xs">
              {PERSONAL_INFO.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-semibold text-[#6b6d5c] bg-[#f2f1ea]/80 py-1.5 px-3 rounded-full border border-[#cbd5e1]/50 inline-block hover:bg-[#4a4c41] hover:text-[#fdfcf9] hover:border-[#4a4c41] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
