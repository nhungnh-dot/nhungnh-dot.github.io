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
  profileImage: `${import.meta.env.BASE_URL}profile-image.png`,
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
