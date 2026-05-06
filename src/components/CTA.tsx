import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './CTA.module.css'

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.cta} id="shop" ref={ref}>
      <motion.img
        className={`${styles.ctaMascot} ${styles.left}`}
        src="/assets/mascot-boots.jpeg"
        alt=""
        initial={{ opacity: 0, x: -60, rotate: -20 }}
        animate={inView ? { opacity: 0.55, x: 0, rotate: -12 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      <motion.img
        className={`${styles.ctaMascot} ${styles.right}`}
        src="/assets/mascot-boots-alt.jpeg"
        alt=""
        initial={{ opacity: 0, x: 60, rotate: 22 }}
        animate={inView ? { opacity: 0.55, x: 0, rotate: 15 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />

      <div className={styles.content}>
        <motion.div
          className="eyebrow"
          style={{ marginBottom: 24 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          — Stand #5
        </motion.div>
        <motion.h2
          className={styles.h2}
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Entra. Elige tu mood.
        </motion.h2>
        <motion.p
          className={styles.p}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
        >
          Pásate por el Stand #5 o pide online. Elige la barra que encaje con la vibe que buscas — del resto nos encargamos nosotros.
        </motion.p>
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <a href="mailto:chocovibe@gmail.com" className="btn-primary">Pedir ahora →</a>
          <a href="#moods" className="btn-ghost">Ver moods</a>
        </motion.div>
      </div>
    </section>
  )
}
