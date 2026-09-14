import { motion } from 'framer-motion'
import { Award, CheckCircle, ExternalLink, GraduationCap, BookOpen } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education, certifications } from '../data'
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

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming (Java)',
  'Database Management Systems (SQL)',
  'Software Engineering & System Architecture',
  'Operating Systems & Computer Networks',
  'Web Technologies & Cloud Computing',
]

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-white/10 bg-transparent relative z-10">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          number="EDUCATION"
          title="Education & Credentials"
          description="Academic background in Computer Science & Engineering paired with verified technical certifications."
          command="cat education.log certifications.log"
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Main Education Degree Card with MorphingDialog & Tilt */}
          <MorphingDialog
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
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="editorial-card p-6 sm:p-8 relative overflow-hidden rounded-2xl border-[#A11D33]/40 bg-[#181818] h-full cursor-pointer group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33] group-hover:bg-[#A11D33] group-hover:text-white transition-colors">
                      <GraduationCap size={24} />
                    </div>

                    <div>
                      <span className="font-mono text-xs text-[#A11D33] font-bold uppercase tracking-wider block mb-1">
                        BACHELOR OF ENGINEERING
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-wide uppercase group-hover:text-[#A11D33] transition-colors">
                        {education.degree}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate mt-1 font-medium">
                        {education.institution} · <span className="text-slate">{education.affiliation}</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-4 my-6 font-mono text-xs">
                    <div>
                      <span className="text-slate block uppercase text-[10px]">DURATION</span>
                      <span className="text-white font-bold">{education.duration}</span>
                    </div>
                    <div>
                      <span className="text-slate block uppercase text-[10px]">CUMULATIVE GPA</span>
                      <span className="text-[#A11D33] font-bold">{education.cgpa} / 10.0</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-slate block mb-2 font-bold">
                        PROGRAM FOCUS & HIGHLIGHTS
                      </span>
                      <span className="font-mono text-[10px] text-[#A11D33] font-bold uppercase">
                        EXPAND DETAILS →
                      </span>
                    </div>
                    {education.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate">
                        <CheckCircle size={15} className="text-[#A11D33] flex-none mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </MorphingDialogTrigger>
            </Tilt>

            {/* Expanded Degree Morphing Dialog */}
            <MorphingDialogContainer>
              <MorphingDialogContent className="max-w-2xl bg-[#181818] border-[#A11D33]/50 p-6 sm:p-8 rounded-2xl shadow-2xl">
                <MorphingDialogClose />

                <div className="space-y-6">
                  <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33]">
                      <GraduationCap size={30} />
                    </div>

                    <div>
                      <MorphingDialogSubtitle className="mb-1">
                        ACADEMIC DEGREE // 2023 — 2027
                      </MorphingDialogSubtitle>
                      <MorphingDialogTitle>{education.degree}</MorphingDialogTitle>
                      <p className="text-sm text-slate mt-1">
                        {education.institution} · {education.affiliation}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 font-mono text-xs bg-[#121212] p-4 rounded-xl border border-white/10">
                    <div>
                      <span className="text-slate block text-[10px] uppercase">LOCATION</span>
                      <span className="text-white font-bold">{education.location}</span>
                    </div>
                    <div>
                      <span className="text-slate block text-[10px] uppercase">DURATION</span>
                      <span className="text-white font-bold">{education.duration}</span>
                    </div>
                    <div>
                      <span className="text-slate block text-[10px] uppercase">CGPA SCORE</span>
                      <span className="text-[#A11D33] font-bold">{education.cgpa} / 10.0</span>
                    </div>
                  </div>

                  {/* Core CS Coursework */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate block font-bold flex items-center gap-2">
                      <BookOpen size={14} className="text-[#A11D33]" />
                      <span>CORE COMPUTER SCIENCE COURSEWORK</span>
                    </span>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {coursework.map((course) => (
                        <div key={course} className="flex items-center gap-2.5 text-xs text-white bg-[#121212] p-2.5 rounded-lg border border-white/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#A11D33]" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Highlights */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate block font-bold">
                      ACADEMIC HIGHLIGHTS & ACTIVITIES
                    </span>
                    <div className="space-y-2">
                      {education.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate bg-[#121212] p-3 rounded-xl border border-white/10">
                          <CheckCircle size={16} className="text-[#A11D33] flex-none mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>

          {/* Certifications List with MorphingDialog, Tilt & AnimatedBackground */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} className="text-[#A11D33]" />
              <h3 className="font-display text-xl font-extrabold text-white uppercase tracking-wide">
                TECHNICAL CREDENTIALS
              </h3>
            </div>

            <div className="space-y-3">
              <AnimatedBackground
                className="rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 pointer-events-none"
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.6,
                }}
                enableHover
              >
                {certifications.map((cert, i) => (
                  <MorphingDialog
                    key={cert.title}
                    transition={{
                      type: 'spring',
                      bounce: 0.05,
                      duration: 0.25,
                    }}
                  >
                    <Tilt data-id={`cert-${i}`} rotationFactor={5} isReverse>
                      <MorphingDialogTrigger className="w-full block">
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.5, delay: i * 0.08 }}
                          whileHover={{ y: -3 }}
                          className="editorial-card editorial-card-hover p-5 flex items-center justify-between gap-4 cursor-pointer rounded-2xl border-[#A11D33]/30 bg-[#181818] group"
                        >
                          <div className="flex items-center gap-3.5 relative z-20">
                            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#121212] border border-white/10 text-[#A11D33] group-hover:bg-[#A11D33] group-hover:text-white transition-colors">
                              <Award size={18} />
                            </div>
                            <div>
                              <h4 className="font-display text-sm font-extrabold text-white uppercase group-hover:text-[#A11D33] transition-colors">
                                {cert.title}
                              </h4>
                              <p className="font-mono text-xs text-slate mt-0.5">{cert.issuer}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 relative z-20">
                            <span className="font-mono text-[10px] text-slate bg-[#121212] px-2.5 py-1 rounded-full border border-white/10 font-bold">
                              {cert.date}
                            </span>
                            <ExternalLink size={14} className="text-[#A11D33]" />
                          </div>
                        </motion.div>
                      </MorphingDialogTrigger>
                    </Tilt>

                    {/* Expanded Certification Dialog */}
                    <MorphingDialogContainer>
                      <MorphingDialogContent className="max-w-md bg-[#181818] border-[#A11D33]/50 p-6 rounded-2xl shadow-2xl">
                        <MorphingDialogClose />

                        <div className="space-y-5">
                          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33]">
                              <Award size={24} />
                            </div>

                            <div>
                              <MorphingDialogSubtitle className="mb-0.5">
                                VERIFIED CERTIFICATION
                              </MorphingDialogSubtitle>
                              <MorphingDialogTitle className="text-xl">
                                {cert.title}
                              </MorphingDialogTitle>
                            </div>
                          </div>

                          <div className="space-y-3 font-mono text-xs">
                            <div className="flex justify-between py-2 border-b border-white/10">
                              <span className="text-slate">ISSUING ORGANIZATION</span>
                              <span className="text-white font-bold">{cert.issuer}</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-white/10">
                              <span className="text-slate">STATUS</span>
                              <span className="text-[#A11D33] font-bold">● {cert.date.toUpperCase()}</span>
                            </div>
                          </div>

                          <MorphingDialogDescription className="text-xs text-slate leading-relaxed">
                            Demonstrates technical proficiency and hands-on skill verification in {cert.title} issued by {cert.issuer}.
                          </MorphingDialogDescription>
                        </div>
                      </MorphingDialogContent>
                    </MorphingDialogContainer>
                  </MorphingDialog>
                ))}
              </AnimatedBackground>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
