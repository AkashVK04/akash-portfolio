import { motion } from 'framer-motion'
import { Code2, Sparkles, Target } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data'

const points = [
  {
    icon: Code2,
    title: 'Hands-on builder',
    text: 'I learn by shipping — from full-stack apps to AI-integrated tools.',
  },
  {
    icon: Sparkles,
    title: 'Curious about AI',
    text: 'Exploring how AI and ML basics can make everyday software smarter.',
  },
  {
    icon: Target,
    title: 'Interview-ready',
    text: 'Actively preparing for software engineering opportunities.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading command="about" title="About Me" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-base leading-relaxed text-slate sm:text-lg"
          >
            {profile.about}
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="card card-hover flex items-start gap-3 p-4"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-accent-soft text-accent-bright">
                  <point.icon size={17} />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{point.title}</p>
                  <p className="mt-0.5 text-sm text-slate">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
