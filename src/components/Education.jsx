import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="border-y border-border bg-bg-soft py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading command="cat education.log" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -3 }}
          className="card card-hover flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
        >
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent-bright">
            <GraduationCap size={22} />
          </div>

          <div className="flex-1">
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-slate">
              {education.institution} · {education.affiliation}
            </p>
          </div>

          <div className="flex flex-none gap-6 sm:border-l sm:border-border sm:pl-6">
            <div>
              <p className="font-mono text-[11px] text-slate-light">Duration</p>
              <p className="mt-0.5 text-sm font-medium text-ink">{education.duration}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] text-slate-light">CGPA</p>
              <p className="mt-0.5 text-sm font-medium text-ink">{education.cgpa}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
