export const profile = {
  name: 'Akash V K',
  role: 'Software Engineer',
  headline: 'Building Full-Stack Web Applications, AI Tools & Intelligent IoT Systems',
  email: 'akashvk5757@gmail.com',
  linkedin: 'https://www.linkedin.com/in/akashvk/',
  github: 'https://github.com/AkashVK04',
  photo: '/profile.png',
  resume: '/resume.pdf',
  location: 'Bengaluru, India',
  about:
    "I'm a Computer Science and Engineering student focused on building practical, full-stack software applications and intelligent systems. I enjoy working with Java, React, AI integrations, database systems, and IoT control — constantly sharpening my technical fundamentals and preparing for high-impact software engineering roles.",
}

// Contact form delivery configuration (Web3Forms / Formspree)
export const contactConfig = {
  web3formsAccessKey: typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    ? import.meta.env.VITE_WEB3FORMS_ACCESS_KEY.trim()
    : '',
  formspreeId: typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_FORMSPREE_ID
    ? import.meta.env.VITE_FORMSPREE_ID.trim()
    : '',
}

export const navLinks = [
  { id: 'home', number: '00', label: 'Intro', href: '#home' },
  { id: 'about', number: '01', label: 'Background', href: '#about' },
  { id: 'projects', number: '02', label: 'Work', href: '#projects' },
  { id: 'engineering', number: '03', label: 'Engineering', href: '#engineering' },
  { id: 'skills', number: '04', label: 'Toolkit', href: '#skills' },
  { id: 'education', number: '05', label: 'Education', href: '#education' },
  { id: 'contact', number: '06', label: 'Contact', href: '#contact' },
]

export const engineeringPillars = [
  {
    number: '01',
    title: 'BUILD',
    headline: 'Practical Software & AI Tools',
    description: 'Transforming concepts into working web applications, enterprise workflows, automated pipelines, and speech-enabled AI interfaces.',
  },
  {
    number: '02',
    title: 'SOLVE',
    headline: 'Structured Problem Solving',
    description: 'Deconstructing core challenges into clean data structures, efficient algorithms, role-based security, and robust component architecture.',
  },
  {
    number: '03',
    title: 'LEARN',
    headline: 'Continuous Engineering Mastery',
    description: 'Deepening technical fundamentals across Java 21, Spring Boot, React ecosystems, PostgreSQL, and machine learning models.',
  },
  {
    number: '04',
    title: 'OPTIMIZE',
    headline: 'Data & Hardware Integration',
    description: 'Bridging predictive ML algorithms (LSTM + MPC) with microcontrollers (ESP32) for intelligent real-world control loops.',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Java 21', 'TypeScript', 'JavaScript', 'Python', 'C', 'SQL'],
  },
  {
    label: 'Frontend',
    skills: ['React 19', 'React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend & Data',
    skills: ['Spring Boot', 'Express', 'PostgreSQL', 'Flyway', 'Firebase Firestore', 'JDBC', 'REST APIs'],
  },
  {
    label: 'AI & Security',
    skills: ['Gemini AI', 'Groq API', 'JWT Authentication', 'RBAC', 'LSTM Models', 'Web Speech API'],
  },
  {
    label: 'Tools & DevOps',
    skills: ['Docker', 'Git', 'GitHub', 'VS Code', 'Eclipse', 'Vercel', 'Render'],
  },
]

export const projects = [
  {
    id: 'hiresense-ai',
    number: '01',
    title: 'HireSense AI',
    subtitle: 'AI Mock Interview & Resume Analyzer',
    image: '/projects/hiresense.jpg',
    description:
      'AI-powered mock interview and resume analysis platform that helps candidates practice interviews, analyze resumes, and improve their preparation.',
    problem:
      'Job seekers often lack instant, multi-metric feedback when practicing technical interviews or assessing how well their resume aligns with targeted job roles.',
    approach:
      'Built a responsive Web Speech API interface paired with LLM context evaluation (Groq API), candidate resume parsing via PDF tools, and real-time score tracking.',
    architecture:
      'Client-side React SPA → Groq AI Llama 3 Inference Engine → Firebase Firestore session persistence → Client-side jsPDF report generation.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Groq', 'Firebase', 'Web Speech API', 'jsPDF', 'PDF.js'],
    live: 'https://hiresense-ai-iicu.vercel.app/',
    github: 'https://github.com/AkashVK04/hiresense-ai',
    featured: true,
    category: 'AI & Full Stack',
  },
  {
    id: 'pulseflow-enterprise',
    number: '02',
    title: 'PulseFlow Enterprise',
    subtitle: 'Enterprise Workflow & Productivity Platform',
    image: '/projects/pulseflow.jpg',
    description:
      'Enterprise workflow and productivity platform built with a modern full-stack architecture, role-based access control, secure authentication, analytics, and AI-assisted capabilities.',
    problem:
      'Growing organizations require secure, role-managed task collaboration pipelines with automated AI summaries, audit logging, and reliable transactional backends.',
    approach:
      'Architected a decoupled frontend/backend micro-service style application using Java 21 Spring Boot and Express APIs, PostgreSQL versioned migrations (Flyway), and JWT RBAC security.',
    architecture:
      'React 19 + TypeScript SPA → Spring Boot & Express REST APIs → PostgreSQL DB with Flyway migrations → Gemini AI integration & Docker containers.',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Express',
      'Spring Boot',
      'Java 21',
      'PostgreSQL',
      'Flyway',
      'JWT',
      'RBAC',
      'Gemini AI',
      'Docker',
    ],
    live: 'https://pulseflow-enterprise.onrender.com/',
    github: 'https://github.com/AkashVK04/pulseflow-enterprise',
    featured: false,
    category: 'Enterprise Full-Stack',
  },
  {
    id: 'smart-energy-optimizer',
    number: '03',
    title: 'Smart Energy Optimizer',
    subtitle: 'Adaptive HVAC Optimization via LSTM + MPC',
    image: '/projects/smartenergy.jpg',
    description:
      'IoT-based adaptive HVAC optimization system that combines ESP32 sensor data, machine learning, and model predictive control to improve room comfort while reducing unnecessary energy usage.',
    problem:
      'Conventional HVAC systems rely on static setpoints, failing to react dynamically to occupancy changes or predict thermal inertia, leading to significant energy waste.',
    approach:
      'Combined physical ESP32 telemetry (DHT22 temp/humidity + PIR motion) with an LSTM forecasting model and SLSQP optimization for Model Predictive Control (MPC).',
    architecture:
      'ESP32 Sensor Telemetry Node → Python Analytics Engine (LSTM Demand Forecasting) → SLSQP Model Predictive Control Loop → Streamlit Console.',
    stack: [
      'ESP32',
      'DHT22',
      'PIR Motion Sensor',
      'Python',
      'LSTM',
      'Model Predictive Control',
      'Streamlit',
      'SLSQP',
      'IoT',
    ],
    live: null,
    github: null,
    featured: false,
    category: 'IoT & Machine Learning',
  },
]

export const education = {
  degree: 'B.E. in Computer Science and Engineering',
  institution: 'SJB Institute of Technology',
  location: 'Bengaluru, India',
  affiliation: 'Visvesvaraya Technological University (VTU)',
  duration: '2023 — 2027',
  cgpa: '7.54',
  highlights: [
    'Focus on Data Structures, Algorithms, Software Engineering, and Database Management Systems',
    'Active participant in technical hackathons and practical hands-on engineering projects',
  ],
}

export const certifications = [
  {
    title: 'HackerRank Java (Basics) Certificate',
    issuer: 'HackerRank',
    date: 'Certified',
    link: null,
  },
  {
    title: 'HackerRank Problem Solving (Basics) Certificate',
    issuer: 'HackerRank',
    date: 'Certified',
    link: null,
  },
  {
    title: 'Advanced Java Training',
    issuer: 'Ethnotech',
    date: 'Completed',
    link: null,
  },
]
