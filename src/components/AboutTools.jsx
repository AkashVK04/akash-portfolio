import { motion } from 'framer-motion'
import { profile } from '../data'
import { TechLogo } from './TechLogos'
import { Tilt } from './core/tilt'

const tools = [
  { name: 'Java 21', category: 'Backend' },
  { name: 'React 19', category: 'Frontend' },
  { name: 'Python', category: 'AI & Data' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Groq AI', category: 'AI Integration' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git', category: 'Version Control' },
]

export default function AboutTools() {
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/10 bg-transparent relative z-10">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* ABOUT ME Card matching image_0.png */}
          <Tilt rotationFactor={6} isReverse className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="editorial-card p-6 sm:p-8 space-y-6 border-[#A11D33]/40 bg-[#181818] h-full"
            >
            <div className="border-b border-white/10 pb-4">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
                ABOUT ME
              </h2>
              <div className="h-1 w-12 bg-[#A11D33] mt-2 rounded-full" />
            </div>

            <div className="grid gap-6 sm:grid-cols-[120px_1fr] items-start">
              {/* Portrait Thumbnail locked aspect-[3/4] object-cover object-top with new user photo */}
              <div className="w-28 aspect-[3/4] rounded-xl overflow-hidden border border-white/15 bg-[#121212] shadow-md flex-none">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-full w-full aspect-[3/4] object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#A11D33]/20 font-display text-4xl font-bold text-white">
                    {initials}
                  </div>
                )}
              </div>

              {/* Narrative & Crimson Bullet Points */}
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  I'm a Computer Science & Engineering student with a passion for clean architecture, reliable backends, and intuitive user experiences.
                </p>

                <p className="text-xs sm:text-sm text-slate leading-relaxed">
                  I believe great software engineering is not just about writing code, but about structuring robust systems that solve real problems.
                </p>

                <ul className="space-y-1.5 font-mono text-xs text-white pt-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A11D33]" />
                    <span>Detail oriented & structured</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A11D33]" />
                    <span>Algorithmic problem solver</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A11D33]" />
                    <span>Clean & maintainable code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A11D33]" />
                    <span>Continuous technical learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          </Tilt>

          {/* TOOLS I USE Card featuring official SVG tech brand logos */}
          <Tilt rotationFactor={6} isReverse className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="editorial-card p-6 sm:p-8 space-y-6 border-[#A11D33]/40 bg-[#181818] h-full"
            >
              <div className="border-b border-white/10 pb-4">
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
                  TOOLS I USE
                </h2>
                <div className="h-1 w-12 bg-[#A11D33] mt-2 rounded-full" />
              </div>

              {/* Tool Icon Badges with Official Logos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 rounded-xl bg-[#121212] border border-white/10 text-center hover:border-[#A11D33] transition-all group flex flex-col items-center justify-center gap-1.5"
                  >
                    <TechLogo name={tool.name} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-mono text-xs font-bold text-white group-hover:text-[#A11D33] transition-colors">
                        {tool.name}
                      </p>
                      <p className="font-mono text-[9px] text-slate">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engineering Peer Review Quote */}
              <div className="p-4 rounded-xl bg-[#121212] border border-[#A11D33]/30 relative overflow-hidden">
                <div className="text-4xl font-serif text-[#A11D33] leading-none mb-1 opacity-50">
                  “
                </div>
                <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                  Akash is a dedicated engineer who builds reliable, high-performance systems with clear architecture, clean code, and engineering precision.
                </p>
                <p className="font-mono text-[10px] text-[#A11D33] font-bold mt-2 text-right uppercase">
                  — Technical Peer Review
                </p>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  )
}
