import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = setTimeout(() => {
      setLoading(false)
    }, prefersReducedMotion ? 100 : 850)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#08090E] px-6"
        >
          <div className="flex flex-col items-center text-center space-y-4 max-w-xs">
            <div className="flex items-center gap-3 font-mono text-xs text-slate-light tracking-widest uppercase">
              <span className="text-ink font-semibold">AKASH V K</span>
              <span className="text-accent font-bold">//</span>
              <span className="text-accent-bright font-medium">SOFTWARE ENGINEER</span>
            </div>

            {/* Minimal Progress Accent Line */}
            <div className="w-48 h-[2px] bg-white/10 overflow-hidden rounded-full relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.85, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-accent via-accent-bright to-white"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
