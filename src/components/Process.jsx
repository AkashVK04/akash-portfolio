import { motion } from 'framer-motion'
import { Search, Compass, PenTool, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react'
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

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'REQUIREMENTS & FEASIBILITY ANALYSIS',
    icon: Search,
    desc: 'Understanding goals, audience, technical constraints, and project requirements.',
    activities: [
      'Define target user personas and core engineering objectives',
      'Analyze technical constraints, scale, and performance expectations',
      'Select technical stack (Java, React, Python, PostgreSQL, Docker)',
    ],
  },
  {
    number: '02',
    title: 'DEFINE',
    subtitle: 'SCHEMA & API CONTRACT ARCHITECTURE',
    icon: Compass,
    desc: 'Structuring data schemas, REST API contracts, and system workflows.',
    activities: [
      'Design relational database schemas and Flyway migration scripts',
      'Establish RESTful API endpoint contracts and JSON DTO formats',
      'Plan authentication security (JWT) and Role-Based Access Control (RBAC)',
    ],
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'UI/UX & MODULAR COMPONENT LAYOUTS',
    icon: PenTool,
    desc: 'Crafting clean responsive user interfaces and modular component architectures.',
    activities: [
      'Build responsive, mobile-first design systems in Tailwind CSS',
      'Engineered smooth motion physics using Framer Motion',
      'Ensure high accessibility standards and intuitive ergonomics',
    ],
  },
  {
    number: '04',
    title: 'DEVELOP',
    subtitle: 'CLEAN CODE IMPLEMENTATION & TESTING',
    icon: Code,
    desc: 'Writing clean Java, React, and Python code with security and test coverage.',
    activities: [
      'Implement full-stack feature logic with Java 21 & React 19',
      'Integrate AI services (Groq LLM API, Web Speech API)',
      'Refactor code for performance, maintainability, and clean architecture',
    ],
  },
  {
    number: '05',
    title: 'DELIVER',
    subtitle: 'PRODUCTION DEPLOYMENT & VERIFICATION',
    icon: Rocket,
    desc: 'Testing, refining, deploying to production, and delivering documentation.',
    activities: [
      'Containerize applications with Docker for cloud deployment',
      'Deploy services to Vercel and Render platforms',
      'Perform thorough testing, log audits, and generate user guides',
    ],
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 border-t border-white/10 bg-transparent relative z-10">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 border-b border-white/10 pb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-wider">
              MY PROCESS
            </h2>
            <div className="h-1 w-16 bg-[#A11D33] mt-2 rounded-full" />
          </div>
          <span className="font-mono text-xs text-slate uppercase tracking-widest">
            02 // METHODOLOGY
          </span>
        </div>

        {/* 5 Process Steps Horizontal Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <MorphingDialog
              key={step.number}
              transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.25,
              }}
            >
              <Tilt rotationFactor={6} isReverse className="h-full">
                <MorphingDialogTrigger className="h-full w-full block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="editorial-card editorial-card-hover p-5 flex flex-col justify-between border-[#A11D33]/30 bg-[#181818] group rounded-2xl shadow-xl h-full cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display text-3xl font-extrabold text-[#A11D33]">
                          {step.number}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33] group-hover:bg-[#A11D33] group-hover:text-white transition-colors">
                          <step.icon size={18} />
                        </div>
                      </div>

                      <h3 className="font-display text-lg font-extrabold text-white uppercase tracking-wide group-hover:text-[#A11D33] transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate">
                      <span>STEP 0{idx + 1}</span>
                      <span className="text-[#A11D33] font-bold flex items-center gap-1">
                        <span>EXPAND</span>
                        <ArrowRight size={10} />
                      </span>
                    </div>
                  </motion.div>
                </MorphingDialogTrigger>
              </Tilt>

              {/* Expanded Process Step Morphing Dialog */}
              <MorphingDialogContainer>
                <MorphingDialogContent className="max-w-xl bg-[#181818] border-[#A11D33]/50 p-6 sm:p-8 rounded-2xl shadow-2xl">
                  <MorphingDialogClose />

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33]">
                        <step.icon size={28} />
                      </div>

                      <div>
                        <MorphingDialogSubtitle className="mb-1">
                          METHODOLOGY // PHASE {step.number}
                        </MorphingDialogSubtitle>
                        <MorphingDialogTitle>{step.title}</MorphingDialogTitle>
                        <p className="text-xs font-mono font-bold text-[#A11D33] mt-1">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <MorphingDialogDescription className="text-slate text-sm leading-relaxed">
                      {step.desc}
                    </MorphingDialogDescription>

                    {/* Activities List */}
                    <div className="space-y-3 pt-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-slate block font-bold">
                        KEY DELIVERABLES & ACTIVITIES
                      </span>
                      <div className="space-y-2.5">
                        {step.activities.map((act) => (
                          <div key={act} className="flex items-start gap-3 text-xs sm:text-sm text-white/90 bg-[#121212] p-3 rounded-xl border border-white/10">
                            <CheckCircle2 size={16} className="text-[#A11D33] flex-none mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-mono text-xs text-slate">
                      <span>PHASE 0{idx + 1} OF 05</span>
                      <span className="text-[#A11D33] font-bold">AKASH V K // METHODOLOGY</span>
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          ))}
        </div>
      </div>
    </section>
  )
}
