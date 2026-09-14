import { AnimatePresence, motion } from 'framer-motion'
import { Children, cloneElement, useEffect, useState, useId } from 'react'

export function AnimatedBackground({
  children,
  defaultValue = null,
  onValueChange,
  className = '',
  transition = {
    type: 'spring',
    bounce: 0.2,
    duration: 0.6,
  },
  enableHover = true,
}) {
  const [activeId, setActiveId] = useState(defaultValue)
  const uniqueId = useId()

  useEffect(() => {
    const handleTouch = () => {
      if (activeId !== null) {
        setActiveId(null)
      }
    }
    window.addEventListener('touchstart', handleTouch, { passive: true })
    return () => window.removeEventListener('touchstart', handleTouch)
  }, [activeId])

  return (
    <>
      {Children.map(children, (child, index) => {
        if (!child) return null

        const id = child.props['data-id'] ?? String(index)
        const isActive = activeId === id

        return cloneElement(
          child,
          {
            key: child.key ?? id,
            onMouseEnter: (e) => {
              child.props.onMouseEnter?.(e)
              if (enableHover) {
                setActiveId(id)
                onValueChange?.(id)
              }
            },
            onMouseLeave: (e) => {
              child.props.onMouseLeave?.(e)
              if (enableHover) {
                setActiveId(null)
                onValueChange?.(null)
              }
            },
            className: `${child.props.className || ''} relative`,
          },
          <>
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId={`animated-bg-${uniqueId}`}
                  className={`absolute inset-0 pointer-events-none z-0 ${className}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                />
              )}
            </AnimatePresence>
            <div className="relative z-10 w-full h-full flex flex-col justify-between">
              {child.props.children}
            </div>
          </>
        )
      })}
    </>
  )
}

export default AnimatedBackground
