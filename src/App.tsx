import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Linkedin, GraduationCap, ChevronUp, Landmark, Calendar, Clock } from "lucide-react";
import { PERSONAL_INFO } from "./data";
import Navigation from "./components/Navigation";
import HomeSection from "./components/HomeSection";
import ResearchSection from "./components/ResearchSection";
import TeachingSection from "./components/TeachingSection";
import MentoringSection from "./components/MentoringSection";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll height to show back-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection setActiveSection={setActiveSection} />;
      case "research":
        return <ResearchSection />;
      case "teaching":
        return <TeachingSection />;
      case "mentoring":
        return <MentoringSection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-natural-bg text-[#4a4c41] font-sans flex flex-col justify-between selection:bg-[#d6d8c8] selection:text-[#4a4c41]">
      
      {/* HEADER NAVIGATION BAR */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* MAIN VIEW CONTENT CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#f2f1ea]/80 border-t border-[#e2e1d8] py-8 mt-16 text-xs text-[#6b6d5c] font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <span className="font-serif font-bold text-[#4a4c41] text-sm tracking-wide block">
              Nhung H. Nguyen
            </span>
            <p className="text-[#6b6d5c] text-[11px]">
              Ph.D. Candidate &bull; {PERSONAL_INFO.department} &bull; {PERSONAL_INFO.institution}
            </p>
          </div>
          
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-full border border-[#e2e1d8] bg-white hover:bg-[#4a4c41] hover:text-[#fdfcf9] text-[#6b6d5c] transition-all"
              title="Email Inquiry"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-[#e2e1d8] bg-white hover:bg-[#4a4c41] hover:text-[#fdfcf9] text-[#6b6d5c] transition-all"
              title="LinkedIn Network"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#4a4c41] text-[#fdfcf9] hover:bg-[#5d6052] shadow-lg transition-all border border-[#cbd5e1]/10 hover:-translate-y-1 cursor-pointer z-50 animate-fade-in"
          title="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}
