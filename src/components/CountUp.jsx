import { useEffect, useRef, useState } from 'react'

export default function CountUp({
  value = '500+',
  duration = 1800,
  className = '',
}) {
  const ref = useRef(null)
  const started = useRef(false)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const match = String(value).match(/^([\d,.]+)\s*(.*)$/)
    if (!match) {
      setDisplay(String(value))
      return
    }
    const target = parseFloat(match[1].replace(/,/g, ''))
    const suffix = match[2]
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setDisplay(match[1] + suffix)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return
          started.current = true
          const t0 = performance.now()
          const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(
              Math.round(target * eased).toLocaleString('en-US') + suffix,
            )
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.disconnect()
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
