import { Publication, Talk, CourseTeaching, MentoredStudent, MentoringActivity, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Nhung H. Nguyen",
  alternateName: "Hong-Nhung Nguyen",
  title: "Ph.D. Candidate in Mathematics",
  institution: "Kansas State University",
  institutionUrl: "https://www.ksu.edu/",
  department: "Department of Mathematics",
  departmentUrl: "https://www.math.ksu.edu/",
  advisor: "Prof. Dinh-Liem Nguyen",
  advisorUrl: "https://sites.google.com/site/dinhliemnguyen/home",
  office: "Cardwell Hall",
  email: "nhungnh@ksu.edu",
  altEmail: "nhungnh2102@gmail.com",
  linkedin: "https://www.linkedin.com/in/nhung-nguyen-802846373/",
  github: "https://github.com/nhungnh-dot",
  originalWebsite: "https://nhungnh-dot.github.io/nhungnh/index.html",
  profileImage: `${import.meta.env.BASE_URL}profile-image.png`,
  logoImage: `${import.meta.env.BASE_URL}logo.png`,
  bio: "Welcome to my homepage! I am a PhD candidate in Mathematics at Kansas State University, working under the supervision of Prof. Dinh-Liem Nguyen. My research focuses on computational inverse problems, imaging, inverse scattering, and source reconstruction.",
  researchSummary: "My research interests lie in inverse scattering problems for partial differential equations, computational imaging, artificial intelligence, and machine learning. My primary research focuses on developing mathematical and computational methods for inverse scattering and source reconstruction, with applications to acoustic and electromagnetic waves. I am also interested in AI and machine learning and their applications to scientific computing.",
  researchKeywords: [
    "Inverse Problems",
    "Computational Imaging",
    "Partial Differential Equations",
    "Physics-Informed Neural Networks (PINNs)",
    "Machine Learning",
    "AI"
  ]
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "ksu-phd",
    degree: "Ph.D. in Mathematics",
    institution: "Kansas State University",
    location: "Manhattan, Kansas, USA",
    period: "2023 – Present (Expected Summer 2028)",
    link: "https://www.math.ksu.edu/",
    details: "Supervised by Prof. Dinh-Liem Nguyen. Specializing in computational inverse problems, imaging, and scientific computing."
  },
  {
    id: "hcmue-bs",
    degree: "B.S. in Mathematics",
    institution: "Ho Chi Minh City University of Education",
    location: "Ho Chi Minh City, Viet Nam",
    period: "Graduated Spring 2023",
    link: "https://hcmue.edu.vn/vi/khoa-bo-mon/khoa-toan-tin",
    details: "Department of Mathematics & Computer Science. Graduated with high honors; research in fluid dynamics and partial differential equations."
  }
];

export const EMPLOYMENT_DATA = [
  {
    title: "Graduate Research Assistant",
    semesters: ["Spring 2025", "Fall 2026"],
    type: "Research",
    description: "Conducting research on inverse problems, as well as exploring applications of machine learning and artificial intelligence in education."
  },
  {
    title: "REU Graduate Assistant",
    semesters: ["Summer 2025"],
    type: "Mentoring & Research",
    description: "Assisting faculty and co-mentoring undergraduate cohorts in the Summer Undergraduate Mathematics Research (SUMaR) REU program."
  },
  {
    title: "Graduate Organizational Assistant",
    semesters: ["Fall 2025", "Spring 2026"],
    type: "Administration & Service",
    description: "Departmental academic coordination, colloquium/seminar event support, and recruitment initiatives."
  },
  {
    title: "Graduate Teaching Assistant",
    semesters: ["Spring 2024", "Summer 2024", "Fall 2024", "Summer 2025", "Fall 2025", "Spring 2026", "Summer 2026"],
    type: "Teaching",
    description: "Serving as primary lecturer, recitation leader, and lab instructor across calculus, differential equations, and linear algebra courses."
  }
];

export const PUBLICATIONS_LIST: Publication[] = [
  {
    id: "pub-1",
    title: "A spectral model-informed neural network for inverse source problems",
    authors: ["Dinh-Liem Nguyen", "Nhung H. Nguyen", "Aravinth Ravi"],
    venue: "Submitted to peer-reviewed journal",
    year: 2026,
    status: "submitted",
    tags: ["Inverse Source Problems", "PINNs", "Spectral Methods", "Scientific ML"],
    abstract: "We introduce a novel spectral model-informed neural network architecture designed for inverse source problems governed by Helmholtz and wave equations. By embedding Chebyshev and Fourier spectral bases into the loss formulation, our approach dramatically accelerates convergence and provides robust reconstructions from noisy boundary sensors.",
    bibtex: `@article{nguyen2026spectral,
  title={A spectral model-informed neural network for inverse source problems},
  author={Nguyen, Dinh-Liem and Nguyen, Nhung H. and Ravi, Aravinth},
  journal={submitted},
  year={2026}
}`
  },
  {
    id: "pub-2",
    title: "Identifying defective units in infinite periodic arrays of point sources",
    authors: ["Dinh-Liem Nguyen", "Nhung H. Nguyen", "Thi-Phong Nguyen"],
    venue: "Inverse Problems",
    year: 2026,
    status: "published",
    doi: "10.1088/1361-6420/ae9980",
    tags: ["Inverse Scattering", "Periodic Arrays", "Acoustic Waves", "Point Sources"],
    abstract: "This work investigates the inverse problem of identifying defective elements within infinite periodic arrays of point-like acoustic and electromagnetic radiators. We develop a quasi-periodic Floquet-Bloch analysis coupled with non-destructive sampling algorithms to locate damaged or uncalibrated units from phaseless/phased measurement fields.",
    bibtex: `@article{nguyen2026identifying,
  title={Identifying defective units in infinite periodic arrays of point sources},
  author={Nguyen, Dinh-Liem and Nguyen, Nhung H. and Nguyen, Thi-Phong},
  journal={submitted},
  year={2026}
}`
  },
  {
    id: "pub-3",
    title: "Regularity for the steady Stokes-type flow of incompressible Newtonian fluids in some generalized function settings",
    authors: ["Minh-Phuong Tran", "Thanh-Nhan Nguyen", "Hong-Nhung Nguyen"],
    venue: "Nonlinear Analysis: Real World Applications, Vol. 77, 104049",
    year: 2024,
    status: "published",
    doi: "10.1016/j.nonrwa.2023.104049",
    tags: ["Fluid Mechanics", "Stokes Flow", "PDE", "Regularity Theory"],
    abstract: "We investigate the global gradient estimates and boundary regularity for steady Stokes-type systems modeling incompressible Newtonian fluids subject to non-standard growth conditions in generalized Orlicz-Sobolev spaces. Under minimal boundary smoothness, Calderón-Zygmund type estimates are established.",
    bibtex: `@article{tran2024regularity,
  title={Regularity for the steady Stokes-type flow of incompressible Newtonian fluids in some generalized function settings},
  author={Tran, Minh-Phuong and Nguyen, Thanh-Nhan and Nguyen, Hong-Nhung},
  journal={Nonlinear Analysis: Real World Applications},
  volume={77},
  pages={104049},
  year={2024},
  publisher={Elsevier},
  doi={10.1016/j.nonrwa.2023.104049}
}`
  }
];

export const TALKS_LIST: Talk[] = [
  // Invited Talks
  {
    id: "talk-inv-1",
    title: "Invited Minisymposium Speaker",
    event: "New York – New Jersey – Pennsylvania Section of SIAM Annual Meeting 2025",
    date: "Oct 31 – Nov 2, 2025",
    location: "The Pennsylvania State University, University Park, PA",
    type: "invited",
    session: "Minisymposium",
    format: "in-person"
  },
  {
    id: "talk-inv-2",
    title: "Graduate Research in Computational Mathematics",
    event: "Department of Mathematics Recruiting Event",
    date: "Mar 6 – 9, 2025",
    location: "Kansas State University, Manhattan, KS",
    type: "invited",
    session: "Graduate Student Research Panel & Seminar",
    format: "in-person"
  },
  {
    id: "talk-inv-3",
    title: "Invited Minisymposium Speaker",
    event: "The 9th Annual Meeting of SIAM Central States Section",
    date: "Oct 5 – 6, 2024",
    location: "University of Missouri - Kansas City, Kansas City, MO",
    type: "invited",
    session: "Minisymposium",
    format: "in-person"
  },

  // Contributed Talks
  // {
  //   id: "talk-con-1",
  //   title: "Contributed Presentation",
  //   event: "MATH FOR ALL Conference 2026",
  //   date: "Apr 10 – 11, 2026",
  //   location: "Virtual Conference",
  //   type: "contributed",
  //   format: "virtual"
  // },
  {
    id: "talk-con-2",
    title: "Contributed Presentation",
    event: "The Fifteenth Ohio River Analysis Meeting",
    date: "Mar 21 – 22, 2026",
    location: "University of Kentucky, Lexington, KY",
    type: "contributed",
    format: "in-person"
  },
  {
    id: "talk-con-3",
    title: "Contributed Presentation",
    event: "The 21st Prairie Analysis Seminar",
    date: "Nov 7 – 8, 2025",
    location: "Kansas State University, Manhattan, KS",
    type: "contributed",
    format: "in-person"
  },
  // {
  //   id: "talk-con-4",
  //   title: "Contributed Presentation",
  //   event: "The 3rd UNC Greensboro Virtual PDE Conference",
  //   date: "Oct 10 – 12, 2025",
  //   location: "Virtual Conference",
  //   type: "contributed",
  //   format: "virtual"
  // },
  {
    id: "talk-con-5",
    title: "Contributed Presentation",
    event: "The 10th Annual Meeting of SIAM Central States Section",
    date: "Oct 11 – 12, 2025",
    location: "University of Arkansas, Fayetteville, AR",
    type: "contributed",
    format: "in-person"
  },
  // {
  //   id: "talk-con-6",
  //   title: "Contributed Presentation",
  //   event: "The 3rd International Mathematics and Statistics Student Research Symposium",
  //   date: "Apr 12, 2025",
  //   location: "Virtual Conference",
  //   type: "contributed",
  //   format: "virtual"
  // },
  {
    id: "talk-con-7",
    title: "Contributed Presentation",
    event: "AMS Sectional Meeting Program - 2025 Spring Central Sectional Meeting",
    date: "Mar 29 – 30, 2025",
    location: "University of Kansas, Lawrence, KS",
    type: "contributed",
    format: "in-person"
  },

  // Poster Presentations
  {
    id: "talk-pos-1",
    title: "Poster Presentation: Neural Network Architectures for Inverse Problems",
    event: "2025 K-State AI Symposium: Humans and the Machine",
    date: "Oct 14 – 16, 2025",
    location: "Kansas State University, Manhattan, KS",
    type: "poster",
    format: "in-person"
  },
  {
    id: "talk-pos-2",
    title: "Poster Presentation: Mathematical Analysis of Wave Scattering",
    event: "Prairie Analysis Seminar",
    date: "Oct 25 – 26, 2024",
    location: "University of Kansas, Lawrence, KS",
    type: "poster",
    format: "in-person"
  }
];

export const TEACHING_LIST: CourseTeaching[] = [
  // Lecturer
  {
    id: "teach-1",
    code: "MATH 340",
    title: "Elementary Differential Equations",
    role: "Lecturer",
    term: "Summer 2026",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "First-order equations, linear differential equations of higher order, Laplace transforms, power series solutions, and systems of linear differential equations with applications to physics and engineering."
  },
  {
    id: "teach-2",
    code: "MATH 220",
    title: "Analytic Geometry and Calculus I",
    role: "Lecturer",
    term: "Summer 2025",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Limits, continuity, derivatives of algebraic and transcendental functions, applications of differentiation, and the Fundamental Theorem of Calculus."
  },
  {
    id: "teach-3",
    code: "MATH 499",
    title: "Mathematics Modeling Seminar",
    role: "Lecturer",
    term: "Spring 2025",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Capstone seminar focusing on formulations of real-world physical, ecological, and industrial models using ODEs, discrete dynamical systems, and numerical simulations."
  },
  {
    id: "teach-4",
    code: "MATH 551",
    title: "Applied Matrix Theory",
    role: "Lecturer",
    term: "Summer 2024",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Vector spaces, linear transformations, matrices, determinants, eigenvalues and eigenvectors, diagonalization, and applications to numerical methods."
  },

  // Recitation instructor
  {
    id: "teach-5",
    code: "MATH 221",
    title: "Analytic Geometry and Calculus II",
    role: "Recitation Instructor",
    term: "Spring 2026",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Techniques of integration, applications to area/volume/work, parametric equations, polar coordinates, infinite sequences, and series."
  },
  {
    id: "teach-6",
    code: "MATH 150",
    title: "Plane Trigonometry",
    role: "Recitation Instructor",
    term: "Fall 2025",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Trigonometric functions, graphs, identities, conditional equations, and law of sines/cosines."
  },
  {
    id: "teach-7",
    code: "MATH 100",
    title: "Studio College Algebra",
    role: "Recitation Instructor",
    term: "Fall 2024",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Active-learning studio format for equations, polynomials, rational functions, and logarithmic and exponential functions."
  },
  {
    id: "teach-8",
    code: "MATH 100",
    title: "Traditional College Algebra",
    role: "Recitation Instructor",
    term: "Spring 2024",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Discussion recitations, problem solving, and targeted student assessments."
  },

  // Coordinator
  {
    id: "teach-9",
    code: "MATH 340",
    title: "Elementary Differential Equations",
    role: "Coordinator",
    term: "Summer 2026",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Course syllabus design, exam preparation, grading rubric coordination, and student support management."
  },

  // Lab Instructor
  {
    id: "teach-10",
    code: "MATH 100",
    title: "Studio College Algebra",
    role: "Lab Instructor",
    term: "Fall 2024",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Facilitating computer-aided algebra laboratory sessions."
  },
  {
    id: "teach-11",
    code: "MATH 551",
    title: "Applied Matrix Theory",
    role: "Lab Instructor",
    term: "Summer 2024",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Computational matrix algorithms, MATLAB/Python linear algebra exercises, and numerical experiments."
  },

  // Substitute Instructor
  {
    id: "teach-12",
    code: "MATH 716",
    title: "Applied Mathematics II",
    role: "Substitute Instructor",
    term: "Spring 2026",
    institution: "Kansas State University",
    level: "Graduate",
    description: "Graduate level instruction in advanced applied mathematics, boundary value problems, and green's functions."
  },
  {
    id: "teach-13",
    code: "MATH 199",
    title: "Pre-Calculus",
    role: "Substitute Instructor",
    term: "Fall 2024",
    institution: "Kansas State University",
    level: "Undergraduate",
    description: "Foundational mathematics, algebraic functions, and coordinate geometry."
  },

  // Session Leader
  {
    id: "teach-14",
    code: " ",
    title: "Qualifying Exam I Review Sessions",
    role: "Session Leader",
    term: "2026",
    institution: "Kansas State University",
    level: "Graduate",
    description: "Leading comprehensive review and problem-solving workshops for incoming graduate students preparing for departmental Ph.D. qualifying examinations."
  },

  // High School Internships in Vietnam
  {
    id: "teach-15",
    code: " ",
    title: "Pre-Calculus (Teaching Internship)",
    role: "Lecturer",
    term: "Feb 2023 – Apr 2023",
    institution: "Nguyen Trung Truc High School, Ho Chi Minh City, Viet Nam",
    level: "High School",
    description: "Teaching internship as a designated component of the bachelor's pedagogical degree in Mathematics at HCMUE."
  },
  {
    id: "teach-16",
    code: " ",
    title: "Pre-Calculus (Teaching Internship)",
    role: "Lecturer",
    term: "Mar 2022 – Apr 2022",
    institution: "Dien Hong High School, Ho Chi Minh City, Viet Nam",
    level: "High School",
    description: "Teaching internship introducing advanced trigonometry, sequences, and mathematical analysis foundations."
  }
];

export const MENTORED_STUDENTS_LIST: MentoredStudent[] = [
  {
    id: "ment-1",
    studentName: "Giovanni Poggi-Corradini",
    affiliation: "Kansas State University",
    program: "Directed Reading Program (DRP)",
    term: "Spring 2026",
    projects: [
      "Optimization strategies for neural networks: Gradient descent vs. Adam"
    ]
  },
  {
    id: "ment-2",
    studentName: "Vivian Nguyen",
    affiliation: "Kansas State University",
    program: "Undergraduate Research Project & Directed Reading Program (DRP)",
    term: "Spring 2025 & Fall 2025",
    coMentors: "Co-mentored with faculty",
    projects: [
      "Inverse source problem with extended sources (Fall 2025)",
      "Numerical integration and MATLAB scientific computing (Spring 2025)"
    ]
  },
  {
    id: "ment-3",
    studentName: "Xavier Diamond, Selena Nguyen & Jordan Tierney",
    affiliation: "UC Santa Cruz, Southern Connecticut State Univ & Colorado School of Mines",
    program: "SUMaR REU (Summer Undergraduate Mathematics Research)",
    term: "Summer 2025",
    coMentors: "Co-mentored with Prof. Dinh-Liem Nguyen",
    projects: [
      "Direct and inverse problem in waveguides"
    ]
  },
  {
    id: "ment-4",
    studentName: "Jayci Shepard",
    affiliation: "Kansas State University",
    program: "Undergraduate Research Project & Directed Reading Program (DRP)",
    term: "Fall 2024",
    coMentors: "Co-mentored with faculty",
    projects: [
      "Quantitative imaging of point-like targets"
    ]
  }
];

export const MENTORING_ACTIVITIES_LIST: MentoringActivity[] = [
  {
    id: "act-1",
    title: "SUMaR REU Computing Workshops",
    role: "Tutorial Instructor",
    term: "Summer 2025",
    description: "Served as tutorial instructor for computing workshops, guiding REU students in scientific computing, MATLAB numerical methods, and mathematical simulations."
  },
  {
    id: "act-2",
    title: "Mathematics Department Recruitment Event",
    role: "Panelist",
    term: "Spring 2025 & Spring 2026",
    description: "Invited panelist sharing perspectives on graduate research, coursework, and academic life with prospective graduate students."
  },
  {
    id: "act-3",
    title: "SUMaR Undergraduate Research Panel",
    role: "Panelist",
    term: "Summer 2024 & Summer 2025",
    description: "Panelist providing career advice, research guidance, and graduate school preparation insights for national undergraduate REU participants."
  }
];
