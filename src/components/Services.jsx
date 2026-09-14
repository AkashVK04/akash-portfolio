import { motion } from 'framer-motion'
import { Layout, Sparkles, Database, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react'
import { AnimatedBackground } from './core/animated-background'
import { Tilt } from './core/tilt'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogClose,
} from './core/morphing-dialog'

const capabilities = [
  {
    id: 'fullstack',
    icon: Layout,
    title: 'FULL-STACK WEB',
    subtitle: 'MODERN WEB APPLICATIONS & SPAS',
    desc: 'Designing intuitive, responsive, and high-performance web applications using React & Java REST backends.',
    details: [
      'Single Page Application (SPA) architecture with React 19, TypeScript & Vite',
      'Modular state management, Framer Motion animations & Tailwind CSS styling',
      'REST API integration with Java Spring Boot and Node.js Express services',
      'Responsive design engineered for desktop, tablet, and mobile viewports',
    ],
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST APIs', 'Spring Boot'],
  },
  {
    id: 'ai-tools',
    icon: Sparkles,
    title: 'AI TOOLS INTEGRATION',
    subtitle: 'INTELLIGENT WORKFLOWS & SPEECH INTERFACES',
    desc: 'Implementing LLM workflows (Groq API), voice evaluation (Web Speech API), and automated reporting.',
    details: [
      'High-throughput LLM inference using Groq Llama 3 API for low-latency feedback',
      'Web Speech API integration for real-time acoustic speech recognition',
      'Automated candidate evaluation engines and PDF summary report generation',
      'Prompt engineering with structured JSON schema outputs',
    ],
    tech: ['Groq API', 'Llama 3', 'Web Speech API', 'Gemini AI', 'jsPDF', 'Python'],
  },
  {
    id: 'cloud-backend',
    icon: Database,
    title: 'CLOUD & BACKEND',
    subtitle: 'ENTERPRISE REST APIS & DATABASE SCHEMAS',
    desc: 'Architecting robust Spring Boot microservices, Express APIs, PostgreSQL databases, and Flyway migrations.',
    details: [
      'Enterprise Java 21 Spring Boot RESTful API development',
      'PostgreSQL relational schema modeling with Flyway migration scripts',
      'JWT authentication, Role-Based Access Control (RBAC) & password hashing',
      'Docker container deployment on cloud platforms (Vercel, Render)',
    ],
    tech: ['Spring Boot', 'Java 21', 'PostgreSQL', 'Flyway', 'Docker', 'JWT', 'Express'],
  },
  {
    id: 'iot-embedded',
    icon: Cpu,
    title: 'IOT & EMBEDDED',
    subtitle: 'MICROCONTROLLER TELEMETRY & ML CONTROL',
    desc: 'Bridging physical sensor telemetry (ESP32) with predictive model control (LSTM + MPC) algorithms.',
    details: [
      'ESP32 microcontroller sensor telemetry reading (DHT22, PIR motion sensors)',
      'Time-series forecasting models (LSTM neural networks) in Python',
      'Model Predictive Control (MPC) optimization using SLSQP solver algorithms',
      'Streamlit real-time IoT monitoring dashboards',
    ],
    tech: ['ESP32', 'Python', 'LSTM Models', 'SLSQP MPC', 'Streamlit', 'C/C++'],
  },
  {
    id: 'system-arch',
    icon: Layers,
    title: 'SYSTEM ARCHITECTURE',
    subtitle: 'CLEAN CODE & SOFTWARE PRINCIPLES',
    desc: 'Applying clean code principles, efficient data structures, OOP patterns, and role-based security.',
    details: [
      'Object-Oriented Design (OOD) and SOLID architecture principles',
      'Algorithmic optimization using robust Data Structures & Algorithms',
      'Versioned Git workflow, peer reviews, and automated build pipelines',
      'Thorough documentation and clean code maintainability',
    ],
    tech: ['Data Structures', 'OOP / SOLID', 'Clean Architecture', 'Git / GitHub', 'System Design'],
  },
]

export default function Services() {
  return (
    <section id="what-i-do" className="py-20 sm:py-28 border-t border-white/10 bg-transparent relative z-10">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 border-b border-white/10 pb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-wider">
              WHAT I DO
            </h2>
            <div className="h-1 w-16 bg-[#A11D33] mt-2 rounded-full" />
          </div>
          <span className="font-mono text-xs text-slate uppercase tracking-widest">
            01 // CAPABILITIES
          </span>
        </div>

        {/* Bento Grid Layout with MorphingDialog, Tilt & AnimatedBackground */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <AnimatedBackground
            className="rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 pointer-events-none"
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {capabilities.map((item, idx) => (
              <MorphingDialog
                key={item.id}
                transition={{
                  type: 'spring',
                  bounce: 0.05,
                  duration: 0.25,
                }}
              >
                <Tilt
                  data-id={`service-${item.id}`}
                  rotationFactor={6}
                  isReverse
                  className="h-full"
                >
                  <MorphingDialogTrigger className="h-full w-full block">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="editorial-card editorial-card-hover p-5 sm:p-6 flex flex-col justify-between group shadow-xl border-[#A11D33]/30 bg-[#181818] rounded-2xl cursor-pointer h-full"
                    >
                      <div>
                        {/* Crimson Red Icon Box */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33] group-hover:bg-[#A11D33] group-hover:text-white transition-colors duration-300 mb-5">
                          <item.icon size={20} />
                        </div>

                        <h3 className="font-display text-lg sm:text-xl font-extrabold text-white uppercase tracking-wide group-hover:text-[#A11D33] transition-colors">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs text-slate leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate">
                        <span>SERVICE 0{idx + 1}</span>
                        <span className="text-[#A11D33] font-bold flex items-center gap-1">
                          <span>EXPAND</span>
                          <ArrowRight size={10} />
                        </span>
                      </div>
                    </motion.div>
                  </MorphingDialogTrigger>
                </Tilt>

                {/* Expanded Capability Morphing Dialog */}
                <MorphingDialogContainer>
                  <MorphingDialogContent className="max-w-2xl bg-[#181818] border-[#A11D33]/50 p-6 sm:p-8 rounded-2xl shadow-2xl">
                    <MorphingDialogClose />

                    <div className="space-y-6">
                      <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                        <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33]">
                          <item.icon size={28} />
                        </div>

                        <div>
                          <MorphingDialogSubtitle className="mb-1">
                            {item.subtitle}
                          </MorphingDialogSubtitle>
                          <MorphingDialogTitle>{item.title}</MorphingDialogTitle>
                        </div>
                      </div>

                      <MorphingDialogDescription className="text-slate text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </MorphingDialogDescription>

                      {/* Capabilities Highlights */}
                      <div className="space-y-3 pt-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-slate block font-bold">
                          TECHNICAL CAPABILITIES & METHODOLOGY
                        </span>
                        <div className="space-y-2.5">
                          {item.details.map((detail) => (
                            <div key={detail} className="flex items-start gap-3 text-xs sm:text-sm text-white/90 bg-[#121212] p-3 rounded-xl border border-white/10">
                              <CheckCircle2 size={16} className="text-[#A11D33] flex-none mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Core Technologies Used */}
                      <div className="space-y-3 pt-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-slate block font-bold">
                          PRIMARY TOOLKIT & FRAMEWORKS
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((t) => (
                            <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#A11D33]/15 text-white border border-[#A11D33]/30 font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-mono text-xs text-slate">
                        <span>SERVICE CATEGORY // 0{idx + 1}</span>
                        <a href="#projects" onClick={(e) => e.stopPropagation()} className="text-[#A11D33] hover:underline font-bold uppercase">
                          VIEW RELATED PROJECTS →
                        </a>
                      </div>
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            ))}
          </AnimatedBackground>
        </div>
      </div>
    </section>
  )
}
