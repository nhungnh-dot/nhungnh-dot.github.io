import React, { useState } from "react";
import { PUBLICATIONS, TALKS } from "../data";
import { Calendar, MapPin, ExternalLink, Radio, Award, Compass, Sparkles } from "lucide-react";

export default function ResearchSection() {
  const [activePubFilter, setActivePubFilter] = useState<"all" | "journal" | "submitted">("all");
  const [activeTalkFilter, setActiveTalkFilter] = useState<"all" | "invited" | "contributed" | "poster">("all");

  const filteredPubs = PUBLICATIONS.filter((pub) => {
    if (activePubFilter === "all") return true;
    return pub.category === activePubFilter;
  });

  const filteredTalks = TALKS.filter((talk) => {
    if (activeTalkFilter === "all") return true;
    return talk.type === activeTalkFilter;
  });

  return (
    <div id="research-section-root" className="space-y-8 animate-fade-in">

      {/* 2. PUBLICATIONS LISTING */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#4a4c41]">
              Refereed Publications & Submitted Preprints
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex rounded-xl bg-[#f2f1ea] p-1.5 border border-[#e2e1d8] self-start text-xs font-medium font-sans">
            <button
              onClick={() => setActivePubFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activePubFilter === "all" ? "bg-white text-[#4a4c41] shadow-xs" : "text-[#6b6d5c] hover:text-[#4a4c41]"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActivePubFilter("submitted")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activePubFilter === "submitted" ? "bg-white text-[#4a4c41] shadow-xs" : "text-[#6b6d5c] hover:text-[#4a4c41]"
              }`}
            >
              Submitted / Preprints
            </button>
            <button
              onClick={() => setActivePubFilter("journal")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activePubFilter === "journal" ? "bg-white text-[#4a4c41] shadow-xs" : "text-[#6b6d5c] hover:text-[#4a4c41]"
              }`}
            >
              Refereed Journals
            </button>
          </div>
        </div>

        {/* Papers Render Grid */}
        <div className="space-y-4 font-sans">
          {filteredPubs.map((pub) => {
            return (
              <div
                key={pub.id}
                className="bg-white border border-[#e2e1d8] hover:border-[#8a8c7a] rounded-[2rem] p-5 sm:p-6 shadow-[0_15px_40px_-15px_rgba(74,76,65,0.08)] transition-all relative animate-fade-in"
              >
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    {/* Status Badge */}
                    <span
                      className={`inline-block text-[10px] uppercase tracking-wider font-mono py-0.5 px-2.5 rounded-lg font-semibold ${
                        pub.category === "submitted"
                          ? "bg-[#f2f1ea] text-[#4a4c41] border border-[#e2e1d8]/80"
                          : "bg-[#d6d8c8] text-[#4a4c41] border border-[#cbd5e1]/80"
                      }`}
                    >
                      {pub.journalOrStatus}
                    </span>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#4a4c41] leading-snug">
                      {pub.title}
                    </h3>

                    {/* Authors with Nhung Highlighted */}
                    <div className="text-xs text-[#6b6d5c] font-sans">
                      {pub.authors.map((author, index) => {
                        const isNhung = author.includes("Nhung H. Nguyen") || author.includes("Hong-Nhung Nguyen");
                        return (
                          <React.Fragment key={index}>
                            {index > 0 && ", "}
                            <span className={isNhung ? "font-bold text-[#4a4c41] underline decoration-[#d6d8c8] decoration-2 underline-offset-4" : "font-normal text-[#6b6d5c]"}>
                              {author}
                            </span>
                          </React.Fragment>
                        );
                      })}
                      <span className="text-[#8a8c7a] font-mono text-[11px] ml-1">
                        ({pub.year})
                      </span>
                    </div>
                  </div>

                  {/* DOI Link block if available */}
                  {pub.doi && (
                    <div className="pt-2 border-t border-[#e2e1d8]/40 flex items-center justify-between text-[10px] font-mono text-[#8a8c7a]">
                      <span>DOI</span>
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#4a4c41] hover:underline font-bold flex items-center gap-1 transition-all"
                      >
                        {pub.doi} <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="border-[#e2e1d8]" />

      {/* 3. CONFERENCES & SEMINAR TALKS */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#4a4c41]">
              Conferences, Seminars & Presentations
            </h2>
          </div>

          {/* Talk Type Filter */}
          <div className="flex flex-wrap rounded-xl bg-[#f2f1ea] p-1.5 border border-[#e2e1d8] self-start text-xs font-medium font-sans">
            <button
              onClick={() => setActiveTalkFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTalkFilter === "all" ? "bg-white text-[#4a4c41] shadow-xs" : "text-[#6b6d5c] hover:text-[#4a4c41]"
              }`}
            >
              All Talks
            </button>
            <button
              onClick={() => setActiveTalkFilter("invited")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTalkFilter === "invited" ? "bg-white text-[#4a4c41] shadow-xs" : "text-[#6b6d5c] hover:text-[#4a4c41]"
              }`}
            >
              Invited
            </button>
            <button
              onClick={() => setActiveTalkFilter("contributed")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTalkFilter === "contributed" ? "bg-white text-[#4a4c41] shadow-xs" : "text-[#6b6d5c] hover:text-[#4a4c41]"
              }`}
            >
              Contributed
            </button>
            <button
              onClick={() => setActiveTalkFilter("poster")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTalkFilter === "poster" ? "bg-white text-[#4a4c41] shadow-xs" : "text-[#6b6d5c] hover:text-[#4a4c41]"
              }`}
            >
              Posters
            </button>
          </div>
        </div>

        {/* Talk Lists Render */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTalks.map((talk) => (
            <div
              key={talk.id}
              className="bg-white border border-[#e2e1d8] rounded-[2rem] p-5 sm:p-6 hover:border-[#8a8c7a] shadow-[0_15px_40px_-15px_rgba(74,76,65,0.05)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[9px] uppercase tracking-widest font-mono font-bold py-0.5 px-2 rounded-full border ${
                      talk.type === "invited"
                        ? "bg-[#d6d8c8] text-[#4a4c41] border-[#cbd5e1]/60"
                        : talk.type === "contributed"
                        ? "bg-[#e2e1d8] text-[#4a4c41] border-[#cbd5e1]/40"
                        : "bg-[#f2f1ea] text-[#4a4c41] border-[#cbd5e1]/30"
                    }`}
                  >
                    {talk.type} Talk
                  </span>
                  <span className="text-[10px] font-mono text-[#8a8c7a]">
                    {talk.dateRange.split(",").pop()?.trim()}
                  </span>
                </div>

                <p className="text-xs text-[#6b6d5c] font-serif italic">
                  {talk.event}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e2e1d8]/60 mt-4 flex items-center gap-4 text-[11px] text-[#6b6d5c] font-sans">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#8a8c7a]" />
                  {talk.dateRange}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#8a8c7a]" />
                  {talk.location.split(",")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
