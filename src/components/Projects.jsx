import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          command="ls ./projects"
          title="Projects"
          description="A few things I've built while learning and experimenting."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`card card-hover flex flex-col p-6 sm:p-7 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  {project.featured && (
                    <span className="tag mb-2 border-accent/30 bg-accent-soft text-accent-bright">
                      Featured
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-1 font-mono text-xs text-slate-light">{project.subtitle}</p>
                </div>

                <div className="flex flex-none gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-xs font-medium text-[#0A0C14] transition-all hover:bg-accent-bright hover:shadow-glow"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-accent/50 hover:bg-white/[0.04]"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate">{project.description}</p>

              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
