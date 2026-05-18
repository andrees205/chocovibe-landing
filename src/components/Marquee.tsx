import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
} from 'framer-motion'
import styles from './Marquee.module.css'

const ITEMS = [
  { text: 'Feeling Dark',        dot: '#B7C2E0' },
  { text: 'Elige Tu Mood',       dot: '#D86A3C' },
  { text: 'Aura · Boost · Focus', dot: '#6B7A52' },
  { text: 'Cacao con Intención', dot: '#EFE5DD' },
]

// Quadruple the items so the seam is always off-screen
const TRACK = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

const SPEED = 72 // px / second — edit to taste

export default function Marquee() {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const trackRef  = useRef<HTMLDivElement>(null)
  const paused    = useRef(false)
  const x         = useMotionValue(0)

  // Entrance animation trigger
  const inView = useInView(wrapRef, { once: true, margin: '-40px' })

  // Drive the scrolling
  useAnimationFrame((_, delta) => {
    if (paused.current) return
    const next    = x.get() - (delta / 1000) * SPEED
    const halfW   = (trackRef.current?.scrollWidth ?? 0) / 2
    // Once we've scrolled one full copy, snap back silently
    x.set(halfW > 0 && Math.abs(next) >= halfW ? 0 : next)
  })

  return (
    <motion.div
      ref={wrapRef}
      className={styles.marquee}
      /* ── Entrance: slide up + fade ── */
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      /* ── Hover: freeze in place ── */
      onMouseEnter={() => { paused.current = true  }}
      onMouseLeave={() => { paused.current = false }}
    >
      {/* left / right fade vignette */}
      <div className={styles.fadeLeft}  aria-hidden />
      <div className={styles.fadeRight} aria-hidden />

      <motion.div
        ref={trackRef}
        className={styles.track}
        style={{ x }}
      >
        {TRACK.map((item, i) => (
          <span key={i} className={styles.item}>
            {item.text}
            <span
              className={styles.dot}
              style={{ background: item.dot }}
            />
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
