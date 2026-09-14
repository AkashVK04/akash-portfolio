import { motion } from 'framer-motion'
import { Code, Cpu, Gauge, GitPullRequest, Activity, ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { engineeringPillars } from '../data'
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

const iconMap = {
  '01': Code,
  '02': GitPullRequest,
  '03': Cpu,
  '04': Gauge,
}

const pillarDetails = {
  '01': [
    'Clean, modular component architecture adhering to single-responsibility principle',
    'High-efficiency Java 21 REST backends and Node.js micro-services',
    'Real-time voice evaluation and LLM API integrations',
  ],
  '02': [
    'Systematic breakdown of complex business requirements into data schemas',
    'Relational database normalization (PostgreSQL) and Flyway migration safety',
    'JWT authentication and strict Role-Based Access Control (RBAC)',
  ],
  '03': [
    'Continuous exploration of modern engineering paradigms and frameworks',
    'Deepening data structures, algorithm complexity, and performance tuning',
    'Hands-on hackathon development and production deployment experience',
  ],
  '04': [
    'Microcontroller (ESP32) sensor telemetry integration with web services',
    'LSTM neural network time-series demand forecasting in Python',
    'Model Predictive Control (MPC) and SLSQP algorithm optimization',
  ],
}

export default function Engineering() {
  return (
    <section id="engineering" className="py-20 sm:py-28 border-t border-white/10 bg-transparent relative overflow-hidden z-10">
      <div className="mx-auto max-w-content px-4 sm:px-6 relative z-10">
        <SectionHeading
          number="ENGINEERING"
          title="Engineering Philosophy"
          description="How I approach building software: deconstructing complex challenges into reliable, modular, and performant systems."
          command="git log --philosophy"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedBackground
            className="rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 pointer-events-none"
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {engineeringPillars.map((pillar, i) => {
              const Icon = iconMap[pillar.number] || Code
              const details = pillarDetails[pillar.number] || []

              return (
                <MorphingDialog
                  key={pillar.title}
                  transition={{
                    type: 'spring',
                    bounce: 0.05,
                    duration: 0.25,
                  }}
                >
                  <Tilt
                    data-id={`pillar-${pillar.number}`}
                    rotationFactor={6}
                    isReverse
                    className="h-full"
                  >
                    <MorphingDialogTrigger className="h-full w-full block">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="editorial-card editorial-card-hover flex flex-col justify-between p-6 relative overflow-hidden group shadow-xl border-[#A11D33]/30 bg-[#181818] rounded-2xl cursor-pointer h-full"
                      >
                        {/* Micro Ambient Pulse Indicator */}
                        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Activity size={14} className="text-[#A11D33] animate-pulse" />
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <span className="font-mono text-xs font-bold text-[#A11D33] bg-[#A11D33]/15 px-3 py-1 rounded-full border border-[#A11D33]/30">
                              {pillar.number}
                            </span>
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#121212] border border-white/10 text-slate group-hover:text-[#A11D33] group-hover:border-[#A11D33] transition-all">
                              <Icon size={18} />
                            </div>
                          </div>

                          <h3 className="font-display text-lg sm:text-xl font-extrabold text-white uppercase tracking-wide group-hover:text-[#A11D33] transition-colors">
                            {pillar.title}
                          </h3>

                          <p className="mt-1 font-mono text-xs text-[#A11D33] font-bold">
                            {pillar.headline}
                          </p>

                          <p className="mt-3 text-xs sm:text-sm text-slate leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate uppercase">
                          <span>PILLAR {pillar.number}</span>
                          <span className="text-[#A11D33] font-bold flex items-center gap-1">
                            <span>EXPAND</span>
                            <ArrowRight size={10} />
                          </span>
                        </div>
                      </motion.div>
                    </MorphingDialogTrigger>
                  </Tilt>

                  {/* Expanded Pillar Morphing Dialog */}
                  <MorphingDialogContainer>
                    <MorphingDialogContent className="max-w-xl bg-[#181818] border-[#A11D33]/50 p-6 sm:p-8 rounded-2xl shadow-2xl">
                      <MorphingDialogClose />

                      <div className="space-y-6">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33]">
                            <Icon size={28} />
                          </div>

                          <div>
                            <MorphingDialogSubtitle className="mb-1">
                              ENGINEERING PILLAR // {pillar.number}
                            </MorphingDialogSubtitle>
                            <MorphingDialogTitle>{pillar.title}</MorphingDialogTitle>
                            <p className="text-xs font-mono font-bold text-[#A11D33] mt-1">
                              {pillar.headline}
                            </p>
                          </div>
                        </div>

                        <MorphingDialogDescription className="text-slate text-sm leading-relaxed">
                          {pillar.description}
                        </MorphingDialogDescription>

                        {/* Principles list */}
                        <div className="space-y-3 pt-2">
                          <span className="font-mono text-xs uppercase tracking-wider text-slate block font-bold">
                            CORE ENGINEERING PRACTICES
                          </span>
                          <div className="space-y-2.5">
                            {details.map((itemText) => (
                              <div key={itemText} className="flex items-start gap-3 text-xs sm:text-sm text-white/90 bg-[#121212] p-3 rounded-xl border border-white/10">
                                <CheckCircle2 size={16} className="text-[#A11D33] flex-none mt-0.5" />
                                <span>{itemText}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-mono text-xs text-slate">
                          <span>PHILOSOPHY // 0{i + 1}</span>
                          <span className="text-[#A11D33] font-bold">AKASH V K</span>
                        </div>
                      </div>
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              )
            })}
          </AnimatedBackground>
        </div>
      </div>
    </section>
  )
}
