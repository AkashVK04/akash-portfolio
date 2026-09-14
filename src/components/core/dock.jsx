import React, { createContext, useContext, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const DockContext = createContext({
  mouseX: null,
  magnification: 56,
  distance: 140,
})

export function Dock({
  children,
  className = '',
  magnification = 56,
  distance = 140,
  ...props
}) {
  const mouseX = useMotionValue(Infinity)

  return (
    <DockContext.Provider value={{ mouseX, magnification, distance }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`flex items-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-[#181818]/90 px-3 sm:px-4 py-2 backdrop-blur-xl shadow-2xl shadow-black/80 ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  )
}

export function DockItem({
  children,
  className = '',
  onClick,
  href,
  label,
  active = false,
  ...props
}) {
  const ref = useRef(null)
  const { mouseX, magnification, distance } = useContext(DockContext)
  const [isHovered, setIsHovered] = useState(false)

  const distanceCalc = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  )

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const Component = href ? 'a' : 'button'

  return (
    <div className="relative flex flex-col items-center">
      {/* Floating Hover Label */}
      <AnimatePresence>
        {isHovered && label && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: -6, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 whitespace-nowrap rounded-md border border-white/15 bg-[#121212]/95 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-xl backdrop-blur-md pointer-events-none z-50"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={ref}
        style={{ width }}
        className={`relative flex aspect-square items-center justify-center rounded-full cursor-pointer transition-colors ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        {...props}
      >
        <Component
          href={href}
          onClick={onClick}
          aria-label={label}
          className={`flex h-full w-full items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A11D33] ${
            active
              ? 'bg-[#A11D33] text-white shadow-lg shadow-[#A11D33]/40 font-bold'
              : 'bg-white/[0.06] text-[#E0E0E0] hover:bg-[#A11D33]/25 hover:text-white border border-white/10 hover:border-[#A11D33]/50'
          }`}
        >
          {children}
        </Component>

        {/* Active Section Dot */}
        {active && (
          <span className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-[#A11D33] shadow-md shadow-[#A11D33]" />
        )}
      </motion.div>
    </div>
  )
}

export function DockIcon({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-center text-current ${className}`}>
      {children}
    </div>
  )
}

export function DockLabel({ children, className = '', isHovered = false }) {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.9 }}
          animate={{ opacity: 1, y: -6, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          className={`absolute -top-9 whitespace-nowrap rounded-md border border-white/15 bg-[#121212]/95 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-xl backdrop-blur-md pointer-events-none z-50 ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
