import { useEffect, useRef } from 'react'

export default function CursorGrid({
  cellSize = 70,
  color = '#F7600B',
  radius = 140,
  falloff = 'smooth',
  holdTime = 400,
  fadeDuration = 800,
  lineWidth = 1.2,
  maxOpacity = 1,
  fillOpacity = 0,
  gridOpacity = 0,
  cellRadius = 0,
  clickPulse = true,
  pulseSpeed = 600,
  className = '',
  style,
}) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let animationFrameId = 0
    let width = 0
    let height = 0
    let dpr = 1
    let isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false

    const pointer = {
      x: -1000,
      y: -1000,
      active: false,
    }

    const pulses = []

    const getFalloffFactor = (dist, maxDist) => {
      if (dist >= maxDist) return 0
      const norm = 1 - dist / maxDist
      if (falloff === 'smooth') {
        return norm * norm * (3 - 2 * norm)
      }
      return norm
    }

    const parseColor = (hex) => {
      let clean = String(hex).replace('#', '')
      if (clean.length === 3) {
        clean = clean.split('').map((c) => c + c).join('')
      }
      const num = parseInt(clean, 16)
      if (isNaN(num)) return { r: 217, g: 70, b: 239 }
      return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
      }
    }

    const rgb = parseColor(color)

    const handleResize = () => {
      if (!container || !canvas) return
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      isMobile = window.innerWidth < 768

      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    const handlePointerMove = (e) => {
      if (isMobile || e.pointerType === 'touch') return
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = true
    }

    const handlePointerLeave = () => {
      pointer.active = false
    }

    const handleClick = (e) => {
      if (!clickPulse) return
      const rect = canvas.getBoundingClientRect()
      pulses.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        startTime: performance.now(),
        maxRadius: Math.max(width, height) * 0.85,
      })
    }

    const render = (now) => {
      if (!ctx || width <= 0 || height <= 0) return

      if (document.visibilityState !== 'visible') {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(dpr, dpr)

      const cols = Math.ceil(width / cellSize) + 1
      const rows = Math.ceil(height / cellSize) + 1

      const activePulses = pulses.filter((p) => {
        const age = now - p.startTime
        const pulseRadius = (age / 1000) * pulseSpeed
        return pulseRadius < p.maxRadius
      })

      // Optional static background grid lines
      if (gridOpacity > 0) {
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${gridOpacity * maxOpacity})`
        ctx.lineWidth = lineWidth
        ctx.beginPath()

        for (let c = 0; c <= cols; c++) {
          const x = c * cellSize
          ctx.moveTo(x, 0)
          ctx.lineTo(x, height)
        }
        for (let r = 0; r <= rows; r++) {
          const y = r * cellSize
          ctx.moveTo(0, y)
          ctx.lineTo(width, y)
        }
        ctx.stroke()
      }

      const activeRadius = isMobile ? radius * 0.7 : radius

      // Draw active interactive cells
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cellX = c * cellSize
          const cellY = r * cellSize
          const centerX = cellX + cellSize / 2
          const centerY = cellY + cellSize / 2

          let intensity = 0

          // Hover interaction
          if (pointer.active) {
            const dx = centerX - pointer.x
            const dy = centerY - pointer.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            intensity = Math.max(intensity, getFalloffFactor(dist, activeRadius))
          }

          // Click pulse interaction
          activePulses.forEach((p) => {
            const age = now - p.startTime
            const currentPulseRadius = (age / 1000) * pulseSpeed
            const dx = centerX - p.x
            const dy = centerY - p.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            const ringDist = Math.abs(dist - currentPulseRadius)
            const pulseIntensity = getFalloffFactor(ringDist, 80) * Math.max(0, 1 - currentPulseRadius / p.maxRadius)
            intensity = Math.max(intensity, pulseIntensity)
          })

          if (intensity > 0.005) {
            const opacity = Math.min(maxOpacity, intensity * maxOpacity)

            if (fillOpacity > 0) {
              ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity * fillOpacity})`
              if (cellRadius > 0 && ctx.roundRect) {
                ctx.beginPath()
                ctx.roundRect(cellX + 1, cellY + 1, cellSize - 2, cellSize - 2, cellRadius)
                ctx.fill()
              } else {
                ctx.fillRect(cellX + 1, cellY + 1, cellSize - 2, cellSize - 2)
              }
            }

            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
            ctx.lineWidth = lineWidth
            if (cellRadius > 0 && ctx.roundRect) {
              ctx.beginPath()
              ctx.roundRect(cellX, cellY, cellSize, cellSize, cellRadius)
              ctx.stroke()
            } else {
              ctx.strokeRect(cellX, cellY, cellSize, cellSize)
            }
          }
        }
      }

      ctx.restore()
      animationFrameId = requestAnimationFrame(render)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)
    handleResize()

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('click', handleClick, { passive: true })

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('click', handleClick)
    }
  }, [
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed,
  ])

  return (
    <div
      ref={containerRef}
      className={`cursor-grid-container relative w-full h-full overflow-hidden pointer-events-none ${className}`.trim()}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}
