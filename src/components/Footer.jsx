import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-transparent py-10 relative z-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 sm:px-8 sm:flex-row sm:justify-between">
        <div>
          <a
            href="#home"
            className="font-display text-base font-bold tracking-tight text-white hover:text-accent-bright transition-colors"
          >
            {profile.name}<span className="text-accent">.</span>
          </a>
          <p className="font-mono text-xs text-slate mt-1">
            Software Engineer · Bengaluru, India
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent-bright transition-colors p-1"
            >
              <Github size={18} />
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent-bright transition-colors p-1"
            >
              <Linkedin size={18} />
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-accent-bright transition-colors p-1"
            >
              <Mail size={18} />
            </a>
          )}

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-slate hover:border-accent/40 hover:text-white transition-all ml-2"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 sm:px-8 mt-6 pt-6 border-t border-white/[0.06] text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate">
        <p>© {new Date().getFullYear()} Akash V K. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed & Engineered with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  )
}
