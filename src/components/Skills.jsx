import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data'
import { TechLogo } from './TechLogos'
import { AnimatedBackground } from './core/animated-background'
import { Tilt } from './core/tilt'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-white/10 bg-transparent relative z-10">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          number="TOOLKIT"
          title="Technical Toolkit"
          description="A comprehensive breakdown of programming languages, frameworks, databases, AI systems, and engineering tools."
          command="toolkit --list --verbose"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatedBackground
            className="rounded-2xl bg-[#A11D33]/15 border border-[#A11D33]/40 pointer-events-none"
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {skillGroups.map((group, i) => (
              <Tilt
                key={group.label}
                data-id={`skill-group-${group.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                rotationFactor={6}
                isReverse
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="editorial-card editorial-card-hover p-6 flex flex-col justify-between border-[#A11D33]/30 bg-[#181818] rounded-2xl group shadow-xl cursor-pointer h-full"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <h3 className="font-display text-lg font-extrabold text-white uppercase tracking-wide">
                        {group.label}
                      </h3>
                      <span className="font-mono text-xs text-[#A11D33] font-bold bg-[#A11D33]/15 px-2.5 py-0.5 rounded-full border border-[#A11D33]/30">
                        0{i + 1}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 relative z-20">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="tag text-xs !py-1.5 !px-3 border-white/15 bg-[#121212] text-slate group-hover:border-[#A11D33]/50 group-hover:text-white transition-all flex items-center gap-1.5"
                        >
                          <TechLogo name={skill} className="w-3.5 h-3.5" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate">
                    <span>CATEGORY 0{i + 1}</span>
                    <span className="text-[#A11D33] font-bold">{group.skills.length} SKILLS</span>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </AnimatedBackground>
        </div>
      </div>
    </section>
  )
}
