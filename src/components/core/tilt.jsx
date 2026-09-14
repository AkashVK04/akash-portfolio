import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export function Tilt({
  children,
  className = '',
  rotationFactor = 8,
  isReverse = false,
  style = {},
  ...props
}) {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { mass: 0.1, stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { mass: 0.1, stiffness: 150, damping: 15 })

  const rotateXSync = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    isReverse ? [rotationFactor, -rotationFactor] : [-rotationFactor, rotationFactor]
  )
  const rotateYSync = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    isReverse ? [-rotationFactor, rotationFactor] : [rotationFactor, -rotationFactor]
  )

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSync,
        rotateY: rotateYSync,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      className={`[perspective:1000px] ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Tilt
