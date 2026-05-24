import React from "react";
import { BookOpen, GraduationCap, Award, Compass, Search, Mail, Menu, X, Landmark } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: "home", label: "HOME", icon: Compass },
    { id: "research", label: "RESEARCH", icon: BookOpen },
    { id: "teaching", label: "TEACHING", icon: GraduationCap },
    { id: "mentoring", label: "MENTORING", icon: Award },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-natural-bg/90 backdrop-blur-md border-b border-[#e2e1d8] shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <button
              onClick={() => {
                setActiveSection("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 text-left cursor-pointer group"
            >
              <div className="bg-[#4a4c41] text-[#fdfcf9] rounded-xl p-2 h-9 w-9 flex items-center justify-center shadow-sm group-hover:bg-[#5d6052] transition-colors font-serif font-bold">
                Ω
              </div>
              <div>
                <span className="block font-serif text-base sm:text-lg font-bold text-[#4a4c41] tracking-tight leading-tight group-hover:text-[#5d6052] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="block font-sans text-[10px] text-[#8a8c7a] font-semibold uppercase tracking-wider">
                  {PERSONAL_INFO.title} • K-STATE
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-widest font-sans transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#e2e1d8] text-[#4a4c41]"
                      : "text-[#6b6d5c] hover:text-[#4a4c41] hover:bg-[#f2f1ea]/80"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-[#4a4c41]" : "text-[#8a8c7a]"}`} />
                  {item.label}
                </button>
              );
            })}
            
            <span className="h-4 w-[1px] bg-[#e2e1d8] mx-2" />

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="bg-[#4a4c41] hover:bg-[#5d6052] text-[#fdfcf9] text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-xl transition-colors shadow-xs flex items-center gap-1.5"
            >
              <Mail className="h-3.5 w-3.5" />
              CONTACT
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#8a8c7a] hover:text-[#4a4c41] hover:bg-[#f2f1ea] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfcf9] border-b border-[#e2e1d8] animate-slide-in">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold font-sans tracking-widest flex items-center gap-3 transition-colors ${
                    isActive
                      ? "bg-[#e2e1d8] text-[#4a4c41]"
                      : "text-[#6b6d5c] hover:text-[#4a4c41] hover:bg-[#f2f1ea]"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-[#4a4c41]" : "text-[#8a8c7a]"}`} />
                  {item.label}
                </button>
              );
            })}
            
            <div className="px-4 py-3 border-t border-[#e2e1d8] mt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full text-center bg-[#4a4c41] hover:bg-[#5d6052] text-[#fdfcf9] py-2.5 px-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
