import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-24 z-10 overflow-hidden bg-transparent">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="mx-auto max-w-content px-4 sm:px-6 relative">
        {/* Cohesive Side-by-Side Asymmetric Hero Layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-center relative z-20">
          
          {/* Left Column: Content & Introduction (7 cols on Desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5"
          >
            {/* Header Category & Role Badge */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#A11D33] bg-[#A11D33]/15 px-3 py-1 rounded-full border border-[#A11D33]/30">
                <span>ASPIRING SOFTWARE ENGINEER</span>
                <span className="text-white/40">//</span>
                <span>JAVA · REACT · AI</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-wide uppercase leading-none">
                {profile.name}
              </h1>

              <p className="font-mono text-xs uppercase tracking-widest text-slate">
                FULL-STACK DEVELOPMENT · SYSTEM ARCHITECTURE · INTELLIGENT TOOLS
              </p>
            </motion.div>

            {/* Professional Bio Paragraph */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-slate leading-relaxed max-w-xl">
              I'm a Computer Science student building clean, modern, and user-focused applications. I help create software that solves real-world problems.
            </motion.p>

            {/* Crimson Quote Block */}
            <motion.div variants={itemVariants} className="p-4 sm:p-5 rounded-2xl bg-[#181818] border border-[#A11D33]/40 relative overflow-hidden shadow-xl group hover:border-[#A11D33] transition-all duration-300">
              <div className="absolute -top-3 -left-1 text-5xl font-serif text-[#A11D33] opacity-40 pointer-events-none select-none">
                “
              </div>
              <p className="font-display text-base sm:text-lg font-extrabold uppercase text-white leading-snug tracking-wide relative z-10 pl-3">
                I BUILD DIGITAL EXPERIENCES THAT ARE INTUITIVE, SCALABLE AND IMPACTFUL.
              </p>
              <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate">
                <span className="text-[#A11D33] font-bold">// AKASH V K</span>
                <span>BENGALURU, INDIA</span>
              </div>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#contact"
                className="btn-primary group !rounded-full !px-6 !py-3 !bg-[#A11D33] hover:!bg-[#C51D38] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A11D33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
              >
                <span>Work Together</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {profile.resume && (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !rounded-full !px-5 !py-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A11D33]"
                >
                  <FileText size={15} />
                  <span>Resume</span>
                </a>
              )}
            </motion.div>

            {/* Bento Metrics Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#181818] border border-[#A11D33]/40 text-center group hover:border-[#A11D33] hover:scale-[1.03] transition-all duration-300 cursor-pointer">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#A11D33]">4+</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate mt-0.5">
                  YEARS ACADEMICS
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#181818] border border-[#A11D33]/40 text-center group hover:border-[#A11D33] hover:scale-[1.03] transition-all duration-300 cursor-pointer">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#A11D33]">10+</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate mt-0.5">
                  PROJECTS BUILT
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#181818] border border-[#A11D33]/40 text-center group hover:border-[#A11D33] hover:scale-[1.03] transition-all duration-300 cursor-pointer">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#A11D33]">100%</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate mt-0.5">
                  ENGINEERING RIGOR
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Integrated Portrait Showcase (5 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Soft Blurred Crimson Ambient Spotlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-[#A11D33] blur-3xl opacity-35 pointer-events-none -z-10" />

            {/* Seamlessly Integrated Framed Portrait Container */}
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[360px] aspect-[4/5] overflow-hidden rounded-2xl border-2 border-[#A11D33]/60 bg-[#181818] shadow-2xl shadow-[#A11D33]/30 group hover:border-[#A11D33] transition-all duration-500">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#A11D33]/20">
                  <span className="font-display text-7xl font-bold text-white">
                    {initials}
                  </span>
                </div>
              )}
              {/* Bottom Subtle Gradient Fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white/80 bg-[#121212]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="text-[#A11D33] font-bold">// PORTRAIT</span>
                <span>AKASH V K</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
