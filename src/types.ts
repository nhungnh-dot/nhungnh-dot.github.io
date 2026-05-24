export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journalOrStatus: string;
  year: number;
  doi?: string;
  abstract?: string;
  category: "journal" | "submitted" | "preprint";
  pdfUrl?: string;
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  location: string;
  dateRange: string;
  type: "invited" | "contributed" | "poster";
}

export interface Course {
  id: string;
  code: string;
  name: string;
  roles: ("Lecturer" | "Recitation Instructor" | "Coordinator" | "Lab Instructor" | "Substitute Instructor" | "Session Leader" | "Teaching Intern")[];
  institution: string;
  semesters: string[];
  description: string;
  level: "Undergraduate" | "Graduate" | "High School";
}

export interface MentoredStudent {
  id: string;
  name: string;
  institution: string;
  roleType: string;
  projects: {
    title: string;
    semester: string;
  }[];
  notes?: string;
}

export interface AcademicService {
  id: string;
  title: string;
  role: string;
  semesters: string[];
  description: string;
}
