import { motion } from 'framer-motion'
import { Search, Compass, PenTool, Code, CheckCircle, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    icon: Search,
    desc: 'Understanding goals, audience, technical constraints, and project requirements.',
  },
  {
    number: '02',
    title: 'DEFINE',
    icon: Compass,
    desc: 'Structuring data schemas, REST API contracts, and system workflows.',
  },
  {
    number: '03',
    title: 'DESIGN',
    icon: PenTool,
    desc: 'Crafting clean responsive user interfaces and modular component architectures.',
  },
  {
    number: '04',
    title: 'DEVELOP',
    icon: Code,
    desc: 'Writing clean Java, React, and Python code with security and test coverage.',
  },
  {
    number: '05',
    title: 'DELIVER',
    icon: Rocket,
    desc: 'Testing, refining, deploying to production, and delivering documentation.',
  },
]

export default function MyProcess() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-white/10 pb-4">
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wider">
          MY PROCESS
        </h2>
        <div className="h-1 w-16 bg-[#A11D33] mt-2 rounded-full" />
      </div>

      {/* Timeline Steps matching image_0.png */}
      <div className="space-y-3">
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="editorial-card editorial-card-hover p-4 flex items-start gap-4 border-[#A11D33]/30 bg-[#181818] group"
          >
            <span className="font-display text-2xl font-extrabold text-[#A11D33] w-8">
              {step.number}
            </span>

            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33] group-hover:bg-[#A11D33] group-hover:text-white transition-colors">
              <step.icon size={16} />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-lg font-extrabold text-white uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="mt-0.5 text-xs text-slate leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
