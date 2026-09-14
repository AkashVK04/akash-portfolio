import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import { TechLogo } from './TechLogos'
import { AnimatedBackground } from './core/animated-background'
import { GlowEffect } from './core/glow-effect'
import { Tilt } from './core/tilt'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogClose,
} from './core/morphing-dialog'

export default function FeaturedWork() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-white/10 bg-transparent relative z-10">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 border-b border-white/10 pb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-wider">
              FEATURED WORK
            </h2>
            <div className="h-1 w-16 bg-[#A11D33] mt-2 rounded-full" />
          </div>

          <a
            href="#contact"
            className="font-mono text-xs font-bold text-[#A11D33] hover:text-white uppercase tracking-widest flex items-center gap-1.5 bg-[#A11D33]/10 px-4 py-2 rounded-full border border-[#A11D33]/30 transition-colors"
          >
            <span>DISCOVER ALL PROJECTS</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Prominent Grid of Project Cards with MorphingDialog, 3D Tilt, GlowEffect & AnimatedBackground */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedBackground
            className="rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 shadow-xl shadow-[#A11D33]/10 pointer-events-none"
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {projects.map((item, idx) => (
              <MorphingDialog
                key={item.id}
                transition={{
                  type: 'spring',
                  bounce: 0.05,
                  duration: 0.25,
                }}
              >
                <Tilt
                  data-id={`project-${item.id}`}
                  rotationFactor={8}
                  isReverse
                  className="h-full"
                >
                  <MorphingDialogTrigger className="h-full w-full block">
                    <motion.article
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: idx * 0.12 }}
                      whileHover={{ y: -6 }}
                      className="editorial-card editorial-card-hover p-6 flex flex-col justify-between border-[#A11D33]/40 bg-[#181818] group shadow-2xl rounded-2xl cursor-pointer relative h-full"
                    >
                      {/* Interactive GlowEffect layer */}
                      <div className="pointer-events-none absolute -inset-0.5 rounded-[inherit] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 ease-out -z-10 overflow-hidden">
                        <GlowEffect
                          colors={['#A11D33', '#C51D38', '#E63950', '#801024']}
                          mode="colorShift"
                          blur="medium"
                          duration={4}
                        />
                      </div>

                      <div className="relative z-10">
                        {/* Large Project Image Screenshot Showcase */}
                        <div className="aspect-video w-full overflow-hidden rounded-xl bg-[#0D0D0D] border border-white/15 mb-5 relative group-hover:border-[#A11D33] transition-colors shadow-2xl">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full aspect-video object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-50" />
                          <div className="absolute top-3 left-3 font-mono text-[10px] font-bold text-white bg-[#A11D33] px-3 py-1 rounded-md shadow-lg border border-white/20">
                            PROJECT // {item.number}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display text-2xl font-extrabold text-white uppercase tracking-wide group-hover:text-[#A11D33] transition-colors">
                            {item.title}
                          </h3>
                          <span className="font-mono text-[10px] text-slate uppercase bg-white/[0.04] px-2.5 py-1 rounded border border-white/10">
                            {item.category}
                          </span>
                        </div>

                        <p className="font-mono text-xs text-[#A11D33] font-bold mb-3">
                          {item.subtitle}
                        </p>

                        <p className="text-xs sm:text-sm text-slate leading-relaxed mb-5 line-clamp-2">
                          {item.description}
                        </p>

                        {/* Tech Stack Pills with Logos */}
                        <div className="space-y-2 mb-6">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-slate block font-bold">
                            TECHNOLOGIES USED
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.stack.slice(0, 6).map((tech) => (
                              <span key={tech} className="tag text-[10px] !py-1 !px-2.5 flex items-center gap-1.5 border-white/15 bg-white/[0.04]">
                                <TechLogo name={tech} className="w-3.5 h-3.5" />
                                <span>{tech}</span>
                              </span>
                            ))}
                            {item.stack.length > 6 && (
                              <span className="tag text-[10px] !py-1 !px-2.5 text-[#A11D33] font-bold bg-[#A11D33]/15 border-[#A11D33]/30">
                                +{item.stack.length - 6} MORE
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Project Action Links */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-20">
                        <div className="flex items-center gap-3">
                          {item.live && (
                            <a
                              href={item.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="font-mono text-xs font-bold text-white bg-[#A11D33] hover:bg-[#C51D38] px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
                            >
                              <span>LIVE DEMO</span>
                              <ExternalLink size={13} />
                            </a>
                          )}
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="font-mono text-xs font-medium text-white hover:text-[#A11D33] border border-white/20 bg-white/[0.04] px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                            >
                              <span>GITHUB</span>
                              <Github size={13} />
                            </a>
                          )}
                        </div>

                        <span className="font-mono text-[10px] text-[#A11D33] font-bold uppercase tracking-wider flex items-center gap-1">
                          <span>EXPAND</span>
                          <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </motion.article>
                  </MorphingDialogTrigger>
                </Tilt>

                {/* Expanded Morphing Dialog View */}
                <MorphingDialogContainer>
                  <MorphingDialogContent className="max-w-3xl bg-[#181818] border-[#A11D33]/50 p-6 sm:p-8 rounded-2xl shadow-2xl">
                    <MorphingDialogClose />
                    
                    <div className="space-y-6">
                      {/* Banner Image */}
                      <div className="aspect-video w-full overflow-hidden rounded-xl bg-[#0D0D0D] border border-white/20 relative shadow-2xl">
                        <MorphingDialogImage
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute top-3 left-3 font-mono text-xs font-bold text-white bg-[#A11D33] px-3.5 py-1.5 rounded-md shadow-lg border border-white/20">
                          PROJECT // {item.number}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                          <MorphingDialogTitle>{item.title}</MorphingDialogTitle>
                          <span className="font-mono text-xs text-slate uppercase bg-white/[0.06] px-3 py-1 rounded border border-white/15 font-bold">
                            {item.category}
                          </span>
                        </div>

                        <MorphingDialogSubtitle className="mb-4">
                          {item.subtitle}
                        </MorphingDialogSubtitle>

                        <MorphingDialogDescription className="text-slate text-sm sm:text-base leading-relaxed mb-6">
                          {item.description}
                        </MorphingDialogDescription>
                      </div>

                      {/* Technical Case Study Breakdown */}
                      <div className="grid gap-4 sm:grid-cols-3 border-y border-white/10 py-5 my-6">
                        <div className="p-4 rounded-xl bg-[#121212] border border-white/10">
                          <span className="font-mono text-[10px] text-[#A11D33] font-bold uppercase tracking-wider block mb-1">
                            01 // PROBLEM STATEMENT
                          </span>
                          <p className="text-xs text-slate leading-relaxed">
                            {item.problem || item.description}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#121212] border border-white/10">
                          <span className="font-mono text-[10px] text-[#A11D33] font-bold uppercase tracking-wider block mb-1">
                            02 // ENGINEERING APPROACH
                          </span>
                          <p className="text-xs text-slate leading-relaxed">
                            {item.approach || item.description}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#121212] border border-white/10">
                          <span className="font-mono text-[10px] text-[#A11D33] font-bold uppercase tracking-wider block mb-1">
                            03 // SYSTEM ARCHITECTURE
                          </span>
                          <p className="text-xs text-slate leading-relaxed">
                            {item.architecture || item.description}
                          </p>
                        </div>
                      </div>

                      {/* Full Tech Stack Pills */}
                      <div className="space-y-3">
                        <span className="font-mono text-xs uppercase tracking-wider text-slate block font-bold">
                          FULL TECH STACK & LIBRARIES
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <span key={tech} className="tag text-xs py-1.5 px-3 flex items-center gap-2 border-white/20 bg-white/[0.06] text-white">
                              <TechLogo name={tech} className="w-4 h-4" />
                              <span>{tech}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* External Action Links inside Modal */}
                      <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                          {item.live && (
                            <a
                              href={item.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="font-mono text-xs font-bold text-white bg-[#A11D33] hover:bg-[#C51D38] px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 shadow-lg cursor-pointer"
                            >
                              <span>LAUNCH LIVE DEMO</span>
                              <ExternalLink size={14} />
                            </a>
                          )}
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="font-mono text-xs font-medium text-white hover:text-[#A11D33] border border-white/20 bg-white/[0.06] hover:bg-white/10 px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 cursor-pointer"
                            >
                              <span>VIEW SOURCE GITHUB</span>
                              <Github size={14} />
                            </a>
                          )}
                        </div>
                        <span className="font-mono text-xs text-slate uppercase tracking-wider font-bold">
                          AKASH V K // PORTFOLIO
                        </span>
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
