export const profile = {
  name: 'Akash V K',
  role: 'Aspiring Software Engineer',
  headline: 'Aspiring Software Engineer — Building Projects in Java, AI & Web Technologies',
  email: 'akashvk5757@gmail.com',
  linkedin: 'https://www.linkedin.com/in/akashvk/',
  location: 'Bengaluru, India',
  about:
    "I'm a Computer Science and Engineering student passionate about building practical software projects and learning modern technologies. I enjoy working with Java, React, AI-based applications, databases, and problem-solving — and I'm actively preparing for software engineering opportunities while continuously sharpening my technical skills.",
}

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Java', 'C', 'Python', 'JavaScript'],
  },
  {
    label: 'Web',
    skills: ['HTML', 'CSS', 'React.js', 'Vite'],
  },
  {
    label: 'Data & Backend',
    skills: ['Firebase Firestore', 'MySQL', 'JDBC', 'REST APIs'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Eclipse'],
  },
  {
    label: 'AI & Systems',
    skills: ['Groq API', 'Machine Learning basics', 'IoT basics', 'Data Structures & Algorithms'],
  },
]

export const projects = [
  {
    title: 'HireSense AI',
    subtitle: 'AI Mock Interview & Resume Analyzer',
    description:
      'An AI-powered mock interview platform where users upload a resume, choose a job role and difficulty level, and receive AI-generated interview questions. Users answer through text or voice and get detailed AI feedback with a downloadable performance report.',
    features: [
      'Resume PDF upload',
      'Role-based interview questions',
      'Voice and text answers',
      'AI answer evaluation',
      'Performance analytics & scoring',
      'Downloadable PDF report',
    ],
    stack: ['React.js', 'Vite', 'Groq API', 'Firebase Firestore', 'Web Speech API', 'jsPDF', 'Vercel'],
    live: 'https://hiresense-ai-iicu.vercel.app/',
    github: 'https://github.com/AkashVK04/hiresense-ai',
    featured: true,
  },
  {
    title: 'Smart Energy Optimizer',
    subtitle: 'HVAC Optimization using LSTM + MPC',
    description:
      'An intelligent HVAC energy optimization system that predicts energy demand using an LSTM model and makes automated control decisions using Model Predictive Control, balancing comfort against energy savings.',
    features: [
      'Environmental monitoring',
      'Energy-load prediction',
      'Occupancy-aware HVAC control',
      'Temperature optimization',
      'Energy-saving recommendations',
    ],
    stack: ['Python', 'LSTM', 'MPC', 'ESP32', 'DHT11 Sensor', 'IoT'],
    live: null,
    github: null,
    featured: false,
  },
  {
    title: 'Hostel Management System',
    subtitle: 'Registration, Allocation & Administration',
    description:
      'A web-based hostel management system covering student registration, room allocation, fee management, complaints, and administration for both students and hostel staff.',
    features: [
      'Automatic room allocation',
      'Waiting list handling',
      'Room-change requests',
      'Student & admin dashboards',
      'Complaint management',
      'Hostel reports',
    ],
    stack: ['React.js', 'Firebase Firestore', 'JavaScript'],
    live: null,
    github: null,
    featured: false,
  },
]

export const education = {
  degree: 'B.E. in Computer Science and Engineering',
  institution: 'SJB Institute of Technology, Bengaluru',
  affiliation: 'VTU',
  duration: '2023 — 2027',
  cgpa: '7.54',
}

export const certifications = [
  {
    title: 'HackerRank Java (Basics) Certificate',
    issuer: 'HackerRank',
  },
  {
    title: 'HackerRank Problem Solving (Basics) Certificate',
    issuer: 'HackerRank',
  },
  {
    title: 'Advanced Java Training',
    issuer: 'Ethnotech',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
