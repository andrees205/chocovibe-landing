import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Conéctate.',
    desc: 'Detente un segundo. ¿Estás acelerado, sin batería, disperso? Elige el mood al que te quieres mover.',
  },
  {
    num: '02',
    title: 'Elige tu barra.',
    desc: 'Aura para relajar, Boost para activar, Focus para concentrarte. Cada una con una intención distinta.',
  },
  {
    num: '03',
    title: 'Déjate llevar.',
    desc: 'Toma un cuadrito. Respira. Cacao con un poco de intención llega más lejos de lo que crees.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.how} id="how" ref={ref}>
      <div className={styles.inner}>
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          — Cómo funciona
        </motion.div>
        <motion.h2
          className={styles.h2}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          Tres pasos hacia<br />tu vibe del día.
        </motion.h2>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.15 }}
            >
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
