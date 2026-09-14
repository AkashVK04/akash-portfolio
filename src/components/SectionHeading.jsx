import { motion } from 'framer-motion'

export default function SectionHeading({ number, title, description, command, actionButton }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 sm:mb-16 border-b border-white/10 pb-6 sm:pb-8"
    >
      <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
        <div className="flex items-center gap-3">
          {number && (
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#A11D33] bg-[#A11D33]/15 px-3 py-1 rounded-full border border-[#A11D33]/30">
              {number}
            </span>
          )}
          {command && (
            <span className="font-mono text-xs text-slate tracking-wide">
              $ {command}
            </span>
          )}
        </div>

        {actionButton}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>

        {description && (
          <p className="max-w-xl text-sm sm:text-base text-slate leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
