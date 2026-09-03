export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number | string;
  status: 'published' | 'submitted' | 'in_preparation';
  paperUrl?: string;
  doi?: string;
  bibtex: string;
  tags: string[];
  abstract?: string;
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  type: 'invited' | 'contributed' | 'poster';
  format?: 'in-person' | 'virtual';
  session?: string;
}

export interface CourseTeaching {
  id: string;
  code: string;
  title: string;
  role: 'Lecturer' | 'Recitation Instructor' | 'Coordinator' | 'Lab Instructor' | 'Substitute Instructor' | 'Session Leader';
  term: string;
  institution: string;
  description?: string;
  level?: 'Undergraduate' | 'Graduate' | 'High School';
}

export interface MentoredStudent {
  id: string;
  studentName: string;
  affiliation: string;
  program: string;
  term: string;
  projects: string[];
  coMentors?: string;
}

export interface MentoringActivity {
  id: string;
  title: string;
  role: string;
  term: string;
  description?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  link: string;
  details?: string;
}

export interface EmploymentRole {
  role: string;
  terms: {
    year: string;
    semester: string;
  }[];
}
