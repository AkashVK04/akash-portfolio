import { motion } from 'framer-motion'

export default function SectionHeading({ command, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-10 sm:mb-12"
    >
      <p className="eyebrow mb-2">
        <span className="text-slate-light">$</span> {command}
      </p>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="mt-3 max-w-xl text-slate">{description}</p>
      )}
    </motion.div>
  )
}
