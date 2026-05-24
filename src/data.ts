import { Publication, Talk, Course, MentoredStudent, AcademicService } from "./types";

export const PERSONAL_INFO = {
  name: "Nhung H. Nguyen",
  title: "Ph.D. Candidate in Mathematics",
  institution: "Kansas State University",
  department: "Department of Mathematics",
  office: "Cardwell Hall",
  email: "nhungnh@ksu.edu",
  linkedin: "https://www.linkedin.com/in/nhung-nguyen-802846373/",
  advisor: "Prof. Dinh-Liem Nguyen",
  advisorUrl: "https://sites.google.com/site/dinhliemnguyen/home",
  ksuMathUrl: "https://www.math.ksu.edu/",
  bio: "I am a Ph.D. candidate in Mathematics at Kansas State University, advised by Prof. Dinh-Liem Nguyen. My research focuses on computational inverse problems, scientific computing, imaging, and source reconstruction.",
  education: [
    {
      degree: "Ph.D. in Mathematics",
      institution: "Kansas State University, USA",
      period: "Expected Summer 2028",
      details: "Research focus: Computational inverse problems, partial differential equations, inverse scattering, wave propagation, and spectral neural networks."
    },
    {
      degree: "B.S. in Mathematics",
      institution: "Ho Chi Minh City University of Education, Viet Nam",
      period: "Graduated Spring 2023",
      details: "Excellent Student Honors, Thesis on Stokes-type flow equations in generalized function settings under the supervision of Dr. Minh-Phuong Tran."
    }
  ],
  interests: [
    "Inverse problems",
    "Scattering theory",
    "Deep learning",
    "Physic-informed neural networks"
  ]
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: "A spectral model-informed neural network for inverse source problems",
    authors: ["Dinh-Liem Nguyen", "Nhung H. Nguyen", "Aravinth Ravi"],
    journalOrStatus: "submitted",
    year: 2026,
    category: "submitted",
    abstract: "This paper introduces a novel spectral model-informed neural network (SMINN) designed to solve the multi-frequency inverse source problem. By embedding the spectral representation of the wave operator directly into the loss formulation, the network learns to reconstruct multi-source configurations with high fidelity under high noise levels, overcoming traditional optimization bottlenecks and computational layout restrictions.",
    pdfUrl: "#"
  },
  {
    id: "pub-2",
    title: "Identifying defective units in infinite periodic arrays of point sources",
    authors: ["Dinh-Liem Nguyen", "Nhung H. Nguyen", "Thi-Phong Nguyen"],
    journalOrStatus: "submitted",
    year: 2026,
    category: "submitted",
    abstract: "We investigate the non-destructive testing problem of identifying perturbed (defective) elements in an infinite periodic array of acoustic active point sources. Using far-field measurements or near-field scanning, we formulate a fast, direct imaging methodology with high resolution. Mathematical proofs for the uniqueness of the defect configuration and stable reconstruction algorithms are provided.",
    pdfUrl: "#"
  },
  {
    id: "pub-3",
    title: "Regularity for the steady Stokes-type flow of incompressible Newtonian fluids in some generalized function settings",
    authors: ["Minh-Phuong Tran", "Thanh-Nhan Nguyen", "Hong-Nhung Nguyen"],
    journalOrStatus: "Nonlinear Analysis: Real World Applications, 77, 104049",
    year: 2024,
    doi: "10.1016/j.nonrwa.2023.104049",
    category: "journal",
    abstract: "We investigate the existence, uniqueness, and regularity results for the weak solution of steady Stokes-type fluids in generalized Sobolev-Morrey spaces. The paper establishes analytical bounds and regularity criteria with nonsmooth boundary data, expanding classical Newtonian fluid formulations to highly general function spaces."
  }
];

export const TALKS: Talk[] = [
  // Invited
  {
    id: "talk-1",
    title: "Spectral Neural Networks for Multi-Frequency Source Fields",
    event: "New York – New Jersey – Pennsylvania Section of SIAM Annual Meeting 2025, Minisymposium",
    location: "The Pennsylvania State University, Pennsylvania, USA",
    dateRange: "Oct 31 - Nov 2, 2025",
    type: "invited"
  },
  {
    id: "talk-2",
    title: "Inverse Scattering and Computational Wave Imaging",
    event: "Department of Mathematics Recruiting Event, Kansas State University",
    location: "Manhattan, Kansas, USA",
    dateRange: "Mar 6 - 9, 2025",
    type: "invited"
  },
  {
    id: "talk-3",
    title: "Active Term Identification in Acoustic Media",
    event: "The 9th Annual Meeting of SIAM Central States Section, Minisymposium",
    location: "University of Missouri - Kansas City, Missouri, USA",
    dateRange: "Oct 5 - 6, 2024",
    type: "invited"
  },
  // Contributed
  {
    id: "talk-4",
    title: "Recent Advances in Source Reconstruction and Machine Learning for PDEs",
    event: "MATH FOR ALL conference 2026",
    location: "Virtual Event",
    dateRange: "Apr 10 - 11, 2026",
    type: "contributed"
  },
  {
    id: "talk-5",
    title: "Spectral Priors for Solving Wave Inversion Schemes",
    event: "The Fifteenth Ohio River Analysis Meeting",
    location: "University of Kentucky, Lexington, KY, USA",
    dateRange: "Mar 21 - 22, 2026",
    type: "contributed"
  },
  {
    id: "talk-6",
    title: "Identifying Perturbed Radiators in Grated Structural Arrays",
    event: "The 21st Prairie Analysis Seminar",
    location: "Kansas State University, Manhattan, KS, USA",
    dateRange: "Nov 7 - 8, 2025",
    type: "contributed"
  },
  {
    id: "talk-7",
    title: "Inexact Spectral Backpropagation for Multi-frequency Active Arrays",
    event: "The 3rd UNC Greensboro Virtual PDE Conference",
    location: "Virtual Event",
    dateRange: "Oct 10 - 12, 2025",
    type: "contributed"
  },
  {
    id: "talk-8",
    title: "Imaging Local Violations in Lattice Multi-sources",
    event: "The 10th Annual Meeting of SIAM Central States Section",
    location: "University of Arkansas, Fayetteville, AR, USA",
    dateRange: "Oct 11 - 12, 2025",
    type: "contributed"
  },
  {
    id: "talk-9",
    title: "Inverse Scattering Theory: Analytical Formulations & Numerical Implementations",
    event: "The 3rd International Mathematics and Statistics Student Research Symposium",
    location: "Virtual Event",
    dateRange: "Apr 12, 2025",
    type: "contributed"
  },
  {
    id: "talk-10",
    title: "Direct Reconstruction Methods for Non-destructive Defect Scanning",
    event: "AMS Sectional Meeting Program - 2025 Spring Central Sectional Meeting",
    location: "University of Kansas, Lawrence, KS, USA",
    dateRange: "Mar 29 - 30, 2025",
    type: "contributed"
  },
  // Posters
  {
    id: "talk-11",
    title: "Deep Neural Network Priors for Complex Wave Helmholtz Systems",
    event: "2025 K-State AI Symposium: Humans and the Machine",
    location: "Kansas State University, Manhattan, KS, USA",
    dateRange: "Oct 14 - 16, 2025",
    type: "poster"
  },
  {
    id: "talk-12",
    title: "Biharmonic Inverse Scattering and Waveguide Perturbations",
    event: "Prairie Analysis Seminar",
    location: "University of Kansas, Lawrence, KS, USA",
    dateRange: "Oct 25 - 26, 2024",
    type: "poster"
  }
];

export const COURSES: Course[] = [
  {
    id: "course-1",
    code: "MATH 340",
    name: "Elementary Differential Equations",
    roles: ["Lecturer", "Coordinator", "Lab Instructor"],
    institution: "Kansas State University",
    semesters: ["Summer 2026"],
    description: "Ordinary differential equations, focusing on first-order equations, linear equations of higher order, systems of differential equations, Laplace transforms, and series solutions. Served as both primary Lecturer and course-wide Coordinator, setting curricula and overseeing exams.",
    level: "Undergraduate"
  },
  {
    id: "course-2",
    code: "MATH 220",
    name: "Analytic Geometry and Calculus I",
    roles: ["Lecturer"],
    institution: "Kansas State University",
    semesters: ["Summer 2025"],
    description: "Calculus of a single variable, including limits, continuity, differentiation, applications of derivatives (optimization, curve sketching), and an introduction to integration with the Fundamental Theorem of Calculus.",
    level: "Undergraduate"
  },
  {
    id: "course-3",
    code: "MATH 499",
    name: "Mathematics Modeling Seminar",
    roles: ["Lecturer"],
    institution: "Kansas State University",
    semesters: ["Spring 2025"],
    description: "Interactive project-based seminar where students formulate, analyze, and simulate mathematical models of real-world phenomena from biology, physics, and economics, using Matlab, Python, and ODE systems.",
    level: "Undergraduate"
  },
  {
    id: "course-4",
    code: "MATH 551",
    name: "Applied Matrix Theory",
    roles: ["Lecturer", "Lab Instructor"],
    institution: "Kansas State University",
    semesters: ["Summer 2024"],
    description: "Systems of linear equations, matrices, determinants, vector spaces, inner product spaces, linear transformations, eigenvalues and eigenvectors. Included leading scientific computing labs using Matlab to implement numerical linear algebra routines.",
    level: "Undergraduate"
  },
  {
    id: "course-5",
    code: "MATH 221",
    name: "Analytic Geometry and Calculus II",
    roles: ["Recitation Instructor"],
    institution: "Kansas State University",
    semesters: ["Spring 2026"],
    description: "Applications of integration, techniques of integration, l'Hopital's rule, improper integrals, infinite sequences and series, Taylor series, parametric equations, and polar coordinates.",
    level: "Undergraduate"
  },
  {
    id: "course-6",
    code: "MATH 150",
    name: "Plane Trigonometry",
    roles: ["Recitation Instructor"],
    institution: "Kansas State University",
    semesters: ["Fall 2025"],
    description: "Trigonometric functions, identities, equations, solution of triangles, inverse trigonometric functions, and complex numbers.",
    level: "Undergraduate"
  },
  {
    id: "course-7",
    code: "MATH 100",
    name: "Traditional College Algebra",
    roles: ["Recitation Instructor"],
    institution: "Kansas State University",
    semesters: ["Spring 2024"],
    description: "Fundamental algebraic operations, functions, graphs, systems of linear and nonlinear equations, inequalities, logarithmic and exponential functions.",
    level: "Undergraduate"
  },
  {
    id: "course-8",
    code: "MATH 100 (Studio)",
    name: "Studio College Algebra",
    roles: ["Recitation Instructor", "Lab Instructor"],
    institution: "Kansas State University",
    semesters: ["Fall 2024"],
    description: "Interactive college algebra utilizing computer-assisted learning labs and specialized active-learning group problem-solving sessions.",
    level: "Undergraduate"
  },
  {
    id: "course-9",
    code: "MATH 716",
    name: "Applied Mathematics II",
    roles: ["Substitute Instructor"],
    institution: "Kansas State University",
    semesters: ["Spring 2026"],
    description: "Graduate-level survey of analytical mathematical methods for physics and engineering, focusing heavily on Fourier series, boundary value problems, and partial differential equations.",
    level: "Graduate"
  },
  {
    id: "course-10",
    code: "MATH 199",
    name: "Pre-Calculus",
    roles: ["Substitute Instructor"],
    institution: "Kansas State University",
    semesters: ["Fall 2024"],
    description: "High-intensity foundations covering polynomial, rational, exponential, logarithmic, and trigonometric functions to ensure rigorous preparation for the engineering calculus track.",
    level: "Undergraduate"
  },
  {
    id: "course-11",
    code: "Review Sessions",
    name: "Qualifying Exam I Review Sessions",
    roles: ["Session Leader"],
    institution: "Kansas State University",
    semesters: ["2026"],
    description: "Organized and led intensive review workshops for incoming and first-year Ph.D. students preparing to take the Mathematics Qualifying Exam I covering Linear Algebra and Advanced Calculus.",
    level: "Graduate"
  },
  {
    id: "course-12",
    code: "Teaching Internship",
    name: "Pre-Calculus",
    roles: ["Teaching Intern"],
    institution: "Nguyen Trung Truc High School, Viet Nam",
    semesters: ["Feb 2023 - Apr 2023"],
    description: "Full-time mathematics teaching internship as part of the teacher education program of Ho Chi Minh City University of Education. Designed and delivered pre-calculus lessons.",
    level: "High School"
  },
  {
    id: "course-13",
    code: "Teaching Internship",
    name: "Pre-Calculus",
    roles: ["Teaching Intern"],
    institution: "Dien Hong High School, Viet Nam",
    semesters: ["Mar 2022 - Apr 2022"],
    description: "Delivered interactive lectures, monitored student progress, and supported standard curriculum design for pre-calculus classes in HCMC.",
    level: "High School"
  }
];

export const MENTORED_STUDENTS: MentoredStudent[] = [
  {
    id: "ment-1",
    name: "Giovanni Poggi-Corradini",
    institution: "Kansas State University",
    roleType: "DRP mentor",
    projects: [
      {
        title: "Optimization strategies for neural networks: Gradient descent vs. Adam",
        semester: "Spring 2026"
      }
    ],
    notes: "Guided the student through convergence analysis, visual learning-rate trajectories, local versus global minima, and functional comparisons of optimization solvers on high-dimensional surfaces."
  },
  {
    id: "ment-2",
    name: "Vivian Nguyen",
    institution: "Kansas State University",
    roleType: "undergraduate research co-mentor and DRP mentor",
    projects: [
      {
        title: "Inverse source problem with extended sources",
        semester: "Fall 2025"
      },
      {
        title: "Numerical integration and Matlab",
        semester: "Spring 2025"
      }
    ],
    notes: "Co-mentored an intensive undergraduate research project resulting in stable Matlab codes for numerical quadratures and mapping reconstructed continuous sources via discrete boundary sensor readings."
  },
  {
    id: "ment-3",
    name: "REU Research Team: Xavier Diamond, Selena Nguyen & Jordan Tierney",
    institution: "SUMaR REU (University of California, Santa Cruz, Southern Connecticut State University, Colorado School of Mines)",
    roleType: "REU Co-mentor",
    projects: [
      {
        title: "Direct and inverse problem in waveguides",
        semester: "Summer 2025"
      }
    ],
    notes: "Co-supervised a multi-university REU team investigating acoustic fields in planar waveguides with irregular boundary conditions. Enabled numerical simulations that supported their final research report."
  },
  {
    id: "ment-4",
    name: "Jayci Shepard",
    institution: "Kansas State University",
    roleType: "undergraduate research co-mentor and DRP mentor",
    projects: [
      {
        title: "Quantitative imaging of point-like targets",
        semester: "Fall 2024"
      }
    ],
    notes: "Supervised implementation of the standard sampling method for imaging small, highly scattering spherical inclusions. Evaluated noise limit robustness in synthetic models."
  }
];

export const ACADEMIC_SERVICE: AcademicService[] = [
  {
    id: "serv-1",
    title: "REU Computational Workshop Instructor",
    role: "Tutorial Instructor",
    semesters: ["Summer 2025"],
    description: "Designed and served as a tutorial instructor for computing workshops under the SUMaR REU, introducing students to Matlab."
  },
  {
    id: "serv-2",
    title: "KSU Graduate Recruitment Panel",
    role: "Panelist",
    semesters: ["Spring 2025", "Spring 2026"],
    description: "Shared perspectives on graduate student research, life in Manhattan, Kansas, and the transitioning process into teaching undergraduate courses with newly admitted/prospective math students."
  },
  {
    id: "serv-3",
    title: "SUMaR REU Panelist",
    role: "Panelist",
    semesters: ["Summer 2024", "Summer 2025"],
    description: "Served as a panelist sharing insights in graduate school applications and strategies for identifying research interests for REU students."
  }
];
