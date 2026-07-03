import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-bg-soft py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          command="skills --list"
          title="Technical Skills"
          description="Languages, frameworks, and tools I use to design, build, and ship software."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="card card-hover p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-light">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
