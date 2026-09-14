import { useEffect, useRef } from 'react'

export default function GlobalBackground() {
  const spotlightRef = useRef(null)
  const mousePos = useRef({ x: -1000, y: -1000 })
  const spotlightPos = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    if (prefersReducedMotion || isMobile) return

    let animationFrameId

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const updateSpotlight = () => {
      if (spotlightRef.current) {
        spotlightPos.current.x += (mousePos.current.x - spotlightPos.current.x) * 0.08
        spotlightPos.current.y += (mousePos.current.y - spotlightPos.current.y) * 0.08

        spotlightRef.current.style.transform = `translate3d(${spotlightPos.current.x - 300}px, ${spotlightPos.current.y - 300}px, 0)`
      }
      animationFrameId = requestAnimationFrame(updateSpotlight)
    }

    updateSpotlight()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B0C10]" aria-hidden="true">
      {/* LAYER 1: Deep Cosmic Space Background & Nebula Fields */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#121212] to-[#0D0E15]" />

      <div className="absolute -top-[25%] left-[15%] h-[800px] w-[800px] rounded-full bg-[#A11D33]/18 blur-[180px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] h-[750px] w-[750px] rounded-full bg-[#1E1B4B]/22 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[25%] h-[850px] w-[850px] rounded-full bg-[#8B1A2B]/15 blur-[190px] pointer-events-none" />

      {/* LAYER 2: Crisp Static Deep Space Starfields (Multi-density star points) */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 10% 15%, rgba(255, 255, 255, 0.9), transparent),
            radial-gradient(1px 1px at 20% 35%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(2px 2px at 30% 70%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(1px 1px at 40% 25%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(1.5px 1.5px at 50% 80%, rgba(255, 255, 255, 0.9), transparent),
            radial-gradient(2px 2px at 60% 10%, rgba(255, 255, 255, 0.85), transparent),
            radial-gradient(1px 1px at 70% 45%, rgba(255, 255, 255, 0.65), transparent),
            radial-gradient(1.5px 1.5px at 80% 90%, rgba(255, 255, 255, 0.75), transparent),
            radial-gradient(1px 1px at 90% 30%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(2px 2px at 15% 85%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(1px 1px at 35% 55%, rgba(255, 255, 255, 0.75), transparent),
            radial-gradient(1.5px 1.5px at 65% 65%, rgba(255, 255, 255, 0.85), transparent),
            radial-gradient(1px 1px at 85% 15%, rgba(255, 255, 255, 0.7), transparent)
          `,
          backgroundSize: '450px 450px',
        }}
      />

      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 5% 50%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(1.5px 1.5px at 25% 95%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(1px 1px at 45% 12%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(2px 2px at 75% 75%, rgba(255, 255, 255, 0.9), transparent),
            radial-gradient(1px 1px at 95% 60%, rgba(255, 255, 255, 0.65), transparent)
          `,
          backgroundSize: '700px 700px',
        }}
      />

      {/* LAYER 3: Technical Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* LAYER 4: Ambient Star Grain Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      {/* LAYER 5: Interactive Cursor Inertia Spotlight */}
      <div
        ref={spotlightRef}
        className="hidden md:block absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-radial from-[#A11D33]/[0.10] via-[#A11D33]/[0.02] to-transparent blur-3xl pointer-events-none transition-opacity duration-500"
      />
    </div>
  )
}
