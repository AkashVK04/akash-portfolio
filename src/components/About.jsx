import { motion } from 'framer-motion'
import { Code2, Cpu, Layers, Target } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data'

const highlights = [
  {
    icon: Code2,
    number: '01',
    title: 'Full-Stack Architecture',
    text: 'Building responsive React interfaces backed by Firebase, SQL, and REST API integrations.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'AI & Machine Learning',
    text: 'Integrating LLM providers (Groq API), Web Speech API processing, and predictive LSTM models.',
  },
  {
    icon: Layers,
    number: '03',
    title: 'Hardware & IoT Control',
    text: 'Bridging software logic with microcontroller sensor inputs (ESP32) for intelligent environmental loops.',
  },
  {
    icon: Target,
    number: '04',
    title: 'Engineering Rigor',
    text: 'Strengthening Core Java, Data Structures, and Algorithmic problem-solving for enterprise challenges.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-white/10 relative z-10">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <SectionHeading
          number="CHAPTER 01"
          title="Behind the Systems"
          description="A Computer Science and Engineering student driven by practical application, robust software design, and continuous technical growth."
          command="cat background.md"
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          {/* Main Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-base sm:text-lg leading-relaxed text-slate"
          >
            <p className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug">
              I learn software engineering best by building real systems.
            </p>

            <p>
              {profile.about}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10 font-mono text-xs text-slate">
              <div>
                <span className="block text-accent-bright font-bold uppercase tracking-wider mb-1">
                  CURRENT DEGREE
                </span>
                <span className="text-white font-medium">B.E. Computer Science</span>
                <span className="block text-slate">SJB Institute of Technology</span>
              </div>
              <div>
                <span className="block text-accent-bright font-bold uppercase tracking-wider mb-1">
                  CORE DOMAINS
                </span>
                <span className="text-white font-medium">Java · Web · AI · IoT</span>
                <span className="block text-slate">Bengaluru, India</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Column */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="editorial-card editorial-card-hover p-5 flex items-start gap-4 rounded-2xl sm:rounded-3xl"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/15 border border-accent/30 text-accent-bright">
                  <item.icon size={20} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-sm font-semibold text-white">{item.title}</h3>
                    <span className="font-mono text-[10px] text-accent font-bold">{item.number}</span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
