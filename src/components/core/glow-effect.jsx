import { motion } from 'framer-motion'

export function GlowEffect({
  colors = ['#A11D33', '#C51D38', '#E63950', '#FF4D6D'],
  mode = 'colorShift',
  blur = 'medium',
  className = '',
  duration = 4,
}) {
  const blurMap = {
    soft: 'blur-md',
    medium: 'blur-lg',
    strong: 'blur-xl',
  }

  const gradientString = [...colors, colors[0]].join(', ')

  return (
    <motion.div
      aria-hidden="true"
      className={`absolute -inset-0.5 sm:-inset-1 pointer-events-none rounded-[inherit] -z-10 ${blurMap[blur] || 'blur-lg'} ${className}`}
      style={{
        background: `conic-gradient(from 0deg at 50% 50%, ${gradientString})`,
      }}
      animate={
        mode === 'colorShift' || mode === 'rotate'
          ? { rotate: [0, 360] }
          : mode === 'breathe'
          ? { scale: [0.98, 1.02, 0.98] }
          : {}
      }
      transition={
        mode === 'colorShift' || mode === 'rotate'
          ? { duration, repeat: Infinity, ease: 'linear' }
          : mode === 'breathe'
          ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          : {}
      }
    />
  )
}

export default GlowEffect
