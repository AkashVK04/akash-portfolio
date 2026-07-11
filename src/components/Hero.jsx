import { motion } from 'framer-motion'
import { ArrowRight, Github, Mail, MapPin } from 'lucide-react'
import { profile } from '../data'

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('')

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-content gap-12 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(140,124,255,0.8)]" />
            Open to Software Engineering roles
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 font-mono text-sm text-accent-bright sm:text-base">{profile.role}</p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate sm:text-lg">
            Building projects with Java, AI and web technologies — currently sharpening
            the skills that turn ideas into working software.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact Me
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center justify-center rounded-md border border-border bg-white/[0.02] p-3 text-ink backdrop-blur-sm transition-colors duration-200 hover:border-accent/50 hover:bg-white/[0.04]"
              >
                <Github size={16} />
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center gap-1.5 font-mono text-xs text-slate-light">
            <MapPin size={13} />
            {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          whileHover={{ y: -4 }}
          className="justify-self-center lg:justify-self-end"
        >
          <div className="card card-hover w-full max-w-xs overflow-hidden">
            <div className="relative flex aspect-square items-center justify-center bg-accent-soft">
              <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-70" />
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="relative h-full w-full object-cover object-top"
                />
              ) : (
                <span className="relative font-display text-6xl font-semibold text-accent-bright">
                  {initials}
                </span>
              )}
            </div>
            <div className="border-t border-border px-5 py-4">
              <p className="font-mono text-[11px] text-slate-light">role</p>
              <p className="mt-0.5 text-sm text-ink">{profile.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
