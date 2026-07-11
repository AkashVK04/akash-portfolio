import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading command="cat certifications.log" title="Certifications" />

        <div className="grid gap-4 sm:grid-cols-3">
          {certifications.map((cert, i) => {
            const Wrapper = cert.link ? motion.a : motion.div
            const linkProps = cert.link
              ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <Wrapper
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="card card-hover flex flex-col gap-3 p-5"
                {...linkProps}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent-bright">
                    <Award size={17} />
                  </div>
                  {cert.link && <ExternalLink size={14} className="text-slate-light" />}
                </div>
                <div>
                  <p className="text-sm font-medium leading-snug text-ink">{cert.title}</p>
                  <p className="mt-1 font-mono text-xs text-slate-light">{cert.issuer}</p>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
