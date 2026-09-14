import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Sparkles, Layers, Cpu, CheckCircle2, Database, Lock, Server, Network } from 'lucide-react'
import { projects } from '../data'

export default function Projects() {
  return (
    <div className="space-y-6">
      {/* Section Header matching image_0.png */}
      <div className="border-b border-white/10 pb-4 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wider">
            FEATURED WORK
          </h2>
          <div className="h-1 w-16 bg-[#A11D33] mt-2 rounded-full" />
        </div>

        <a href="#contact" className="font-mono text-xs text-[#A11D33] hover:text-white uppercase tracking-widest flex items-center gap-1">
          <span>View All Work</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Grid of Project Case Studies matching image_0.png */}
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="editorial-card editorial-card-hover p-5 sm:p-6 flex flex-col justify-between border-[#A11D33]/40 bg-[#181818] group shadow-xl rounded-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold text-[#A11D33] bg-[#A11D33]/15 px-2.5 py-0.5 rounded border border-[#A11D33]/30">
                  PROJECT // {item.number}
                </span>
                <span className="font-mono text-[10px] text-slate uppercase">
                  {item.category}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wide group-hover:text-[#A11D33] transition-colors">
                {item.title}
              </h3>

              <p className="mt-1 font-mono text-xs text-[#A11D33] font-semibold">
                {item.subtitle}
              </p>

              <p className="mt-3 text-xs sm:text-sm text-slate leading-relaxed">
                {item.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.stack.slice(0, 5).map((tech) => (
                  <span key={tech} className="tag text-[10px] !py-0.5 !px-2">
                    {tech}
                  </span>
                ))}
                {item.stack.length > 5 && (
                  <span className="tag text-[10px] !py-0.5 !px-2 text-[#A11D33] font-bold">
                    +{item.stack.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Project Links */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold text-white hover:text-[#A11D33] transition-colors flex items-center gap-1"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-medium text-slate hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>GITHUB</span>
                    <Github size={12} />
                  </a>
                )}
              </div>

              <span className="font-mono text-[10px] text-slate uppercase">
                CASE STUDY
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
