import React, { createContext, useContext, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

const MorphingDialogContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  uniqueId: '',
  triggerRef: { current: null },
  transition: { type: 'spring', bounce: 0.05, duration: 0.25 },
})

export function MorphingDialog({
  children,
  transition = { type: 'spring', bounce: 0.05, duration: 0.25 },
  open,
  onOpenChange,
  id,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)
  const reactId = useId()
  const uniqueId = id || reactId

  const activeIsOpen = open !== undefined ? open : isOpen

  const handleOpenChange = (value) => {
    if (onOpenChange) onOpenChange(value)
    setIsOpen(value)
  }

  return (
    <MorphingDialogContext.Provider
      value={{
        isOpen: activeIsOpen,
        setIsOpen: handleOpenChange,
        uniqueId,
        triggerRef,
        transition,
      }}
    >
      {children}
    </MorphingDialogContext.Provider>
  )
}

export function MorphingDialogTrigger({
  children,
  className = '',
  style,
  onClick,
  ...props
}) {
  const { setIsOpen, uniqueId, triggerRef, isOpen } = useContext(MorphingDialogContext)

  const handleClick = (e) => {
    if (e.target.closest('a') || e.target.closest('button') || e.target.closest('[data-no-morph]')) {
      if (onClick) onClick(e)
      return
    }
    if (onClick) onClick(e)
    setIsOpen(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('[data-no-morph]')) {
        return
      }
      e.preventDefault()
      setIsOpen(true)
    }
  }

  return (
    <motion.div
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      className={`cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A11D33] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogContainer({ children, className = '' }) {
  const { isOpen, setIsOpen } = useContext(MorphingDialogContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, setIsOpen])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence initial={false} mode="sync">
      {isOpen && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto ${className}`}
        >
          {/* Backdrop with smooth fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
          />
          {children}
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export function MorphingDialogContent({ children, className = '', style, ...props }) {
  const { uniqueId, transition } = useContext(MorphingDialogContext)

  return (
    <motion.div
      layoutId={`dialog-${uniqueId}`}
      transition={transition}
      role="dialog"
      aria-modal="true"
      className={`relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20 bg-[#181818] text-white p-6 sm:p-8 shadow-2xl focus-visible:outline-none custom-scrollbar ${className}`}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogTitle({ children, className = '', style, ...props }) {
  const { uniqueId, transition } = useContext(MorphingDialogContext)
  return (
    <motion.h3
      layoutId={`dialog-title-${uniqueId}`}
      transition={transition}
      className={`font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider ${className}`}
      style={style}
      {...props}
    >
      {children}
    </motion.h3>
  )
}

export function MorphingDialogSubtitle({ children, className = '', style, ...props }) {
  const { uniqueId, transition } = useContext(MorphingDialogContext)
  return (
    <motion.p
      layoutId={`dialog-subtitle-${uniqueId}`}
      transition={transition}
      className={`font-mono text-xs sm:text-sm text-[#A11D33] uppercase font-bold tracking-widest ${className}`}
      style={style}
      {...props}
    >
      {children}
    </motion.p>
  )
}

export function MorphingDialogDescription({ children, className = '', style, ...props }) {
  const { uniqueId, transition } = useContext(MorphingDialogContext)
  return (
    <motion.div
      layoutId={`dialog-description-${uniqueId}`}
      transition={transition}
      className={`text-slate text-xs sm:text-sm leading-relaxed ${className}`}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function MorphingDialogImage({ src, alt = '', className = '', style, ...props }) {
  const { uniqueId, transition } = useContext(MorphingDialogContext)
  return (
    <motion.img
      layoutId={`dialog-img-${uniqueId}`}
      transition={transition}
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      style={style}
      {...props}
    />
  )
}

export function MorphingDialogClose({ children, className = '', onClick, ...props }) {
  const { setIsOpen } = useContext(MorphingDialogContext)

  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) onClick(e)
    setIsOpen(false)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Close dialog"
      className={`absolute top-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-[#A11D33] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A11D33] ${className}`}
      {...props}
    >
      {children || <X size={18} />}
    </button>
  )
}
