import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Layers, Layout, Network, Sparkles, Terminal, Smartphone } from 'lucide-react'

const capabilities = [
  {
    icon: Layout,
    title: 'FULL-STACK WEB',
    desc: 'Designing intuitive, responsive, and high-performance web applications using React & Java REST backends.',
  },
  {
    icon: Sparkles,
    title: 'AI TOOLS INTEGRATION',
    desc: 'Implementing LLM workflows (Groq API), voice evaluation (Web Speech API), and automated reporting.',
  },
  {
    icon: Database,
    title: 'CLOUD & BACKEND',
    desc: 'Architecting robust Spring Boot microservices, Express APIs, PostgreSQL databases, and Flyway migrations.',
  },
  {
    icon: Cpu,
    title: 'IOT & EMBEDDED',
    desc: 'Bridging physical sensor telemetry (ESP32) with predictive model control (LSTM + MPC) algorithms.',
  },
  {
    icon: Layers,
    title: 'SYSTEM ARCHITECTURE',
    desc: 'Applying clean code principles, efficient data structures, OOP patterns, and role-based security.',
  },
]

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 sm:py-28 border-t border-white/10 bg-transparent relative z-10">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        {/* Section Heading matching image_0.png */}
        <div className="mb-10 sm:mb-14 border-b border-white/10 pb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-wider">
              WHAT I DO
            </h2>
            <div className="h-1 w-16 bg-[#A11D33] mt-2 rounded-full" />
          </div>
          <span className="font-mono text-xs text-slate uppercase tracking-widest">
            01 // CAPABILITIES
          </span>
        </div>

        {/* 5 Capability Cards Grid matching image_0.png */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="editorial-card editorial-card-hover p-5 sm:p-6 flex flex-col justify-between group shadow-xl border-[#A11D33]/30 bg-[#181818]"
            >
              <div>
                {/* Crimson Red Icon Box */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#A11D33]/15 border border-[#A11D33]/40 text-[#A11D33] group-hover:bg-[#A11D33] group-hover:text-white transition-colors duration-300 mb-5">
                  <item.icon size={20} />
                </div>

                <h3 className="font-display text-lg sm:text-xl font-extrabold text-white uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-slate leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate">
                <span>SERVICE 0{idx + 1}</span>
                <span className="text-[#A11D33] font-bold">● ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
