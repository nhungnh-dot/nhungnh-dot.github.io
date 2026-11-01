import { Publication, Talk, CourseTeaching, MentoredStudent, MentoringActivity, AwardHonor, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Nhung H. Nguyen",
  alternateName: "Hong-Nhung Nguyen",
  title: "PhD Candidate in Mathematics",
  institution: "Kansas State University",
  institutionUrl: "https://www.ksu.edu/",
  department: "Department of Mathematics",
  departmentUrl: "https://www.math.ksu.edu/",
  advisor: "Prof. Dinh-Liem Nguyen",
  advisorUrl: "https://sites.google.com/site/dinhliemnguyen/home",
  office: "Cardwell Hall, Manhattan, KS 66506",
  email: "nhungnh@ksu.edu",
  altEmail: "nhungnh2102@gmail.com",
  linkedin: "https://www.linkedin.com/in/nhung-nguyen-802846373/",
  github: "https://github.com/nhungnh-dot",
  originalWebsite: "https://nhungnh-dot.github.io/nhungnh/index.html",
  profileImage: 'data:image/jpeg;base64,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',
  logoImage: `${import.meta.env.BASE_URL}logo.png`,
  bio: "Welcome to my homepage! I am a PhD Candidate in Mathematics at Kansas State University, working under the supervision of Prof. Dinh-Liem Nguyen. My research focuses on computational inverse problems, imaging, inverse scattering, and source reconstruction.",
  researchSummary: "My research centers on inverse scattering and source reconstruction for partial differential equations. I am interested in the integration of artificial intelligence and machine learning techniques into scientific computing.",
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
    period: "2024 – Present (Expected Summer 2028)",
    link: "https://www.math.ksu.edu/"
  },
  {
    id: "hcmue-bs",
    degree: "B.S. in Mathematics",
    institution: "Ho Chi Minh City University of Education",
    location: "Ho Chi Minh City, Viet Nam",
    period: "Graduated Spring 2023",
    link: "https://hcmue.edu.vn/vi/khoa-bo-mon/khoa-toan-tin"
  }
];

export const EMPLOYMENT_DATA = [
  {
    title: "Graduate Research Assistant",
    type: "Research",
    description: "Conducting research on inverse scattering, spectral neural networks, as well as exploring applications of machine learning and artificial intelligence in education."
  },
  {
    title: "NSF REU Graduate Assistant",
    type: "Mentoring & Research",
    description: "Assisting faculty and co-mentoring undergraduate cohorts in the Summer Undergraduate Mathematics Research (SUMaR) REU program."
  },
  {
    title: "Graduate Organizational Assistant",
    type: "Administration & Service",
    description: "Departmental academic coordination, colloquium/seminar event support, and recruitment initiatives."
  },
  {
    title: "Graduate Teaching Assistant",
    type: "Teaching",
    description: "Serving as primary lecturer, recitation leader, and lab instructor across calculus, differential equations, and linear algebra courses."
  }
];

export const AWARDS_HONORS_LIST: AwardHonor[] = [
  {
    id: "award-1",
    title: "Stromberg Outstanding Graduate Teaching Assistant in Teaching Award",
    year: "2026",
    institution: "Kansas State University",
    description: "The Department of Mathematics' highest graduate teaching assistant honor, recognizing exceptional classroom instruction and dedication to students."
  },
  {
    id: "award-2",
    title: "Vada F. Hainline Scholarship",
    year: "2026",
    institution: "Kansas State University"
  },
  {
    id: "award-3",
    title: "S. Thomas Parker Memorial Scholarship Fund",
    year: "2026",
    institution: "Kansas State University"
  },
  {
    id: "award-4",
    title: "Dressler Memorial Endowment for the Enrichment of Mathematics Scholarship",
    year: "2026",
    institution: "Kansas State University"
  },
  {
    id: "award-5",
    title: "L. Aileen Hostinsky Memorial Scholarship Fund",
    year: "2026",
    institution: "Kansas State University"
  },
  {
    id: "award-6",
    title: "Karl Stromberg Memorial Endowment for the Enrichment of Mathematics Scholarship",
    year: "2025 - 2026",
    institution: "Kansas State University"
  },
  {
    id: "award-7",
    title: "2025 K-State AI Symposium: Humans and the Machine Poster Award",
    year: "2025",
    institution: "Kansas State University"
  },
  {
    id: "award-8",
    title: "Dr. William L. Stamey Mathematics Scholarship",
    year: "2025 - 2026",
    institution: "Kansas State University"
  },
  {
    id: "award-9",
    title: "Ray and Barbara Farmer Student Innovation Fund",
    year: "2025",
    institution: "Kansas State University"
  },
  {
    id: "award-10",
    title: "I-Center Graduate Scholar Award",
    year: "2025 - 2026",
    institution: "Kansas State University",
    description: "Recognition for mentoring an undergraduate student through a faculty-supervised research project."
  },
  {
    id: "award-11",
    title: "Third Prize, Scientific Research Contest for Undergraduates (University Round)",
    year: "2023",
    institution: "Ho Chi Minh City University of Education"
  },
  {
    id: "award-12",
    title: "First Prize, Scientific Research Contest for Undergraduates (Department Round)",
    year: "2023",
    institution: "Ho Chi Minh City University of Education"
  },
  {
    id: "award-13",
    title: "Scholarships for Students with Excellent Academic Results",
    year: "2019 - 2023",
    institution: "Ho Chi Minh City University of Education"
  },
  {
    id: "award-14",
    title: "Scholarship for Students with Excellent Academic Results",
    year: "2021",
    institution: "Vietnam Institute for Advanced Studies in Mathematics"
  }
];

export const PUBLICATIONS_LIST: Publication[] = [
  {
    id: "pub-4",
    title: "A model-informed deep learning algorithm for solving the phaseless inverse scattering problem",
    authors: ["Dinh-Liem Nguyen", "Nhung H. Nguyen", "Aravinth Ravi"],
    venue: "Submitted",
    year: "",
    status: "submitted",
    tags: [],
    bibtex: `@unpublished{nguyenphaseless,
  title={A model-informed deep learning algorithm for solving the phaseless inverse scattering problem},
  author={Nguyen, Dinh-Liem and Nguyen, Nhung H. and Ravi, Aravinth},
  note={Submitted}
}`
  },
  {
    id: "pub-5",
    title: "Inverse scattering from nonlinear objects in scalar waveguides",
    authors: ["Dinh-Liem Nguyen", "Nhung H. Nguyen", "Thi-Phong Nguyen"],
    venue: "Submitted",
    year: "",
    status: "submitted",
    tags: [],
    bibtex: `@unpublished{nguyennonlinearwaveguides,
  title={Inverse scattering from nonlinear objects in scalar waveguides},
  author={Nguyen, Dinh-Liem and Nguyen, Nhung H. and Nguyen, Thi-Phong},
  note={Submitted}
}`
  },
  {
    id: "pub-1",
    title: "A spectral model-informed neural network for inverse source problems",
    authors: ["Dinh-Liem Nguyen", "Nhung H. Nguyen", "Aravinth Ravi"],
    venue: "Submitted",
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
    venue: "Inverse Problems, 42, 085013, 2026",
    year: 2026,
    status: "published",
    doi: "10.1088/1361-6420/ae9980",
    tags: ["Inverse Scattering", "Periodic Arrays", "Acoustic Waves", "Point Sources"],
    abstract: "This work investigates the inverse problem of identifying defective elements within infinite periodic arrays of point-like acoustic and electromagnetic radiators. We develop a quasi-periodic Floquet-Bloch analysis coupled with non-destructive sampling algorithms to locate damaged or uncalibrated units from phaseless/phased measurement fields.",
    bibtex: `@article{nguyen2026identifying,
  title={Identifying defective units in infinite periodic arrays of point sources},
  author={Nguyen, Dinh-Liem and Nguyen, Nhung H. and Nguyen, Thi-Phong},
  journal={Inverse Problems},
  volume={42},
  pages={085013},
  year={2026},
  doi={10.1088/1361-6420/ae9980}
}`
  },
  {
    id: "pub-3",
    title: "Regularity for the steady Stokes-type flow of incompressible Newtonian fluids in some generalized function settings",
    authors: ["Minh-Phuong Tran", "Thanh-Nhan Nguyen", "Hong-Nhung Nguyen"],
    venue: "Nonlinear Analysis: Real World Applications, 77, 104049, 2024",
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
    title: "Invited Talk",
    event: "New York-New Jersey-Pennsylvania Section of SIAM Annual Meeting 2025",
    date: "Oct 31 – Nov 2, 2025",
    location: "The Pennsylvania State University, Pennsylvania",
    type: "invited",
    session: "Minisymposium",
    format: "in-person"
  },
  {
    id: "talk-inv-2",
    title: "Invited Talk",
    event: "Department of Mathematics Recruiting Event",
    date: "Mar 6 – 9, 2025",
    location: "Kansas State University, Kansas",
    type: "invited",
    format: "in-person"
  },
  {
    id: "talk-inv-3",
    title: "Invited Talk",
    event: "The 9th Annual Meeting of the SIAM Central States Section",
    date: "Oct 5 – 6, 2024",
    location: "University of Missouri-Kansas City, Missouri",
    type: "invited",
    session: "Minisymposium",
    format: "in-person"
  },
  // Contributed Talks
  {
    id: "talk-con-1",
    title: "Contributed Talk",
    event: "MATH FOR ALL Conference 2026",
    date: "Apr 10 – 11, 2026",
    location: "Virtual",
    type: "contributed",
    format: "virtual"
  },
  {
    id: "talk-con-2",
    title: "Contributed Talk",
    event: "The Fifteenth Ohio River Analysis Meeting",
    date: "Mar 21 – 22, 2026",
    location: "University of Kentucky, Kentucky",
    type: "contributed",
    format: "in-person"
  },
  {
    id: "talk-con-3",
    title: "Contributed Talk",
    event: "The 21st Prairie Analysis Seminar",
    date: "Nov 7 – 8, 2025",
    location: "Kansas State University, Kansas",
    type: "contributed",
    format: "in-person"
  },
  {
    id: "talk-con-4",
    title: "Contributed Talk",
    event: "The 3rd UNC Greensboro Virtual PDE Conference",
    date: "Oct 10 – 12, 2025",
    location: "Virtual",
    type: "contributed",
    format: "virtual"
  },
  {
    id: "talk-con-5",
    title: "Contributed Talk",
    event: "The 10th Annual Meeting of the SIAM Central States Section",
    date: "Oct 11 – 12, 2025",
    location: "University of Arkansas, Arkansas",
    type: "contributed",
    format: "in-person"
  },
  {
    id: "talk-con-6",
    title: "Contributed Talk",
    event: "The 3rd International Mathematics and Statistics Student Research Symposium",
    date: "Apr 12, 2025",
    location: "Virtual",
    type: "contributed",
    format: "virtual"
  },
  {
    id: "talk-con-7",
    title: "Contributed Talk",
    event: "AMS 2025 Spring Central Sectional Meeting",
    date: "Mar 29 – 30, 2025",
    location: "University of Kansas, Kansas",
    type: "contributed",
    format: "in-person"
  },
  // Poster Presentations
  {
    id: "talk-pos-1",
    title: "Poster Presentation",
    event: "2025 K-State AI Symposium: Humans and the Machine",
    date: "Oct 14 – 16, 2025",
    location: "Kansas State University, Kansas",
    type: "poster",
    format: "in-person"
  },
  {
    id: "talk-pos-2",
    title: "Poster Presentation",
    event: "Prairie Analysis Seminar",
    date: "Oct 25 – 26, 2024",
    location: "University of Kansas, Kansas",
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
    id: "teach-10a",
    code: "MATH 340",
    title: "Elementary Differential Equations",
    role: "Lab Instructor",
    term: "Summer 2026",
    institution: "Kansas State University",
    level: "Undergraduate"
  },
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
    title: "Qualifying Exam I Review Sessions",
    role: "Session Leader",
    term: "2026",
    institution: "Kansas State University",
    level: "Graduate",
    description: "Leading comprehensive review and problem-solving workshops for incoming graduate students preparing for departmental Ph.D. qualifying examinations."
  },

  {
    id: "teach-14b",
    title: "Model Recitation for Incoming Graduate Teaching Assistants",
    role: "Teaching Demonstration Presenter",
    term: "Summer 2026",
    institution: "Kansas State University",
    level: "Graduate"
  },

  // High School Internships in Vietnam
  {
    id: "teach-15",
    title: "Pre-Calculus",
    role: "Lecturer",
    term: "Feb 2023 – Apr 2023",
    institution: "Nguyen Trung Truc High School, Ho Chi Minh City, Viet Nam",
    level: "High School",
    description: "Teaching internship as a designated component of the bachelor's pedagogical degree in Mathematics at HCMUE."
  },
  {
    id: "teach-16",
    title: "Pre-Calculus",
    role: "Lecturer",
    term: "Mar 2022 – Apr 2022",
    institution: "Dien Hong High School, Ho Chi Minh City, Viet Nam",
    level: "High School",
    description: "Teaching internship as a designated component of the bachelor's pedagogical degree in Mathematics at HCMUE."
  }
];

export const MENTORED_STUDENTS_LIST: MentoredStudent[] = [
  {
    id: "ment-5",
    studentName: "Noah Kelemen",
    affiliation: "Kansas State University",
    program: "Co-mentor, undergraduate research project",
    term: "Fall 2026",
    projects: ["A model-informed neural network approach to inverse source identification"]
  },
  {
    id: "ment-6",
    studentName: "Tristan Palnau",
    affiliation: "Kansas State University",
    program: "Mentor, Directed Reading Program",
    term: "Fall 2026",
    projects: ["From gradient descent to machine learning: An introduction to optimization"]
  },
  {
    id: "ment-1",
    studentName: "Giovanni Poggi-Corradini",
    affiliation: "Kansas State University",
    program: "Mentor, Directed Reading Program",
    term: "Spring 2026",
    projects: ["Optimization strategies for neural networks: Gradient descent vs. Adam"]
  },
  {
    id: "ment-2",
    studentName: "Vivian Nguyen",
    affiliation: "Kansas State University",
    program: "Mentor, Directed Reading Program; co-mentor, undergraduate research project",
    term: "Spring – Fall 2025",
    projects: ["Inverse source problem with extended sources", "Numerical integration and MATLAB"]
  },
  {
    id: "ment-3",
    studentName: "Xavier Diamond, Selena Nguyen, and Jordan Tierney",
    affiliation: "University of California, Santa Cruz; Southern Connecticut State University; Colorado School of Mines",
    program: "Co-mentor, Summer Undergraduate Mathematics Research (SUMaR) REU",
    term: "Summer 2025",
    projects: ["Direct and inverse problems in waveguides"]
  },
  {
    id: "ment-4",
    studentName: "Jayci Shepard",
    affiliation: "Kansas State University",
    program: "Mentor, Directed Reading Program; co-mentor, undergraduate research project",
    term: "Fall 2024",
    projects: ["Quantitative imaging of point-like targets"]
  }
];

export const MENTORING_ACTIVITIES_LIST: MentoringActivity[] = [
  {
    id: "act-4",
    title: "Sonia Kovalevsky Day: Workshops for Middle School Students",
    role: "Organizer",
    term: "Spring 2025; Spring 2026",
    description: "Kansas State University"
  },
  {
    id: "act-5",
    title: "Peer to Peer Program",
    role: "Mentor",
    term: "2025; 2026",
    description: "Kansas State University"
  },
  {
    id: "act-6",
    title: "Association of Women in Mathematics",
    role: "Graduate Student Leadership",
    term: "Fall 2025 – Fall 2026",
    description: "Kansas State University"
  },
  {
    id: "act-7",
    title: "Math Kangaroo Competition",
    role: "Proctor",
    term: "Spring 2025; Spring 2026",
    description: "Kansas State University"
  },
  {
    id: "act-8",
    title: "2026 AMS Graduate School Fair at the Joint Mathematics Meetings",
    role: "Graduate Student Representative",
    term: "Spring 2026"
  },
  {
    id: "act-9",
    title: "K-State Math Graduate Programs – Online Information Session",
    role: "Graduate Student Representative",
    term: "Spring 2026",
    description: "Kansas State University"
  },
  {
    id: "act-10",
    title: "Mathematics Modeling Section at Theodore Roosevelt Elementary School",
    role: "Assistant",
    term: "Fall 2026",
    description: "Manhattan, Kansas"
  },
  {
    id: "act-11",
    title: "38th Automorphic Forms Workshop",
    role: "Assistant",
    term: "Spring 2026"
  },
  {
    id: "act-12",
    title: "K-State Open House",
    role: "Assistant",
    term: "Spring 2026"
  },
  {
    id: "act-13",
    title: "Department of Mathematics Recruiting Event",
    role: "Assistant",
    term: "Spring 2025; Spring 2026",
    description: "Kansas State University"
  },
  {
    id: "act-14",
    title: "Graduate Student Seminar Panel",
    role: "Panelist",
    term: "Fall 2026"
  },
  {
    id: "act-15",
    title: "Mathematics Recruitment Event Panel",
    role: "Panelist",
    term: "Spring 2025; Spring 2026"
  },
  {
    id: "act-3",
    title: "Summer Undergraduate Mathematics Research (SUMaR) Panel for Undergraduate Students",
    role: "Panelist",
    term: "Summer 2024; Summer 2025"
  }
];
